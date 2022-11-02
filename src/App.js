import Card from './Card.js';


function App() {

  const timeTitle = ['Past', 'Present', 'Future']

  return (
    <div className="App">
      <div>
        <h1>Kelsey Doyle</h1>
        <h2>Software Engineer</h2>
        <p>Bio goes here...</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card timeTitle={timeTitle[0]} /> 
          </div>
          <div className="col-lg-4 col-md-12">
            <Card timeTitle={timeTitle[1]}/> 
          </div>
          <div className="col-lg-4 col-md-12">
            <Card timeTitle={timeTitle[2]}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
