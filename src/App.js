import React from 'react';
import './App.css';
import { User } from "./User";

function App() {

  const user = { name: 'Mary', username: 'mary', email: 'mary@email.com' };

  return (
    <div className="App">
      <h1>Hi, {user.name}</h1>
       <User user={ user } />
    </div>
  );
}

export default App;
