import "./MapSection.css";

export default function MapSection({
  title = "Find Us",
  address = "1351 Danforth Ave , Toronto, ON",
  mapQuery = "1351 Danforth Ave, Toronto, ON",
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  return (
    <section className="map-wrap" id="location">
      <div className="map-head">
        <h2>{title}</h2>
        <p className="muted">{address}</p>
      </div>
      <div className="map-frame">
        <iframe
          src={src}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        />
      </div>
    </section>
  );
}
