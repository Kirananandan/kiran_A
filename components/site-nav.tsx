"use client";

import Link from "next/link";
import { useState } from "react";

type SiteNavProps = {
  backToWork?: boolean;
};

export function SiteNav({ backToWork = false }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`site-nav ${menuOpen ? "menu-is-open" : ""}`}>
      <Link className="brand" href="/" aria-label="Kiran A home" onClick={closeMenu}>
        K<span>.</span>A
      </Link>
      <div className="nav-links">
        {backToWork ? (
          <Link href="/#work">← Back to work</Link>
        ) : (
          <>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </>
        )}
      </div>
      <a className="availability" href="mailto:kirananandan24@gmail.com">
        <span className="pulse" /> Available for work
      </a>
      {!backToWork && (
        <a className="nav-hire" href="mailto:kirananandan24@gmail.com?subject=Hiring%20inquiry%20for%20Kiran%20A">
          Hire me <span>↗</span>
        </a>
      )}
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <div className="mobile-menu" aria-hidden={!menuOpen}>
        {backToWork ? (
          <Link href="/#work" onClick={closeMenu}>← Back to work</Link>
        ) : (
          <>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </>
        )}
        <a href="mailto:kirananandan24@gmail.com" onClick={closeMenu}>
          kirananandan24@gmail.com ↗
        </a>
        {!backToWork && (
          <a href="/Kiran_A_Resume_12-09-2026.pdf" download onClick={closeMenu}>
            Download resume ↓
          </a>
        )}
      </div>
    </nav>
  );
}
