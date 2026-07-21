import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { serviceOptions } from '../data'

const initial = { nome: '', tel: '', svc: '', obs: '' }

const validators = {
  nome: (v) => v.trim().length >= 3,
  tel: (v) => v.replace(/\D/g, '').length >= 10,
  svc: (v) => v !== '',
}

const errorMsg = {
  nome: 'Informe seu nome.',
  tel: 'Informe um telefone com DDD.',
  svc: 'Escolha um serviço.',
}

export default function Booking() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [ok, setOk] = useState(false)

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: false }))
  }

  const submit = () => {
    const next = {}
    Object.keys(validators).forEach((k) => {
      if (!validators[k](values[k])) next[k] = true
    })
    setErrors(next)
    if (Object.keys(next).length) {
      setOk(false)
      const first = document.getElementById(Object.keys(next)[0])
      if (first) first.focus()
      return
    }
    setOk(true)
    setValues(initial)
  }

  const field = (id, label, extra) => {
    const invalid = errors[id]
    return (
      <div className={`field${invalid ? ' invalid' : ''}`}>
        <label htmlFor={id}>{label}</label>
        {extra}
        <AnimatePresence>
          {invalid && (
            <motion.p
              className="err"
              id={`e-${id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {errorMsg[id]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section id="agendar">
      <div className="wrap book-grid">
        <div>
          <Reveal as="p" className="eyebrow">Agendamento</Reveal>
          <Reveal as="h2" delay={0.05} className="h2-mid">Reserve seu horário</Reveal>
          <Reveal as="p" delay={0.1} className="lead">
            Confirmamos por WhatsApp em até 2 horas úteis. Cancelamento gratuito até 24h antes.
          </Reveal>

          <Reveal className="info-line" delay={0.15}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            <div><b>Endereço</b>Rua das Palmeiras, 480 — Centro</div>
          </Reveal>
          <Reveal className="info-line" delay={0.2}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            <div><b>Horários</b>Ter–Sex 9h–20h · Sáb 8h–18h · Dom e Seg fechado</div>
          </Reveal>
          <Reveal className="info-line" delay={0.25}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            <div><b>Contato</b>contato@noiratelier.com · (66) 99999-0000</div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <AnimatePresence>
            {ok && (
              <motion.div
                className="ok show"
                role="status"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Pedido enviado. Confirmamos por WhatsApp em breve.
              </motion.div>
            )}
          </AnimatePresence>

          {field('nome', 'Nome completo',
            <input id="nome" type="text" autoComplete="name" value={values.nome} onChange={set('nome')} required />)}

          <div className={`field${errors.tel ? ' invalid' : ''}`}>
            <label htmlFor="tel">WhatsApp</label>
            <input id="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="(66) 90000-0000" value={values.tel} onChange={set('tel')} required />
            {!errors.tel && <p className="hint">Usamos apenas para confirmar o horário.</p>}
            <AnimatePresence>
              {errors.tel && (
                <motion.p className="err" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  {errorMsg.tel}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {field('svc', 'Serviço',
            <select id="svc" value={values.svc} onChange={set('svc')} required>
              <option value="">Selecione…</option>
              {serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>)}

          <div className="field">
            <label htmlFor="obs">
              Observações <span style={{ textTransform: 'none', letterSpacing: 0, color: 'var(--text-dim)' }}>(opcional)</span>
            </label>
            <textarea id="obs" placeholder="Química recente, alergias, preferência de horário…" value={values.obs} onChange={set('obs')} />
          </div>

          <button className="btn btn-solid" id="send" onClick={submit}>Solicitar horário</button>
        </Reveal>
      </div>
    </section>
  )
}
