import { motion } from 'framer-motion';
import './Traction.css';

export default function Traction({ isDarkMode }) {
  return (
    <section className={`traction ${isDarkMode ? 'dark' : 'light'}`} id="traction">
      <div className="traction-content">
        <motion.h2
          className="traction-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Traction
        </motion.h2>

        <motion.div
          className="stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="stat-icon">📈</div>
            <h3>Preorders</h3>
            <p>Over 50,000 preorders already secured!</p>
          </motion.div>

          <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="stat-icon">🌍</div>
            <h3>Impact</h3>
            <p>Our tech has helped over 5,000 families worldwide.</p>
          </motion.div>

          <motion.div className="stat" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="stat-icon">🤝</div>
            <h3>Partnerships</h3>
            <p>Collaborated with top healthcare providers and tech companies.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
