import { ArrowUpRight, Github } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const projects = [
  {
    title: "UE Readers Club",
    subtitle: "Book Club Web App",
    description: "A book club web application where users can read, share, and discuss books with other members.",
    image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1732536449/v1grjuncvv9lqy1pwxcw.jpg",
    tags: ["Next js", "Node js", "Express js", "Firebase", "Tailwind CSS"],
    link: "http://ue-readers-club.vercel.app/",
    github: "https://github.com/Junaid-Shaukat/ue-readers-club"
  },
  {
    title: "CryptoArea",
    subtitle: "Cryptocurrency Analytics Platform",
    description: "A cryptocurrency analytics platform where users can track the latest prices, trends, and news.",
    image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1732536449/hie8wbuzvldsfkmwrcsf.jpg",
    tags: ["React", "Coin Gecko Api", "MERN", "JavaScript" ,"Analytics"],
    link: "https://cryptoarea.netlify.app/",
    github: "https://github.com/Junaid-Shaukat/CryptoArea"
  },
  {
    title: "Revise-Deps",
    subtitle: "Dependency Update Checker",
    description: "revise-deps is a CLI tool for managing dependencies and auditing security in Node.js projects. It helps developers keep their projects' dependencies up-to-date and secure by providing commands to scan for outdated packages, check for vulnerabilities, and update packages.",
    image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1732616258/oohppx5evlxj47jz9rqg.jpg",
    tags: ["npm", "dependency checker", "javascript", "fix" ,"update"],
    link: "https://www.npmjs.com/package/revise-deps",
    github: "https://github.com/Junaid-Shaukat/revise-deps"
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
           My Projects
          </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="md:w-2/5 relative">
                <Image 
                 src={project.image}
                 alt={project.title}
                 className="object-cover"
                 width={500}
                    height={500}
                />
              </div>
              
              <div className="md:w-[90%] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-lg text-zinc-400">{project.subtitle}</p>
                    </div>
                    <Link 
                      href={project.link} target="_blank"
                      className="text-white hover:text-purple-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                      <span className="sr-only">View Project</span>
                    </Link>
                  </div>
                  
                  <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs text-purple-300 bg-purple-900/30 rounded-full transition-colors duration-300 hover:bg-purple-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    View Project
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                  <Link 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black hover:text-purple-900 transition-colors duration-300"
                  >
                    <Button variant="outline" size="icon" className="w-8 h-8 rounded-full bg-white">
                      <Github className="w-4 h-4" />
                      <span className="sr-only">GitHub Repo</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

