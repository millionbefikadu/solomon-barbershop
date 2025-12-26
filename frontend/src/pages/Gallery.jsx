import "./Gallery.css";
import SplitBrandHero from "../components/SplitBrandHero";

import img1 from "../assets/images/haircut1.png";
import img2 from "../assets/images/haircut2.png";
import img3 from "../assets/images/haircut3.png";
import img4 from "../assets/images/azamrina1.jpeg";
import img5 from "../assets/images/azamrina2.jpeg";
import img6 from "../assets/images/azamrina3.jpeg";
import img7 from "../assets/images/azamrina4.jpeg";
import img8 from "../assets/images/azamrina5.jpeg";
import img9 from "../assets/images/azamrina6.jpeg";
import img10 from "../assets/images/azamrina7.jpeg";
import img11 from "../assets/images/azamrina8.jpeg";
import img12 from "../assets/images/haircut4.jpeg";
import img13 from "../assets/images/haircut5.jpeg";
import img14 from "../assets/images/haircut7.jpeg";
import img15 from "../assets/images/haircut8.jpeg";
import img16 from "../assets/images/haircut9.jpeg";
import img17 from "../assets/images/haircut10.jpeg";
const images = [
  { src: img1, alt: "Fresh fade 1" },
  { src: img2, alt: "Fresh fade 2" },
  { src: img3, alt: "Fresh fade 3" },
  { src: img4, alt: "Azamrina style" },
  { src: img5, alt: "Azamrina style" },
  { src: img6, alt: "Azamrina style" },
  { src: img7, alt: "Fresh fade 1" },
  { src: img8, alt: "Fresh fade 2" },
  { src: img9, alt: "Fresh fade 3" },
  { src: img10, alt: "Azamrina style" },
  { src: img11, alt: "Azamrina style" },
  { src: img12, alt: "Azamrina style" },
  { src: img13, alt: "Azamrina style" },
   { src: img14, alt: "Fresh fade 1" },
  { src: img15, alt: "Fresh fade 2" },
  { src: img16, alt: "Fresh fade 3" },
  { src: img17, alt: "fresh fade 4" },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      {/* --- This banner appears ONLY on Gallery --- */}
      <SplitBrandHero />

      <section className="gal-header">
        <h1>Gallery</h1>
        <p className="muted">A few cuts we’re proud of—more on Instagram.</p>
      </section>

      <section className="gal-wrap">
        <div className="gal-grid">
          {images.map((img, i) => (
            <figure className="gal-item" key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
