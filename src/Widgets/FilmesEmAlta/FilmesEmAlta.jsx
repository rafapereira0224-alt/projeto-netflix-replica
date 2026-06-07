import './FilmesEmAlta.css';
import imgOne from '../../assets/One.jpg';
import imgMagica from '../../assets/Como Magica.jpg';
import imgLei from '../../assets/Lei Ordem.jpg';
import imgLaCasa from '../../assets/La Casa.jpg';
import imgPredador from '../../assets/Jogo Predador.jpg';

function FilmesEmAlta({ idioma, abrirTrailer }) {
  const textos = {
    pt: { titulo: 'Em alta' },
    en: { titulo: 'Trending Now' },
    es: { titulo: 'Tendencias' },
    fr: { titulo: 'Tendances' },
    de: { titulo: 'Aktuell im Trend' },
    it: { titulo: 'Tendenze' },
    ja: { titulo: 'トレンド' },
    ko: { titulo: '지금 뜨는 콘텐츠' }
  };

  const t = textos[idioma] || textos['pt'];

  const listaFilmes = [
    { id: 1, img: imgOne, trailer: 'https://www.youtube.com/embed/2QjJMT554Bc' },
    { id: 2, img: imgMagica, trailer: 'https://www.youtube.com/embed/_juCljJ4rzU' },
    { id: 3, img: imgLei, trailer: 'https://www.youtube.com/embed/SRCD6PKwXOQ' },
    { id: 4, img: imgLaCasa, trailer: 'https://www.youtube.com/embed/ANMZvvO-SCk' },
    { id: 5, img: imgPredador, trailer: 'https://www.youtube.com/embed/MX5j-vQjvzk' },
  ];

  return (
    <div className="filmes-em-alta-container">
      <h2 className="titulo-secao">{t.titulo}</h2>
      <div className="lista-filmes">
        {listaFilmes.map((filme) => (
          <div 
            key={filme.id} 
            className="card-filme" 
            onClick={() => abrirTrailer(filme.trailer)} 
          >
            <img src={filme.img} alt={`Filme ${filme.id}`} />
            <span className="numero-grande">{filme.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmesEmAlta;