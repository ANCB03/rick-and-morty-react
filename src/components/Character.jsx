function Character({ character }) {
  return (
    <div className="text-center  p-5">
      <h3>{character.name}</h3>
      <img className="mg-fluid rounded-pill" src={character.image} alt={character.name}>
      </img>
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
