import { MovieTickets } from "../components/MovieTickets"

export const Tickets = ({selectedMovie, selectedTime,setSelectedMovie,setSelectedTime}) => {
   
    return ( 
        <div>
            <MovieTickets selectedMovie={selectedMovie} selectedTime={selectedTime} setSelectedMovie={setSelectedMovie} setSelectedTime={setSelectedTime}/>
        </div>
    )
}