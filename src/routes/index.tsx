import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeroPass | Seu próximo nível começa aqui" },
      {
        name: "description",
        content:
          "Escolha entre Gympass e TotalPass. Conheça os planos de adesão do HeroPass e conte com acompanhamento da nossa equipe.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: HomePage,
});

const plans = [
  { name: "Individual", people: "1 pessoa", price: "149,90" },
  { name: "Duplo", people: "2 pessoas", price: "249,90" },
  { name: "Trio", people: "3 pessoas", price: "349,90" },
  { name: "Quarteto", people: "4 pessoas", price: "449,90" },
];

const faqs = [
  {
    question: "O valor do plano é uma mensalidade?",
    answer:
      "Não. O valor apresentado é uma adesão única ao HeroPass. Depois, a mensalidade do Gympass ou do TotalPass é tratada e paga diretamente à plataforma escolhida.",
  },
  {
    question: "Posso escolher entre Gympass e TotalPass?",
    answer:
      "Sim. Você escolhe a plataforma desejada antes de selecionar o plano de adesão.",
  },
  {
    question: "Como funciona um plano com mais de uma pessoa?",
    answer:
      "No Gympass, cada pessoa terá sua própria conta. No TotalPass, a estrutura é familiar, com um titular e seus dependentes, conforme as regras vigentes da plataforma.",
  },
  {
    question: "A ativação acontece automaticamente após o pagamento?",
    answer:
      "Não. Toda contratação passa pela validação da equipe HeroPass. Após a confirmação do pagamento, nossa equipe orienta as próximas etapas e acompanha o processo pelo WhatsApp.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "A adesão poderá ser paga por Pix ou cartão de crédito. As condições de parcelamento serão apresentadas no momento da contratação.",
  },
  {
    question: "Qualquer pessoa pode ser aprovada?",
    answer:
      "A solicitação e a ativação dependem da análise e da aceitação pela plataforma escolhida, além do cumprimento das regras e critérios vigentes de cadastro.",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="HeroPass - início">
      <span className="brand-symbol" aria-hidden="true">
        H<span />
      </span>
      <span className="brand-word">
        Hero<span>Pass</span>
      </span>
    </a>
  );
}


