import MusicPlayer from "./MusicPlayer";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <img src="/logo.png" alt="Sanket & Pranjali logo" className="brand-logo" />
        <span>
          Sanket <i>&</i> Pranjali
        </span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#story">Our Story</a>
        <a href="#events">Events</a>
        <a href="#venue">Venue</a>
        {/* <a href="#rsvp">RSVP</a> */}
      </nav>

      <MusicPlayer />
    </header>
  );
}