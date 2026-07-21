import { motion } from 'framer-motion'

const ease = [0.22, 0.61, 0.36, 1]
const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src="https://picsum.photos/id/1027/1800/1100" alt="" aria-hidden="true" />
      </div>
      <div className="wrap">
        <div className="hero-inner">
          <motion.p className="eyebrow" {...rise(0.1)}>Salão de alta costura — desde 2011</motion.p>
          <motion.h1 {...rise(0.25)}>
            Cabelo é<br />
            <em>arquitetura</em><br />
            da presença.
          </motion.h1>
          <motion.p {...rise(0.4)}>
            Coloração autoral, cortes sob medida e tratamentos de restauração. Cada
            atendimento começa com uma consulta — nunca com uma tesoura.
          </motion.p>
          <motion.div className="hero-actions" {...rise(0.55)}>
            <a className="btn btn-solid" href="#agendar">Reservar horário</a>
            <a className="btn" href="#servicos">Ver serviços</a>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="scroll-hint"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Role</span><i></i>
      </motion.div>
    </section>
  )
}
