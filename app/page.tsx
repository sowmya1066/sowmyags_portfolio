"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Code,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import AboutMe from "../public/sowmya.png";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("react-particles").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#CA054D]/10" />,
})

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSection, setCurrentSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [particlesLoaded, setParticlesLoaded] = useState(false)

  const sections = ["hero", "about", "experience", "projects", "contact"]

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

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
      setCurrentSection(index)
    }
  }

  // Handle intersection observer to update current section
  useEffect(() => {
    if (typeof window === "undefined") return

    const observers = sections.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setCurrentSection(index)
          }
        },
        { threshold: 0.5 },
      )

      if (sectionRefs.current[index]) {
        observer.observe(sectionRefs.current[index]!)
      }

      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]!)
        }
      })
    }
  }, [])

  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom right, hsl(222.2, 84%, 4.9%), hsl(222.2, 84%, 4.9%), rgba(202, 5, 77, 0.1))",
      }}
    >
      {/* Particles Background */}
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
                value: 70,
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

      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="hero"
        className="h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden"
      >
        <motion.div
          className="z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span style={{ color: "#CA054D" }}>Software</span>
            <br />
            <span style={{ color: "#CA054D" }}>Engineer</span>
            <motion.div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "0.5rem",
                background:
                  "linear-gradient(to right, #CA054D, rgba(202, 5, 77, 0.7), rgba(202, 5, 77, 0.5))",
                opacity: 0.75,
                filter: "blur(16px)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </h1>
          <motion.p
            className="text-xl md:text-2xl mb-12"
            style={{ color: "white" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting digital experiences with code and imagination
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/projects">
              <button
                style={{
                  backgroundColor: "#CA054D",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.3s",
                }}
                onClick={() => scrollToSection(3)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(202, 5, 77, 0.8)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#CA054D")
                }
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>

            <Link href="/contact">
              <button
                style={{
                  backgroundColor: "rgba(202, 5, 77, 0.2)",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  border: "1px solid rgba(202, 5, 77, 0.5)",
                  transition: "background-color 0.3s",
                }}
                onClick={() => scrollToSection(4)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(202, 5, 77, 0.3)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(202, 5, 77, 0.2)")
                }
              >
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex space-x-6 mt-12 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com/sowmya1066"
            style={{
              color: "hsl(var(--foreground))",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CA054D")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "hsl(var(--foreground))")
            }
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sowmya-g-s-060b95210"
            style={{
              color: "hsl(var(--foreground))",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CA054D")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "hsl(var(--foreground))")
            }
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            style={{
              color: "hsl(var(--foreground))",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CA054D")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "hsl(var(--foreground))")
            }
          >
            <Twitter size={24} />
          </a>
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "16rem",
            height: "16rem",
            backgroundColor: "rgba(202, 5, 77, 0.2)",
            borderRadius: "9999px",
            filter: "blur(24px)",
          }}
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{ type: "spring", damping: 10, stiffness: 50 }}
        />
      </section>

      {/* Mobile Section */}
      <div className="md:hidden">
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          id="about"
          className="min-h-screen py-0 px-8 flex flex-col justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: "#CA054D" }}
            >
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-6 relative">
              {/* Floating code symbols */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "-2.5rem",
                  right: "-1.25rem",
                  color: "rgba(202, 5, 77, 0.3)",
                  zIndex: 0,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="hidden md:block"
              >
                <Code size={40} />
              </motion.div>

              <motion.div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "-1.25rem",
                  color: "rgba(202, 5, 77, 0.3)",
                  zIndex: 0,
                }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="hidden md:block"
              >
                <Sparkles size={40} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: "rgba(202, 5, 77, 0.05)",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(202, 5, 77, 0.2)",
                  position: "relative",
                }}
              >
                <div className="lg:col-span-2 flex justify-center lg:justify-evenly mt-2 mb-4">
                  <div className="relative w-52 h-40 group">
                    <div
                      className="absolute inset-0 rounded-2xl z-[-1]"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(202, 5, 77, 0.5), rgba(202, 5, 77, 0.4), rgba(202, 5, 77, 0.2))",
                      }}
                    />
                    {/* Main image border box */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#CA054D] z-10">
                      <Image
                        src={AboutMe || "/placeholder.svg"}
                        alt="Sowmya"
                        className="w-full h-full object-fit"
                        fill
                      />
                    </div>

                    {/* Offset border for bottom-right glow effect */}
                    <div className="absolute top-2 left-2 w-full h-full rounded-2xl border-2 border-[#CA054D] opacity-80 z-0" />
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-300">
                    Hello! My name is{" "}
                    <span className="text-[#CA054D] font-semibold">Sowmya</span>{" "}
                    and I enjoy creating things that live on the internet. My
                    interest in web development started back in 2022 when I
                    decided to try building custom solutions — turns out hacking
                    together a custom dashboard taught me a lot about modern web
                    technologies!
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    Fast-forward to today, and I've had the privilege of working
                    at various companies building
                    <span className="text-[#CA054D] font-medium">
                      {" "}
                      real-time dashboards
                    </span>
                    ,
                    <span className="text-[#CA054D] font-medium">
                      {" "}
                      data visualizations
                    </span>
                    , and seamless monitoring tools for{" "}
                    <span className="text-[#CA054D] font-medium">
                      smart surveillance
                    </span>{" "}
                    and security solutions.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    I also recently worked on pharmaceutical career platforms,
                    enhancing job search APIs to deliver faster, more accurate
                    job discovery experiences for candidates exploring
                    opportunities in the healthcare sector.
                  </p>
                </div>
              </motion.div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Technologies I've been working with recently:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Next.js",
                    "MySQL",
                    "Python",
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center group">
                      <div className=" text-[#CA054D]">
                        <ChevronRightIcon />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background elements */}
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: 0,
              width: "8rem",
              height: "8rem",
              backgroundColor: "rgba(202, 5, 77, 0.1)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: 0,
              width: "10rem",
              height: "10rem",
              backgroundColor: "rgba(202, 5, 77, 0.05)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
        </section>

        {/* Work Experience Section */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          id="experience"
          className="min-h-screen py-16 px-4 flex flex-col justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: "#CA054D" }}
            >
              Work Experience
            </h2>
            <div className="space-y-8 relative ">
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "0.5rem",
                  bottom: 0,
                  width: "0.125rem",
                  background:
                    "linear-gradient(to bottom, #CA054D, transparent)",
                }}
              ></div>

              {[
                {
                  title: "Software Engineer",
                  company: "Appiness Interactive",
                  period: "September 2024 - Present",
                  description:
                    "I specialize in building real-time monitoring dashboards for traffic surveillance, facial recognition, and video management, focusing on event visualization, live camera integration, and seamless data handling. Using React, Next.js, TypeScript, JavaScript, Python and styling tools like Shadcn, Chakra UI and Tailwind. Developed real-time event updates via WebSockets and REST APIs. I implemented shift-based event tracking with drilldown charts, allowing users to explore detailed traffic and security events for each shift. Integrated logic to calculate storage and hardware requirements based on camera type, recording duration, and environment. My work also includes handling live RTSP/HLS streams, dynamic server selection, and real-time alert scrolling systems for continuous event updates. I improved search efficiency by 10% in traffic violation lookups through optimized filtering logic and backend queries. Across all projects, I focused on combining visual clarity, functional depth, and performance optimization to deliver seamless user experiences.",
                },
                {
                  title: "Junior Software Engineer",
                  company: "Indegene",
                  period: "July 2022 - September 2024",
                  description:
                    "Developed dynamic web pages for BI.com, ensuring a optimal user experience. Collaborated on the Page-As-A-Service (PaaS) feature, which enabled business users to quickly create and manage web pages with minimal technical intervention. A key part of my contribution was integrating the Taleo API with SAP SuccessFactors, automating job postings and ensuring seamless candidate data synchronization between the systems. This integration enhanced the overall recruitment process automation by reducing manual data handling and ensuring real-time updates.",
                },
                {
                  title: "Program Analyst Trainee (Internship)",
                  company: "Cognizant",
                  period: "January 2022 - June 2022",
                  description:
                    "Worked on an eCommerce application, building dynamic product listing pages, category filters, and an interactive cart system using React. Applied advanced state management with Context API and Redux to efficiently handle large product data and user interactions. Streamlined data fetching and synchronization with backend services to ensure real-time updates. Focused on component reusability, performance optimization, and scalable architecture. Gained hands-on experience with SDLC , API integration, and state handling best practices.",
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ paddingLeft: "2.5rem", position: "relative" }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.5rem",
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "#CA054D",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        backgroundColor: "hsl(var(--background))",
                        borderRadius: "9999px",
                      }}
                    ></div>
                  </div>

                  <Card
                    style={{
                      transition: "box-shadow 0.3s",
                      border: "1px solid rgba(202, 5, 77, 0.2)",
                      backgroundColor: "rgba(34, 39, 55, 0.5)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "12px",
                    }}
                  >
                    <CardContent style={{ padding: "1.5rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Briefcase
                          style={{
                            marginRight: "0.5rem",
                            height: "1.25rem",
                            width: "1.25rem",
                            color: "#CA054D",
                          }}
                        />
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                          {job.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          color: "hsl(215, 20.2%, 65.1%)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {job.company} | {job.period}
                      </p>
                      <p className="text-lg leading-relaxed text-gray-300">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Background elements */}
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: 0,
              width: "10rem",
              height: "10rem",
              backgroundColor: "rgba(202, 5, 77, 0.1)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
        </section>

        {/* Projects Section */}
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          id="projects"
          className="min-h-screen py-16 px-8 flex flex-col justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-6xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: "#CA054D" }}
            >
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Word Cascade",
                  description:
                    "A recipe-sharing platform built with Nextjs, where users can explore community and share their favorite recipes.",
                  image:
                    "/wordCascade.png?height=300&width=400&text=Neon+Dreams",
                  tags: ["Next.js", "Typescript", "Python"],
                  links: {
                    github: "https://github.com/sowmya1066/word-cascade",
                    live: "https://word-cascade.vercel.app/",
                  },
                },
                {
                  title: "Next Food",
                  description:
                    "A recipe-sharing platform built with Nextjs, where users can explore community and share their favorite recipes.",
                  image: "/nextfood.png?height=300&width=400&text=Neon+Dreams",
                  tags: ["Next.js", "Javascript", "SQLite"],
                  links: {
                    github: "https://github.com/sowmya1066/nextjs",
                    live: "https://next-food-iota.vercel.app/meals",
                  },
                },
                {
                  title: "E-commerce ShopOn",
                  description:
                    "An e-commerce shopping app built with Express.js, handling meal data retrieval and order processing via REST APIs",
                  image:
                    "/ShopOn.png?height=300&width=400&text=Crypto+Dashboard",
                  tags: ["React", "NodeJS", "ExpressJS", "RestAPIs"],
                  links: {
                    github: "https://github.com/sowmya1066/shopon",
                    live: "https://shopon-green.vercel.app/",
                  },
                },
                {
                  title: "Zen List",
                  description:
                    "Create your todo's using machine learning algorithms",
                  image:
                    "/ZenList.png?height=300&width=400&text=AI+Art+Generator",
                  tags: ["Python", "TensorFlow", "React"],
                  links: {
                    github: "https://github.com/sowmya1066/ZenList",
                    live: "https://zen-list.vercel.app/",
                  },
                },
                {
                  title: "Wheel Trek",
                  description:
                    "An interactive map application using Leaflet that lets users log and visualize their cycling routes and activity details.",
                  image:
                    "/wheelTrek.png?height=300&width=400&text=Crypto+Dashboard",
                  tags: ["JavaScript", "API Integration", "Leaflet"],
                  links: {
                    github: "https://github.com/sowmya1066/wheeltrek",
                    live: "https://wheeltrek-sowmya.netlify.app/",
                  },
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      overflow: "hidden",
                      transition: "box-shadow 0.3s",
                      border: "1px solid rgba(202, 5, 77, 0.2)",
                      backgroundColor: "rgba(34, 39, 55, 0.5)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "12px",
                    }}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "12rem",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, hsl(222.2, 84%, 4.9%), transparent)",
                        }}
                      ></div>
                    </div>
                    <CardContent style={{ padding: "1.5rem" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          color: "hsl(215, 20.2%, 65.1%)",
                          marginBottom: "1rem",
                        }}
                      >
                        {project.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "rgba(202, 5, 77, 0.2)",
                              color: "white",
                              border: "1px solid rgba(202, 5, 77, 0.5)",
                              padding: "0.25rem 0.5rem",
                              borderRadius: "9999px",
                              fontSize: "0.875rem",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.375rem",
                            border: "1px solid rgba(202, 5, 77, 0.5)",
                            backgroundColor: "transparent",
                            color: "white",
                            fontSize: "0.875rem",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(202, 5, 77, 0.2)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "transparent")
                          }
                        >
                          <Github
                            style={{
                              marginRight: "0.5rem",
                              height: "1rem",
                              width: "1rem",
                            }}
                          />{" "}
                          Code
                        </button>
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.375rem",
                            backgroundColor: "#CA054D",
                            color: "white",
                            fontSize: "0.875rem",
                            transition: "background-color 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(202, 5, 77, 0.8)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#CA054D")
                          }
                        >
                          <ExternalLink
                            style={{
                              marginRight: "0.5rem",
                              height: "1rem",
                              width: "1rem",
                            }}
                          />{" "}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Background elements */}
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: 0,
              width: "10rem",
              height: "10rem",
              backgroundColor: "rgba(202, 5, 77, 0.1)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
        </section>

        {/* Contact Section */}
        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          id="contact"
          className="min-h-screen py-16 px-8 flex flex-col justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ color: "#CA054D" }}
            >
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  I'm always open to new opportunities and collaborations.
                  Whether you have a project in mind or just want to say hi,
                  feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary" size={24} />
                    <span>sowmyaa2406@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary" size={24} />
                    <span>00000000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-primary" size={24} />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "hsl(217.2, 32.6%, 17.5%)",
                      color: "hsl(var(--foreground))",
                      border: "1px solid rgba(202, 5, 77, 0.2)",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#CA054D";
                      e.currentTarget.style.boxShadow = "0 0 0 1px #CA054D";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(202, 5, 77, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "hsl(217.2, 32.6%, 17.5%)",
                      color: "hsl(var(--foreground))",
                      border: "1px solid rgba(202, 5, 77, 0.2)",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#CA054D";
                      e.currentTarget.style.boxShadow = "0 0 0 1px #CA054D";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(202, 5, 77, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "hsl(217.2, 32.6%, 17.5%)",
                      color: "hsl(var(--foreground))",
                      border: "1px solid rgba(202, 5, 77, 0.2)",
                      outline: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#CA054D";
                      e.currentTarget.style.boxShadow = "0 0 0 1px #CA054D";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(202, 5, 77, 0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    required
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "#CA054D",
                      color: "white",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      fontWeight: 500,
                      transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(202, 5, 77, 0.8)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#CA054D")
                    }
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Background elements */}
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: 0,
              width: "10rem",
              height: "10rem",
              backgroundColor: "rgba(202, 5, 77, 0.1)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "33%",
              left: 0,
              width: "8rem",
              height: "8rem",
              backgroundColor: "rgba(202, 5, 77, 0.05)",
              borderRadius: "9999px",
              filter: "blur(24px)",
            }}
          ></div>
        </section>

        {/* Navigation Buttons (only on mobile) */}
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: "1rem",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            zIndex: 50,
          }}
        >
          <button
            onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            style={{
              backgroundColor: "rgba(34, 39, 55, 0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(202, 5, 77, 0.5)",
              borderRadius: "0.375rem",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s",
              opacity: currentSection === 0 ? 0.5 : 1,
              cursor: currentSection === 0 ? "not-allowed" : "pointer",
            }}
            onMouseOver={(e) => {
              if (currentSection !== 0) {
                e.currentTarget.style.backgroundColor = "rgba(202, 5, 77, 0.2)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(34, 39, 55, 0.2)";
            }}
          >
            <ChevronLeft style={{ height: "1rem", width: "1rem" }} />
          </button>
          <button
            onClick={() =>
              scrollToSection(Math.min(sections.length - 1, currentSection + 1))
            }
            disabled={currentSection === sections.length - 1}
            style={{
              backgroundColor: "rgba(34, 39, 55, 0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(202, 5, 77, 0.5)",
              borderRadius: "0.375rem",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s",
              opacity: currentSection === sections.length - 1 ? 0.5 : 1,
              cursor:
                currentSection === sections.length - 1
                  ? "not-allowed"
                  : "pointer",
            }}
            onMouseOver={(e) => {
              if (currentSection !== sections.length - 1) {
                e.currentTarget.style.backgroundColor = "rgba(202, 5, 77, 0.2)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(34, 39, 55, 0.2)";
            }}
          >
            <ChevronRight style={{ height: "1rem", width: "1rem" }} />
          </button>
        </div>
      </div>
    </main>
  );
}

