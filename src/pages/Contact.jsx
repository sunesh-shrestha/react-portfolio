import { useState } from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate(); // lets us redirect to another page in code

  // One state object holds every form field
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", contactNumber: "", email: "", message: "",
  });

  // Runs on every keystroke: updates only the field that changed
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // Runs when the form is submitted
  function handleSubmit(event) {
    event.preventDefault();            // stop the browser's default page reload
    console.log("Form captured:", formData); // captured data (visible in browser console)
    navigate("/");                     // redirect back to the Home page
  }

  return (
    <section>
      <h1>Contact Me</h1>

      {/* Contact information panel */}
      <div className="contact-panel">
        <p><strong>Email:</strong> suneshshrestha308@gmail.com</p>
        <p><strong>Phone:</strong> 416-823-5690</p>
        <p><strong>Location:</strong> Moncton, NB</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>First Name
          <input name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>Last Name
          <input name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>Contact Number
          <input name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} required />
        </label>
        <label>Email Address
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>Message
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;