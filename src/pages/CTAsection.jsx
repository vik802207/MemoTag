import { motion } from 'framer-motion';
import './CTA.css';
import { useState } from 'react';

export default function CTAsection() {
  const [form, setForm] = useState({ email: '' });

  const handleChange = (e) => {
    setForm({ email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyjRCauXgmzBMfwg5ICEuLMsRFXMwCgqZ9duW_3yGQRKc2KegDWn6TXiMbv382yVT2-/exec", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Submitted successfully!");
      setForm({ email: '' });
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-content">
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ready to Experience MemoTag?
        </motion.h2>

        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join our waitlist and be the first to try our early-access experience.
        </motion.p>

        <motion.form 
        className="cta-form"
        onSubmit={handleSubmit}  // ✅ Attach here
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="cta-input" 
          required 
          onChange={handleChange} 
          value={form.email} // ✅ Controlled input
        />
        <button type="submit" className="cta-button">
          Notify Me
        </button>
      </motion.form>
      
      </div>
    </section>
  );
}
