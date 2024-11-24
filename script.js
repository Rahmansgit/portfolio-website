const sendMail = () => {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value

  }

  emailjs.send("service_blrtoia","template_o4ajtbp",parms).then(alert("Email has been sent succesfully!!!"))
}