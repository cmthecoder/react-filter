import './App.css';
import Data from './MOCK_DATA.json'

function App() {


  return (
    <div className="App">
      <input type="text" placeholder='Search...' />
      {Data.map((val, index) => {
        return <div key={index}>{val.first_name}</div>
      })}
    </div>
  );
}

export default App;
