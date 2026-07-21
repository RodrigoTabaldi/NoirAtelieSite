// Conteúdo centralizado do Noir Atelier.

// Ícones inline (SVG) reutilizados nos serviços.
const Ic = {
  scissors: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v9a6 6 0 0 0 12 0V4" /><path d="M12 19v3" /><circle cx="12" cy="10" r="2" /></svg>
  ),
  drop: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" /><path d="M9 14a3 3 0 0 0 3 3" /></svg>
  ),
  wave: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15c4-1 5-6 8-6s4 5 8 4" /><path d="M4 19c4-1 5-6 8-6s4 5 8 4" /><path d="M8 6.5 9.5 5 8 3.5" /></svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l2-5 3 10 2.5-7 1.5 2h5" /></svg>
  ),
  face: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 15c1.5-2 6.5-2 8 0" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18" /><path d="M5 8c3 1 11 1 14 0" /><path d="M6 16c3-1 9-1 12 0" /></svg>
  ),
}

export const services = [
  { icon: Ic.scissors, title: 'Corte & Modelagem', desc: 'Leitura de rosto, densidade e crescimento natural. Corte a seco para curvatura, molhado para estrutura.', price: 'A partir de R$ 180' },
  { icon: Ic.drop, title: 'Coloração Autoral', desc: 'Balayage, correção de cor e tonalização. Mapeamento de mecha antes de qualquer aplicação global.', price: 'A partir de R$ 420' },
  { icon: Ic.wave, title: 'Restauração', desc: 'Reconstrução com ácidos e proteínas, hidratação profunda e selagem térmica controlada.', price: 'A partir de R$ 260' },
  { icon: Ic.pulse, title: 'Alisamento & Textura', desc: 'Progressiva sem formol, definição de cachos e permanente afro. Teste de compatibilidade obrigatório.', price: 'A partir de R$ 390' },
  { icon: Ic.face, title: 'Maquiagem', desc: 'Social, noiva e editorial. Prova de pele e prévia fotografada para eventos.', price: 'A partir de R$ 220' },
  { icon: Ic.crown, title: 'Noiva — Dia Todo', desc: 'Prova, penteado, maquiagem e retoque no local. Equipe dedicada de duas pessoas.', price: 'Sob consulta' },
]

export const stats = [
  { count: 14, label: 'Anos', dec: 0 },
  { count: 5, label: 'Profissionais', dec: 0 },
  { count: 4.9, label: 'Avaliação', dec: 1 },
]

export const gallery = [
  { img: 'https://picsum.photos/id/64/800/1000', alt: 'Corte curto estruturado' },
  { img: 'https://picsum.photos/id/1005/800/600', alt: 'Balayage em tons quentes' },
  { img: 'https://picsum.photos/id/338/800/600', alt: 'Detalhe de finalização' },
  { img: 'https://picsum.photos/id/823/1200/600', alt: 'Penteado de noiva' },
  { img: 'https://picsum.photos/id/342/800/1000', alt: 'Coloração autoral' },
  { img: 'https://picsum.photos/id/177/800/600', alt: 'Maquiagem editorial' },
]

export const prices = [
  { name: 'Corte feminino', note: 'Inclui lavagem e finalização', val: 'R$ 180' },
  { name: 'Corte masculino', note: 'Tesoura e máquina', val: 'R$ 120' },
  { name: 'Balayage', note: '3h — inclui matização', val: 'R$ 690' },
  { name: 'Retoque de raiz', note: 'Coloração global', val: 'R$ 240' },
  { name: 'Hidratação profunda', note: 'Com vapor e selagem', val: 'R$ 160' },
  { name: 'Reconstrução capilar', note: 'Protocolo de 3 etapas', val: 'R$ 320' },
  { name: 'Escova', note: 'Modelagem térmica', val: 'R$ 90' },
  { name: 'Maquiagem social', note: 'Pele, olhos e cílios', val: 'R$ 220' },
]

export const team = [
  { img: 'https://picsum.photos/id/1011/700/930', name: 'Marina Duarte', role: 'Colorista sênior' },
  { img: 'https://picsum.photos/id/1012/700/930', name: 'Ravi Tanaka', role: 'Cortes & texturas' },
  { img: 'https://picsum.photos/id/1027/700/930', name: 'Cléo Nascimento', role: 'Maquiagem & noivas' },
]

export const quotes = [
  { text: 'Primeira vez que alguém explicou por que meu loiro amarelava. Saí com a cor certa e um plano de manutenção.', cite: 'Helena R.' },
  { text: 'Cheguei com o cabelo destruído por progressiva. Três sessões depois, o fio voltou a ter corpo.', cite: 'Juliana M.' },
  { text: 'Agenda respeitada ao minuto. Entrei 14h, saí 15h20, exatamente como combinado.', cite: 'Antônio P.' },
]

export const marquee = ['Balayage', 'Correção de cor', 'Restauração', 'Cortes autorais', 'Noivas', 'Maquiagem']

export const serviceOptions = [
  'Corte & Modelagem', 'Coloração Autoral', 'Restauração',
  'Alisamento & Textura', 'Maquiagem', 'Noiva — Dia Todo',
]
