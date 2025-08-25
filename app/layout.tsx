import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "The Secret: Reloaded | A Story-Rich Adult Visual Novel about Family Secrets & Forbidden Desire",
  description:
    "Dive into 'The Secret: Reloaded,' a sandbox adult visual novel. After losing his family's company, a young man must navigate a world of corporate deceit and the dangerously complex relationships with his mother and sister.",
  keywords:
    "The Secret Reloaded, The Secret Renpy, Aorrta Games, AORRTA, aorta, aorrta, Adult visual novel, AVN, erotic game, sandbox AVN, Ren'Py game, story-driven adult game",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#e97e80",
  openGraph: {
    title: "The Secret: Reloaded | A Story-Rich Adult Visual Novel",
    description:
      "After losing his family's company, a young man must navigate a world of corporate deceit and the dangerously complex relationships with his mother and sister.",
    url: "https://aorrta-games.com",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mary-QJstD0h9mhQPHy0TNst2qvcBY8UzYC.png",
        width: 1200,
        height: 630,
        alt: "The Secret: Reloaded - Mary character artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Secret: Reloaded | A Story-Rich Adult Visual Novel",
    description:
      "After losing his family's company, a young man must navigate a world of corporate deceit and the dangerously complex relationships with his mother and sister.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mary-QJstD0h9mhQPHy0TNst2qvcBY8UzYC.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#e97e80" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="theme-color" content="#e97e80" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "VideoGame",
                  name: "The Secret: Reloaded",
                  alternateName: "The Secret Ren'Py",
                  author: {
                    "@type": "Person",
                    name: "Aorrta",
                    url: "https://www.patreon.com/aorrta",
                  },
                  gamePlatform: ["PC", "Mac", "Linux", "Android"],
                  genre: ["Visual Novel", "Adult", "Sandbox", "RPG", "Erotic"],
                  applicationCategory: "Game",
                  description:
                    "The Secret: Reloaded is a story-rich adult visual novel with sandbox and light RPG elements. After losing his family's companionship agency, a young man must navigate a world of corporate deceit and the dangerously complex and forbidden relationships with his mother and sister.",
                  abstract:
                    "An erotic visual novel focusing on taboo family dynamics, corporate intrigue, and the fight to reclaim a legacy. Features high-quality renders, meaningful choices, and a deep, character-driven story.",
                  keywords:
                    "The Secret Reloaded, Aorrta Games, AVN, adult visual novel, sandbox game, Ren'Py, family story, forbidden relationship game, high-quality renders",
                  publisher: {
                    "@type": "Organization",
                    name: "Aorrta Games",
                  },
                  character: [
                    { "@type": "Person", name: "Alex (MC)" },
                    { "@type": "Person", name: "Mary (Mother)" },
                    { "@type": "Person", name: "Molly (Sister)" },
                    { "@type": "Person", name: "Vicki (Akita)" },
                    { "@type": "Person", name: "Lola" },
                    { "@type": "Person", name: "Ellen" },
                    { "@type": "Person", name: "Margaret Davis (Antagonist)" },
                  ],
                },
                {
                  "@type": "WebSite",
                  url: "https://aorrta-games.com",
                  name: "The Secret: Reloaded - Official Website",
                  author: {
                    "@type": "Person",
                    name: "Aorrta",
                  },
                  potentialAction: {
                    "@type": "ViewAction",
                    target: "https://www.patreon.com/aorrta",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
