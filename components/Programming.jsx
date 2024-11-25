import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function CompetitiveJourney() {
  const competitions = [
    {
      id: 1,
      name: "Forman Ignite",
      date: "June 25th - 28th, 2024",
      location: "FCCU, Lahore",
      achievement: "Ended up in top 15 with my team",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KCS5gyb_9Nk9KnFyR8I4b8X5bLa9vfJVSg&s",
    },
    {
      id: 2,
      name: "ElectroCon'24",
      date: "March 25th - 26th, 2024",
      location: "UET, Lahore",
      achievement: "Advanced to final round",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KCS5gyb_9Nk9KnFyR8I4b8X5bLa9vfJVSg&s",
    },
    {
      id: 3,
      name: "UE Code Quest",
      date: "April 18th, 2024",
      location: "University of Education, Lahore",
      achievement: "2nd Runner-Up",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KCS5gyb_9Nk9KnFyR8I4b8X5bLa9vfJVSg&s",
    },
  ]

  return (
    <div className="max-w-[60rem] mx-auto px-4 py-16">
      <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-5 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
      Competitive Programming Journey
        </h2>
        <p className="text-muted-foreground text-lg">
          Highlights of my competitive programming contests and achievements.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-border" />

        {/* Competition entries */}
        <div className="space-y-12">
          {competitions.map((competition) => (
            <div key={competition.id} className="relative">
              <div className="flex items-start gap-4">
                <div className="relative z-10">
                  <Card className="w-16 h-16 flex items-center bg-transparent justify-center rounded-xl overflow-hidden   border-1 border-background transition-transform duration-300 hover:scale-110">
                    <Image
                      src={competition.logo}
                      alt={`${competition.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </Card>
                </div>
                <div className="flex-1 hover:bg-[#242424] border-zinc-800 text-white  rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    {competition.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {competition.name}
                  </h3>
                  <div className="text-muted-foreground mb-2">
                    {competition.location}
                  </div>
                  <div className="text-sm">{competition.achievement}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

