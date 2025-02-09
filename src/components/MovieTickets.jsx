import { useEffect, useState } from 'react';
import './MovieTickets.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MovieTickets = ({selectedMovie, selectedTime, setSelectedMovie, setSelectedTime}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const ticketCount = document.querySelector("#ticketCount");
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const movieDate = selectedDate.toLocaleDateString('en-US', options);

    useEffect(() => {
      const savedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
      const savedTime = localStorage.getItem("selectedTime");

      if (savedMovie && savedTime) {
        setSelectedMovie(savedMovie);
        setSelectedTime(savedTime);
      }
    }, []);

    if (!selectedMovie) {
      return <div>Loading...</div>;
    }
    
    const onSelectedTime = (time) => {
        setSelectedTime(time);
      };

    const handleSubtractTicket = () => {
        const tickets = document.querySelector("#ticketCount");
        if (tickets.textContent > 0) {
            tickets.textContent--;
        }
    }
    const handleAddTicket = () => {
        const tickets = document.querySelector("#ticketCount");
            tickets.textContent++;
    }

    const handleBuyTicket = () => {
       
        if (ticketCount.textContent > 0) {
        setShowPopup(true);
        setErrorMessage("");
        document.body.classList.add("popup-open");
        } else {
            setErrorMessage("You can't order 0 tickets!");
            setShowPopup(false);
        }
    }

    const handleClosePopup = () => {
        setShowPopup(false); 
        document.body.classList.remove("popup-open");
    }

    return (
      <div>
        {showPopup && (
            <div className='popup'>
            <h1>Tickets ordered!</h1>
            <h2 className='movieTitleReciept'>{selectedMovie.title}</h2>
            <div>
              <p>{movieDate}</p>
              <p>Time: {selectedTime}</p>
              <p>Hall: {selectedMovie.hall}</p>
              <p>Tickets: {ticketCount.textContent}</p>
            </div>

            <button className="closePopup" onClick={handleClosePopup}>Close</button>
          </div>
        )}
        <div className="movieTicketContainer">
          <div className="movieTicketImg">
            <img
              className="slideImg"
              src={selectedMovie.img}
              alt={selectedMovie.title}
              width="350px"
              height="500px"
            />
          </div>
          <div className="movieTicketInfo">
            <h1 id='movieTitle'>{selectedMovie.title}</h1>
            <div className="flex-movieInfo">
              <p id='movieHall'>Theater: {selectedMovie.hall}</p>
            </div>
            <div className='datePicker'>
                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} minDate={new Date()} maxDate={new Date(new Date().setDate(new Date().getDate() + 45))}  inline />
            </div>
            <div className="movieTimesTicket">
              {selectedMovie.times.map((time, index) => (
                <p id='movieTime' key={index} onClick={() => onSelectedTime(time)}
                className={selectedTime === time ? 'highlight' : ''}>
                  {time}
                </p>
              ))}
            
            </div>
            <div className='ticketAmount'>
                <button className='ticketButton' onClick={handleSubtractTicket}>-</button>
                <p id='ticketCount'>0</p>
                <button className='ticketButton' onClick={handleAddTicket}>+</button>
              </div>
            <div className='buyTicketContainer'>
            <div className='buyTicket' onClick={handleBuyTicket}>
                <p>Buy</p>
                <img className='ticketImg' src="./src/assets/tickets.png" alt="Buy Tickets" width="30px"/>
              </div>
              </div>
              {errorMessage && <div className="error">{errorMessage}</div>} 
            <div className='flex-movieInfo'><p id='moviePlayTime'>Playtime: {selectedMovie.playtime}</p>
            <div className="flex-rating">
                <p>{selectedMovie.rating}</p>
                <img src="./src/assets/star.png" width="20px" height="20px" alt="Rating Star"/>
              </div>
              </div>
          </div>
        </div>
      </div>
    );
}