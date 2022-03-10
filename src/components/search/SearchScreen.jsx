import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard }  from '../hero/HeroCard';
import queryString  from 'query-string'
import { useMemo } from 'react';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [ formValues, handleInputChange ] = useForm( {
        searchText: q
    } );


    const { searchText } = formValues;

    
    const heroesFiltered = useMemo( () => getHeroByName( q ), [q]);


    const handleSearch = (e) => {
      e.preventDefault();
      console.log(searchText);
      navigate(`?q=${ searchText }`);
    }

    return (
      <>
          <div className="row">
            <div className="col-5">
              <h4>Search Form</h4>
              <hr />

              <form onSubmit={ handleSearch }>
                <input type="text"
                       placeholder="Search a hero"
                       className="form-control"
                       name="searchText"
                       autoComplete="off"
                       value={ searchText }
                       onChange={ handleInputChange }
                />

                <button
                       onClick={ handleSearch } 
                       className="btn btn-outline-primary mt-3"  
                       type="submit">
                       Search
                </button>
              </form>
            </div>

            <div className="col-7">
              <h4>Results</h4>
              <hr />
              {
                 (q === '') ? <div className="alert alert-info"> Search for a hero </div>
                            : ( heroesFiltered.length === 0) && <div className="alert alert-danger"> No results: { q } </div>
              }

              {
                 heroesFiltered.map( hero => (
                    <HeroCard 
                            key={ hero.id }
                            { ...hero }
                    />
                 ))
              }
            </div> 

          </div>
      </>
    )
}
  