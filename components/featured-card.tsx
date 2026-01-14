"use client"
import { profile } from "@/lib/profile"

export function FeaturedCard() {
  if (!profile.featured) return null

  return (
    <a
      href={profile.featured.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-6 block overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
    >
      <div className="relative h-40 bg-gradient-to-br from-purple-600/40 to-pink-600/40 flex items-center justify-center">
        <div className="text-4xl font-bold text-white/60 group-hover:text-white/80 transition-colors">▶</div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-medium text-purple-300">{profile.featured.title}</p>
      </div>
    </a>
  )
}
