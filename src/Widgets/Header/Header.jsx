import './Header.css';

function Header({ idioma, setIdioma, textosHeader }) {
  return (
    <header className="header-container">
      <div className="logo-wrapper">
       
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            className="header-logo"
          />
        </a>
      </div>
      <div className="header-botoes">
        <select 
          className="idioma-select"
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        >
          <option value="pt">🌐 Português</option>
          <option value="en">🌐 English</option>
          <option value="es">🌐 Español</option>
          <option value="fr">🌐 Français</option>
          <option value="de">🌐 Deutsch</option>
          <option value="it">🌐 Italiano</option>
          <option value="ja">🌐 日本語</option>
          <option value="ko">🌐 한국어</option>
        </select>
        <button className="botao-entrar">
          {textosHeader.botaoEntrar}
        </button>
      </div>
    </header>
  );
}

export default Header;