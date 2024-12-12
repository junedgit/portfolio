import { Code, Server, Cloud, Terminal, GitCommitVertical } from "lucide-react";

const SkillSection = ({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
      {icon}
      {title}
    </h2>
    <ul className="grid grid-cols-2 gap-2 ">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span>
            <GitCommitVertical />
          </span>

          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function PortfolioSkills() {
  return (
    <div className="max-w-4xl mx-auto sm:pt-[11%] pt-[25%]  rounded-2xl relative   shadow-[0px_0px_5px_0px_#111] ">
      <h1 className="text-4xl font-bold mb-8 py-4  font-mono text-slate-200/90 text-center">
        Technical <span className="text-purple">Expertise</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <SkillSection
          title="Frontend Development"
          icon={<Code className="w-6 h-6" />}
          skills={[
            "React.js & Next.js",
            "Redux & Zustand",
            "Tailwind CSS",
            "GSAP & Framer Motion",
            "Experiance in UI Libraies",
          ]}
        />
        <SkillSection
          title="Backend Development"
          icon={<Server className="w-6 h-6" />}
          skills={[
            "Next.js Server-Side",
            "Node.js & Go",
            "WebSockets",
            "RESTful APIs",
            "PostgreSQL & MongoDB",
            "Auth & Prisma",
          ]}
        />
        <SkillSection
          title="DevOps & Cloud"
          icon={<Cloud className="w-6 h-6" />}
          skills={[
            "Docker & Kubernetes",
            "CI/CD with GitHub Actions",
            "AWS & GCP CloudRun",
            "Apache & Nginx",
            "Linux Administration",
          ]}
        />
        <SkillSection
          title="Programming Languages"
          icon={<Terminal className="w-6 h-6" />}
          skills={[
            "JavaScript & TypeScript",
            "Rust & Solidity",
            "Python Shell Scripting",
            "Linux Systems",
          ]}
        />
      </div>
    </div>
  );
}
