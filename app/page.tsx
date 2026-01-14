import { Suspense } from "react"
import { PageContent } from "@/components/page-content"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 -z-10" />

      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Content wrapped in Suspense */}
      <Suspense fallback={null}>
        <PageContent />
      </Suspense>
    </div>
  )
}
