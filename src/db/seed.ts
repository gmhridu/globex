import bcrypt from "bcrypt";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

// Load environment variables and create database connection for seeding
config({ path: ".env" });
const sql = neon(process.env.DATABASE_URL!);
const seedDb = drizzle({ client: sql, schema });

const seedAdmins = [
  {
    name: "Super Admin",
    email: "superadmin@globex.com",
    phone: "+1234567890",
    password: "SuperAdmin123!",
    role: "super-admin" as const,
    isActive: true,
  },
  {
    name: "Admin User",
    email: "admin@globex.com",
    phone: "+1234567891",
    password: "Admin123!",
    role: "admin" as const,
    isActive: true,
  },
  {
    name: "John Doe",
    email: "john.doe@globex.com",
    phone: "+1234567892",
    password: "JohnDoe123!",
    role: "admin" as const,
    isActive: true,
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Starting admin seed process...");

    // Check if admins already exist
    const existingAdmins = await seedDb.select().from(schema.admin);

    if (existingAdmins.length > 0) {
      console.log("⚠️  Admin data already exists.");

      // Check if account records exist for existing admins
      const existingAccounts = await seedDb.select().from(schema.account);

      if (existingAccounts.length === 0) {
        console.log("🔗 Creating missing account records for BetterAuth...");

        const accountRecords = await Promise.all(
          existingAdmins.map(async (admin) => {
            // Hash default password for existing records
            const hashedPassword = await bcrypt.hash("Admin123!", 12);

            return {
              id: crypto.randomUUID(),
              userId: admin.id,
              accountId: admin.email,
              providerId: "credential",
              accessToken: null,
              refreshToken: null,
              accessTokenExpiresAt: null,
              refreshTokenExpiresAt: null,
              scope: null,
              idToken: null,
              password: hashedPassword, // Store hashed password
              createdAt: new Date(),
              updatedAt: new Date(),
            };
          })
        );

        await seedDb.insert(schema.account).values(accountRecords);
        console.log(
          `✅ Created ${accountRecords.length} account records for BetterAuth`
        );
        return;
      } else {
        console.log("✅ Account records already exist. No action needed.");
        return;
      }
    }

    // Hash passwords and prepare admin data
    const adminsToInsert: Array<{
      name: string;
      email: string;
      phone: string;
      role: "admin" | "super-admin";
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
    }> = [];
    const hashedPasswords: string[] = [];

    for (const adminData of seedAdmins) {
      const hashedPassword = await bcrypt.hash(adminData.password, 12);
      hashedPasswords.push(hashedPassword);

      adminsToInsert.push({
        name: adminData.name,
        email: adminData.email,
        phone: adminData.phone,
        role: adminData.role,
        isActive: adminData.isActive,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Insert admins into database
    const adminsWithIds = adminsToInsert.map(admin => ({
      ...admin,
      id: crypto.randomUUID(),
    }));

    const insertedAdmins = await seedDb
      .insert(schema.admin)
      .values(adminsWithIds)
      .returning({
        id: schema.admin.id,
        name: schema.admin.name,
        email: schema.admin.email,
        role: schema.admin.role,
        isActive: schema.admin.isActive,
      });

    console.log("✅ Admin seed completed successfully!");
    console.log(`📊 Inserted ${insertedAdmins.length} admin records:`);

    insertedAdmins.forEach((admin, index) => {
      console.log(
        `   ${index + 1}. ${admin.name} (${admin.email}) - ${admin.role}`
      );
    });

    console.log("\n🔐 Admin credentials for testing:");
    seedAdmins.forEach((admin) => {
      console.log(`   Email: ${admin.email}, Password: ${admin.password}`);
    });

    // Create account records for email/password authentication
    console.log("\n🔗 Creating account records for BetterAuth...");

    const accountRecords = insertedAdmins.map((admin, index) => ({
      id: crypto.randomUUID(),
      userId: admin.id,
      accountId: admin.email,
      providerId: "credential",
      accessToken: null,
      refreshToken: null,
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
      scope: null,
      idToken: null,
      password: hashedPasswords[index], // Store hashed password in account table
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    if (accountRecords.length > 0) {
      await seedDb.insert(schema.account).values(accountRecords);
      console.log(
        `✅ Created ${accountRecords.length} account records for BetterAuth`
      );
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log("🎉 Seed process finished successfully!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Seed process failed:", error);
      process.exit(1);
    });
}

export { seedDatabase };
