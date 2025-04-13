import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ darkMode }) {
  return (
    <section className={`hero ${darkMode ? 'dark' : ''}`}>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            AI for <span>Dementia Care</span>
          </h1>
          <p>
            Empowering caregivers with intelligent insights to improve lives through real-time cognitive and physical tracking.
          </p>
          <a href="/cta" className="cta-button">Join Waitlist</a>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src="/assets/undraw_messages_okui.svg" alt="MemoTag AI Illustration" />
        </motion.div>
      </div>

      {/* Optional Background Blur */}
      <motion.div
        className="blur-circle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      ></motion.div>
    </section>
  );
}
