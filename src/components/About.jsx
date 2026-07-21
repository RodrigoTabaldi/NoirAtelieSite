import Reveal from './Reveal'
import { stats } from '../data'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ count, label, dec }) {
  const [ref, value] = useCountUp(count, dec)
  return (
    <div className="stat">
      <b ref={ref}>{value}</b>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="atelier">
      <div className="wrap about-grid">
        <Reveal as="figure" className="frame float" style={{ margin: 0 }}>
          <img
            src="https://picsum.photos/id/1062/900/1120"
            alt="Sala principal do Noir Atelier com cadeira de barbeiro vintage"
            loading="lazy"
          />
          <figcaption>Sala principal — luz natural, cadeira Barber 1962.</figcaption>
        </Reveal>

        <div>
          <Reveal as="p" className="eyebrow">O Atelier</Reveal>
          <Reveal as="h2" delay={0.05} className="h2-mid">
            Poucos clientes<br />por dia. De propósito.
          </Reveal>
          <Reveal as="p" delay={0.1} className="lead">
            Agenda limitada: no máximo cinco clientes por profissional. Isso garante
            diagnóstico de fio, teste de mecha e tempo de processamento correto — sem
            pressa, sem sobreposição de horário.
          </Reveal>
          <Reveal className="stats" delay={0.15}>
            {stats.map((s) => (
              <Stat key={s.label} count={s.count} label={s.label} dec={s.dec} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
