import { MovieSlider } from "../components/MovieSlider"
import { upcomingMovieData, actionMovieData, comedyMovieData, scifiMovieData, animationMovieData, dramaMovieData } from "../components/MovieData"
import { MovieGrid } from "../components/MovieGrid"
import { useNavigate } from "react-router-dom"

export const Home = ({setSelectedMovie, setSelectedTime}) => {
    const navigate = useNavigate();
    const handleSelectedMovieTime = (movie,time) => {

        setSelectedMovie(movie);
        setSelectedTime(time);
        
        localStorage.setItem("selectedMovie", JSON.stringify(movie));
        localStorage.setItem("selectedTime", time);
        navigate('/tickets');
    }
    return ( 
        <div>
            <MovieSlider movies={upcomingMovieData}/>
            <MovieGrid onSelectedMovieTime={handleSelectedMovieTime} setSelectedMovie={setSelectedMovie} actionMovies={actionMovieData} comedyMovies={comedyMovieData}scifiMovies = {scifiMovieData} animationMovies = {animationMovieData} dramaMovies = {dramaMovieData}/>
        </div>
    )
}