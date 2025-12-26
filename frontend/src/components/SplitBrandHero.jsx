import "./SplitBrandHero.css";

export default function SplitBrandHero() {
  return (
    <section className="splitbrand">
      {/* Left: vertical gold brand */}
      <aside className="sb-left">
        <div className="sb-vertical">
          <span className="sb-title">Solomon Barbershop</span>
        </div>
      </aside>

      {/* Right: Asmara Beauty Lab */}
      <div className="sb-right">
        <h1 className="sb-right-title">Asmara Beauty Lab</h1>
        <p className="sb-right-sub">
          Fades • Beard • Braids • Beauty Care • Styling
        </p>
        <div className="sb-cta">
          <a className="sb-btn" href="/services">View Services</a>
          <a className="sb-btn ghost" href="/gallery">Gallery</a>
        </div>
      </div>
    </section>
  );
}
