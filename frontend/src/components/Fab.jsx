import "./Fab.css";

export default function Fab() {
  const phone = "+1-647-745-4586";      // <- change to your real number
  const waMsg = encodeURIComponent("Hi! I'd like to book a haircut.");

  return (
    <div className="fab">
      <a className="fab-btn wa" href={`https://wa.me/${phone.replace(/\D/g, "")}?text=${waMsg}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        WA
      </a>
      <a className="fab-btn call" href={`tel:${phone}`} aria-label="Call Now">
        Call
      </a>
    </div>
  );
}
