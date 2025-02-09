import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './MovieSlider.css'

export const MovieSlider = (props) => {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      }
    return (
      <div>
        <h1>Upcoming Movies</h1>
        <div className="slideContainer">
        <Slider {...settings}>
          {Object.values(props.movies).map((movie, index) => (
            <div key={index} id="movieContainer" className="movieContainer">
              <div className="movie">
                <img className="slideImg" src={movie.img} alt={movie.title} width="280px" height="420px" />
                <h2>{movie.title}</h2>
                <p className="release">Release: {movie.release}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    );
}