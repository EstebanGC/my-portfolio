export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Esteban</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Developer</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Desarrollador enfocado al backend con manejo de Java, Node, Python.
            <br /> Gracias por visitar, te mostraré un poco de mi trabajo.
          </p>
        </div>
        <button className="btn btn-primary">Contact me</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
    )
}