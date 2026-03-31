'use client'

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ChevronRight,
  ChevronLeft,
  Utensils,
  Clock,
  MapPin,
  Phone,
  Info,
  Languages,
  Menu as MenuIcon,
  X,
} from 'lucide-react'
import { Language } from '@/types'
import { MENU_DATA, UI_STRINGS } from '@/constants'

const FLAGS = {
  nl: '🇳🇱',
  de: '🇩🇪',
  en: '🇬🇧',
}

const LANG_NAMES = {
  nl: 'Nederlands',
  de: 'Deutsch',
  en: 'English',
}

export default function DeckerMenu() {
  const [lang, setLang] = useState<Language | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeSection, lang])

  if (!lang) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] flex flex-col items-center justify-center p-6 font-serif">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter text-[#5A5A40]">
              DECKERS
            </h1>
            <div className="h-px w-24 bg-[#5A5A40] mx-auto opacity-30" />
            <p className="text-xl italic text-[#5A5A40]/70">GRAND-CAFÉ</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl text-[#1a1a1a] font-medium">
              Kies uw taal / Wählen Sie Ihre Sprache / Choose your language
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {(['nl', 'de', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-[#5A5A40]/10 hover:border-[#5A5A40] transition-all group"
                >
                  <span className="text-4xl mr-4">{FLAGS[l]}</span>
                  <span className="text-xl font-medium text-[#1a1a1a]">{LANG_NAMES[l]}</span>
                  <ChevronRight className="text-[#5A5A40] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-12 text-sm text-[#5A5A40]/60 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={14} /> Mgr. Nolensplein 44, Venlo
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone size={14} /> +31(0)77-3516858
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentStrings = {
    welcome: UI_STRINGS.welcome[lang],
    allergy: UI_STRINGS.allergyWarning[lang],
    opening: UI_STRINGS.openingHours[lang],
    back: UI_STRINGS.back[lang],
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-serif selection:bg-[#5A5A40]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f2ed]/80 backdrop-blur-md border-bottom border-[#5A5A40]/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => (activeSection ? setActiveSection(null) : setLang(null))}
            className="p-2 hover:bg-[#5A5A40]/5 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-[#5A5A40]">DECKERS</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Grand-Café</p>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-[#5A5A40]/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 pb-32">
        <AnimatePresence mode="wait">
          {!activeSection ? (
            <motion.div
              key="sections"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-light italic">{currentStrings.welcome}</h2>
                <p className="text-[#5A5A40]/70 max-w-md mx-auto">{currentStrings.allergy}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MENU_DATA.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="group relative h-48 overflow-hidden rounded-3xl bg-white shadow-sm border border-[#5A5A40]/5 hover:shadow-md transition-all text-left p-8"
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <h3 className="text-2xl font-medium group-hover:text-[#5A5A40] transition-colors">
                        {section.title[lang]}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#5A5A40]/60">
                        <span>{section.items.length} items</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Utensils size={120} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Info Card */}
              <div className="mt-12 p-8 bg-[#5A5A40] text-white rounded-3xl space-y-6">
                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <h3 className="text-xl font-medium">{currentStrings.opening}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
                  <div>
                    <p className="font-semibold">Zondag - Vrijdag</p>
                    <p>08:00 - 17:30</p>
                  </div>
                  <div>
                    <p className="font-semibold">Zaterdag</p>
                    <p>07:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="items"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex items-center justify-between border-b border-[#5A5A40]/10 pb-6">
                <h2 className="text-3xl font-medium">
                  {MENU_DATA.sections.find((s) => s.id === activeSection)?.title[lang]}
                </h2>
                <button
                  onClick={() => setActiveSection(null)}
                  className="text-sm uppercase tracking-widest text-[#5A5A40] font-semibold"
                >
                  {currentStrings.back}
                </button>
              </div>

              <div className="space-y-12">
                {MENU_DATA.sections
                  .find((s) => s.id === activeSection)
                  ?.items.map((item) => (
                    <div key={item.id} className="group">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="text-xl font-medium group-hover:text-[#5A5A40] transition-colors">
                          {item.name[lang]}
                        </h4>
                        <span className="text-lg font-mono font-medium text-[#5A5A40]">
                          €{' '}
                          {typeof item.price === 'number'
                            ? item.price.toFixed(2).replace('.', ',')
                            : item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-[#5A5A40]/70 leading-relaxed max-w-2xl">
                          {item.description[lang]}
                        </p>
                      )}
                      <div className="mt-6 h-px w-full bg-[#5A5A40]/5" />
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Language Switcher Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-8 z-[70] shadow-2xl"
            >
              <div className="max-w-md mx-auto space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium flex items-center gap-2">
                    <Languages size={20} />
                    {UI_STRINGS.selectLanguage[lang]}
                  </h3>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2">
                    <X size={24} />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {(['nl', 'de', 'en'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l)
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                        lang === l
                          ? 'bg-[#5A5A40] text-white'
                          : 'bg-[#f5f2ed] text-[#1a1a1a] hover:bg-[#5A5A40]/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{FLAGS[l]}</span>
                        <span className="font-medium">{LANG_NAMES[l]}</span>
                      </div>
                      {lang === l && <div className="w-2 h-2 bg-white rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-[#5A5A40]/10 py-12 px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-6 text-[#5A5A40]/60">
          <a href="tel:+31773516858" className="hover:text-[#5A5A40] transition-colors">
            <Phone size={20} />
          </a>
          <a
            href="https://www.grandcafedeckers.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5A5A40] transition-colors"
          >
            <Info size={20} />
          </a>
          <a
            href="https://maps.google.com/?q=Mgr. Nolensplein 44, Venlo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5A5A40] transition-colors"
          >
            <MapPin size={20} />
          </a>
        </div>
        <p className="text-xs text-[#5A5A40]/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Deckers Grand-Café
        </p>
      </footer>
    </div>
  )
}
