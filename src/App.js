import React from 'react';
// import Head from './componants/header';
// import Draw from './componants/draw';
// import Drawer from './componants/drawer';
import Todos from './componants/todo';
import data from './data.jsx';


function App() {
  return (
    <React.Fragment>
      {/* <Head />
      <Draw />
      <Drawer /> */}
      <Todos source={data} />
    </React.Fragment>
  );
}

export default App;
