import React, { useState } from 'react';
import './App.css';

const getAllDevices = () => {
  fetch("https://localhost:9000/devices")
    .then((res) => {
        const devices = res.json()
        return devices;
    })
};

function App() {
  const [devices, setDevices] = useState()
  return (
    <div className="App grid place-content-center">
hi
    </div>
  );
}

export default App;
