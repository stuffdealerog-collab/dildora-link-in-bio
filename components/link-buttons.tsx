"use client"

import { Youtube, Music2, Send } from "lucide-react"
import { profile } from "@/lib/profile"

const linkIcons = {
  youtube: { icon: Youtube, label: "YouTube", color: "hover:text-red-500" },
  tiktok: { icon: Music2, label: "TikTok", color: "hover:text-purple-400" },
  telegram: { icon: Send, label: "Telegram", color: "hover:text-blue-400" },
}

export function LinkButtons() {
  const links = Object.entries(profile.links).filter(([_, url]) => url)

  if (links.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-3 mb-6">
      {links.map(([key, url]) => {
        const config = linkIcons[key as keyof typeof linkIcons]
        if (!config) return null

        const Icon = config.icon

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 rounded-xl transition-all duration-300 text-white hover:text-purple-300 font-medium"
          >
            <Icon className="w-5 h-5" />
            <span>{config.label}</span>
          </a>
        )
      })}
    </div>
  )
}
