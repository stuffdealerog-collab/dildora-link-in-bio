"use client"

import Image from "next/image"
import type { Lang } from "@/lib/i18n"
import { profile } from "@/lib/profile"

interface ProfileHeaderProps {
  lang: Lang
}

export function ProfileHeader({ lang }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-8 text-center">
      {/* Avatar */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-purple-400/50 shadow-lg">
        <Image src={profile.avatar || "/placeholder.svg"} alt={profile.name} fill className="object-cover" priority />
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-white text-pretty">{profile.name}</h1>

      {/* Subtitle */}
      <p className="text-sm text-purple-200/80 text-pretty max-w-xs">{profile.subtitles[lang]}</p>

      {/* CTA Button */}
      {profile.featured && (
        <a
          href={profile.featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-8 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          {profile.featured.title}
        </a>
      )}
    </div>
  )
}
