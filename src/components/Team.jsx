import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { team } from '../data'

const ease = [0.22, 0.61, 0.36, 1]

export default function Team() {
  return (
    <section id="equipe">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">Equipe</Reveal>
          <Reveal as="h2" delay={0.05}>Quem coloca a mão</Reveal>
        </div>

        <div className="team-grid">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              className="member"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <figure className="frame" style={{ margin: 0 }}>
                <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" />
              </figure>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
