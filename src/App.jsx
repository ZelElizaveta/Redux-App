import './index.css';
import Ball from './IMG/ball.jpg';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={Ball} alt="surfing"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;