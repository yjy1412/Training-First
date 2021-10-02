import logo from './logo.svg';
import './App.css';

function App() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: '양',
    lastName: '진영'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  )
  

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
