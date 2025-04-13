import { motion } from 'framer-motion';
import './Solution.css';
import { useEffect, useState } from 'react';

export default function Solution() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled when the component mounts
    const checkDarkMode = document.body.classList.contains('dark-mode');
    setIsDarkMode(checkDarkMode);

    // Listen for any future dark mode toggles
    const onChangeDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };
    window.addEventListener('darkmode', onChangeDarkMode);

    return () => {
      window.removeEventListener('darkmode', onChangeDarkMode);
    };
  }, []);

  return (
    <section className={`solution ${isDarkMode ? 'dark' : 'light'}`} id="solution">
      <div className="solution-content">
        <motion.h2
          className="solution-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          How MemoTag Works
        </motion.h2>

        <motion.div
          className="solution-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div className="step" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="icon">🧠</div>
            <h3>Track Memory Signs</h3>
            <p>Capture daily behavioral and cognitive patterns via voice or mobile inputs.</p>
          </motion.div>

          <motion.div className="step" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="icon">📈</div>
            <h3>Analyze Patterns</h3>
            <p>AI models detect trends and irregularities over time.</p>
          </motion.div>

          <motion.div className="step" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="icon">📨</div>
            <h3>Notify Caregivers</h3>
            <p>Receive intelligent alerts and recommendations directly.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
