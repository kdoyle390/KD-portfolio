import Card from './Card.js';
import { faClipboardList, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tarotCup from './imgs/tarotCup.png';
import tarotMoon from './imgs/tarotMoon.png';
import tarotSun from './imgs/tarotSun.png';
import tarotOutline from './imgs/tarotOutline.png';


function App() {

  
  const timeTitle = ['Past', 'Present', 'Future']
  const iconList = [tarotOutline, tarotMoon, tarotSun, tarotCup];

  // iconList.push();
  // iconList.push(<FontAwesomeIcon icon={faHourglassHalf} />);
  // iconList.push(<FontAwesomeIcon icon={faHourglassEnd} />)

  return (
    <div className="App">
      <div className="bio-container">
        <h1 id="name">Kelsey Doyle</h1>
        <h2 id="title">Software Engineer</h2>
        <p id="bio-text">Hi there! Welcome to my page. Hover over the tarot cards below to learn a little bit more about me and my software engineering journey.</p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[0]} border={iconList[0]} iconList={iconList[1]} id='card-left' /> 
          </div>
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[1]} border={iconList[0]} iconList={iconList[2]} id='card-center sun' /> 
          </div>
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[2]} border={iconList[0]} iconList={iconList[3]} id='card-right'/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
