'use client';

import dynamic from 'next/dynamic';
import StaggeredMenu from '@/components/StaggeredMenu';

// Lanyard uses WebGL / physics – must be client-only with no SSR
const Lanyard = dynamic(() => import('@/components/Lanyard'), { ssr: false });

const NAV_ITEMS = [
  { label: 'About',    ariaLabel: 'Go to About section',    link: '#about'    },
  { label: 'Work',     ariaLabel: 'Go to Work section',     link: '#work'     },
  { label: 'Skills',   ariaLabel: 'Go to Skills section',   link: '#skills'   },
  { label: 'Contact',  ariaLabel: 'Go to Contact section',  link: '#contact'  },
];

const SOCIAL_ITEMS = [
  { label: 'GitHub',   link: 'https://github.com'   },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter',  link: 'https://twitter.com'  },
];

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-zinc-950">

      {/* ── 3-D Lanyard fills the entire viewport ── */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* ── Subtle radial glow so the card pops ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(82,39,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Hero text, centred, above the lanyard ── */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 gap-2">
        <p className="text-zinc-500 text-sm tracking-widest uppercase">
          Drag the card
        </p>
      </div>

      {/* ── StaggeredMenu fixed in the top-right corner, slides in from the right ── */}
      <StaggeredMenu
        isFixed
        position="right"
        items={NAV_ITEMS}
        socialItems={SOCIAL_ITEMS}
        displaySocials
        displayItemNumbering
        colors={['#B19EEF', '#5227FF']}
        accentColor="#5227FF"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen
        closeOnClickAway
      />
    </main>
  );
}
