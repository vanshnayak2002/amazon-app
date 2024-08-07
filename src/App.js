

import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;














// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AllTrain from './AllTrain';
// import SingleTrain from './SingleTrain';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={AllTrain} />
//         <Route path="/train/:id" component={SingleTrain} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;