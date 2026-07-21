import { motion } from 'framer-motion'

// Wrapper de animação por scroll. Respeita prefers-reduced-motion automaticamente
// porque o Framer Motion desativa animações quando o usuário pede.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 36,
  className,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
