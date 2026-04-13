'use client'

import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ScrollReveal from '@/components/ScrollReveal'

const WA_NUMBER = '5548999999999' // Trocar pelo número real
const WA_MESSAGE = encodeURIComponent('Olá! Gostaria de um orçamento para higienização do meu estofado.')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gold-light">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ──────────────────── HEADER ──────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              {/* Logo SVG inline — baseado na logo da empresa */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <text x="8" y="28" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="#071952">048</text>
                <path d="M10 55 Q12 42 24 40 L56 40 Q68 42 70 55 Q68 62 40 64 Q12 62 10 55Z" stroke="#071952" strokeWidth="2.5" fill="none"/>
                <path d="M22 40 L22 38 Q22 32 26 30 L54 30 Q58 32 58 38 L58 40" stroke="#071952" strokeWidth="2.5" fill="none"/>
                <path d="M18 64 L18 68 L22 68 L22 64" stroke="#071952" strokeWidth="2" fill="none"/>
                <path d="M58 64 L58 68 L62 68 L62 64" stroke="#071952" strokeWidth="2" fill="none"/>
                <path d="M38 62 L38 40" stroke="#071952" strokeWidth="1.5"/>
                <path d="M67 46 L74 40 L67 34" stroke="#071952" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-navy text-xl font-semibold tracking-wide">048</span>
              <span className="hidden sm:inline font-body text-navy/60 text-xs ml-2 tracking-widest uppercase">Higienização</span>
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-navy text-cream font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-navy-light transition-colors"
          >
            <WhatsAppIcon size={16} />
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </header>

      <main>
        {/* ──────────────────── HERO ──────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-navy">
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlay: escurece o vídeo para o texto ficar legível */}
          <div className="absolute inset-0 bg-navy/70" />

          {/* Gradiente sutil na base */}
          <div className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(to top, rgba(7,25,82,0.6), transparent)' }}
          />

          {/* Conteúdo centralizado */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
            <p className="opacity-0-init animate-fade-up delay-100 font-body text-gold tracking-widest text-xs uppercase mb-6">
              ✦ Kobrasol · Grande Florianópolis
            </p>
            <h1 className="opacity-0-init animate-fade-up delay-200 font-display text-cream leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(48px, 6.5vw, 96px)' }}>
              Seu estofado,{' '}
              <em className="text-gold-light not-italic">renovado.</em>
            </h1>
            <p className="opacity-0-init animate-fade-up delay-300 font-body text-cream/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Higienização profissional de sofás, poltronas e colchões — sem tirar de casa.
              Produtos certificados, resultado visível.
            </p>
            <div className="opacity-0-init animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-body font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/30"
              >
                <WhatsAppIcon size={22} />
                Pedir Orçamento Grátis
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream/80 hover:text-cream hover:border-cream/50 font-body text-base px-8 py-4 rounded-full transition-all backdrop-blur-sm"
              >
                Ver resultados ↓
              </a>
            </div>

            {/* Trust badges */}
            <div className="opacity-0-init animate-fade-up delay-500 flex justify-center gap-10 mt-14 pt-10 border-t border-cream/10">
              {[
                { n: '500+', label: 'Estofados higienizados' },
                { n: '5★', label: 'Avaliação média' },
                { n: '48h', label: 'Secagem garantida' },
              ].map((item) => (
                <div key={item.n} className="text-center">
                  <div className="font-display text-gold-light font-bold" style={{ fontSize: 28 }}>
                    {item.n}
                  </div>
                  <div className="font-body text-cream/50 text-xs mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-init animate-fade-up delay-600">
            <div className="flex flex-col items-center gap-2 text-cream/30">
              <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-cream/20 animate-bounce" />
            </div>
          </div>
        </section>

        {/* ──────────────────── GALERIA ANTES/DEPOIS ──────────────────── */}
        <section id="galeria" className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-body text-gold tracking-widest text-xs uppercase mb-4 text-center">
                Resultados reais
              </p>
              <h2 className="font-display text-navy text-center mb-3"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Transformações que falam
              </h2>
              <p className="font-body text-dark/50 text-center max-w-xl mx-auto mb-16 leading-relaxed">
                Cada estofado tem sua história. Veja como devolvemos a vida aos seus móveis.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { before: '/images/antes-1.jpg', after: '/images/depois-1.jpg', label: 'Sofá chaise suede' },
                { before: '/images/antes-2.jpg', after: '/images/depois-2.jpg', label: 'Poltrona capitonê' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <BeforeAfterSlider
                      before={item.before}
                      after={item.after}
                    />
                  </div>
                  <p className="font-body text-navy/60 text-sm mt-3 pl-1">{item.label}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Photo grid — additional proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                '/images/foto-1.jpg',
                '/images/foto-2.jpg',
                '/images/foto-3.jpg',
                '/images/foto-4.jpg',
              ].map((_src, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-sand">
                    <div className="w-full h-full bg-sand/80 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-2">
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#071952" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="m21 15-5-5L5 21"/>
                          </svg>
                        </div>
                        <p className="font-body text-navy/40 text-xs">Adicionar foto</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── SERVIÇOS ──────────────────── */}
        <section id="servicos" className="py-24 bg-sand">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-body text-gold tracking-widest text-xs uppercase mb-4 text-center">
                O que higienizamos
              </p>
              <h2 className="font-display text-navy text-center mb-16"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Nossos serviços
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <path d="M6 34 Q8 24 14 22 L34 22 Q40 24 42 34 Q40 38 24 40 Q8 38 6 34Z"/>
                      <path d="M14 22 L14 20 Q14 14 18 12 L30 12 Q34 14 34 20 L34 22"/>
                      <path d="M10 40 L10 44"/>
                      <path d="M38 40 L38 44"/>
                      <path d="M23 38 L23 22"/>
                    </svg>
                  ),
                  title: 'Sofás & Chaises',
                  desc: 'Todos os modelos e tecidos: suede, veludo, linho, couro sintético e mais.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <rect x="10" y="18" width="28" height="18" rx="4"/>
                      <path d="M14 18 L14 14 Q14 10 20 10 L28 10 Q34 10 34 14 L34 18"/>
                      <path d="M10 28 L6 28 L6 36 L10 36"/>
                      <path d="M38 28 L42 28 L42 36 L38 36"/>
                      <path d="M15 36 L15 40"/>
                      <path d="M33 36 L33 40"/>
                    </svg>
                  ),
                  title: 'Poltronas',
                  desc: 'Poltronas comuns, reclinadores, balanços e cadeiras de escritório.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <rect x="4" y="22" width="40" height="16" rx="3"/>
                      <rect x="8" y="16" width="32" height="8" rx="2"/>
                      <path d="M8 38 L8 44"/>
                      <path d="M40 38 L40 44"/>
                    </svg>
                  ),
                  title: 'Colchões',
                  desc: 'Higienização profunda com extração de ácaros, bactérias e manchas.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <path d="M8 14 L8 38 Q8 40 10 40 L38 40 Q40 40 40 38 L40 14"/>
                      <path d="M4 14 L44 14"/>
                      <path d="M18 14 L18 8 Q18 6 20 6 L28 6 Q30 6 30 8 L30 14"/>
                      <path d="M8 26 L40 26"/>
                    </svg>
                  ),
                  title: 'Cadeiras de Jantar',
                  desc: 'Cadeiras de mesa, banquetas e assentos com estofamento.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <path d="M8 38 L8 16 Q8 10 12 8 L36 8 Q40 10 40 16 L40 38"/>
                      <path d="M4 38 L44 38"/>
                      <path d="M14 38 L14 24 L34 24 L34 38"/>
                      <path d="M14 24 Q14 16 18 14 L30 14 Q34 16 34 24"/>
                    </svg>
                  ),
                  title: 'Cabeceiras',
                  desc: 'Cabeceiras de cama estofadas, com capitonê ou painel liso.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" stroke="#071952" strokeWidth="2" className="w-10 h-10">
                      <path d="M12 36 Q10 30 14 26 L34 26 Q38 30 36 36"/>
                      <ellipse cx="24" cy="24" rx="14" ry="6"/>
                      <path d="M10 36 Q12 40 24 42 Q36 40 38 36"/>
                      <path d="M24 18 L24 8"/>
                      <path d="M20 12 L24 8 L28 12"/>
                    </svg>
                  ),
                  title: 'Impermeabilização',
                  desc: 'Proteção contra manchas e umidade com produto nano-cristalino.',
                },
              ].map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="service-card bg-cream rounded-xl p-8 border border-sand hover:border-navy/20 cursor-default">
                    <div className="mb-5">{s.icon}</div>
                    <h3 className="font-display text-navy font-semibold text-2xl mb-3">{s.title}</h3>
                    <p className="font-body text-dark/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── COMO FUNCIONA ──────────────────── */}
        <section className="py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-body text-gold tracking-widest text-xs uppercase mb-4 text-center">
                Simples assim
              </p>
              <h2 className="font-display text-navy text-center mb-20"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Como funciona
              </h2>
            </ScrollReveal>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-sand" />

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    n: '01',
                    title: 'Você fala no WhatsApp',
                    desc: 'Mande uma foto do estofado. Em minutos você recebe um orçamento sem compromisso.',
                  },
                  {
                    n: '02',
                    title: 'A gente vai até você',
                    desc: 'Nossos técnicos chegam no horário combinado com todo equipamento necessário.',
                  },
                  {
                    n: '03',
                    title: 'Resultado em horas',
                    desc: 'Higienização feita com seu estofado no lugar. Seca em até 48 horas.',
                  },
                ].map((step, i) => (
                  <ScrollReveal key={i} delay={i * 150} className="text-center">
                    <div className="w-20 h-20 rounded-full bg-navy text-cream font-display font-bold text-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                      {step.n}
                    </div>
                    <h3 className="font-display text-navy font-semibold text-2xl mb-3">{step.title}</h3>
                    <p className="font-body text-dark/55 leading-relaxed">{step.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className="text-center mt-16">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-body font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/20"
              >
                <WhatsAppIcon size={22} />
                Começar agora
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────── DIFERENCIAIS ──────────────────── */}
        <section className="py-24 bg-navy relative grain overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(ellipse at 0% 100%, #D4A843, transparent 60%)`,
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="font-body text-gold tracking-widest text-xs uppercase mb-4">
                  Por que a 048?
                </p>
                <h2 className="font-display text-cream mb-6"
                  style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
                  Cuidado que vai além da aparência
                </h2>
                <p className="font-body text-cream/60 leading-relaxed mb-10">
                  Usamos equipamentos de extração a vapor e produtos certificados que eliminam
                  ácaros, fungos e bactérias — sem danificar o tecido. O resultado é estético
                  <em className="text-gold-light not-italic"> e</em> higiênico.
                </p>

                <div className="space-y-4">
                  {[
                    'Equipamentos profissionais de extração a vapor',
                    'Produtos certificados — seguros para crianças e pets',
                    'Técnicos treinados e identificados',
                    'Garantia de satisfação ou refazemos',
                    'Atendemos em domicílio — sem mover o móvel',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L4 7L9 1" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-body text-cream/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Water drop effect card */}
              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="bg-cream/5 border border-cream/10 rounded-2xl p-10 text-center backdrop-blur-sm">
                    {/* Water drop icon */}
                    <div className="w-24 h-24 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20">
                      <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
                        <path d="M20 4 Q30 16 34 28 Q36 40 20 44 Q4 40 6 28 Q10 16 20 4Z" stroke="#D4A843" strokeWidth="2" fill="rgba(212,168,67,0.1)"/>
                        <path d="M14 34 Q16 38 20 39" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="font-display text-cream text-3xl font-semibold mb-3">
                      Impermeabilização
                    </h3>
                    <p className="font-body text-cream/55 leading-relaxed mb-6">
                      Proteja seu estofado contra líquidos e manchas após a limpeza.
                      A gota d'água literalmente escorrega.
                    </p>
                    <span className="inline-block font-body text-gold text-sm border border-gold/30 rounded-full px-5 py-2">
                      Pergunte sobre este serviço →
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────── DEPOIMENTOS ──────────────────── */}
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-body text-gold tracking-widest text-xs uppercase mb-4 text-center">
                O que dizem nossos clientes
              </p>
              <h2 className="font-display text-navy text-center mb-16"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Confiança em cada detalhe
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Ana Paula M.',
                  local: 'Kobrasol, São José',
                  text: 'Meu sofá parecia novo depois! Achei que não teria jeito pelas manchas de criança, mas ficou incrível. Super recomendo.',
                },
                {
                  name: 'Ricardo S.',
                  local: 'Barreiros, São José',
                  text: 'Atendimento rápido, pessoal muito educado e o resultado foi excelente. Poltrona que estava horrível voltou a ser bonita.',
                },
                {
                  name: 'Fernanda K.',
                  local: 'Trindade, Florianópolis',
                  text: 'Além de limpar fizeram a impermeabilização. Já testei com suco e a gota escorregou! Valeu cada centavo.',
                },
              ].map((t, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="bg-sand rounded-xl p-8 h-full flex flex-col">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                    </div>
                    <p className="font-body text-dark/70 leading-relaxed flex-1 text-sm mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-display text-navy font-semibold text-lg">{t.name}</p>
                      <p className="font-body text-dark/40 text-xs mt-0.5">{t.local}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── COBERTURA ──────────────────── */}
        <section className="py-16 bg-sand border-y border-sand/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#071952" strokeWidth="1.5" className="mx-auto mb-4 opacity-40">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <p className="font-body text-gold tracking-widest text-xs uppercase mb-3">Área de atendimento</p>
              <h2 className="font-display text-navy mb-4" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
                Atendemos toda a Grande Florianópolis
              </h2>
              <p className="font-body text-dark/55 mb-8 max-w-2xl mx-auto leading-relaxed">
                Base em <strong className="text-navy">Kobrasol, São José</strong> — com atendimento em
                Florianópolis, Palhoça, Biguaçu, Santo Amaro da Imperatriz e região.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Kobrasol', 'Florianópolis', 'São José', 'Palhoça', 'Biguaçu', 'Barreiros', 'Campinas', 'Jardim Zanellato'].map((city) => (
                  <span key={city} className="font-body text-sm bg-cream border border-navy/10 text-navy/70 rounded-full px-4 py-1.5">
                    {city}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────── CTA FINAL ──────────────────── */}
        <section className="py-32 bg-navy relative overflow-hidden grain">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,67,0.15), transparent)`
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              {/* Sparkle */}
              <div className="text-gold text-4xl mb-6 select-none">✦</div>
              <h2 className="font-display text-cream mb-6"
                style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05 }}>
                Pronto para renovar seus estofados?
              </h2>
              <p className="font-body text-cream/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                Mande uma foto pelo WhatsApp agora e receba seu orçamento em minutos.
                Sem visita obrigatória, sem surpresas.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1db954] text-white font-body font-bold text-xl px-12 py-5 rounded-full transition-all hover:scale-105 shadow-2xl shadow-green-900/40"
              >
                <WhatsAppIcon size={28} />
                Pedir Orçamento Grátis
              </a>
              <p className="font-body text-cream/30 text-sm mt-6">
                Atendemos de seg. a sáb. · Sem taxas ocultas
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ──────────────────── FOOTER ──────────────────── */}
      <footer className="bg-dark py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="font-display text-cream/80 text-xl font-semibold">048 Higienização</span>
            <p className="font-body text-cream/30 text-xs mt-1">Kobrasol · São José · Grande Florianópolis</p>
          </div>
          <div className="flex gap-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="font-body text-cream/40 hover:text-[#25D366] text-sm transition-colors">
              WhatsApp
            </a>
            <span className="font-body text-cream/20 text-sm">
              © {new Date().getFullYear()} 048 Higienização
            </span>
          </div>
        </div>
      </footer>

      {/* ──────────────────── WHATSAPP FLOAT ──────────────────── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale no WhatsApp"
      >
        <WhatsAppIcon size={22} />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </a>
    </>
  )
}
