import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const Hero = () => {

    const { heroesId } = useParams();

    const hero = useMemo( ()=> getHeroById( heroesId ), [ heroesId ]);
    

    const navigate = useNavigate();

    const handleReturn = () => {
          navigate( -1 );
    }

    if (!hero) {
        return <Navigate to="/"/>
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imgPath = `/assets/heroes/${ id }.jpg`;

    return (
      <div className="row mt-5">
          <div className="col-3">
            <img 
                src={ imgPath } 
                alt={ superhero } 
                className="img-thumbnail animate__animated animate__fadeInLeft"
            />
          </div>

          <div className="col-8">
              <h3>{ hero.superhero }</h3>

              <ul className="list-group list-group">
                  <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                  <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                  <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
              </ul>

              <h5 className="mt-4">Characters</h5>
              <p>{ characters }</p>

              <button className="btn btn-outline-info"
                      onClick={ handleReturn }
              >
                  Regresar
              </button>
          </div>
      </div>
    )
}
