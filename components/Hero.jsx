import Image from 'next/image'
import { DribbbleIcon, Twitter, Github, Mail } from 'lucide-react'
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
  "Bootstrap",
  "Tailwind CSS",
  "MUI",
  "Swiper.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Git/Github",
  "C++"
]
function ProfileCard() {
  return (
    <div className="bg-[#242424] rounded-3xl p-6 shadow-lg">
      <div className="aspect-square rounded-2xl overflow-hidden bg-[orange] mb-6">
        <Image
          src="https://res.cloudinary.com/junaidshaukat/image/upload/v1732467971/zmkzb5ccci3nn8jygkpn.png"
          alt="Mark Smith"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Muhammd Junaid Shaukat</h2>
      <p className="text-gray-400 text-sm md:text-base mb-6">
        A Software Engineer who has developed countless innovative solutions.
      </p>
      <div className="flex justify-center gap-4">
        <SocialIcon icon={<DribbbleIcon className="w-5 h-5" />} label="Dribbble" />
        <SocialIcon icon={<Twitter className="w-5 h-5" />} label="Twitter" />
        <SocialIcon icon={<Github className="w-5 h-5" />} label="Github" />
        <SocialIcon icon={<Mail className="w-5 h-5" />} label="Email" />
      </div>
    </div>
  )
}

function SocialIcon({ icon, label }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-200 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function MainContent() {
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
        <Stat number="12" label="YEARS OF EXPERIENCE" />
        <Stat number="46" label="PROJECTS COMPLETED" />
        <Stat number="20" label="WORLDWIDE CLIENTS" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SkillCard title="DYNAMIC ANIMATION, MOTION DESIGN" color="bg-gray-700" />
        <SkillCard title="FRAMER, FIGMA, WORDPRESS, REACTJS" color="bg-gray-600" />
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
          Download CV
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition-colors">
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
