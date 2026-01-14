"use client"

import { useSearchParams } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"
import { type Lang, normalizeLang } from "@/lib/i18n"
import { ProfileHeader } from "@/components/profile-header"
import { FeaturedCard } from "@/components/featured-card"
import { LinkButtons } from "@/components/link-buttons"
import { ContactsCard } from "@/components/contacts-card"
import { SocialRow } from "@/components/social-row"
import { TopActions } from "@/components/top-actions"

export function PageContent() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get("lang")
  const lang = normalizeLang(langParam ?? undefined) as Lang

  return (
    <>
      <TopActions lang={lang} />
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          <ProfileHeader lang={lang} />
          <FeaturedCard />
          <LinkButtons />
          <ContactsCard lang={lang} />
          <SocialRow />
        </div>
      </main>
      <Toaster />
    </>
  )
}
