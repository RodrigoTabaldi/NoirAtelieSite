import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { prices } from '../data'

const ease = [0.22, 0.61, 0.36, 1]

export default function Prices() {
  return (
    <section className="services" id="precos">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">Tabela</Reveal>
          <Reveal as="h2" delay={0.05}>Preços sem surpresa</Reveal>
          <Reveal as="p" delay={0.1} className="lead">
            Valores confirmados na consulta. Cabelo longo pode ter acréscimo de produto —
            informado antes de iniciar.
          </Reveal>
        </div>

        <div className="menu-list">
          {prices.map((p, i) => (
            <motion.div
              key={p.name}
              className="item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease }}
            >
              <div>
                <h3>{p.name}</h3>
                <small>{p.note}</small>
              </div>
              <span className="dots" />
              <span className="val">{p.val}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
