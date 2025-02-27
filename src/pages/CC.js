import React, {useState, useEffect} from "react";
import "./CC.css"; // Estilos específicos para esta página
import DarkModeToggle from "../components/DarkModeToggle";

const CC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="cc-container">
      {/* Header */}
      <header>
        <h1>ISC2 CC: Study System</h1>
<<<<<<< HEAD
        <DarkModeToggle darkMode={darkMode} onToggle={handleToggle} />
      </header>

      {/* Navegação */}


=======
        <DarkModeToggle />
      </header>

      {/* Navegação */}
>>>>>>> 2af985e (v1.0.1)
      <nav className="main-nav">
        <ul>
          <li >
            <a href="#principios">Princípios de Segurança</a>
          </li>
          <li >
            <a href="#continuidade">Continuidade &amp; DR</a>
          </li>
          <li >
<<<<<<< HEAD
            <a href="#controle-de-acesso">Controle de Acesso</a>
          </li>
          <li > 
            <a href="#seguranca-de-redes">Segurança de Redes</a>
          </li>
          <li>
            <a href="#operacoes-de-seguranca">Operações de Segurança</a>
=======
            <a href="#controle">Controle de Acesso</a>
          </li>
          <li > 
            <a href="#redes">Segurança de Redes</a>
          </li>
          <li>
            <a href="#operacoes">Operações de Segurança</a>
