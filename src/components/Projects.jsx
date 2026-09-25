import ProjectCard from "./ProjectCard";

const projects = [
  {
    eyebrow: "PROJECT 01",
    title: "Smart Email Assistant",
    subtitle: "AI-Powered Email Management",
    description:
      "Contributed to the development of Smart Email Assistant, an AI-powered tool that helps users draft and generate email replies using advanced AI, making communication faster and more efficient.",
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Material UI", icon: "logos:material-ui" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Java", icon: "logos:java" },
      { name: "Gemini API", icon: "logos:google-gemini" },
    ],
    githubUrl: "https://github.com/shailendra1708/Smart_Email_Assistant",
  },
  {
    eyebrow: "PROJECT 02",
    title: "GameHub",
    subtitle: "Your All-in-One Entertainment Hub",
    description:
      "A modern, responsive entertainment web application where users can explore games, watch trailers, and discover trending content. Built with a clean UI and containerized using Docker for easy deployment.",
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
    githubUrl: "https://github.com/BADDEEP007/Entertainment_website_docker",
    accentColor: "#a855f7",
  },
  {
    eyebrow: "PROJECT 03",
    title: "Voting App",
    subtitle: "Interactive Poll & Voting Platform",
    description:
      "A full-stack voting application where users can create polls, choose from available options, and cast their votes. Built with Angular and Spring Boot, with MySQL handling persistent poll and voting data.",
    technologies: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Java", icon: "logos:java" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
    ],
    githubUrl: "https://github.com/shailendra1708/Voting_App",
    accentColor: "#ff3b30",
  },
];

export default function ProjectsPage() {
  return (
    <main id="projects" className="min-h-screen bg-black px-6 pb-24 pt-20 text-white sm:pb-28 lg:px-12 lg:pb-32 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#4D6CFA]">
            PROJECTS
          </p>
          <h2 className="mt-3 instrument-serif text-5xl font-normal leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.25rem]">
            Things I <span className="italic text-[#4D6CFA]">Build</span>
          </h2>
        </div>
        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} showTechLabel />
          ))}
        </div>
      </div>
    </main>
  );
}
