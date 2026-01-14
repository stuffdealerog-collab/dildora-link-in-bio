"use client"

import { Phone, Copy } from "lucide-react"
import { type Lang, translations } from "@/lib/i18n"
import { profile } from "@/lib/profile"
import { useToast } from "@/hooks/use-toast"

interface ContactsCardProps {
  lang: Lang
}

function formatPhoneForDisplay(phone: string): string {
  return phone.replace(/\s+/g, " ")
}

function extractPhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "")
}

export function ContactsCard({ lang }: ContactsCardProps) {
  const { toast } = useToast()
  const t = translations[lang]

  const handleCall = (phone: string) => {
    window.location.href = `tel:${extractPhoneDigits(phone)}`
  }

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(extractPhoneDigits(phone))
    toast({
      description: t.copied,
    })
  }

  return (
    <div className="space-y-4">
      {/* Reklama / Hamkorlik */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5">
        <p className="text-xs text-purple-300 mb-3 font-semibold">{profile.contacts.reklamaLabel[lang]}</p>
        <p className="text-white font-mono text-sm mb-3">{formatPhoneForDisplay(profile.contacts.reklamaPhone)}</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleCall(profile.contacts.reklamaPhone)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>{t.call}</span>
          </button>
          <button
            onClick={() => handleCopy(profile.contacts.reklamaPhone)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Copy className="w-4 h-4" />
            <span>{t.copy}</span>
          </button>
        </div>
      </div>

      {/* Islomiy to'ylar */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5">
        <p className="text-xs text-purple-300 mb-3 font-semibold">{profile.contacts.islamicWeddingsLabel[lang]}</p>
        <div className="space-y-3">
          <div>
            <p className="text-white font-mono text-sm mb-2">
              {formatPhoneForDisplay(profile.contacts.islamicWeddingsPhone)}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleCall(profile.contacts.islamicWeddingsPhone)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.call}</span>
              </button>
              <button
                onClick={() => handleCopy(profile.contacts.islamicWeddingsPhone)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Copy className="w-4 h-4" />
                <span>{t.copy}</span>
              </button>
            </div>
          </div>

          {profile.contacts.islamicWeddingsPhone2 && (
            <div>
              <p className="text-white font-mono text-sm mb-2">
                {formatPhoneForDisplay(profile.contacts.islamicWeddingsPhone2)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCall(profile.contacts.islamicWeddingsPhone2!)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.call}</span>
                </button>
                <button
                  onClick={() => handleCopy(profile.contacts.islamicWeddingsPhone2!)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <Copy className="w-4 h-4" />
                  <span>{t.copy}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
