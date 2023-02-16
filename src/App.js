import { useState } from 'react';
import Data from './MOCK_DATA.json'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <input
        type="text"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      {Data.filter((val) => {
        if(searchTerm === ''){
          return val
        } else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
        }
      }).map((val, index) => {
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
