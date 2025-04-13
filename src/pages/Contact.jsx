import { motion } from 'framer-motion';
import react from 'react';
export default function Contact() {
    return (
      <section className="contact">
        <motion.h2 className="contact-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          Contact Us
        </motion.h2>
        <motion.p className="contact-description" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} viewport={{ once: true }}>
          Have questions? Reach out to us and we’ll be happy to help.
        </motion.p>
      </section>
    );
  }
  