>>>>>>> 2af985e (v1.0.1)
          </li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <main>
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Buscar conteúdo..." />
        </div>
        <div className="container">
          {/* Seção: Princípios de Segurança */}
          <section id="principios">
            <h2>Princípios de Segurança</h2>

            {/* Artigo: CIA Triad */}
            <article id="cia-triad">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>
                <span>CIA Triad</span>
              </h3>
              <p>
                A tríade CIA é o modelo clássico que orienta as práticas de segurança da informação, composto por:
                <br />
                <br />
                <div className="triad-container">
                  {/* Confidencialidade */}
                  <div className="triad-section" style={{ backgroundColor: "#B3DDF2" }}>
                    <span className="CIA" id="confidenciality">
                      Confidencialidade:
                    </span>
                    <p>
                      <strong>O que é:</strong> Significa permitir o acesso autorizado à informação, ao mesmo tempo em que protege contra divulgação inadequada.
                    </p>
                    <p>
                      <strong>Como proteger:</strong> Utilizando criptografia, controles de acesso, autenticação forte e políticas de privacidade.
                    </p>
                    <p>
                      <strong>Exemplo:</strong> Um banco que armazena dados dos clientes em servidores criptografados e limita o acesso apenas a funcionários autorizados.
                    </p>
                    <p>
                      <strong>Pergunta para reflexão:</strong> Quais métodos podem ser implementados para garantir que dados confidenciais não sejam acessados por pessoas não autorizadas?
                    </p>
                    <p>
                      <strong>Principais preocupações:</strong>
                    </p>
                    <ul className="concerns">
                      <li>Snooping</li>
                      <li>Dumpster diving</li>
                      <li>Eavesdropping</li>
                      <li>Wiretapping</li>
                      <li>Social Engineering</li>
                    </ul>
                  </div>

                  {/* Integridade */}
                  <div className="triad-section" style={{ backgroundColor: "#FFF9C4" }}>
                    <span className="CIA" id="integrity">
                      Integridade:
                    </span>
                    <p>
                      <strong>O que é:</strong> Propriedade da informação que garante que ela seja registrada, utilizada e mantida de forma a assegurar sua completude, exatidão, consistência interna e utilidade para um propósito declarado.
                    </p>
                    <p>
                      <strong>Como proteger:</strong> Utilizando funções hash (como SHA-256), assinaturas digitais e controles de versionamento.
                    </p>
                    <p>
                      <strong>Exemplo:</strong> Um sistema de controle de versões que registra todas as alterações em um documento importante, permitindo identificar modificações não autorizadas.
                    </p>
                    <p>
                      <strong>Pergunta para reflexão:</strong> Como as assinaturas digitais ajudam a assegurar a integridade dos dados?
                    </p>
                    <p>
                      <strong>Principais preocupações:</strong>
                    </p>
                    <ul className="concerns">
                      <li>Unauthorized modifications</li>
                      <li>Impersonation</li>
                      <li>Man-in-the-Middle (MitM)</li>
                      <li>Replay</li>
                    </ul>
                  </div>

                  {/* Disponibilidade */}
                  <div className="triad-section" style={{ backgroundColor: "#FFD1A9" }}>
                    <span className="CIA" id="availability">
                      Disponibilidade:
                    </span>
                    <p>
                      <strong>O que é:</strong> Significa que os sistemas e dados estão disponíveis sempre que necessário.
                    </p>
                    <p>
                      <strong>Como proteger:</strong> Implementando redundância de sistemas, balanceamento de carga, backups regulares e planos de recuperação de desastres.
                    </p>
                    <p>
                      <strong>Exemplo:</strong> Um site de e-commerce que utiliza servidores em clusters e redes de distribuição de conteúdo (CDNs) para manter o serviço ativo mesmo durante picos de acesso.
                    </p>
                    <p>
                      <strong>Pergunta para reflexão:</strong> Que estratégias podem ser adotadas para minimizar o impacto de um ataque de negação de serviço (DDoS) e garantir a disponibilidade?
                    </p>
                    <p>
                      <strong>Principais preocupações:</strong>
                    </p>
                    <ul className="concerns">
                      <li>Denial of Service (DoS)</li>
                      <li>Power outages</li>
                      <li>Hardware failures</li>
                      <li>Destruction</li>
                      <li>Service outages</li>
                    </ul>
                  </div>
                </div>
              </p>
              <div className="cia-triad-img">
                <img src="./cia-triad.jpg" alt="CIA Triad" />
              </div>
              <p className="isc2-note">
                Nota: Conteúdo alinhado ao material oficial da ISC2, reforçando os fundamentos da Confidencialidade, Integridade e Disponibilidade.
              </p>
            </article>

            {/* Artigo: Autenticação e MFA */}
            <article id="autenticacao-mfa">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Autenticação e MFA</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                A autenticação é o processo de verificar a identidade de um usuário ou sistema, enquanto a autenticação multifator (MFA) exige que o usuário apresente dois ou mais fatores de autenticação.
              </p>
              <p>
                <strong>Fatores de Autenticação:</strong>
              </p>
              <ul>
                <li>
                  <strong>Algo que você sabe:</strong> Senhas, PINs ou respostas a perguntas secretas.
                </li>
                <li>
                  <strong>Algo que você tem:</strong> Tokens físicos, smartphones (para receber códigos via SMS ou aplicativos autenticadores) ou smart cards.
                </li>
                <li>
                  <strong>Algo que você é:</strong> Características biométricas, como impressões digitais, reconhecimento facial ou leitura da íris.
                </li>
              </ul>
              <p>
                <strong>Exemplo Prático:</strong> Um serviço de e-mail pode exigir que, além da senha, o usuário insira um código temporário gerado por um aplicativo autenticador (como Google Authenticator).
              </p>
              <p className="isc2-note">
                Nota: As informações sobre autenticação e MFA seguem as diretrizes e recomendações presentes no guia oficial da ISC2.
              </p>
            </article>

            {/* Artigo: Privacidade e Não-repúdio */}
            <article id="privacidade">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Privacidade e Não-repúdio</h3>
              <p>
                <strong>Privacidade:</strong>
                <br />
                <strong>O que é:</strong> A privacidade é um componente essencial da segurança da informação. Ao compreendermos o nível de privacidade da informação, podemos implementar os controles adequados. Diversos padrões, políticas e procedimentos regulam a privacidade no ambiente de trabalho, variando por região geográfica.
              </p>
              <p>
                <strong>Regulamentações:</strong>
              </p>
              <ul>
                <li>
                  <strong>HIPAA (EUA):</strong> Regula como a privacidade das informações médicas deve ser mantida.
                </li>
                <li>
                  <strong>GDPR (União Europeia):</strong> Garante que qualquer pessoa dentro das fronteiras da UE tenha controle sobre quais informações pessoais podem ser coletadas e armazenadas pelas empresas.
                </li>
              </ul>
              <p>
                Como profissionais de segurança, é essencial estarmos cientes das leis e regulamentações de privacidade em todas as jurisdições onde nossa empresa opera. Ao conduzir negócios em outros países, devemos respeitar seus padrões e regulamentos de privacidade.
              </p>
              <p>
                <strong>Não-repúdio:</strong>
                <br />
                <strong>O que é:</strong> Garante que uma ação ou transação não possa ser negada pelo autor posteriormente, criando um registro verificável da ação.
              </p>
              <p>
                <strong>Como Proteger:</strong>
              </p>
              <ul>
                <li>
                  <strong>Assinaturas Digitais:</strong> Utilizando criptografia para validar a autoria de uma transação ou mensagem.
                </li>
                <li>
                  <strong>Logs de Auditoria:</strong> Registrando todas as atividades relevantes, garantindo rastreabilidade.
                </li>
              </ul>
              <p className="isc2-note">
                Nota: Este conteúdo está em conformidade com os princípios de proteção de dados e diretrizes do curso oficial da ISC2.
              </p>
            </article>

            {/* Artigo: Gestão de Riscos */}
            <article id="gestao-riscos">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Gestão de Riscos</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                Gestão de riscos é o processo sistemático de identificar, avaliar e mitigar os riscos que podem afetar os ativos e as operações de uma organização. Risco é definido como a probabilidade de ocorrência de um evento negativo que possa impactar os objetivos da organização, aliado ao impacto que esse evento pode causar.
              </p>
              <p>
                <strong>Risk Management:</strong>
                <br />
                Envolve a aplicação de métodos, políticas e procedimentos para gerenciar riscos, minimizando sua probabilidade e/ou impacto e garantindo a continuidade dos negócios.
                Profissionais de segurança utilizam seu conhecimento e habilidades para examinar a gestão de riscos operacionais, determinar como usar dados de risco de forma eficaz, trabalhar de maneira colaborativa entre diferentes áreas e relatar informações e descobertas acionáveis para os stakeholders envolvidos. Termos como ameaças, vulnerabilidades e ativos são familiares para a maioria dos profissionais de cibersegurança.
              </p>
              <p>
                <strong>Risk Management Terminology:</strong>
                <br />
                Quando falamos em ameaças e vulnerabilidades, uma vulnerabilidade refere-se a uma lacuna ou fraqueza nos esforços de proteção dos ativos valiosos de uma organização, incluindo informações. Uma ameaça, por outro lado, é qualquer coisa ou pessoa que visa explorar essa vulnerabilidade para obter acesso não autorizado. A ameaça pode causar danos a um ativo. Por exemplo, um desastre natural como uma tempestade severa pode ameaçar o fornecimento de energia elétrica, tornando vulnerável um ambiente de TI onde ocorrem processos de produção. Se a energia for interrompida, o ativo pode ficar indisponível, pois os componentes de TI não funcionarão sem eletricidade. O nosso papel é avaliar a probabilidade de esses eventos ocorrerem e tomar medidas adequadas para mitigar os riscos.
              </p>
              <p>
                <strong>Risk Assessment and Identification:</strong>
                <br />
                Consiste na identificação de vulnerabilidades e ameaças, seguida da avaliação dos riscos associados. Essa etapa envolve a coleta de dados e a realização de análises — tanto qualitativas quanto quantitativas — para determinar a criticidade dos riscos.
              </p>
              <p>
                <strong>Regulamentações e Normas:</strong>
                <br />
                Regulamentações e leis afetam as operações diárias de muitas organizações. Um exemplo de lei com impacto amplo é o Regulamento Geral de Proteção de Dados (GDPR), que garante proteção de dados e controle para indivíduos dentro dos limites territoriais da UE, independentemente da cidadania. Nos Estados Unidos, informações médicas de pacientes são reguladas pela Lei de Portabilidade e Responsabilidade do Seguro de Saúde (HIPAA) e devem ser protegidas com altos padrões de segurança. O não cumprimento dessas normas pode resultar em penalidades financeiras e criminais tanto para organizações quanto para indivíduos envolvidos.
              </p>
              <p>
                Felizmente, existem frameworks e padrões publicados que orientam as políticas organizacionais para garantir conformidade com essas regulamentações. A Organização Internacional de Normalização (ISO) é um dos organismos que publicam padrões reconhecidos, como diretrizes para a destruição segura de dados.
              </p>
              <p>
                <strong>Risk Treatment:</strong>
                <br />
                Após identificar os riscos, são aplicadas estratégias de tratamento que podem incluir:
              </p>
              <ul>
                <li>
                  <strong>Mitigação:</strong> Implementar controles e medidas de segurança para reduzir a probabilidade ou o impacto do risco.
                </li>
                <li>
                  <strong>Transferência:</strong> Transferir o risco para terceiros, por exemplo, por meio de seguros ou terceirização.
                </li>
                <li>
                  <strong>Aceitação:</strong> Decidir não agir se o risco for considerado aceitável dentro do contexto da organização.
                </li>
              </ul>
              <p>
                Ao tomar decisões com base nas prioridades de risco, as organizações devem avaliar a probabilidade e o impacto do risco, bem como sua tolerância para diferentes tipos de ameaças. Por exemplo, uma empresa no Havaí se preocupará mais com erupções vulcânicas do que uma empresa em Chicago, que, por sua vez, precisará planejar para nevascas.{" "}
                <span style={{ backgroundColor: "#FFD1A9", borderRadius: "2px" }}>
                  <strong> A determinação da tolerância ao risco cabe à gestão executiva e ao conselho de administração.</strong>
                </span>{" "}
                Se uma empresa decidir ignorar ou aceitar um risco significativo, como expor trabalhadores ao amianto, ela se coloca em uma posição de grande responsabilidade legal.
              </p>
              <p>
                <strong>Qualitative and Quantitative Risk Analysis:</strong>
                <br />
                A análise qualitativa avalia os riscos com base em critérios subjetivos (como probabilidade e impacto) sem a atribuição de valores numéricos precisos, enquanto a análise quantitativa utiliza dados numéricos para calcular o valor do risco. Ambas as abordagens ajudam a priorizar os riscos e a definir as estratégias de tratamento.
              </p>
              <div className="heat-map-img">
                <img src="./qualitative_risk.png" alt="Risk Assessment Heat Map" />
              </div>
              <p>
                <strong>Exemplo Prático:</strong>
                <br />
                Uma empresa de TI identifica que um servidor crítico possui vulnerabilidades conhecidas. Após uma análise qualitativa, o risco é classificado como alto devido ao impacto potencial, e a equipe decide implementar medidas de mitigação (como a aplicação de patches e a configuração de firewalls) e realizar monitoramento contínuo para reduzir esse risco.
              </p>
              <div className="test-container">
                <h4 className="test">Teste de Compreensão</h4>
                <ol>
                  <li>O que é risco e como ele é definido no contexto da gestão de riscos?</li>
                  <li>Quais são as principais etapas da gestão de riscos?</li>
                  <li>Descreva a diferença entre análise qualitativa e quantitativa de riscos.</li>
                  <li>Liste e explique as estratégias de tratamento de riscos.</li>
                  <li>Por que é importante identificar e classificar os riscos antes de tratá-los?</li>
                  <li>
                    <strong>Quem é responsável por determinar a tolerância ao risco em uma organização?</strong>
                  </li>
                </ol>
                <p>
                  Responda às perguntas e revise suas respostas com base nos estudos e nas referências oficiais. Essa prática ajudará a consolidar seu entendimento sobre o tema.
                </p>
              </div>
              <p className="isc2-note">
                Nota: O processo de gestão de riscos apresentado aqui reflete as práticas recomendadas pelo material oficial da ISC2, incluindo análise qualitativa e quantitativa.
              </p>
            </article>

            {/* Artigo: Controles de Segurança */}
            <article id="controles-seguranca">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Controles de Segurança</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                Controles de segurança são medidas implementadas para reduzir riscos e proteger os ativos de uma organização. Eles podem ser classificados em:
              </p>
              <ul>
                <li>
                  <strong>Controles Técnicos:</strong> Ferramentas e tecnologias que protegem sistemas e dados, como firewalls, antivírus, sistemas de detecção e prevenção de intrusos (IDS/IPS) e criptografia.
                </li>
                <li>
                  <strong>Controles Administrativos:</strong> Políticas, procedimentos e práticas de gestão que orientam a segurança da informação, como políticas de segurança, treinamentos, auditorias e planos de resposta a incidentes.
                </li>
                <li>
                  <strong>Controles Físicos:</strong> Medidas que protegem o acesso físico a sistemas e dados, como câmeras de vigilância, controle de acesso a instalações, alarmes e barreiras físicas.
                </li>
              </ul>
              <p>
                <strong>Exemplo Prático:</strong> Uma organização protege seu data center implementando controles técnicos (firewalls e VPNs para acesso seguro), administrativos (políticas de uso aceitável e treinamentos periódicos) e físicos (controle de acesso por biometria e vigilância por CFTV).
              </p>
              <p className="isc2-note">
                Nota: As categorias de controles de segurança foram adaptadas conforme as recomendações do curso oficial da ISC2.
              </p>
            </article>

            {/* Artigo: Código de Ética da ISC2 */}
            <article id="codigo-etica">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Código de Ética da ISC2</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                O Código de Ética da ISC2 é um conjunto de princípios que orientam o comportamento dos profissionais certificados, garantindo que atuem com responsabilidade, integridade e competência.
              </p>
              <p>
                <strong>Princípios Fundamentais:</strong>
              </p>
              <ul>
                <li>
                  <strong>Responsabilidade Profissional:</strong> Agir com competência e diligência na proteção de informações e sistemas.
                </li>
                <li>
                  <strong>Integridade:</strong> Manter a honestidade e a transparência, evitando conflitos de interesse.
                </li>
                <li>
                  <strong>Confidencialidade:</strong> Proteger informações sensíveis, respeitando a privacidade de clientes e colegas.
                </li>
                <li>
                  <strong>Excelência Profissional:</strong> Buscar continuamente o aprimoramento das habilidades e cumprir os mais altos padrões éticos.
                </li>
              </ul>
              <p>
                <strong>Exemplo Prático:</strong> Um profissional certificado pela ISC2 se recusa a participar de atividades que possam comprometer a segurança dos dados, mesmo sob pressão, demonstrando integridade e responsabilidade.
              </p>
              <p className="isc2-note">
                Nota: Os princípios éticos destacados são parte integrante do compromisso dos profissionais certificados pela ISC2.
              </p>
            </article>
          </section>

          {/* Seção: Continuidade de Negócios e Recuperação de Desastres */}
          <section id="continuidade">
            <h2>Continuidade de Negócios e Recuperação de Desastres (DR)</h2>

            {/* Artigo: Business Continuity (BC) */}
            <article id="business-continuity">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Business Continuity (BC)</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                Business Continuity é o conjunto de estratégias, planos e procedimentos que garantem que as funções críticas de uma organização continuem operando durante e após um incidente, minimizando interrupções e perdas.
              </p>
              <p>
                <strong>Componentes Principais:</strong>
              </p>
              <ul>
                <li>
                  <strong>Análise de Impacto nos Negócios (BIA):</strong> Identifica as funções críticas e avalia o impacto que uma interrupção pode causar. O BIA define os prazos críticos e os recursos necessários para a recuperação.
                </li>
                <li>
                  <strong>Plano de Continuidade de Negócios (BCP):</strong> Documenta os procedimentos a serem seguidos para manter ou retomar operações essenciais. Inclui responsabilidades, processos, recursos e contatos de emergência.
                </li>
                <li>
                  <strong>Estratégias de Mitigação:</strong> Envolvem a implementação de medidas como redundância de hardware, replicação de dados e a utilização de centros de dados alternativos para reduzir a vulnerabilidade a falhas.
                </li>
                <li>
                  <strong>Testes e Exercícios:</strong> São realizados simulados e testes periódicos para garantir que o plano funcione efetivamente e para identificar áreas que precisam de melhoria.
                </li>
                <li>
                  <strong>Comunicação e Coordenação:</strong> Definição clara de papéis, responsabilidades e canais de comunicação durante uma crise.
                </li>
              </ul>
              <p>
                <strong>Exemplo Prático:</strong>
                <br />
                Uma empresa de serviços financeiros realiza um BIA e identifica que seus sistemas de transação são críticos. Ela implementa um BCP que inclui servidores redundantes em um data center secundário e realiza exercícios semestrais para validar a transferência automática de operações em caso de falha.
              </p>
              <p className="isc2-note">
                Nota: As práticas de continuidade de negócios estão alinhadas com os requisitos e recomendações do material oficial da ISC2.
              </p>
            </article>

            {/* Artigo: Disaster Recovery (DR) */}
            <article id="disaster-recovery">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Disaster Recovery (DR)</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                Disaster Recovery é o conjunto de estratégias e procedimentos voltados para a restauração dos sistemas de TI e dados após um desastre ou falha grave, com o objetivo de retomar as operações o mais rápido possível.
              </p>
              <p>
                <strong>Componentes Principais:</strong>
              </p>
              <ul>
                <li>
                  <strong>RTO (Recovery Time Objective):</strong> O tempo máximo tolerável para a recuperação dos sistemas críticos.
                </li>
                <li>
                  <strong>RPO (Recovery Point Objective):</strong> A quantidade máxima de dados que pode ser perdida, expressa em tempo (por exemplo, 4 horas de dados).
                </li>
                <li>
                  <strong>Soluções de Backup e Replicação:</strong> Estratégias de backup (diário, semanal) e replicação de dados em tempo real para assegurar que as informações estejam disponíveis em caso de falha.
                </li>
                <li>
                  <strong>Procedimentos de Restauração:</strong> Passos detalhados para recuperar sistemas e restaurar os dados, incluindo a ordem de prioridades e os responsáveis pela execução do plano.
                </li>
                <li>
                  <strong>Infraestrutura Alternativa:</strong> Centros de dados ou serviços em nuvem que podem ser ativados caso o local principal sofra um desastre.
                </li>
              </ul>
              <p>
                <strong>Exemplo Prático:</strong>
                <br />
                Uma empresa de saúde mantém backups diários e utiliza um serviço de replicação em nuvem. Em caso de um incêndio em seu data center principal, o plano de DR prevê que os sistemas sejam automaticamente restaurados a partir da cópia na nuvem, com um RTO de 2 horas e um RPO de 1 hora.
              </p>
              <p className="isc2-note">
                Nota: Este conteúdo de Disaster Recovery incorpora conceitos fundamentais do guia oficial da ISC2 para restauração de sistemas.
              </p>
            </article>

            {/* Artigo: Resposta a Incidentes */}
            <article id="resposta-incidentes">
              <button className="favorite-btn" title="Marcar como favorito">
                &#9734;
              </button>
              <button className="progress-btn" title="Marcar como concluído">
                &#10003;
              </button>
              <h3>Resposta a Incidentes</h3>
              <p>
                <strong>Definição:</strong>
                <br />
                Resposta a Incidentes é o conjunto de ações e procedimentos adotados para identificar, conter, erradicar e recuperar de um incidente de segurança, minimizando o impacto e restaurando a normalidade dos serviços.
              </p>
              <p>
                <strong>Fases do Processo de Resposta a Incidentes:</strong>
              </p>
              <ul>
                <li>
                  <strong>Preparação:</strong> Desenvolvimento de um plano de resposta a incidentes, treinamento da equipe e instalação de ferramentas de monitoramento.
                </li>
                <li>
                  <strong>Identificação:</strong> Monitoramento contínuo e detecção precoce de atividades suspeitas ou anômalas.
                </li>
                <li>
                  <strong>Contenção:</strong> Isolamento dos sistemas afetados para evitar a propagação do incidente.
                </li>
                <li>
                  <strong>Erradicação:</strong> Remoção da causa raiz do incidente, como a eliminação de malware ou o fechamento de brechas de segurança.
                </li>
                <li>
                  <strong>Recuperação:</strong> Restauração dos sistemas e validação da integridade dos dados, garantindo que o ambiente esteja seguro para retomar as operações.
                </li>
                <li>
                  <strong>Lições Aprendidas:</strong> Revisão pós-incidente para identificar falhas e aprimorar o plano de resposta.
                </li>
              </ul>
              <div className="test-container">
                <h4 className="test">Teste de Compreensão</h4>
                <ol>
                  <li>O que é risco e como ele é definido no contexto da gestão de riscos?</li>
                  <li>Quais são as principais etapas da gestão de riscos?</li>
                  <li>Descreva a diferença entre análise qualitativa e quantitativa de riscos.</li>
                  <li>Liste e explique as estratégias de tratamento de riscos.</li>
                  <li>Por que é importante identificar e classificar os riscos antes de tratá-los?</li>
                  <li>
                    <strong>Quem é responsável por determinar a tolerância ao risco em uma organização?</strong>
                  </li>
                </ol>
                <p>
                  Responda às perguntas e revise suas respostas com base nos estudos e nas referências oficiais. Essa prática ajudará a consolidar seu entendimento sobre o tema.
                </p>
              </div>
              <p className="isc2-note">
                Nota: O processo de gestão de riscos apresentado aqui reflete as práticas recomendadas pelo material oficial da ISC2, incluindo análise qualitativa e quantitativa.
              </p>
            </article>
          </section>

          {/* Seção: Segurança de Redes e Controle de Acesso */}
        <section id="controle-de-acesso">
        <h2>Controle de Acesso</h2>

        <article id="controles-fisicos">
          <h3>☆✓ Controles Físicos</h3>
          <p>
            Os controles físicos englobam medidas estruturais e tecnológicas para prevenir o acesso não autorizado às instalações e ativos. Isso inclui o uso de crachás, sistemas biométricos, fechaduras eletrônicas, sensores de movimento, monitoramento por CFTV, além da segregação de áreas sensíveis, alarmes e barreiras físicas.
          </p>
          <p className="note">
            Nota: Os controles físicos devem ser projetados e mantidos de acordo com as melhores práticas de segurança e normas internacionais.
          </p>
        </article>

        <article id="controles-logicos">
          <h3>☆✓ Controles Lógicos</h3>
          <p>
            Os controles lógicos gerenciam o acesso digital a sistemas e informações, utilizando modelos como:
          </p>
          <ul>
            <li>
              <strong>RBAC (Role-Based Access Control):</strong> onde as permissões são atribuídas com base na função do usuário.
            </li>
            <li>
              <strong>DAC (Discretionary Access Control):</strong> onde o proprietário do recurso determina quem tem acesso.
            </li>
            <li>
              <strong>MAC (Mandatory Access Control):</strong> que impõe regras baseadas em classificações e políticas de segurança definidas pela organização.
            </li>
            <li>
              <strong>ABAC (Attribute-Based Access Control):</strong> que utiliza atributos do usuário e condições para definir permissões.
            </li>
          </ul>
          <p>
            Mecanismos como autenticação multifator, autorizações dinâmicas e auditorias constantes complementam esses controles, garantindo uma gestão de acesso robusta.
          </p>
          <p className="note">
            Nota: A aplicação dos controles lógicos deve seguir os padrões e diretrizes estabelecidos pela ISC2, com ênfase na redução da superfície de ataque e na manutenção de registros de auditoria.
          </p>
        </article>

        <article id="menor-privilegio">
          <h3>☆✓ Princípio do Menor Privilégio</h3>
          <p>
            Esse princípio determina que cada usuário, processo ou sistema receba apenas as permissões estritamente necessárias para a realização de suas funções, evitando acessos excessivos.
          </p>
          <p>
            A aplicação rigorosa do menor privilégio envolve revisões periódicas das permissões, automação na atribuição de acessos e monitoramento contínuo para detectar eventuais excessos, reduzindo assim o risco de comprometimento de dados críticos.
          </p>
          <p className="note">
            Nota: Este princípio é fundamental nas recomendações oficiais da ISC2, ajudando a limitar os danos em caso de violação de segurança.
          </p>
        </article>
      </section>

      {/* Segurança de Redes */}
      <section id="seguranca-de-redes">
        <h2>Segurança de Redes</h2>

        <article id="infraestrutura-de-seguranca">
          <h3>☆✓ Infraestrutura de Segurança</h3>
          <p>
            Uma infraestrutura de segurança robusta integra dispositivos e tecnologias como firewalls de próxima geração, VPNs, sistemas de detecção e prevenção de intrusos (IDS/IPS) e segmentação de rede. Tais elementos monitoram, filtram e protegem o tráfego, garantindo que apenas comunicações autorizadas cheguem aos ativos críticos.
          </p>
          <p>
            Soluções de monitoramento contínuo, análise de tráfego e gerenciamento centralizado são essenciais para identificar e mitigar ameaças em tempo real.
          </p>
          <p className="note">
            Nota: A infraestrutura de segurança deve ser planejada de forma holística, considerando tecnologias emergentes e as melhores práticas internacionais.
          </p>
        </article>

        <article id="ameacas-e-ataques">
          <h3>☆✓ Ameaças e Ataques à Rede</h3>
          <p>
            Este módulo aborda a identificação de diversas ameaças que podem comprometer a segurança das redes, como:
          </p>
          <ul>
            <li>
              <strong>Ataques DDoS:</strong> Visam sobrecarregar sistemas e interromper a disponibilidade dos serviços.
            </li>
            <li>
              <strong>Phishing:</strong> Técnicas de engenharia social para obter credenciais e informações sensíveis.
            </li>
            <li>
              <strong>Man-in-the-Middle (MitM):</strong> Interceptação e possível alteração das comunicações entre partes.
            </li>
            <li>
              <strong>Malware e Ransomware:</strong> Softwares maliciosos que exploram vulnerabilidades para infectar sistemas e sequestrar dados.
            </li>
          </ul>
          <p>
            As diretrizes da ISC2 recomendam uma abordagem em camadas para prevenção, detecção e resposta, combinando tecnologias e políticas para minimizar os riscos.
          </p>
          <p className="note">
            Nota: A análise das ameaças deve ser atualizada constantemente para refletir o cenário dinâmico do ambiente digital.
          </p>
        </article>

        <article id="protocolos-seguros">
          <h3>☆✓ Protocolos Seguros</h3>
          <p>
            A implementação de protocolos seguros como TLS e IPSec é essencial para proteger a integridade e confidencialidade dos dados em trânsito. Configurações corretas de certificados digitais e parâmetros robustos de criptografia ajudam a evitar vulnerabilidades.
          </p>
          <p className="note">
            Nota: A utilização de protocolos seguros deve estar alinhada com as diretrizes do curso oficial da ISC2 para comunicações protegidas.
          </p>
        </article>
      </section>

      {/* Operações de Segurança */}
      <section id="operacoes-de-seguranca">
        <h2>Operações de Segurança</h2>

        <article id="seguranca-de-dados">
          <h3>☆✓ Segurança de Dados</h3>
          <p>
            Técnicas para proteger informações sensíveis incluem o uso de criptografia para dados em repouso e em trânsito, políticas de prevenção contra perda de dados (DLP) e controle rigoroso de acesso, além do monitoramento contínuo da integridade das informações.
          </p>
          <p>
            A implementação de backups regulares, segmentação de dados e sistemas de recuperação rápida são medidas essenciais para garantir a disponibilidade e resiliência dos ativos.
          </p>
          <p className="note">
            Nota: As estratégias para proteger dados sensíveis seguem as diretrizes da ISC2, enfatizando a confidencialidade, integridade e disponibilidade.
          </p>
        </article>

        <article id="endurecimento-do-sistema">
          <h3>☆✓ Endurecimento do Sistema</h3>
          <p>
            O endurecimento do sistema é um processo contínuo que visa reduzir vulnerabilidades e minimizar a superfície de ataque. Isso inclui a remoção de serviços desnecessários, aplicação regular de patches e configurações seguras, além de auditorias e testes de penetração.
          </p>
          <p className="note">
            Nota: As práticas de endurecimento seguem as recomendações do guia oficial da ISC2, integrando-se ao ciclo de desenvolvimento e manutenção dos sistemas.
          </p>
        </article>

        <article id="treinamento-em-consciencia">
          <h3>☆✓ Treinamento em Conscientização de Segurança</h3>
          <p>
            Estratégias e iniciativas para educar os usuários sobre boas práticas de segurança são fundamentais. Programas de treinamento que abordem identificação de phishing, engenharia social, uso seguro de dispositivos e simulações de incidentes ajudam a construir uma cultura de segurança.
          </p>
          <p className="note">
            Nota: A capacitação dos colaboradores é essencial para reduzir o erro humano, frequentemente apontado como uma das principais vulnerabilidades exploradas por atacantes.
          </p>
        </article>
      </section>

          {/* Seção: Dashboard de Progresso e Tarefas */}
          <section id="dashboard">
            <h2>Dashboard de Progresso e Tarefas</h2>
            <p>Aqui você pode ver seu progresso e gerenciar suas tarefas de estudo.</p>
            <ul id="taskList"></ul>
            <input type="text" id="taskInput" placeholder="Adicionar nova tarefa" />
            <button id="addTaskBtn">Adicionar Tarefa</button>
            <br />
            <br />
            {/* Botão para iniciar o Quiz de Exame */}
            <a href="quiz.html">
              <button id="startQuizBtn">Iniciar Quiz de Exame</button>
            </a>
          </section>

          {/* Seção: Infográfico */}
          <section id="infografico">
            <h2>Infográfico: Conceitos do CIA Triad</h2>
            {/* Substitua "yourvideoID" pelo ID do vídeo no YouTube */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yourvideoID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>

          {/* Seção: Recursos Adicionais ISC2 */}
          <section id="recursos">
            <h2>Recursos Adicionais ISC2</h2>
            <p>
              Explore materiais complementares e oficiais da ISC2 para aprofundar seus conhecimentos e se preparar ainda melhor para o exame:
            </p>
            <ul>
              <li>
                <a href="https://www.isc2.org/" target="_blank" rel="noopener noreferrer">
                  Site Oficial da ISC2
                </a>
              </li>
              <li>
                <a href="https://www.isc2.org/Certifications" target="_blank" rel="noopener noreferrer">
                  Certificações ISC2
                </a>
              </li>
              <li>
                <a href="https://www.isc2.org/News-and-Events" target="_blank" rel="noopener noreferrer">
                  Eventos e Webinars
                </a>
              </li>
              <li>
                <a href="https://www.isc2.org/Newsroom/Articles" target="_blank" rel="noopener noreferrer">
                  Artigos e Publicações
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Botão Scroll to Top */}
      <div className="scroll-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Voltar ao Início
        </button>
      </div>
      {/* Footer */}
      <footer>
        <p>&copy; 2025 joaoDev. Todos os direitos reservados. v1.5.0</p>
      </footer>
    </div>
  );
};

export default CC;
