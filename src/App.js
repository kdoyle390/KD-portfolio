import Card from './Card.js';
import tarotCup from './imgs/tarotCup.png';
import tarotMoon from './imgs/tarotMoon.png';
import tarotSun from './imgs/tarotSun.png';
import tarotOutline from './imgs/tarotOutline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload  } from '@fortawesome/free-solid-svg-icons';

// Add alt text to images

function App() {


  // const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const resumeIcon = <FontAwesomeIcon icon={faDownload} />
  const onButtonClick = () => {fetch('Kelsey Doyle_Resume.pdf')
        .then(response => {response.blob()
        .then(blob => {const fileUrl = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileUrl; 
            alink.download = 'Kelsey Doyle_Resume.pdf'; 
            alink.click(); 
          }) 
        }) 
      }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const timeTitle = ['Past', 'Present', 'Future']
  const iconList = [tarotOutline, tarotMoon, tarotSun, tarotCup];
  const backText = ["Over 7 years of experience in the test-development industry creating high-stakes examinations for physicians.", 
      "Software Engineering Certificate of Completion holder from Flatiron School. Searching for a Fullstack role.", 
      "Working in the non-profit sector using SE skills to find solutions to complex problems related to housing, food insecurity, or other public services."]

  return (
    <div className="App">
      <div className="bio-container">
        <h1 id="name">Kelsey Doyle</h1>
        <h2 id="title">Software Engineer</h2>
        <p id="bio-text">
            Hi there! Welcome to my page. Hover over the tarot cards below to learn a little bit more about me and my software engineering journey.
        </p>
        <div className="button-container container">
          <div className="row">
            <button onClick={onButtonClick} className="btn btn-outline-dark button-link col">
              {resumeIcon} Resume
            </button> 
            {/* <button className="btn btn-outline-dark button-link col"> 
              {emailIcon} Email
            </button > */}
            <button onClick={() => openInNewTab('https://www.linkedin.com/in/kelsey-doyle-chi/')} target="_blank" className="btn btn-outline-dark button-link col">
              LinkedIn
            </button >
            <button onClick={() => openInNewTab('https://github.com/kdoyle390')} className="btn btn-outline-dark button-link col">
             Github
            </button>
           

          </div>
        </div>
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
