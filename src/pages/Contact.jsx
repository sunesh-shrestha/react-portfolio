import { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // Holds "success" or "error"

  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    message: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevents browser redirection crash
    setIsSubmitting(true);
    setSubmitStatus("");

    // Format parameters into standard form URL structures to bypass extension tracking blocks
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("access_key", "d84a7aeb-1892-449d-8691-d2bca378ec15");
    urlEncodedData.append("name", formData.name);
    urlEncodedData.append("email", formData.email);
    urlEncodedData.append("message", formData.message);
    urlEncodedData.append("subject", `New Portfolio Message from ${formData.name}`);

    try {
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: urlEncodedData.toString()
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("Web3Forms error details:", result);
      }
    } catch (error) {
      console.error("Submission crash caught:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
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

      {/* Side-by-Side Flex Layout */}
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

        {/* Right Side: Contact Form Input Wrapper */}
        <div style={{ flex: '2 1 450px' }}>
          {submitStatus === "success" ? (
            <div style={{
              backgroundColor: 'var(--bg-tag)',
              borderLeft: '4px solid #22c55e',
              padding: '24px',
              borderRadius: 'var(--border-radius)',
              color: 'var(--text-main)',
              fontSize: '1.1rem'
            }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#16a34a', fontWeight: '700' }}>Message Received!</h3>
              Thank you for reaching out, Sunesh. Your message has been sent directly to my inbox. I will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Row 1: Full Name field */}
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

              {/* Row 2: Email field */}
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

              {/* Row 3: Message field */}
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

              {submitStatus === "error" && (
                <div style={{ color: '#ef4444', fontSize: '0.95rem', fontWeight: '600' }}>
                  ❌ An unexpected error occurred. Please check your network context or try again.
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;
