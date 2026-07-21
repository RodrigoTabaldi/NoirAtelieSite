import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { services } from '../data'

const ease = [0.22, 0.61, 0.36, 1]

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">Serviços</Reveal>
          <Reveal as="h2" delay={0.05}>Um método para cada fio</Reveal>
          <Reveal as="p" delay={0.1} className="lead">
            Consulta de 15 minutos inclusa em todos os serviços de coloração e química.
          </Reveal>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="svc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease }}
            >
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">{s.price}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
