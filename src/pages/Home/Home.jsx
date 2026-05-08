import styles from './Home.module.css';

const Home = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/Li4QNpV5zOU2Afe760KRPp?mode=gi_t";

  return (
    <div className={styles.container}>
      {/* Background Decorativo */}
      <div className={styles.glow} />
      
      <nav className={styles.nav}>
        <h1 className={styles.logo}>Velo<span>ia</span></h1>
        
        <img src="./favicon.png" width="80px" alt="" />

        <div className={styles.badge}>Lançamento Beta</div>
      </nav>

      <main className={styles.hero}>
        <div className={styles.tagline}>A revolução do atendimento local</div>
        <h2 className={styles.title}>
          Transforme seu WhatsApp em uma <span>máquina de vendas</span> automática
        </h2>
        <p className={styles.subtitle}>
          Chega de perder clientes por demora. O Veloia automatiza seu atendimento com inteligência e funis que convertem em segundos.
        </p>
        
        <div className={styles.ctaWrapper}>
          <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className={styles.ctaButton}>
            Quero Acesso VIP Antecipado
          </a>
          <p className={styles.socialProof}>✦ Junte-se a +50 empresas locais já interessadas</p>
        </div>
      </main>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>🚀</div>
          <h3>Respostas Instantâneas</h3>
          <p>Dê adeus ao copiar e colar. Responda em milissegundos com agilidade profissional.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>🛤️</div>
          <h3>Funis Inteligentes</h3>
          <p>Crie jornadas de compra automáticas que guiam o cliente do 'olá' até o pagamento.</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>🤖</div>
          <h3>Bot 24/7 Ativo</h3>
          <p>Sua empresa nunca fecha. Atenda, qualifique e venda enquanto você descansa.</p>
        </div>
      </section>

      <section className={styles.pricing}>
        <span className={styles.sectionLabel}>OPORTUNIDADE ÚNICA</span>
        <h2 className={styles.sectionTitle}>Escolha seu plano de fundador</h2>
        
        <div className={styles.grid}>
          <div className={styles.priceCard}>
            <h4>Starter</h4>
            <div className={styles.priceValue}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>49,99</span>
              <span className={styles.period}>/mês</span>
            </div>
            <ul className={styles.benefits}>
              <li>✓ Automação Básica</li>
              <li>✓ Suporte via Grupo</li>
              <li>✓ 1 Funil de Vendas</li>
            </ul>
            <a href={whatsappGroupLink} className={styles.secondaryButton}>Garantir Vaga</a>
          </div>

          <div className={`${styles.priceCard} ${styles.featured}`}>
            <div className={styles.popularTag}>MAIS VENDIDO</div>
            <h4>Business Pro</h4>
            <div className={styles.priceValue}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/mês</span>
            </div>
            <ul className={styles.benefits}>
              <li>✓ Automação Ilimitada</li>
              <li>✓ Funis Estratégicos</li>
              <li>✓ Inteligência de Resposta</li>
              <li>✓ Suporte Prioritário</li>
            </ul>
            <a href={whatsappGroupLink} className={styles.ctaButton}>Garantir Vaga Pro</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Veloia • Desenvolvido para o comércio Brasileiro.</p>
      </footer>
    </div>
  );
};

export default Home;