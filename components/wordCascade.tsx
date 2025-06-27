"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EpicGameButton() {
  return (
    <>
      <motion.div
        className="flex space-x-2 justify-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link href="https://word-cascade.vercel.app/">
          <motion.button
            className="relative px-8 py-6 bg-gradient-to-r from-purple-600 via-black to-red-600 text-white font-black text-xl rounded-2xl shadow-2xl border-4 border-cyan-400 overflow-hidden group transform transition-all duration-500"
            whileHover={{
              scale: 1.1,
              rotateX: 5,
              boxShadow:
                "0 25px 50px rgba(236, 72, 153, 0.6), 0 0 60px rgba(34, 211, 238, 0.8)",
              borderColor: "#fbbf24",
            }}
            whileTap={{
              scale: 0.95,
              rotateX: -5,
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(236, 72, 153, 0.5)",
                "0 0 60px rgba(34, 211, 238, 0.8)",
                "0 0 30px rgba(236, 72, 153, 0.5)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            {/* Animated background layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Lightning bolts */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-2 left-4 text-yellow-300 text-xl"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute bottom-2 right-4 text-cyan-300 text-xl"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.7,
                }}
              >
                ⚡
              </motion.div>
            </div>

            {/* Particle explosion effect */}
            {/* <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, (Math.random() - 0.5) * 100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div> */}

            {/* Neon glow lines */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
              animate={{
                opacity: [1, 0.3, 1],
                scaleX: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Holographic sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 -skew-x-12"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />

            {/* Main button content */}
            <span className="relative z-10 flex items-center justify-center space-x-4">
              <motion.div
                className="flex items-center space-x-2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  🎮
                </motion.span>
                <motion.span
                  className="text-xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                >
                  🎯
                </motion.span>
              </motion.div>

              <motion.div
                className="text-center"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(34, 211, 238, 0.8)",
                    "0 0 20px rgba(236, 72, 153, 0.8)",
                    "0 0 10px rgba(34, 211, 238, 0.8)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="font-black tracking-widest text-xl">TRY</div>
                <motion.div
                  className="font-black tracking-widest text-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  WORD CASCADE
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  🔥
                </motion.span>
                <motion.span
                  className="text-xl"
                  animate={{
                    rotateY: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  🎮
                </motion.span>
              </motion.div>
            </span>

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-pink-400"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-pink-400"></div>
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}
