import { useState } from 'react'; 
import './BannerPrincipal.css';

function BannerPrincipal({ idioma }) {
  const [emailDigitado, setEmailDigitado] = useState('');

  const textos = {
    pt: { 
      titulo: 'Filmes, séries e muito mais, sem limites', 
      subtitulo: 'A partir de R$ 20,90. Cancele quando quiser.', 
      chamadaEmail: 'Quer assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.', 
      placeholderEmail: 'Email', 
      botaoVamosLa: 'Vamos lá',
      mensagemSucesso: 'E-mail {email} registrado! Redirecionando para o plano...' 
    },
    en: { 
      titulo: 'Unlimited movies, TV shows, and more', 
      subtitulo: 'Starts at R$ 20,90. Cancel anytime.', 
      chamadaEmail: 'Ready to watch? Enter your email to create or restart your membership.', 
      placeholderEmail: 'Email address', 
      botaoVamosLa: 'Get Started',
      mensagemSucesso: 'Email {email} registered! Redirecting to the plan...' 
    },
    es: { 
      titulo: 'Películas, series y más, sin límites', 
      subtitulo: 'Desde R$ 20,90. Cancela cuando quieras.', 
      chamadaEmail: '¿Listo para ver? Ingresa tu correo electrónico para crear o reiniciar tu membresía.', 
      placeholderEmail: 'Correo electrónico', 
      botaoVamosLa: 'Comenzar',
      mensagemSucesso: 'Correo {email} registrado! Redirigiendo al plan...' 
    },
    fr: { 
      titulo: 'Films, séries TV et bien plus en illimité', 
      subtitulo: 'À partir de 20,90 R$. Annulez à tout moment.', 
      chamadaEmail: 'Prêt à regarder ? Saisissez votre adresse e-mail pour créer ou redémarrer votre abonnement.', 
      placeholderEmail: 'Adresse e-mail', 
      botaoVamosLa: 'Commencer',
      mensagemSucesso: 'E-mail {email} enregistré ! Redirection vers le plan...' 
    },
    de: { 
      titulo: 'Unbegrenzt Filme, Serien und mehr', 
      subtitulo: 'Ab 20,90 R$. Jederzeit kündbar.', 
      chamadaEmail: 'Bereit zum Streamen? Gib deine E-Mail-Adresse ein, um deine Mitgliedschaft zu erstellen oder neu zu starten.', 
      placeholderEmail: 'E-Mail-Adresse', 
      botaoVamosLa: 'Loslegen',
      mensagemSucesso: 'E-Mail {email} registriert! Weiterleitung zum Abo...' 
    },
    it: { 
      titulo: 'Film, serie TV e tanto altro, senza limiti', 
      subtitulo: 'A partire da 20,90 R$. Disdici quando vuoi.', 
      chamadaEmail: 'Vuoi guardare Netflix? Inserisci la tua email per creare o riattivare il tuo abbonamento.', 
      placeholderEmail: 'Indirizzo email', 
      botaoVamosLa: 'Inizia',
      mensagemSucesso: 'Email {email} registrata! Reindirizzamento al piano...' 
    },
    ja: { 
      titulo: '映画、ドラマなどが見放題', 
      subtitulo: '月額20.90レアルから。いつでもキャンセル可能。', 
      chamadaEmail: '視聴を開始しますか？メールアドレスを入力して、メンバーシップを開始または再開してください。', 
      placeholderEmail: 'メールアドレス', 
      botaoVamosLa: '開始する',
      mensagemSucesso: '{email}を登録しました！プランへ移動します...' 
    },
    ko: { 
      titulo: '다양한 영화와 시리즈를 무제한으로', 
      subtitulo: '월 20.90 헤알부터 시작. 언제든지 취소 가능.', 
      chamadaEmail: '시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.', 
      placeholderEmail: '이메일 주소', 
      botaoVamosLa: '시작하기',
      mensagemSucesso: '{email} 등록 완료! 플랜으로 이동 중...' 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const msg = textos[idioma].mensagemSucesso.replace('{email}', emailDigitado);
    alert(msg);
  };

  return (
    <div className="banner-principal-container">
      <div className="banner-grid-imagens"></div>
      <div className="banner-camada-escura"></div> 
      <div className="banner-conteudo">
        <h1 className="banner-titulo">{textos[idioma].titulo}</h1>
        <p className="banner-subtitulo">{textos[idioma].subtitulo}</p>
        <p className="banner-chamada-email">{textos[idioma].chamadaEmail}</p>

        <form className="banner-formulario" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder={textos[idioma].placeholderEmail} 
            className="banner-input-email" 
            value={emailDigitado}
            onChange={(e) => setEmailDigitado(e.target.value)}
            required 
          />
          <button type="submit" className="banner-botao-vamos-la">
            {textos[idioma].botaoVamosLa} 
            <svg viewBox="0 0 24 24" fill="none" className="banner-icone-seta">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
      <div className="banner-curva-base"></div>
    </div>
  );
}

export default BannerPrincipal;