function HeroMascot() {
  return (
    <svg className="hero-mascot" viewBox="0 0 620 500" role="img" aria-label="Mascote super-herói HeroPass voando">
      <defs>
        <linearGradient id="capeBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#58b8ff" />
          <stop offset=".38" stopColor="#0871ed" />
          <stop offset="1" stopColor="#062b79" />
        </linearGradient>
        <linearGradient id="suitBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#268dff" />
          <stop offset=".48" stopColor="#0754c9" />
          <stop offset="1" stopColor="#06265f" />
        </linearGradient>
        <linearGradient id="whiteArmor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#b9d9ff" />
        </linearGradient>
        <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd7b3" />
          <stop offset="1" stopColor="#d88b62" />
        </linearGradient>
        <filter id="mascotShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <ellipse cx="335" cy="445" rx="205" ry="22" fill="#168bff" opacity=".2" filter="url(#mascotShadow)" />
      <g className="mascot-cape">
        <path d="M302 158 C230 105 110 83 26 146 C83 145 117 188 155 225 C190 260 228 263 269 230 C299 207 328 204 365 207 Z" fill="url(#capeBlue)" stroke="#67bdff" strokeWidth="4" />
        <path d="M286 173 C218 143 139 136 76 163 C143 157 181 208 223 228 C253 242 281 217 312 204" fill="none" stroke="#8bd0ff" strokeWidth="5" opacity=".42" />
        <path d="M270 193 C208 183 168 187 128 211 C192 202 218 245 257 239" fill="none" stroke="#031e59" strokeWidth="8" opacity=".3" />
      </g>
      <g className="mascot-body">
        <path d="M274 174 C310 144 383 145 418 184 L445 278 C421 326 357 352 294 321 L250 253 Z" fill="url(#suitBlue)" stroke="#72bdff" strokeWidth="4" />
        <path d="M301 171 L338 188 L357 221 L381 184 L407 174 L429 208 L398 246 L360 269 L316 244 L280 211 Z" fill="url(#whiteArmor)" />
        <path d="M306 222 Q356 198 408 232 L394 289 Q355 319 309 284 Z" fill="#0754c9" stroke="#9ed3ff" strokeWidth="3" />
        <path d="M336 238 L351 238 L347 258 L370 258 L367 275 L344 275 L339 295 L321 291 L326 273 L307 269 L311 252 L331 256 Z" fill="#fff" transform="rotate(12 340 267)" />
        <path d="M278 246 L306 263 L319 319 L291 335 L257 285 Z" fill="url(#whiteArmor)" />
        <path d="M401 252 L428 267 L416 315 L388 327 L376 299 Z" fill="url(#whiteArmor)" />
        <path d="M298 314 C280 347 257 376 220 405 L252 431 C304 407 339 367 355 331 Z" fill="url(#suitBlue)" stroke="#5eafff" strokeWidth="4" />
        <path d="M220 398 L258 417 L244 449 L197 458 L180 440 Z" fill="url(#whiteArmor)" />
        <path d="M194 439 L245 445 L224 478 Q205 489 166 475 L159 461 Z" fill="#073a91" stroke="#82caff" strokeWidth="4" />
        <path d="M369 315 C386 354 411 381 451 405 L420 435 C368 410 337 373 330 337 Z" fill="url(#suitBlue)" stroke="#5eafff" strokeWidth="4" />
        <path d="M438 398 L468 416 L451 448 L409 451 L396 431 Z" fill="url(#whiteArmor)" />
        <path d="M408 435 L457 435 L447 468 Q424 483 389 464 L386 451 Z" fill="#073a91" stroke="#82caff" strokeWidth="4" />
        <path d="M265 191 C231 185 205 197 177 222 L147 245 Q132 264 149 276 Q163 284 179 271 L222 250 L282 244 Z" fill="url(#suitBlue)" stroke="#5eafff" strokeWidth="4" />
        <path d="M145 239 Q126 233 112 248 L101 266 Q100 283 118 289 L143 282 Q157 270 145 239 Z" fill="url(#skinTone)" stroke="#b86d4c" strokeWidth="3" />
        <path d="M396 186 C431 162 464 162 493 180 L525 196 Q542 211 529 228 Q515 241 495 228 L452 220 L410 237 Z" fill="url(#suitBlue)" stroke="#5eafff" strokeWidth="4" />
        <path d="M493 178 Q511 157 540 165 L568 180 Q584 195 572 216 L548 234 Q525 239 511 220 L491 201 Z" fill="url(#whiteArmor)" stroke="#b4d9ff" strokeWidth="3" />
        <path d="M535 174 Q558 166 578 185 Q591 202 578 219 Q560 238 538 223 L523 207 Q520 189 535 174 Z" fill="url(#skinTone)" stroke="#c47c57" strokeWidth="3" />
        <path d="M546 184 L565 194 M540 198 L561 209 M535 211 L550 222" stroke="#bd7654" strokeWidth="3" strokeLinecap="round" />
        <path d="M316 139 Q338 112 372 119 Q402 126 410 154 L402 188 Q375 207 342 188 L319 166 Z" fill="url(#skinTone)" stroke="#b86d4c" strokeWidth="3" />
        <path d="M313 151 Q302 116 328 91 Q352 67 389 86 Q414 100 411 132 L400 143 Q390 116 368 112 Q348 132 323 130 Z" fill="#171d32" />
        <path d="M321 108 Q345 72 380 88 Q395 94 405 113 Q379 103 362 108 Q343 126 321 126 Z" fill="#252c45" />
        <path d="M334 146 Q344 138 356 145 M374 145 Q386 137 396 145" fill="none" stroke="#382a2a" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="348" cy="151" rx="4" ry="5" fill="#17375b" />
        <ellipse cx="385" cy="151" rx="4" ry="5" fill="#17375b" />
        <path d="M362 158 Q369 165 375 158" fill="none" stroke="#b66d52" strokeWidth="3" strokeLinecap="round" />
        <path d="M344 173 Q367 191 392 169 Q380 198 357 188 Z" fill="#fff" />
        <path d="M351 177 Q370 184 389 174" fill="none" stroke="#a84d49" strokeWidth="3" />
      </g>
      <path d="M86 313 Q168 278 220 292" fill="none" stroke="#73c3ff" strokeWidth="3" opacity=".65" strokeLinecap="round" />
      <path d="M67 337 Q143 309 193 319" fill="none" stroke="#168bff" strokeWidth="2" opacity=".55" strokeLinecap="round" />
    </svg>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#planos" onClick={closeMenu}>Planos</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href="#atendimento" onClick={closeMenu}>
              Falar com a equipe <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-swoosh" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" /> MOVIMENTO QUE TRANSFORMA
            </div>
            <h1>
              Seu próximo nível
              <br />
              começa <span>aqui.</span>
            </h1>
            <p>
              Você escolhe entre Gympass e TotalPass. A gente acompanha o
              caminho para sua solicitação de cadastro.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#planos">
                Conhecer planos <ArrowRight size={18} />
              </a>
              <a className="button button-ghost" href="#atendimento">
                Falar com a equipe
              </a>
            </div>
            <div className="hero-assurance">
              <span><ShieldCheck size={16} /> Atendimento acompanhado</span>
              <i />
              <span><Zap size={16} /> Adesão única</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Mascote super-herói HeroPass">
            <div className="mascot-aura" />
            <div className="mascot-speedline mascot-speedline-one" />
            <div className="mascot-speedline mascot-speedline-two" />
            <HeroMascot />
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="platform-section section-pad" id="plataformas">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">VOCÊ NO CONTROLE</span>
            <h2>Duas possibilidades.<br /><span>Uma escolha sua.</span></h2>
            <p>Escolha a plataforma que faz sentido para você e siga com o plano de adesão ideal.</p>
          </div>
          <div className="platform-grid">
            <article className="platform-card platform-gym">
              <div className="platform-letter">G</div>
              <div className="platform-card-content">
                <span className="platform-kicker">ACESSO INDIVIDUAL</span>
                <h3>Gympass</h3>
                <p>Uma conta individual para cada pessoa incluída na adesão.</p>
                <a href="#planos">Ver opções de adesão <ArrowRight size={16} /></a>
              </div>
              <span className="platform-number">01</span>
            </article>
            <article className="platform-card platform-total">
              <div className="platform-letter">T</div>
              <div className="platform-card-content">
                <span className="platform-kicker">FORMATO FAMILIAR</span>
                <h3>TotalPass</h3>
                <p>Um titular e dependentes, conforme as regras da plataforma.</p>
                <a href="#planos">Ver opções de adesão <ArrowRight size={16} /></a>
              </div>
              <span className="platform-number">02</span>
            </article>
          </div>
          <p className="platform-note">A disponibilidade e a aprovação do cadastro dependem dos critérios vigentes de cada plataforma.</p>
        </div>
      </section>

      <section className="how-section section-pad" id="como-funciona">
        <div className="container how-layout">
          <div className="section-heading how-heading">
            <span className="eyebrow eyebrow-light">SIMPLES DO COMEÇO AO FIM</span>
            <h2>Seu caminho para<br /><span>começar é assim.</span></h2>
            <p>Você escolhe. Nossa equipe confere as informações e acompanha as próximas etapas com você.</p>
            <a className="text-link text-link-light" href="#planos">Encontrar meu plano <ArrowRight size={17} /></a>
          </div>
          <div className="steps-list">
            <div className="step-item">
              <span className="step-index">01</span>
              <div><h3>Escolha a plataforma</h3><p>Selecione Gympass ou TotalPass.</p></div>
              <Check size={19} />
            </div>
            <div className="step-item">
              <span className="step-index">02</span>
              <div><h3>Defina seu plano</h3><p>Escolha a quantidade de pessoas.</p></div>
              <Users size={19} />
            </div>
            <div className="step-item">
              <span className="step-index">03</span>
              <div><h3>Faça a adesão</h3><p>Pagamento único por Pix ou cartão.</p></div>
              <Wallet size={19} />
            </div>
            <div className="step-item">
              <span className="step-index">04</span>
              <div><h3>Acompanhe pelo WhatsApp</h3><p>A equipe valida a contratação e orienta o processo.</p></div>
              <MessageCircle size={19} />
            </div>
          </div>
        </div>
      </section>

      <section className="plans-section section-pad" id="planos">
        <div className="container">
          <div className="plans-top">
            <div className="section-heading">
              <span className="eyebrow">ESCOLHA SEU TAMANHO</span>
              <h2>Mais gente.<br /><span>Mais possibilidades.</span></h2>
            </div>
            <p>Os mesmos valores para Gympass e TotalPass. Escolha a quantidade de pessoas e avance com a sua adesão.</p>
          </div>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article className={`price-card ${index === 1 ? "price-card-featured" : ""}`} key={plan.name}>
                {index === 1 && <span className="popular-tag">MAIS ESCOLHIDO</span>}
                <span className="price-people">{plan.people}</span>
                <h3>{plan.name}</h3>
                <div className="price-value"><small>R$</small>{plan.price}</div>
                <span className="price-caption">adesão única</span>
                <div className="price-divider" />
                <p><Check size={16} /> Pagamento único ao HeroPass</p>
                <p><Check size={16} /> Orientação da equipe</p>
                <a className={index === 1 ? "button button-primary button-full" : "button button-outline button-full"} href="#atendimento">
                  Tenho interesse <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
          <div className="billing-note">
            <span className="billing-icon"><CreditCard size={20} /></span>
            <p><strong>Importante:</strong> a adesão é paga uma única vez ao HeroPass. As mensalidades do Gympass ou TotalPass são cobradas separadamente pela própria plataforma, conforme o plano contratado.</p>
          </div>
        </div>
      </section>

      <section className="payment-strip">
        <div className="container payment-inner">
          <div><span className="eyebrow eyebrow-light">PAGAMENTO SIMPLES</span><h2>Você escolhe como pagar.</h2></div>
          <div className="payment-method"><Wallet size={22} /><span><strong>Pix</strong><small>Pagamento à vista</small></span></div>
          <div className="payment-method"><CreditCard size={22} /><span><strong>Cartão de crédito</strong><small>Consulte parcelamento</small></span></div>
        </div>
      </section>

      <section className="support-section section-pad" id="atendimento">
        <div className="container support-card">
          <div className="support-icon"><MessageCircle size={27} /></div>
          <div className="support-copy">
            <span className="eyebrow">GENTE DE VERDADE, DO SEU LADO</span>
            <h2>Não precisa resolver tudo sozinho.</h2>
            <p>Toda contratação passa pela validação da nossa equipe. Depois da confirmação do pagamento, você recebe as orientações e acompanha as atualizações pelo WhatsApp.</p>
          </div>
          <div className="support-action">
            <span className="support-status"><i /> Atendimento via WhatsApp</span>
            <a className="button button-primary" href="#planos">Começar minha adesão <ArrowRight size={17} /></a>
            <small>Canal oficial de WhatsApp em configuração.</small>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div className="container faq-layout">
          <div className="section-heading">
            <span className="eyebrow">TIRE SUAS DÚVIDAS</span>
            <h2>Informação clara.<br /><span>Escolha tranquila.</span></h2>
            <p>Se ainda ficou alguma dúvida, nossa equipe poderá orientar você durante a contratação.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? "faq-open" : ""}`} key={faq.question}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{faq.question}</span><ChevronDown size={19} />
                </button>
                {openFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>Seu próximo nível começa aqui.</p>
          </div>
          <div className="footer-links">
            <a href="#inicio">Início</a><a href="#como-funciona">Como funciona</a><a href="#planos">Planos</a><a href="#duvidas">Dúvidas</a>
          </div>
          <a className="footer-top" href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} HeroPass. Todos os direitos reservados.</span>
          <span>Gympass e TotalPass são marcas de seus respectivos titulares.</span>
        </div>
      </footer>
    </main>
  );
}
