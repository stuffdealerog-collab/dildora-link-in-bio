export type Lang = "uz" | "ru" | "en"

export const LANGUAGES: Record<Lang, string> = {
  uz: "UZ",
  ru: "РУ",
  en: "EN",
}

export function normalizeLang(lang: string | undefined): Lang {
  if (lang === "ru" || lang === "en") return lang
  return "uz"
}

export interface Translations {
  share: string
  copied: string
  linkCopied: string
  call: string
  copy: string
  copied: string
  clickToCall: string
}

export const translations: Record<Lang, Translations> = {
  uz: {
    share: "Ulashish",
    copied: "Nusxalandi",
    linkCopied: "Havola nusxalandi",
    call: "Qo'ng'iroq",
    copy: "Nusxala",
    clickToCall: "Qo'ng'iroq qilish uchun bosing",
  },
  ru: {
    share: "Поделиться",
    copied: "Скопировано",
    linkCopied: "Ссылка скопирована",
    call: "Позвонить",
    copy: "Скопировать",
    clickToCall: "Нажмите, чтобы позвонить",
  },
  en: {
    share: "Share",
    copied: "Copied",
    linkCopied: "Link copied",
    call: "Call",
    copy: "Copy",
    clickToCall: "Click to call",
  },
}
