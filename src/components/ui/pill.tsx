import { AstroIcon, Firebase, Nextjs, ReactIcon, TailwindCSS } from "./icons"

const techConfig = {
  react: { name: 'React', color: '#005f80', icon: <ReactIcon /> }, // Replace emojis with icons if needed
  nextjs: { name: 'Next.js', color: 'black', icon: <Nextjs /> },
  tailwind: { name: 'Tailwind CSS', color: '#003159', icon: <TailwindCSS  className="text-lg"/> },
  firebase: { name: 'Firebase', color: '#cc8400', icon: <Firebase /> },
  astro: {name: 'Astro', color: '#6416ae', icon: <AstroIcon  className="text-lg"/>}
}

export type Tech = {
  tech: keyof typeof techConfig,
  className?: string
}

export default function Pill({ tech, className }: Tech) {
  const config = techConfig[tech]

  if (!config) return null
  return (
    <span style={{ backgroundColor: config.color }} className={`flex border border-white/10 gap-1.5 items-center rounded-full text-xs text-white py-1 px-2  ${className}`}>
      {config.icon}
      {config.name}
    </span>
  )
}
