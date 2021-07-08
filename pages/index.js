import React from "react";
import Layout from "../components/Layout";

//Font awesone
import { faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Home.module.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-12  text-center logo">
              <a href="/">
                <img
                  className="img-fluid"
                  src="assets/ojo.gif"
                  alt="2212"
                  style={{ maxWidth: "350px" }}
                />
              </a>
            </div>
            <div className="col-md-6">
              <div className="my-5">
                <img
                  className="img-fluid"
                  src="assets/insomnio.jpg"
                  alt="Insomnio"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-5 text-center">
                <img
                  className="img-fluid"
                  src="assets/ojo.png"
                  alt="2212"
                  style={{ maxWidth: "250px" }}
                />
                <p>
                  Técnicos de sonido, intérpretes, compositores y productores
                  musicales con amplia experiencia. Labores de mezcla y
                  mastering en medios de comunicación. Creación de música para
                  artistas y marcas. Múltiples técnicas de composición y
                  adaptación a las necesidades del cliente.
                </p>
              </div>
              <div className="my-5 text-center">
                <iframe
                  src="https://open.spotify.com/embed/artist/1kXZDR8AI9g5kBkzYp5AC6"
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>

            <div className="my-5 col-12 text-center">
              <iframe
                width="300"
                height="300"
                src="https://www.youtube.com/embed/Rd-O5XE6r2o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="my-5 col-12 text-center">
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

            <div className="my-5 col-12 text-center">
              <h3>
                Producción, grabación, mezcla y masterización para artistas
                como:{" "}
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
            <div className="my-5 col-12  text-center">
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
            <div className="my-5 col-12 text-center">
              <a href="assets/2212-rider.pdf" target="_blank">
                Rider 2212
              </a>
            </div>
            <div className="my-5 col-12  text-center">
              <a
                href="https://open.spotify.com/artist/1kXZDR8AI9g5kBkzYp5AC6?si=fr_mwzVMRemFtZt-UTAnNw&dl_branch=1"
                target="_blanl"
              >
                <FontAwesomeIcon className="mx-5" size="2x" icon={faSpotify} />
              </a>

              <a
                href="https://www.instagram.com/veintidos_doce/?igshid=mk3mtqic2d2u"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="mx-5"
                  size="2x"
                  icon={faInstagram}
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
