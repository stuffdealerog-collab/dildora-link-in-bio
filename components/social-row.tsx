"use client"

import { Instagram, Facebook } from "lucide-react"
import { profile } from "@/lib/profile"

export function SocialRow() {
  const socials = [
    { url: profile.socials.instagram, icon: Instagram, label: "Instagram" },
    { url: profile.socials.instagramOfficial, icon: Instagram, label: "Instagram Official" },
    { url: profile.socials.facebook, icon: Facebook, label: "Facebook" },
  ].filter((s) => s.url)

  if (socials.length === 0) return null

  return (
    <div className="flex justify-center gap-3 mt-6">
      {socials.map((social, idx) => {
        const Icon = social.icon
        return (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.label}
            className="p-3 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 rounded-full text-white/70 hover:text-purple-300 transition-all duration-300 hover:scale-110"
          >
            <Icon className="w-5 h-5" />
          </a>
        )
      })}
    </div>
  )
}
