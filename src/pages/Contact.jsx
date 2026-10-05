import { useState } from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    message: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // Translates your async form event listener into React
  async function handleSubmit(event) {
    event.preventDefault(); // Equivalent to e.preventDefault()
    setIsSubmitting(true);   // Disables button and changes text to "Sending..."
    setSubmitMessage("");

    // Matches your snippet's native FormData approach perfectly
    const nativeFormData = new FormData();
    nativeFormData.append("access_key", "3bd2c059-6fdc-44a5-a619-44048b58980f");
    nativeFormData.append("name", formData.name);
    nativeFormData.append("email", formData.email);
    nativeFormData.append("message", formData.message);
    nativeFormData.append("subject", `New Portfolio Message from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: nativeFormData // Disguises request from strict browser trackers
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage("Success! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Resets form values
        
        // Wait 2 seconds so they read the success message, then redirect home
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setSubmitMessage("❌ Error: " + (data.message || "Failed to send."));
      }
    } catch (error) {
      setSubmitMessage("❌ Something went wrong. Please check your tracking extensions and try again.");
    } finally {
      setIsSubmitting(false); // Restores button text and reactivates it
    }
  }

  return (
    <section className="about-container" style={{ maxWidth: '900px', padding: '60px 20px' }}>
      
      {/* Page Heading */}
      <div style={{ marginBottom: '40px' }}>
        <h1 className="name-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact Me</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
          Let's connect. Feel free to reach out via form submission or direct contact links.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        
        {/* Left Side: Contact Information Panel */}
        <div className="skill-card" style={{ flex: '1 1 250px', padding: '30px', margin: 0 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '20px' }}>
            Contact Info
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <strong>Email:</strong> <br />
              <a href="mailto:suneshshrestha308@gmail.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                suneshshrestha308@gmail.com
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <strong>Phone:</strong> <br />
              <span style={{ color: 'var(--text-main)' }}>416-823-5690</span>
            </p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              <strong>Location:</strong> <br />
              <span style={{ color: 'var(--text-main)' }}>Moncton, NB</span>
            </p>
          </div>
        </div>

        {/* Right Side: Form Block */}
        <form onSubmit={handleSubmit} style={{ flex: '2 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
            Full Name
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
            Email Address
            <input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', fontWeight: '600' }}>
            Message
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', resize: 'vertical' }}
            />
          </label>

          {/* Inline alert box replacing messy window browser popups */}
          {submitMessage && (
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)', marginTop: '5px' }}>
              {submitMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="resume-btn" 
            disabled={isSubmitting}
            style={{ 
              marginTop: '10px', 
              alignSelf: 'flex-start', 
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              border: 'none'
            }}
          >
            {/* Toggles text reactively based on network states */}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
