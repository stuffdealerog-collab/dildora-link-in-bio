export interface ProfileData {
  avatar: string
  name: string
  subtitles: {
    uz: string
    ru: string
    en: string
  }
  featured: {
    url: string
    title: string
  } | null
  links: {
    youtube?: string
    telegram?: string
    tiktok?: string
  }
  socials: {
    instagram?: string
    instagramOfficial?: string
    facebook?: string
  }
  contacts: {
    reklamaLabel: {
      uz: string
      ru: string
      en: string
    }
    reklamaPhone: string
    islamicWeddingsLabel: {
      uz: string
      ru: string
      en: string
    }
    islamicWeddingsPhone: string
    islamicWeddingsPhone2?: string
  }
}

export const profile: ProfileData = {
  avatar: "/avatar.png",
  name: "Dildora Niyozova",
  subtitles: {
    uz: "Ezgulik kuychisi, bizning kanallarimizga obuna bo‘ling!",
    ru: "Певица, подписывайтесь на наши каналы!",
    en: "Singer, subscribe to our channels!",
  },
  featured: {
    url: "https://youtube.com/@dildoraniyozova_?si=PrURsLZvwxsJO3VG",
    title: "YouTube",
  },
  links: {
    youtube: "https://youtube.com/@dildoraniyozova_?si=PrURsLZvwxsJO3VG",
    tiktok: "https://www.tiktok.com/@dildoraniyozova_tt?_r=1&_t=ZS-934XrkViCxB",
  },
  socials: {
    instagram: "https://www.instagram.com/dildora_niyozova?igsh=YTJidnpnc2ljN2l1&utm_source=qr",
    instagramOfficial: "https://www.instagram.com/dildora_niyozova_official?igsh=NTE5ZnhuaDY5ZHA%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/18AvU9TEP4/?mibextid=wwXIfr",
  },
  contacts: {
    reklamaLabel: {
      uz: "Reklama / hamkorlik",
      ru: "Реклама / сотрудничество",
      en: "Advertising / Partnership",
    },
    reklamaPhone: "+998 94 646 55 25",
    islamicWeddingsLabel: {
      uz: "Islomiy to'ylar (Admin)",
      ru: "Исламские свадьбы (Администратор)",
      en: "Islamic Weddings (Admin)",
    },
    islamicWeddingsPhone: "+998 94 646 55 25",
    islamicWeddingsPhone2: "+998 50 303 06 06",
  },
}
