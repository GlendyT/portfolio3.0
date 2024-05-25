import email from "../assets/email.png"
import linkedin from "../assets/linkedin.png"

const ContactMe = () => {
  return (
    <div className="flex justify-center flex-col h-96 w-full py-8 " id="contact">
      <div className="flex flex-col m-auto text-center"> 
      <p className="text-2xl font-bold" >Get In Touch</p>
      <h1 className="text-5xl font-extrabold">Contact Me</h1>
      <div className="flex justify-center rounded-md border-2 border-black bg-slate-100 mx-2 my-4">
        <div className="flex items-center justify-center gap-2 m-8">
          <img src={email} className="w-10"/>
          <p className="text-xl"><a href="mailto:exampleemail@gmail.com" >Example@gmail.com</a></p>
        </div>
        <div className="flex items-center justify-center gap-2 m-8">
          <img src={linkedin} className="w-10"/>
          <p className="text-xl "><a  href="https://www.linkedin.com/in/glendy-tuyuc-864954275/" >LinkedIn</a></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactMe