import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props){
    return (
        <header className="">
            <p>Page: {props.page}</p>
            {
                props.page >= 1 && props.page < 42 ?  <div> <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>
                siguiente: {props.page + 1}
             </button>
             </div> :  false
            }
            {
                props.page > 1 ? <div> <br></br> <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page - 1)}>
                anterior: {props.page - 1}
             </button>
             </div> : false
            }
            
        </header>
    )
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
        <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
       <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
