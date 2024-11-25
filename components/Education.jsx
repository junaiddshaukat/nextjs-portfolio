import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const portfolioItems = [
  {
    name: "Bachlor of Computer Science",
    description: "University of Education",
    year: "2023-2027",  
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOxVfhlrghuLayzghWH7BHJs_dhA74W7Obg&s",
    url: "https://ue.edu.pk"
  },
  {
    name: "Pre Engineering",
    description: "Punjab Group of Colleges",
    year: "2021-2022",  
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KCS5gyb_9Nk9KnFyR8I4b8X5bLa9vfJVSg&s",
    url: "https://my.pgc.edu/"
  },
 
]

export default function PortfolioCards() {
  return (
    <div className="w-full max-w-[60rem] mx-auto space-y-4 p-4">
      <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
     Education
        </h2>
      {portfolioItems.map((item) => (
        <Link 
          key={item.name}
          href={item.url}
          className="block transition-transform hover:scale-[1.02]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="p-6 bg-transparent hover:bg-[#242424] border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </div>
            <span className="text-zinc-500">{item.year}</span>
          </Card>
        </Link>
      ))}
    </div>
  )
}
