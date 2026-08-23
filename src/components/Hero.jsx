export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hello, I'm <span>Saurabh Kumar</span></h1>
          <h2>Transforming Ideas into Interactive Reality</h2>
          <p>
            I'm a passionate Full-Stack Developer creating intuitive and robust
            web applications. Let's build something amazing together.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-outline">
            Contact
            </a>
          </div>

        </div>

        <div className="hero-image">
          <div className="image-ring">
            <img src="profile.jpeg" alt="Saurabh" />
          </div>
        </div>

      </div>
    </section>
  );
}
