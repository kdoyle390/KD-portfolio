import Card from './Card.js';
import tarotCup from './imgs/tarotCup.png';
import tarotMoon from './imgs/tarotMoon.png';
import tarotSun from './imgs/tarotSun.png';
import tarotOutline from './imgs/tarotOutline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { envelope } from '@fortawesome/fontawesome-svg-core';

function App() {


  const emailIcon = <FontAwesomeIcon icon="fa-solid fa-envelope" />;
  const timeTitle = ['Past', 'Present', 'Future']
  const iconList = [tarotOutline, tarotMoon, tarotSun, tarotCup];
  const backText = ["Over 7 years of experience in the test-development industry creating high-stakes examinations for physicians exiting their residency programs. Duties included careful analysis of item-bank contents, creation of item-writing assignments to cover areas of need, and coordinating production of meeting materials for over 30 yearly meetings.", 
      "After obtaining a Certificate of Completion from Flatiron School's Software Engineering program...", 
      "Working in the non-profit sector using my software engineering skills to find solutions to complex problems related to housing, food insecurity, public services, etc."]

  return (
    <div className="App">
      <div className="bio-container">
        <h1 id="name">Kelsey Doyle</h1>
        <h2 id="title">Software Engineer</h2>
        <p id="bio-text">
            Hi there! Welcome to my page. Hover over the tarot cards below to learn a little bit more about me and my software engineering journey.
        </p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[0]} 
                    border={iconList[0]} 
                    iconList={iconList[1]}
                    backText={backText[0]}  
                    id='card-left' /> 
          </div>
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[1]} 
                    border={iconList[0]} 
                    iconList={iconList[2]}
                    backText={backText[1]}  
                    id='card-center sun' /> 
          </div>
          <div className="col-lg-4 col-md-12 card-container">
            <Card timeTitle={timeTitle[2]} 
                    border={iconList[0]} 
                    iconList={iconList[3]}
                    backText={backText[2]} 
                    id='card-right'/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
