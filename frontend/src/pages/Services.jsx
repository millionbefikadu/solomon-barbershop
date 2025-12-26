import "./Services.css";
import banner from "../assets/images/haircut2.png"; // make sure this file exists

export default function Services() {
const items = [
  { name: "Haircut", desc: "Professional haircut and styling.", price: 30 },
  { name: "Haircut + Beard", desc: "Haircut combined with beard service.", price: 40 },
  { name: "Line-Up + Beard", desc: "Clean line-up with beard trimming.", price: 20 },
  { name: "Kids Cut", desc: "Gentle and patient haircut for kids.", price: 25 },
];


  return (
    <div className="services">
      {/* Banner */}
      <section
        className="svc-hero"
        style={{ backgroundImage: `url(${banner})` }}
        role="img"
        aria-label="Barber tools and haircut session"
      >
        <div className="svc-overlay" />
        <div className="svc-hero-content">
          <h1>Services & Pricing</h1>
          <p>Quality cuts, clean fades, and sharp beards—priced fairly.</p>
          <a className="btn primary" href="tel:+1-555-123-4567">Book By Phone</a>
        </div>
      </section>

      {/* Grid */}
      <section className="svc-wrap">
        <div className="svc-grid">
          {items.map((s) => (
            <div className="svc-card" key={s.name}>
              <div className="svc-head">
                <h3>{s.name}</h3>
                <span className="svc-price">${s.price}</span>
              </div>
              <p className="svc-desc">{s.desc}</p>
              
              <a className="btn ghost" href="tel:+1-647-745-4586">Book</a>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="svc-notes">
          <p>Walk-ins welcome. Appointments recommended on weekends. Taxes may apply.</p>
        </div>
      </section>
    </div>
  );
}
