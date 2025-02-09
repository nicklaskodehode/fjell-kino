import './Footer.css'
export const Footer = () => {
    return (
      <div className="footer-margin">
        <hr />
        <div className="footer">
          <b>Fjell Kino AS</b>
          <div className="footerFlex">
            <p>
              Address: <i>Fjellavegen 5357, FJELL</i>
            </p>
          </div>
          <p>
            Contact: <i>kontakt@fjellkino.no</i>
          </p>
        </div>
      </div>
    );
}