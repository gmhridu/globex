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

const seedContactSubmissions = [
  {
    firstName: "John",
    lastName: "Doe",
    company: "Tech Corp",
    email: "john@techcorp.com",
    phone: "+1234567890",
    description: "Website Development",
    message: "I need a new website for my business. Looking for modern design with e-commerce capabilities.",
    status: "new" as const,
    isRead: false,
    submittedAt: new Date("2024-11-01T00:00:00Z"),
    updatedAt: new Date("2024-11-01T00:00:00Z"),
  },
  {
    firstName: "Sarah",
    lastName: "Smith",
    company: "Marketing Plus",
    email: "sarah@marketingplus.com",
    phone: "+1987654321",
    description: "SEO Services",
    message: "Looking for comprehensive SEO services to improve our online presence.",
    status: "in_progress" as const,
    isRead: true,
    submittedAt: new Date("2024-10-28T00:00:00Z"),
    updatedAt: new Date("2024-10-30T00:00:00Z"),
  },
  {
    firstName: "Mike",
    lastName: "Johnson",
    company: "BuildRight Construction",
    email: "mike@buildright.com",
    phone: "+1555123456",
    description: "Manufacturing Equipment",
    message: "We're expanding our operations and need high-quality manufacturing equipment for our new facility.",
    status: "completed" as const,
    isRead: true,
    submittedAt: new Date("2024-10-15T00:00:00Z"),
    updatedAt: new Date("2024-10-20T00:00:00Z"),
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    company: "Global Logistics",
    email: "emily@globallogistics.com",
    phone: "+1444987654",
    description: "Supply Chain Solutions",
    message: "Our current supply chain is inefficient. We need expert consultation on optimization strategies.",
    status: "archived" as const,
    isRead: true,
    submittedAt: new Date("2024-09-10T00:00:00Z"),
    updatedAt: new Date("2024-09-25T00:00:00Z"),
  },
  {
    firstName: "David",
    lastName: "Wilson",
    company: "TechStart Inc",
    email: "david@techstart.com",
    phone: "+1777888999",
    description: "Automation Consulting",
    message: "We're a startup looking to automate our manufacturing processes. Need guidance on the best approach.",
    status: "new" as const,
    isRead: false,
    submittedAt: new Date("2024-11-02T00:00:00Z"),
    updatedAt: new Date("2024-11-02T00:00:00Z"),
  },
];

const seedBlogs = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends in modern web development and what they mean for businesses.",
    body: "Web development is evolving at an unprecedented pace. From server-side rendering to edge computing, the landscape is changing dramatically. Businesses that stay ahead of these trends will have a significant competitive advantage. This article explores the key technologies shaping the future of web development, including AI-powered development tools, progressive web apps, and the rise of headless CMS architectures. We'll also discuss how these trends impact business operations and customer experiences.",
    image: "https://res.cloudinary.com/dyhmsn6hr/image/upload/v1764781091/photo-1498050108023-c5249f4df085_etjymu.jpg",
    category: "Technology",
    author: "Globex Team",
    date: new Date("2024-10-15T00:00:00Z"),
  },
  {
    title: "Digital Marketing Strategies for 2024",
    excerpt: "Learn about the most effective digital marketing approaches for the coming year.",
    body: "Digital marketing continues to evolve, with new platforms and strategies emerging regularly. This comprehensive guide covers the most effective digital marketing strategies for 2024, including AI-powered content creation, video marketing trends, social commerce, and personalized marketing automation. Learn how to leverage data analytics for better targeting, create engaging content that resonates with your audience, and optimize your marketing spend for maximum ROI.",
    image: "https://res.cloudinary.com/dyhmsn6hr/image/upload/v1764781130/photo-1460925895917-afdab827c52f_hbdgc9.jpg",
    category: "Marketing",
    author: "Globex Team",
    date: new Date("2024-10-20T00:00:00Z"),
  },
  {
    title: "Sustainable Manufacturing Practices",
    excerpt: "How modern manufacturers are reducing their environmental impact while improving efficiency.",
    body: "Sustainability is no longer optional in manufacturing. This article explores how leading manufacturers are implementing sustainable practices that reduce environmental impact while cutting costs and improving operational efficiency. Topics covered include energy-efficient machinery, waste reduction strategies, circular economy principles, and green supply chain management. Discover real-world examples of companies that have successfully transitioned to sustainable manufacturing practices.",
    image: "https://res.cloudinary.com/dyhmsn6hr/image/upload/v1764781191/photo-1581091226825-a6a2a5aee158_teghka.jpg",
    category: "Sustainability",
    author: "Globex Team",
    date: new Date("2024-10-25T00:00:00Z"),
  },
  {
    title: "Industry 4.0: The Smart Factory Revolution",
    excerpt: "Understanding the technologies driving the fourth industrial revolution.",
    body: "Industry 4.0 represents a fundamental shift in how we manufacture goods. This in-depth article explores the key technologies powering smart factories, including IoT sensors, AI and machine learning, robotics, cloud computing, and cyber-physical systems. Learn about the benefits of digital transformation, implementation strategies, and how to overcome common challenges when adopting Industry 4.0 technologies.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    category: "Technology",
    author: "Globex Team",
    date: new Date("2024-11-01T00:00:00Z"),
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Starting database seed process...");

    // Check if data already exists
    const existingAdmins = await seedDb.select().from(schema.admin);
    const existingContacts = await seedDb.select().from(schema.contactSubmission);
    const existingBlogs = await seedDb.select().from(schema.blogs);

    if (existingAdmins.length > 0 || existingContacts.length > 0 || existingBlogs.length > 0) {
      console.log("⚠️  Data already exists in database.");

      // Check if account records exist for existing admins
      const existingAccounts = await seedDb.select().from(schema.account);

      if (existingAccounts.length === 0 && existingAdmins.length > 0) {
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
      }

      console.log("✅ Existing data preserved. No new seeding needed.");
      return;
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

    // Seed contact submissions
    if (seedContactSubmissions.length > 0) {
      console.log("📝 Seeding contact submissions...");

      const contactRecords = seedContactSubmissions.map(submission => ({
        id: crypto.randomUUID(),
        firstName: submission.firstName,
        lastName: submission.lastName,
        company: submission.company,
        email: submission.email,
        phone: submission.phone,
        description: submission.description,
        message: submission.message,
        status: submission.status,
        isRead: submission.isRead,
        submittedAt: submission.submittedAt,
        updatedAt: submission.updatedAt,
      }));

      const insertedContacts = await seedDb
        .insert(schema.contactSubmission)
        .values(contactRecords)
        .returning({
          id: schema.contactSubmission.id,
          firstName: schema.contactSubmission.firstName,
          lastName: schema.contactSubmission.lastName,
          email: schema.contactSubmission.email,
        });

      console.log(`✅ Seeded ${insertedContacts.length} contact submissions`);
    }

    // Seed blogs
    if (seedBlogs.length > 0) {
      console.log("📚 Seeding blogs...");

      const blogRecords = seedBlogs.map(blog => ({
        id: crypto.randomUUID(),
        title: blog.title,
        excerpt: blog.excerpt,
        body: blog.body,
        image: blog.image,
        category: blog.category,
        author: blog.author,
        date: blog.date,
      }));

      const insertedBlogs = await seedDb
        .insert(schema.blogs)
        .values(blogRecords)
        .returning({
          id: schema.blogs.id,
          title: schema.blogs.title,
          category: schema.blogs.category,
        });

      console.log(`✅ Seeded ${insertedBlogs.length} blog posts`);
    }

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
