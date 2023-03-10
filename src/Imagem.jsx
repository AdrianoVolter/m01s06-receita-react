import PropTypes from 'prop-types'; // ES6

function Imagem(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}


Imagem.propTypes={
  src:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired,
}
export default Imagem;
