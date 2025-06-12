"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Particles = dynamic(() => import("react-particles").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#CA054D]/10" />,
})
export default function About() {
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
                value: 0.5,
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
        <h1 className="text-5xl font-bold mb-8 gradient-text">About Me</h1>
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden mx-auto mb-20">
            <img src="/placeholder.svg?height=256&width=256" alt="Alex" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/20 blur-3xl -z-10"></div>
        </div>
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-xl mb-6">
              I am an experienced Web Developer with 2.6 years of dedicated practice in the IT sector, specializing in
              front-end web development. My journey includes designing, developing, testing, and maintaining responsive
              web applications. Proficient in technologies such as React for dynamic interfaces and Tailwind CSS for
              streamlined styling, I also bring expertise in backend systems with PostgreSQL and Docker for efficient
              data management and deployment.
            </p>
            <p className="text-xl mb-6">
              Passionate about leveraging technology to solve challenges, I am committed to continuous learning and
              staying abreast of industry trends. My goal is to create impactful digital solutions that not only meet
              but exceed user expectations, delivering excellence in every project. Passionate about leveraging
              technology to solve challenges, I am committed to continuous learning and staying abreast of industry
              trends.
            </p>
            <p className="text-xl mb-6">
              My goal is to create impactful digital solutions that not only meet but exceed user expectations,
              delivering excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

