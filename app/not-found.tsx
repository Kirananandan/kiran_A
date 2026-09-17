import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-wrap">
      <p className="eyebrow">404 / Page not found</p>
      <h1>That page went
        <br />
        <em>off-grid</em><span className="accent-dot">.</span>
      </h1>
      <p className="not-found-copy">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link className="email-link" href="/">Return home <span>↗</span></Link>
    </main>
  );
}
