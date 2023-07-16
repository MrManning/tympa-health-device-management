import React, { useState } from 'react';
import './App.css';

const getAllDevices = async () => {
  const devices = await fetch("http://localhost:9000/devices");
  console.log(devices)
};

function App() {
  const [devices, setDevices] = useState()
  getAllDevices();
  return (
    <div className="App grid place-content-center">
hi
    </div>
  );
}

export default App;
