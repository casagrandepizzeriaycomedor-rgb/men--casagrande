import { useState, useRef, useEffect } from 'react';
import ReservationModal from './ReservationModal';
import { useTier } from '../context/TierContext';

const SHARE_TEXT = 'Mirá el menú de Casa Grande Pizzería y Comedor';

function getShareLinks(url: string) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(SHARE_TEXT);
  return [
    { name: 'WhatsApp', href: `https://wa.me/?text=${text}%20${encoded}`, color: 'bg-[#25D366]' },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, color: 'bg-[#1877F2]' },
    { name: 'Telegram', href: `https://t.me/share/url?url=${encoded}&text=${text}`, color: 'bg-[#26A5E4]' },
    { name: 'X', href: `https://x.com/intent/tweet?url=${encoded}&text=${text}`, color: 'bg-black dark:bg-white dark:text-black' },
  ];
}

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  const { tierConfig } = useTier();
  const [spinning, setSpinning] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSpinning(true);
    onToggleTheme();
    setTimeout(() => setSpinning(false), 400);
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setShowShareMenu(false); }, 1500);
  };

  // Cerrar menú al tocar fuera
  useEffect(() => {
    if (!showShareMenu) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [showShareMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-cream/90 dark:bg-black/90 backdrop-blur-md border-b border-brand-cream-dark dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="relative group">
            <button
              onClick={() => tierConfig.showReservation && setShowReservation(true)}
              disabled={!tierConfig.showReservation}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                tierConfig.showReservation
                  ? 'bg-brand-red text-white hover:bg-brand-red/90 active:scale-95'
                  : 'bg-gray-300 dark:bg-neutral-700 text-gray-500 dark:text-neutral-500 cursor-not-allowed'
              }`}
            >
              Reservaciones
            </button>
            {!tierConfig.showReservation && (
              <span className="absolute -bottom-5 left-0 text-[10px] text-gray-400 dark:text-neutral-500 whitespace-nowrap">
                Plan Profesional
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative" ref={shareRef}>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-full bg-brand-cream-dark dark:bg-neutral-900 hover:bg-brand-red/10 dark:hover:bg-neutral-800 hover:scale-110 active:scale-95 transition-all"
                aria-label="Compartir menú"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-dark dark:text-brand-cream">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </button>
              {showShareMenu && (
                <div className="absolute right-0 top-12 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700 py-2 px-1 min-w-[160px] z-50 animate-fade-in">
                  {getShareLinks(window.location.href).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors text-sm text-brand-dark dark:text-brand-cream"
                    >
                      <span className={`w-7 h-7 rounded-full ${link.color} text-white text-xs font-bold flex items-center justify-center`}>
                        {link.name[0]}
                      </span>
                      {link.name}
                    </a>
                  ))}
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors text-sm text-brand-dark dark:text-brand-cream w-full"
                  >
                    <span className="w-7 h-7 rounded-full bg-gray-500 text-white text-xs font-bold flex items-center justify-center">
                      🔗
                    </span>
                    {copied ? 'Copiado!' : 'Copiar enlace'}
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={handleClick}
              className="p-2 rounded-full bg-brand-cream-dark dark:bg-neutral-900 hover:bg-brand-red/10 dark:hover:bg-neutral-800 hover:scale-110 active:scale-95 transition-all"
              aria-label="Toggle theme"
            >
              <span className={`text-xl inline-block ${spinning ? 'animate-spin-slow' : 'animate-swing'}`}>
                {isDark ? '\u2600\uFE0F' : '\uD83C\uDF19'}
              </span>
            </button>
          </div>
        </div>
      </header>
      <ReservationModal isOpen={showReservation} onClose={() => setShowReservation(false)} />
    </>
  );
}
