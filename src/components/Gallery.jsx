import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { gallery } from '../data'

const ease = [0.22, 0.61, 0.36, 1]

export default function Gallery() {
  return (
    <section id="galeria">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">Galeria</Reveal>
          <Reveal as="h2" delay={0.05}>Trabalhos recentes</Reveal>
          <Reveal as="p" delay={0.1} className="lead">Passe o mouse — a cor volta.</Reveal>
        </div>

        <div className="gallery">
          {gallery.map((g, i) => (
            <motion.figure
              key={i}
              className="frame"
              style={{ margin: 0 }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
            >
              <img src={g.img} alt={g.alt} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
