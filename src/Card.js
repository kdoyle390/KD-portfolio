import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({timeTitle, iconList}) {
    return(
        <div className="tarot-card">
            <p className="fa-icon-styling">
                {iconList}
            </p>
            <h1 className="card-title">{timeTitle}</h1>
        </div>
    )
}

export default Card;
// config style then refactor
// Can I move an id up to the App level to change shadow properties for each card?