import React from 'react'

export default function Contato() {
  return (
<>
  {/*seção de contatos dentro da pagina*/}
  <section id="bodyContato" className="container text-center opacity">
    <h5>Aproveite e siga nossas redes sociais:</h5>
    <table className="table">
      <thead className="row"></thead>
      <tbody>
        <tr className="row justify-content-center">
          <td className="col col-sm-6 d-flex align-items-center justify-content-end ">
            <img
              src="img/logofacebook.png"
              alt="logo facebook"
              width="50px"
            />
            <a target="_blank" href="http://facebook.com">
              /Viajou.com
            </a>
          </td>
          <td className="col col-sm-6 d-flex align-items-center justify-content-start">
            <img
              src="img/logoInstagran.png"
              alt="logo instagran"
              width="50px"
            />
            <a target="_blank" href="http://instagram.com">
              @Viajou.com
            </a>
          </td>
        </tr>
        <tr className="row justify-content-center">
          <th colSpan={2} rowSpan={2}>
            <h5>Entre em contato através do WhatsApp</h5>
          </th>
        </tr>
        <tr className="row justify-content-center">
          <td className="col col-12">
            <img
              src="img/logoWhatsapp.png"
              alt="logo WhatsApp"
              width="50px"
            />
            <a target="_blank" href="http://wa.me/5561992090318">
              (61) 99209-0318
            </a>
          </td>
        </tr>
        <tr className="row justify-content-center">
          <th className="col col-12">
            <h5>E-mail:</h5>
          </th>
          <td className="col col-12">
            <img src="img/logoEmail.png" alt="e-mail" width="50px" />
            <a target="_blank" href="mailto:contato@viajou.com">
              <span id="spanContato">contato@viajou.com</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</>
  )
}
