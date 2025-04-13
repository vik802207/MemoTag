import { motion } from 'framer-motion';
import './Problem.css';

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="problem-content">
        <motion.h2
          className="problem-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          The Growing Challenge of Dementia
        </motion.h2>

        <motion.p
          className="problem-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Over 55 million people globally live with dementia, yet early diagnosis remains difficult. Caregivers struggle to track cognitive and physical changes consistently.
        </motion.p>

        <motion.ul
          className="problem-stats"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          viewport={{ once: true }}
        >
          <motion.li className="stat-item" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>📊 78% of early signs go unrecognized</motion.li>
          <motion.li className="stat-item" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>🕒 Caregivers spend 20+ hours/week tracking symptoms</motion.li>
          <motion.li className="stat-item" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>💬 Many rely on inconsistent memory logs</motion.li>
          <motion.li className="stat-item" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>💬 Many rely on inconsistent memory logs</motion.li>
        </motion.ul>
      </div>
    </section>
  );
}
