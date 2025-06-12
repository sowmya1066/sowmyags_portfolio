import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Neon Dreams",
    description: "A retro-futuristic game built with Three.js and React",
    image: "/placeholder.svg?height=300&width=400&text=Neon+Dreams",
    tags: ["React", "Three.js", "WebGL"],
    links: {
      github: "https://github.com/username/neon-dreams",
      live: "https://neon-dreams.example.com",
    },
  },
  {
    title: "AI Art Generator",
    description: "Create unique artwork using machine learning algorithms",
    image: "/placeholder.svg?height=300&width=400&text=AI+Art+Generator",
    tags: ["Python", "TensorFlow", "React"],
    links: {
      github: "https://github.com/username/ai-art-generator",
      live: "https://ai-art.example.com",
    },
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking and portfolio management",
    image: "/placeholder.svg?height=300&width=400&text=Crypto+Dashboard",
    tags: ["Next.js", "API Integration", "Chart.js"],
    links: {
      github: "https://github.com/username/crypto-dashboard",
      live: "https://crypto-dash.example.com",
    },
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.links.github} className="text-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

