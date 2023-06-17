import React from "react";
import Layout from "../components/Layout";

//Font awesone
import { faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Home.module.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#020302" }}>
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
                  src="assets/blue2.jpg"
                  alt="BluBerry"
                  style={{ maxWidth: "500px" , width: "100%"}}
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
                  Contacto: <a href="mailto:veinti212@gmail.com">veinti212@gmail.com</a>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/52DxMan6r04?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                    href="https://open.spotify.com/artist/03ZgqoFEHCUewJJeFOAtn1"
                    target="_blank"
                  >
                    BlueBerry
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-5 col-12  text-center">
              <h3>Expertise</h3>
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
