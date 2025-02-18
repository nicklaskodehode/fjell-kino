
import './AboutKino.css'

export const AboutKino = () => {
    return (
      <div className='aboutContainer'>
        <h1>About us</h1>
        <div className='aboutInfo'>
          <p>
            Fjell Kino er din lokale kino, plassert midt i hjertet av Fjell. Vi
            tilbyr de nyeste filmene i moderne saler med topp lyd og bilde. Med
            et fokus på fellesskap og kvalitet, er vi stedet for både store
            filmopplevelser og hyggelige stunder.
          </p>
          <p>We are open every day 10:00 - 02:00</p>
        </div>
        <img src='/assets/FjellKino.png' width="500px" alt='Fjell Kino Image'/> 
      </div>
    );
}