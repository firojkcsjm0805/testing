import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const App = () => {
  const history = useHistory()

  const _handleFormData = () => {
    history.push('/about',{some:'firoj khan'})
  }
 
  return (
    <div className='container'>
            <form className='building-dropdown'  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <select style={{ width: '121px' }}>
                <option value='Building 4'>Building 4</option>
                <option value='Building 6'>Building 6</option>
                <option value='Building 8'>Building 8</option>
              </select>
            </form>      
      <div className='building-dialog-box' style={{width:'400px'}}>
        <div>
          <p>Bukfjkdjfkd</p>
          <p>num of room</p>
          <hr/>
        </div>
        <div>
          <p>Bukfjkdjfkd</p>
          <p>num of room</p>
          <hr />
        </div>
        <div>
          <p>Bukfjkdjfkd</p>
          <p>num of room</p>
          <p>dfdfdfdfdffd</p>
          <hr />
        </div>
        <button onClick={_handleFormData}>Add mitting</button>
      </div>

    </div>
  )
}
export default App;