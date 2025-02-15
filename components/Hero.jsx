"use client"
import Image from 'next/image'
import { DribbbleIcon, Twitter, Github, Mail, Linkedin } from 'lucide-react'
import { Badge } from './ui/badge'

export default function Portfolio() {
  return (
    <div className="min-h-screenbg-[#242424] text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <ProfileCard />
        </div>
        <div className="lg:w-2/3">
          <MainContent />
        </div>
      </div>
    </div>
  )
}
const skills = [
  "HTML/CSS",
  "Javascript",
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "Typescript",
  "Docker",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Git/Github",
  "C++",
  "Competitive Programming",
  "Data Structures",
]

function ProfileCard() {
  return (
    <div className="bg-[#242424] rounded-3xl p-6 shadow-lg">
      <div className="aspect-square rounded-2xl overflow-hidden bg-[orange] mb-6">
        <Image
          src="https://res.cloudinary.com/junaidshaukat/image/upload/v1732467971/zmkzb5ccci3nn8jygkpn.png"
          alt="Muhammad Junaid Shaukat"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Muhammad Junaid Shaukat</h2>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        Software Engineer - Competitive Programmer
      </p>
      <div className="flex justify-center gap-4">
        <SocialIcon
          icon={<Linkedin className="w-5 h-5" />}
          label="LinkedIn"
          url="https://www.linkedin.com/in/junaiddshaukat"
        />
        <SocialIcon
          icon={<Github className="w-5 h-5" />}
          label="Github"
          url="https://github.com/junaiddshaukat"
        />
        <SocialIcon
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          url="mailto:junaidshaukat546@gmail.com"
        />
        <SocialIcon
          icon={<Twitter className="w-5 h-5" />}
          label="Twitter"
          url="http://x.com/junaiddshaukat"
        />
      </div>
    </div>
  );
}

function SocialIcon({ icon, label, url }) {
  return (
    <a
      href={url}
      className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
function MainContent() {

  const clickhandle = () => {
    const contactSection = document.getElementById('contact-f');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">SOFTWARE ENGINEER</h1>
        <p className="text-gray-400 text-base md:text-xl max-w-2xl">
          Passionate about creating intuitive and engaging user experiences. 
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            className="bg-[#242424] hover:bg-black/90 text-white px-4 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
        <Stat number="01" label="YEARS OF EXPERIENCE" />
        <Stat number="10" label="PROJECTS COMPLETED" />
        <Stat number="05" label="CERTIFICATIONS" />
      </div> */}
<div className="mt-5" style={{ textAlign: "center" }}>
<p className='text-left mb-3'>GitHub Stats</p>

<div className="mt-3" style={{ textAlign: "center" }}>
  <img
    src="https://ghchart.rshah.org/421d61/junaiddshaukat"
    alt="GitHub Contribution Graph"
    className='w-full'
  />
</div>

{/* 
  <a href="https://github.com/Junaid-Shaukat">
    <iframe
      src="https://streak-stats.demolab.com?user=Junaid-Shaukat&theme=dark"
      alt="GitHub Streak"
      style={{
        maxWidth: "100%",
        width: "495px",
        height: "180px",
        border: "none",
      }}
    />
  </a> */}
</div>


      {/* <div className="grid md:grid-cols-2 gap-6">
        <SkillCard title="WEB APPS" color="bg-zinc-700" />
        <SkillCard title="FRAMER, FIGMA, WORDPRESS, REACTJS" color="bg-gray-600" />
      </div> */}

      <div className="flex flex-wrap gap-4">
      <a 
          href="https://drive.google.com/file/d/1Ou2T4BVUtC4E8BymMO_NEQkvrTEN1iiZ/view?usp=sharing"
          target='_blank' 
          download="junaid.pdf"
          className="px-6 py-3 bg-zinc-800 rounded-full hover:bg-gray-600 transition-colors"
        >
          Download CV
        </a>
        <button onClick={clickhandle} className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition-colors">
         
          Contact Me
        </button>
      </div>
    </div>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">+{number}</div>
      <div className="text-gray-400 text-xs md:text-sm">{label}</div>
    </div>
  )
}

function SkillCard({ title, color }) {
  return (
    <div className={`${color} p-6 rounded-3xl relative overflow-hidden group`}>
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
    </div>
  )
}
