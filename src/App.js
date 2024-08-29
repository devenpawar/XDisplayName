import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setSubmittedName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name: 
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Last Name: 
            <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedName && (
        <h2>{submittedName}</h2>
      )}
    </div>
  );
}

export default App;
