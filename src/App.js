import React from 'react';
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">
      <h1 className={`flex justify-center py-4 text-3xl text-white bg-[#00a884] font-serif `} >Friends App</h1>
      <Home />
    </div>
  );
}

export default App;
