'use client'

import { useState } from 'react'
import Image from "next/image"

export default function ToolsGrid() {
  const [hoveredTool, setHoveredTool] = useState(null)

  const tools = [
    {
      name: "Next.js",
      description: "React Framework",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    },
    {
      name: "React",
      description: "JavaScript Library",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
    },
    {
      name: "TypeScript",
      description: "Programming Language",
      icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
    },
    {
      name: "Express JS",
      description: "Node.js Framework",
      icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg"
    },

    {
      name: "Node.js",
      description: "JavaScript Runtime",
      icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
    },
    {
      name: "Docker",
      description: "Containerization",
      icon: "https://cdn.worldvectorlogo.com/logos/docker-4.svg"
    },
    {
      name: "Vercel",
      description: "Hosting",
      icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg"
    },
    {
      name: "C++",
      description: "Programming Language",
      icon: "https://cdn.worldvectorlogo.com/logos/c.svg"
    },
    {
      name: "AWS",
      description: "Cloud Services",
      icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
      name: "Figma",
      description: "Design",
      icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg"
    },
    {
      name: "Postman",
      description: "API Testing",
      icon: "https://cdn.worldvectorlogo.com/logos/postman.svg"
    },
  ]

  return (
    <div className="bg-transparent mt-5 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
           My Tech Stack
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`flex items-start gap-4 p-4 border border-zinc-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${
                hoveredTool === tool.name ? 'bg-white bg-opacity-5' : 'bg-transparent'
              }`}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className="bg-white rounded-2xl p-3 w-[60px] h-[60px] flex items-center justify-center shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {tool.name}
                </h3>
                <p className="text-zinc-500 text-lg">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
