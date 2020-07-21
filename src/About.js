import React from 'react';
// import Fromroom from './Freeroom';
import { useHistory } from 'react-router-dom';

const About = () => {
    const history = useHistory()
    const _handleRoom = () => {
        history.push('/freeroom')
    }
    return (
        <div className='container'>
            <form className='building-dialog-box' style={{ display: 'flex', flexDirection: 'column', 
                 justifyContent: 'space-between',width:'400px',height:'80vh',padding:'10px'}}>
                <h2 style={{ textAlign: 'center' }}>Add Metting</h2>
                <label>Date :
                <input placeholder='Date' />
                </label>
                <label>Start Time :
                <input placeholder='Start Time' />
                </label>
                <label> End Time :
                <input placeholder='End Time' />
                </label>
                <select style={{ width: '121px' }}>
                    <option value='Building 4'>Building 4</option>
                    <option value='Building 6'>Building 6</option>
                    <option value='Building 8'>Building 8</option>
                </select>
                <button onClick={_handleRoom}>Next</button>
            </form>
        </div>
    )
}
export default About;