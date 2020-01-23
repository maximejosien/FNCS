import React from 'react';
import ReactDOM from 'react-dom';
import UserPanel from './UserPanel';
// import SearchStation from './SearchStation.js'

function App({ isLogged }) {
  // const name = 'Maxime';
  // const welcoming = <p>Bonjour {name}</p>;

  return (
    <>
    {
      <>
        {/*<SearchStation></SearchStation>*/}
        <UserPanel lastName="Maxime" firstName="JOSIEN"/>
      </>
    }
    </>
  )
}

ReactDOM.render(<App isLogged={true}/>, document.getElementById('root'));


// ReactDOM.render(React.createElement(UserPanel, { email: 'maxime.jsn@gmail.com', firstName: 'Maxime', lastName: 'JOSIEN' }), document.getElementById('root'));
