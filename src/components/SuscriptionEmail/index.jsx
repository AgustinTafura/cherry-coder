import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const SuscriptionEmail = () => {

  const [mailSent, setMailSent] = useState(0)

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const enviarContactMail = (e) => {
    var buttomSubmit = e.nativeEvent.submitter
    var inputEmail = e.nativeEvent.srcElement[0]
    var radioUser = e.nativeEvent.srcElement[2].value ? e.nativeEvent.srcElement[2].value : e.nativeEvent.srcElement[3].value

    e.preventDefault()
    e.stopPropagation()
    if (buttomSubmit.classList.contains('disabled')) {
      toast.error("Formato Email Inválido")
    } else {
      console.log(inputEmail.value)

      const emailData = {
        from_email: inputEmail.value,
        to_email: 'solbruzzone@hotmail.com',
        user_type: radioUser
      }

      if (mailSent < 3) {
        emailjs.send(
          'service_wpi3el2',
          'template_94btwpw',
          emailData,
          'user_d5kbEdnEX8hB4qeX7oMCf',
        ).then((result) => {
          toast("¡Gracias! Registramos tu Email")
          setMailSent(mailSent + 1)
        }).catch((err) => {
          console.log(err)
          toast.error("Error de Registro, inténtalo nuevamente")
        })
      }


    }





  }
  window.addEventListener('load', () => {
    const emailInput = document.getElementById('contact-email')
    const buttonSubmit = document.getElementById('submit-button')

    emailInput.addEventListener('change', () => {
      validateEmail(emailInput.value) ? buttonSubmit.classList.remove('disabled') : buttonSubmit.classList.add('disabled')
    })


  })

  return (
    <div className='container suscription-section'>
      <div className='row'>
        <div className='suscription-body col-12 col-sm-10 col-md-8 col-lg-6'>
          <h5>SUSCRIBETE PARA RECIBIR NOVEDADES</h5>
          <p>Enterate de nuestras novedades y descuentos</p>

          <form action="" onSubmit={enviarContactMail} className='row'>
            <input id='contact-email' type="email" className='col-6 ' placeholder='Ingresa tu mail' required />
            <button id='submit-button' className='btn btn-dark col-4 disabled' action='submit' >Suscribirse</button>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioUser" value='MAYORISTA' id="radioUser1" checked />
              <label class="form-check-label" for="radioUser1">
                Mayorista
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioUser" value='CLIENTE' id="radioUser2" />
              <label class="form-check-label" for="radioUser2">
                Cliente
              </label>
            </div>

          </form>
        </div>

      </div>
      <ToastContainer />
    </div>
  )

}

export default SuscriptionEmail
