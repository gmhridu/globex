import { notFound } from "next/navigation";
import BlogsDetailes from "@/components/blogs/BlogsDetailes";

const blogs = [
  {
    id: 1,
    category: "Recruitment",
    title:
      "The Importance of Internships for Progressive Companies and Students",
    image:
      "https://weareglobex.com/wp-content/uploads/2024/11/Internships-1024x449.jpg",
    author: "Globex Team",
    date: "2024-11-15",
    body: `
      Internships have become essential in today’s rapidly changing job market. They provide students with practical exposure while giving companies access to fresh perspectives and future-ready talent. :contentReference[oaicite:0]{index=0}

      At Globex, we help businesses design meaningful internship programs that build real skills, foster innovation, and support long-term hiring strategies. These experiences not only shape young professionals but also help organizations discover passionate individuals ready to make a difference. :contentReference[oaicite:1]{index=1}

      Progressive companies often view internships as more than just temporary labour: they’re a strategic investment in culture, networks, and future growth. For students, internships offer the chance to explore career paths, build mentors, and connect theory to real world work. At Globex’s South African internship program, interns contributed digital-native ideas and helped refine client strategies. :contentReference[oaicite:2]{index=2}

      Offering internships is also aligned with corporate social responsibility (CSR). By creating opportunities for young people and bridging the gap between education and employment, companies reinforce their reputation and community impact. Globex’s South African program is part of this broader commitment. :contentReference[oaicite:3]{index=3}

      In an era of rapid change and digital disruption, the ability to adapt matters. Interns often bring fresh technology fluency, social-media insight, and new ideas that established teams may overlook. Globex’s experience shows how structured programs can channel this strength into business advantage. :contentReference[oaicite:4]{index=4}

      For both students and companies, internships serve as a bridge — enabling learning, growth, and meaningful collaboration in a world where agility is key to success. :contentReference[oaicite:5]{index=5}
    `,
  },
  {
    id: 2,
    category: "Food & Hospitality",
    title:
      "Top Hospitality Trends to Watch in 2024: How Globex Can Help You Stay Ahead",
    image:
      "https://weareglobex.com/wp-content/uploads/2024/11/HOSPITALITY-980x551.jpg",
    author: "Globex Team",
    date: "2024-11-10",
    body: `
      The hospitality industry is entering a period of transformation. From elevated guest expectations to technology-led operations, staying ahead requires insight and innovation. According to industry research, workforce empowerment, AI & tech, sustainability, and personalization are among the top trends shaping hospitality in 2024. :contentReference[oaicite:6]{index=6}

      At Globex, we partner with hotels, resorts and hospitality businesses to interpret these trends into actionable strategies. For example:
      - Empowering staff through training and mobility helps improve guest satisfaction and retention. :contentReference[oaicite:7]{index=7}
      - Adopting AI and contactless guest services not only enhances experience but reduces operational friction. :contentReference[oaicite:8]{index=8}
      - Sustainability is no longer optional — from resource efficiency to local engagement, modern hospitality requires a planet-aware mindset. :contentReference[oaicite:9]{index=9}
      - Personalization through data enables memorable stays; the hospitality guest of 2024 expects more than a room. :contentReference[oaicite:10]{index=10}

      Globex’s role is to help clients translate these insights into operational plans: tailoring guest journeys, tech ecosystems, branding, service workflows and sustainability programs.

      The payoff? Hotels and resorts that anticipate trends rather than react to them stay relevant, efficient and guest-centric. In a world where experience is everything, being ahead is a competitive advantage. :contentReference[oaicite:11]{index=11}
    `,
  },
  {
    id: 3,
    category: "Assistive Technology",
    title:
      "The Evolution of Education in 2024: Embracing EdTech with Globex Support",
    image:
      "https://weareglobex.com/wp-content/uploads/2024/11/Benefits-Of-EdTech-In-The-Classroom.avif",
    author: "Globex Team",
    date: "2024-11-05",
    body: `
      Education is undergoing a profound shift. With technology, new learning models and global access becoming the norm, institutions must adapt or be left behind. EdTech solutions are at the heart of this transformation.

      At Globex, we support educational organisations in their digitalisation journey — from choosing platforms to change-management, training and content strategy. Our aim: to empower both teachers and learners.

      Key focal areas include:
      - Adaptive learning systems that personalise content to student needs.
      - Data analytics that measure learning outcomes and inform teaching strategies.
      - Remote and hybrid learning environments that require robust infrastructure and design.
      - Accessibility and inclusive design ensuring that educational tools cater to all learners.

      The transition is not purely technical — it’s cultural. Schools, colleges and training providers need to rethink how they deliver value, how they engage students, and how they measure success. Globex works alongside them to embed these capabilities and shift mindset.

      Through case studies and partner experiences, we’ve seen early-stage institutions reduce drop-out rates, improve engagement and real-world readiness when EdTech is properly integrated.

      As we move further into 2024 and beyond, the edge will go to educational institutions that not only adopt technology, but integrate it deeply into pedagogy, measurement and culture. Globex is committed to being a partner in that journey.
    `,
  },
  {
    id: 4,
    category: "Assistive Technology",
    title:
      "Empowering Accessibility: How Globex Navigates Europe’s Assistive Technology Trends",
    image:
      "https://weareglobex.com/wp-content/uploads/2024/10/pexels-thisisengineering-3912959-980x653.jpg",
    author: "Globex Team",
    date: "2024-10-30",
    body: `
      Assistive technology (AT) is one of the fastest-growing sectors in Europe and beyond. Devices, software and services that enable independent living, enhanced communication and accessibility are driving both social impact and business growth.

      At Globex, we help clients navigate this space — identifying regulatory environments, sourcing hardware and software, deploying accessibility programs and aligning with inclusive strategies.

      Critical trends in the AT sector include:
      - Universal design becoming mainstream — products built from the ground up to be inclusive.
      - IoT and connectivity enabling smarter assistive devices and ecosystems.
      - Partnerships between tech firms, healthcare providers and educational institutions to scale access.
      - Funding and policy shifts across Europe unlocking new opportunities for growth.

      For companies, embracing AT is not just a compliance exercise — it’s an innovation frontier. For society, it’s a chance to level the playing field. Globex’s experience shows how aligning business and purpose can unlock both financial and social value.

      The future of accessibility is already being built — and those who invest today will lead tomorrow.
    `,
  },
];

interface BlogDetailsPageProps {
  params: { id: string };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return notFound();

  return <BlogsDetailes blog={blog} />;
}
