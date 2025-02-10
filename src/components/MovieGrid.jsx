import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MovieGrid.css';
import starIcon from "../assets/star.png";

export const MovieGrid = ({onSelectedMovieTime,actionMovies,comedyMovies,scifiMovies,animationMovies,dramaMovies}) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  }

    return (
      <div>
        <div className="slideGridContainer">
        <h2>Action</h2>
          <Slider {...settings}>
            {actionMovies.map((movie, index) => (
              <div key={index} className="movieGridContainer">
                <div className="moviePosterContainer">
                  <img className="slideImg" src={movie.img} alt={movie.title} width="200px" height="300px" />
                  <h2>{movie.title}</h2>
                </div>
                <div className="movieInfo">
                <div  className="flex-movieInfo">
                <p>Theater: {movie.hall}</p>
                <div className="flex-rating">
                  <p>{movie.rating}</p>
                  <img src={starIcon} width="20px" height="20px" alt="Rating Star"/>
                </div>
                </div>
                <div className="movieTimes">
                  {movie.times.map((time, index) => (
                    <p key={index} onClick={() => onSelectedMovieTime(movie, time)}>{time}</p>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slideGridContainer">
        <h2>Comedy</h2>
          <Slider {...settings}>
            {comedyMovies.map((movie, index) => (
              <div key={index} className="movieGridContainer">
                <div className="moviePosterContainer">
                  <img className="slideImg" src={movie.img} alt={movie.title} width="200px" height="300px"/>
                  <h2>{movie.title}</h2>
                </div>
                <div className="movieInfo">
                <div  className="flex-movieInfo">
                <p>Theater: {movie.hall}</p>
                <div className="flex-rating">
                  <p>{movie.rating}</p>
                  <img src={starIcon} width="20px" height="20px" alt="Rating Star" />
                </div>
                </div>
                <div className="movieTimes">
                  {movie.times.map((time, index) => (
                    <p key={index} onClick={() => onSelectedMovieTime(movie, time)}>{time}</p>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slideGridContainer">
        <h2>Sci-fi</h2>
          <Slider {...settings}>
            {scifiMovies.map((movie, index) => (
              <div key={index} className="movieGridContainer">
                <div className="moviePosterContainer">
                  <img className="slideImg" src={movie.img} alt={movie.title} width="200px" height="300px"/>
                  <h2>{movie.title}</h2>
                </div>
                <div className="movieInfo">
                <div  className="flex-movieInfo">
                <p>Theater: {movie.hall}</p>
                <div className="flex-rating">
                  <p>{movie.rating}</p>
                  <img src={starIcon} width="20px" height="20px" alt="Rating Star"/>
                </div>
                </div>
                <div className="movieTimes">
                  {movie.times.map((time, index) => (
                    <p key={index} onClick={() => onSelectedMovieTime(movie, time)}>{time}</p>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slideGridContainer">
        <h2>Animation</h2>
          <Slider {...settings}>
            {animationMovies.map((movie, index) => (
              <div key={index} className="movieGridContainer">
                <div className="moviePosterContainer">
                  <img className="slideImg" src={movie.img} alt={movie.title} width="200px" height="300px"/>
                  <h2>{movie.title}</h2>
                </div>
                <div className="movieInfo">
                <div  className="flex-movieInfo">
                <p>Theater: {movie.hall}</p>
                <div className="flex-rating">
                  <p>{movie.rating}</p>
                  <img src={starIcon} width="20px" height="20px" alt="Rating Star"/>
                </div>
                </div>
                <div className="movieTimes">
                  {movie.times.map((time, index) => (
                    <p key={index} onClick={() => onSelectedMovieTime(movie, time)}>{time}</p>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slideGridContainer">
        <h2>Drama</h2>
          <Slider {...settings}>
            {dramaMovies.map((movie, index) => (
              <div key={index} className="movieGridContainer">
                <div className="moviePosterContainer">
                  <img className="slideImg" src={movie.img} alt={movie.title} width="200px" height="300px"/>
                  <h2>{movie.title}</h2>
                </div>
                <div className="movieInfo">
                <div  className="flex-movieInfo">
                <p>Theater: {movie.hall}</p>
                <div className="flex-rating">
                  <p>{movie.rating}</p>
                  <img src={starIcon} width="20px" height="20px" alt="Rating Star"/>
                </div>
                </div>
                <div className="movieTimes">
                  {movie.times.map((time, index) => (
                    <p key={index} onClick={() => onSelectedMovieTime(movie, time)}>{time}</p>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
}