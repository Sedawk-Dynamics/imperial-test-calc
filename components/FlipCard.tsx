"use client"

type FlipCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FlipCard({ icon, title, description }: FlipCardProps) {
  return (
    <div className="group perspective">
      <div className="relative h-64 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl bg-white shadow-lg p-6 backface-hidden flex flex-col justify-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-lg font-semibold text-orange-600">
            {title}
          </h3>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white backface-hidden rotate-y-180 flex items-center">
          <p className="text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}
