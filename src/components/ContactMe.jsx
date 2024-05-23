import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

const ContactMe = () => {
  return (
    <div id="contact">
      <p>Get In Touch</p>
      <h1>Contact Me</h1>
      <div>
        <div>
          <img src={email} className="w-10"/>
          <p><a href="mailto:exampleemail@gmail.com">Example@gmai.com</a></p>
        </div>
        <div>
          <img src={linkedin} className="w-10"/>
          <p><a  href="https://www.linkedin.com/in/glendy-tuyuc-864954275/" >LinkedIn</a></p>
        </div>
      </div>
    </div>
  )
}

export default ContactMe