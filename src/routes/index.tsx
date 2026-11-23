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
    <img
      className="hero-mascot"
      src="/images/a_clean_high_resolution_cutout_png_style_illustr.png"
      alt="Mascote super-herói HeroPass em voo"
      fetchPriority="high"
      decoding="async"
    />
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
