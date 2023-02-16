import './App.css';
import Data from './MOCK_DATA.json'

function App() {


  return (
    <div className="App">
      <input type="text" placeholder='Search...' />
      {Data.map((val, index) => {
        return(
          <div className='user' key={index}>
            <p>{val.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
