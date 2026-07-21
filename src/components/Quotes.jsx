import { motion } from 'framer-motion'
import { quotes } from '../data'

const ease = [0.22, 0.61, 0.36, 1]

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="wrap">
        <div className="quote-grid">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.cite}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              {q.text}
              <cite>— {q.cite}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
