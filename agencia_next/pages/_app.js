import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.css';
import style from '../public/css/estilo.css';

export default function App({ Component, pageProps }) {
  return (
    <>


      <Navbar />
      <main className="corpoPagina">
        <img id="fundo" src="/img/fundo.jpg" alt="imagem de fundo" />
        <Component {...pageProps} />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
      </main>
    </>
  )
}
