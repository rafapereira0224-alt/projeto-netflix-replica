import { useState, useEffect } from 'react'; 
import Header from "./Widgets/Header/Header";
import BannerPrincipal from "./Widgets/BannerPrincipal/BannerPrincipal";
import FilmesEmAlta from "./Widgets/FilmesEmAlta/FilmesEmAlta";
import CardOferta from "./Widgets/CardOferta/CardOferta";
import Modal from "./Widgets/Modal/Modal"; 
import './App.css';
import NetflixTudumAudio from './assets/Netflix-som.mp3';
import NetflixIntroGif from './assets/Netf.gif'; 

function App() {
  const [idioma, setIdioma] = useState('pt');
  const [carregando, setCarregando] = useState(true);
  const [iniciou, setIniciou] = useState(false);
  
  // Estados para o Modal
  const [modalAberto, setModalAberto] = useState(false);
  const [videoSelecionado, setVideoSelecionado] = useState('');

  const textosHeader = {
    pt: { botaoEntrar: 'Entrar' },
    en: { botaoEntrar: 'Sign In' },
    es: { botaoEntrar: 'Iniciar sesión' }, 
    fr: { botaoEntrar: 'S\'identifier' },
    de: { botaoEntrar: 'Einloggen' },
    it: { botaoEntrar: 'Accedi' },
    ja: { botaoEntrar: 'ログイン' },
    ko: { botaoEntrar: '로그인' }
  };

  // Função para abrir o trailer
  const abrirTrailer = (link) => {
    setVideoSelecionado(link);
    setModalAberto(true);
  };

  useEffect(() => {
    if (iniciou && carregando) {
      const audioTudum = new Audio(NetflixTudumAudio); 
      audioTudum.volume = 1.0;
      audioTudum.play().catch(e => console.log("Áudio aguardando interação..."));

      const timer = setTimeout(() => {
        setCarregando(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [iniciou, carregando]); 

  if (!iniciou) {
    return (
      <div 
        className="start-container" 
        onClick={() => setIniciou(true)} 
        style={{ 
          width: '100vw', height: '100vh', backgroundColor: '#000', 
          cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
      >
      </div>
    );
  }

  if (carregando) {
    return (
      <div className="loading-container">
        <img src={NetflixIntroGif} alt="Netflix Intro" className="loading-gif" />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header 
        idioma={idioma} 
        setIdioma={setIdioma} 
        textosHeader={textosHeader[idioma]} 
      />
      <BannerPrincipal idioma={idioma} />
      
      <CardOferta idioma={idioma} />

      <FilmesEmAlta 
  idioma={idioma} 
  abrirTrailer={abrirTrailer}
/>


      {modalAberto && (
  <Modal 
    videoUrl={videoSelecionado} 
    fecharModal={() => setModalAberto(false)} 
  />
)}
    </div>
  );
}

export default App;