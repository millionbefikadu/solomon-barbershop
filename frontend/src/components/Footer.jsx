import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fgrid">
        <div>
          <h4>Hours</h4>
          <p>Mon–Fri: 10–7 • Sat: 10–6 • Sun: 1pm-11pm</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="tel:+1-647-745-4586">+1 (647) 745-4586</a><br/>1351 Danforth Ave ,Toronto, ON</p>
        </div>
        <div>
          <h4>Social</h4>
          <p><a href="https://www.instagram.com/asmarinabeautylab" target="_blank" rel="noreferrer">Instagram</a> · <a href="https://www.tiktok.com/@asmarinabeautylab" target="_blank" rel="noreferrer">TikTok</a></p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} Solomon Barbershop</div>
    </footer>
  );
}
