import './App.css';
import './css/home.css'
import Home from './componets/Home';

function App() {
  console.log("API Key:", process.env.REACT_APP_API_KEY);
  console.log("API Key:", process.env.REACT_APP_BASE_URL);
  console.log("API Key:", process.env.REACT_APP_DAY);
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
