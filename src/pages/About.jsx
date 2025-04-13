
import { motion } from 'framer-motion';
export default function About() {
    return (
      <section className="about">
        <motion.h2 className="about-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          About MemoTag
        </motion.h2>
        <motion.p className="about-description" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} viewport={{ once: true }}>
          MemoTag helps caregivers track and monitor early signs of dementia using cutting-edge AI and behavioral insights.
        </motion.p>
      </section>
    );
  }
  