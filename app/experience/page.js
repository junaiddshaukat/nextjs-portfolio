import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    company: "Headstrater AI",
    role: "Software Engineering Fellow",
    period: "June 2024 - Sep 2024",
    description: "Build 5 AI and Full Stack projects, learn from industry experts, and get hired as a full-time software engineer.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkUdlMvs2RawuH6V3YyKb9mrPFaPGbHqO3Q&s"
  },
]

const communityExperiences = [
  {
    community: "Blackbox AI",
    role: "Student Ambassador",
    period: "Sep 2024 - Present",
    description: "Build a community of students, organize workshops, and mentor students in AI and ML.",
    logo: "https://res.cloudinary.com/junaidshaukat/image/upload/v1732617723/vvhey6qhczjmx6jb6a26.png"
  }
]

function ExperienceCard({ experiences, title }) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">{title}</h2>
      {experiences.map((exp, index) => (
        <div
          key={exp.company || exp.community}
          className="group cursor-pointer bg-zinc-900  rounded-lg p-6 transition-all duration-300 hover:text-[#6b21a8] hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company || exp.community} logo`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <h3 className="text-2xl sm:text-3xl font-semibold  hover:text-[#6b21a8] transition-colors">
                  {exp.company || exp.community}
                </h3>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-zinc-400">{exp.role} | {exp.period}</p>
              <p className="text-lg sm:text-xl text-zinc-300">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="w-full min-h-screen bg-transparent text-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
          Experience  
        </h2>
        
        
        <ExperienceCard experiences={experiences} title="" />
        
        <div className="mt-20">
          <ExperienceCard experiences={communityExperiences} title="Community Building" />
        </div>
      </div>
    </section>
  )
}

