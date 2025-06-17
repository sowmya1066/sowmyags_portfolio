"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AboutMe from "../../public/sowmya.png";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

const Particles = dynamic(
  () => import("react-particles").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#CA054D]/10" />
    ),
  }
);

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const particlesInit = async (engine: any) => {
    await import("tsparticles-engine");
    await import("tsparticles-slim").then((mod) => mod.loadSlim(engine));
    setParticlesLoaded(true);
  };

  return (
    <div className="min-h-screen relative">
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
            fpsLimit: 40,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
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
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 25,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Header Section */}

        <h1 className="text-5xl font-bold mb-12 gradient-text">About Me</h1>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Content Section - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
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
                  enhancing job search APIs to deliver faster, more accurate job
                  discovery experiences for candidates exploring opportunities
                  in the healthcare sector.
                </p>
              </div>
            </div>

            {/* Technologies Section */}
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

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/sowmya1066"
                className="p-3 bg-gray-900/60 border border-[#CA054D] rounded-xl hover:border-[#CA054D]/50 hover:bg-[#CA054D]/10 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={24}
                  className="text-[#CA054D] group-hover:text-[#CA054D] transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sowmya-g-s-060b95210"
                className="p-3 bg-gray-900/60 border border-[#CA054D] rounded-xl hover:border-[#CA054D]/50 hover:bg-[#CA054D]/10 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={24}
                  className="text-[#CA054D] group-hover:text-[#CA054D] transition-colors"
                />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-900/60 border border-[#CA054D] rounded-xl hover:border-[#CA054D]/50 hover:bg-[#CA054D]/10 transition-all duration-300 group"
              >
                <Twitter
                  size={24}
                  className="text-[#CA054D] group-hover:text-[#CA054D] transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Image Section - Takes up 2 columns */}
          <div className="lg:col-span-2 flex justify-center lg:justify-evenly mt-2">
            <div className="relative w-80 h-64 group">
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
        </div>
      </div>
    </div>
  );
}
