"use client"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Share2, Instagram } from "lucide-react"
import { type Lang, LANGUAGES, translations } from "@/lib/i18n"
import { profile } from "@/lib/profile"
import { useToast } from "@/hooks/use-toast"

interface TopActionsProps {
  lang: Lang
}

export function TopActions({ lang }: TopActionsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const t = translations[lang]

  const handleLanguageChange = (newLang: Lang) => {
    const params = new URLSearchParams(searchParams)
    params.set("lang", newLang)
    router.push(`?${params.toString()}`)
  }

  const handleShare = async () => {
    try {
      const url = window.location.href
      await navigator.clipboard.writeText(url)
      toast({
        description: t.linkCopied,
      })
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="sticky top-0 right-0 flex justify-between items-center p-4 z-50">
      {/* Language Selector */}
      <div className="flex gap-2">
        {(Object.keys(LANGUAGES) as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => handleLanguageChange(l)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg backdrop-blur-xl transition-all duration-300 ${
              lang === l
                ? "bg-purple-500 text-white border border-purple-400"
                : "bg-white/10 text-white/70 border border-white/20 hover:bg-white/15 hover:border-purple-400/50"
            }`}
          >
            {LANGUAGES[l]}
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleShare}
          className="p-2 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 rounded-full text-white/70 hover:text-purple-300 transition-all duration-300"
          title={t.share}
        >
          <Share2 className="w-5 h-5" />
        </button>
        {profile.socials.instagram && (
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 rounded-full text-white/70 hover:text-purple-300 transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  )
}
