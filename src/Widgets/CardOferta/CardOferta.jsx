import './CardOferta.css';
import iconePipoca from '../../assets/pipoca.png'; 

function CardOferta({ idioma }) {
  const textos = {
    pt: { titulo: 'A Netflix que você adora por apenas R$ 20,90.', subtitulo: 'Aproveite nossa opção mais acessível, o plano com anúncios.', botao: 'Saiba mais' },
    en: { titulo: 'The Netflix you love for just R$ 20,90.', subtitulo: 'Enjoy our most affordable ad-supported plan.', botao: 'Learn more' },
    es: { titulo: 'La Netflix que amas por solo 20,90 R$.', subtitulo: 'Disfruta de nuestro plan con anuncios más asequible.', botao: 'Más información' },
    fr: { titulo: 'Netflix que vous aimez pour seulement 20,90 R$.', subtitulo: 'Profitez de notre offre avec publicités la plus abordable.', botao: 'En savoir plus' },
    de: { titulo: 'Das Netflix, das du liebst, für nur 20,90 R$.', subtitulo: 'Genieße unser günstigstes Abo mit Werbung.', botao: 'Mehr erfahren' },
    it: { titulo: 'La Netflix che ami a soli 20,90 R$.', subtitulo: 'Goditi il nostro piano con pubblicità più conveniente.', botao: 'Scopri di più' },
    ja: { titulo: '月額20.90レアルで楽しめるNetflix。', subtitulo: '広告付きの最もお手頃なプランをお楽しみください。', botao: '詳細はこちら' },
    ko: { titulo: '월 20.90 헤알로 즐기는 Netflix.', subtitulo: '가장 저렴한 광고형 멤버십을 즐겨보세요.', botao: '더 알아보기' }
  };
  const t = textos[idioma] || textos['pt'];

  return (
    <div className="card-oferta-container">
      <div className="card-oferta-conteudo">
        <img src={iconePipoca} alt="Pipoca" className="card-icone" />
        <div className="card-texto">
          <h3>{t.titulo}</h3>
          <p>{t.subtitulo}</p>
        </div>
        <button className="botao-saiba-mais">{t.botao}</button>
      </div>
    </div>
  );
}

export default CardOferta;