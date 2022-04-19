import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = useSelector((state) => state.movieReducer.movies)
    const displayFavorites = useSelector((state) => state.favoritesReducer.displayFavorites)
    const favorites = useSelector((state) => state.favoritesReducer.favorites)
    // console.log(movies)
    const dispatch = useDispatch();
    // const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id));
    // const deleteMovie = props.deleteMovie

    const handleClick = () => {
        // console.log(movie.id);
        dispatch(deleteMovie(movie.id));
        push('/movies');
    }

    const handleFav = () => {
        dispatch(addFavorite(movie));
        push('/movies');
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {displayFavorites && <span onClick={handleFav} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete"><input onClick={handleClick} type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

// const mapStateToProps = (state) => {
//     return {
//         movies: state.movieReducer.movies
//     }
// }

export default Movie
// export default connect(null, {deleteMovie})(Movie);