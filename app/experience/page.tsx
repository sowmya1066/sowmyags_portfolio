"use client"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Briefcase } from "lucide-react"
// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("react-particles").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#CA054D]/10" />,
})

const experiences = [
  {
    title: "Software Engineer",
    company: "Appiness Interactive",
    period: "September 2022 - Present",
    description:
      "Worked on TMS, FRS sizing, and VMS Dashboard projects, building dashboards for traffic monitoring, facial recognition, and video management. Focused on real-time data visualization, event handling, and seamless camera integration, server selection",
  },
  {
    title: "Junior Software Engineer",
    company: "Indegene",
    period: "July 2022 - September 2022",
    description:
      "Developed dynamic web pages for BI.com, ensuring a optimal user experience. Contributed to the Career Website Development project, collaborating on the Page-As-A-Service (PaaS) feature for efficient page creation. Enhanced functionality by integrating Taleo API with SuccessFactors and supporting job posting and candidate synchronization.",
  },
  {
    title: "Program Analyst Trainee (Internship)",
    company: "Cognizant",
    period: "January 2022 - June 2022",
    description:
      "Utilized advanced state management techniques to efficiently manage and update application state, enhancing overall performance. Streamlined data handling within React components to ensure smoother interactions and responsiveness. Applied best practices for managing complex application states, ensuring scalability and maintainability in React applications.",
  },
]

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const particlesInit = async (engine: any) => {
    // This is important to avoid runtime errors
    await import("tsparticles-engine")
    await import("tsparticles-slim").then((mod) => mod.loadSlim(engine))
    setParticlesLoaded(true)
  }

  return (
    <div className="min-h-screen pt-20 p-8">
      <div className="fixed inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "gentle",
                  parallax: {
                    enable: true,
                    force: 10,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                gentle: {
                  radius: 100,
                  factor: 3,
                },
              },
            },
            particles: {
              color: {
                value: "#CA054D",
              },
              links: {
                color: "#CA054D",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 60,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Work Experience</h1>
        <div className="space-y-12 relative">
          <div className="absolute left-8 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
          {experiences.map((job, index) => (
            <div key={index} className="relative pl-16">
              <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                <div className="absolute w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow border border-border/50">
                <div className="flex items-center mb-2">
                  <Briefcase className="mr-2 h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {job.company} | {job.period}
                </p>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

