import React from "react";
import Layout from "../components/Layout";

import "../styles/Home.module.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Layout>
        <div className="container">
          <div className="text-center logo">
            <a href="/">
              <img
                className="img-fluid"
                src="assets/ojo.gif"
                alt="2212"
                style={{ maxWidth: "350px" }}
              />
            </a>
          </div>
          <div className="my-5 text-center">
            <h1>2212</h1>
            <p>
              Técnicos de sonido, intérpretes, compositores y productores
              musicales con amplia experiencia. Labores de mezcla y mastering en
              medios de comunicación. Creación de música para artistas y marcas.
              Múltiples técnicas de composición y adaptación a las necesidades
              del cliente.
            </p>
          </div>

          <div className="my-5 text-center">
            <video autoPlay loop style={{ width: "300px", height: "300px" }}>
              <source src="assets/2212.mp4" />
            </video>
          </div>

          <div className="my-5 text-center">
            <h3>Musicalización para marcas como: </h3>
            <ul>
              <li>
                <a
                  href="https://instagram.com/stax_shop?igshid=1cv04lugh9p9"
                  target="_blank"
                >
                  Stax
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/biocitrico?igshid=2i3xdu6q7v29"
                  target="_blank"
                >
                  Bio citrico
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/stylizedewa?igshid=1jqo9ssn70y4s"
                  target="_blank"
                >
                  Salón & Barbería Ewa
                </a>
              </li>
            </ul>
          </div>

          <div className="my-5 text-center">
            <h3>
              Producción, grabación, mezcla y masterización para artistas como:{" "}
            </h3>
            <ul>
              <li>
                <a
                  href="https://open.spotify.com/artist/56F6Jo6GQnAl9yyCDzZSmu?si=qsfppFuySlinAXgnaoRIfw&dl_branch=1"
                  target="_blank"
                >
                  ElHitchMen
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/0WJStgo25ldn11lGGij2fT?si=cWLo4AeXRr-_wJSiHGmSzA"
                  target="_blank"
                >
                  Sko
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/5EWqDDUBi6aYQjKjRpgYLO?si=h9EiLTILRrKGH1g8d4WgTg&dl_branch=1"
                  target="_blank"
                >
                  Insømnio
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/1kXZDR8AI9g5kBkzYp5AC6?si=OMJ9IK5MTy2jm5Eqzz_7Tg&dl_branch=1"
                  target="_blank"
                >
                  2212
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/2xufyVBQpUAhXFPqHfJKcE?si=rcGEdU55Tiir2yZOWwKmJA&dl_branch=1"
                  target="_blank"
                >
                  Bactee Impi
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/6R6cA5kok23t2gPsl0IhjM?si=vygmAyvzQCyf79m6rA-oEQ&dl_branch=1"
                  target="_blank"
                >
                  Chainthug
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/4Oh2HCD3h9xlrW6zNclmub?si=t_2tlhvfQXq_UHEi-HVCDA&dl_branch=1"
                  target="_blank"
                >
                  Big Magic
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/1OwDCgLki8U9dZvNypazd0?si=Dc4XYt3HQaKOzLyWs2J-UQ&dl_branch=1"
                  target="_blank"
                >
                  Samara la Mala
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/track/2gmn2s1KdNReeWiYR4Qw02?si=2KfPOoQXQ4qxtbzsJ4ykDg&dl_branch=1"
                  target="_blank"
                >
                  Los de la Karga
                </a>
              </li>
            </ul>
          </div>
          <div className="my-5 text-center">
            <h3>Habilidades Profesionales</h3>
            <ul>
              <li>Adaptación a las necesidades del cliente.</li>
              <li>Conocimiento de múltiples técnicas compositivas.</li>
              <li>
                Especializado en composición de música para espectáculos en
                vivo.
              </li>
              <li>Dominio de software de edición de sonido (Logic Pro).</li>
              <li>
                Conocimientos avanzados de composición con instrumentos
                digitales.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
