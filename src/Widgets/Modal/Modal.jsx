import './Modal.css';

function Modal({ videoUrl, fecharModal }) {
  return (
    <div className="modal-overlay" onClick={fecharModal}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="fechar-btn" onClick={fecharModal}>X</button>
        <iframe 
          width="100%" 
          height="100%" 
          src={videoUrl} 
          title="Trailer" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;