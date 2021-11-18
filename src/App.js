/** @format */

import "./App.css";
import React from "react";
import Restaurant from "./components/Restaurant";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import Button from "./components/Buttons";
import Form from "./components/Form";




function App() {
  const [data, setData] = React.useState(Data);
  const [filter, setFilter] = React.useState(0);
  const [payment, setPayment] = React.useState("all");
  const [showRegister, setShowRegister] = React.useState(false);
  const [lowToHigh, setLowToHigh] = React.useState(false);
  const [highToLow, setHighToLow] = React.useState(false);

  const addMoreData = (value) => {
    console.log(value);
    setData([...data, value]);
    data.push(value);
  };

  return showRegister ? (
    <Form
      setShowRegister={setShowRegister}
      showRegister={showRegister}
      add={addMoreData}
    />
  ) : (
    <div>
      <Navbar setShowRegister={setShowRegister} showRegister={showRegister} />
      <Button
        setFilter={setFilter}
        setPayment={setPayment}
        lowToHigh={lowToHigh}
        setLowToHigh={setLowToHigh}
        highToLow={highToLow}
        setHighToLow={setHighToLow}
      />
      <div className='App'>
        <header className='App-header'>
          <Restaurant
            data={data}
            filter={filter}
            payment={payment}
            lowToHigh={lowToHigh}
            setLowToHigh={setLowToHigh}
            highToLow={highToLow}
            setHighToLow={setHighToLow}
          />
        </header>
      </div>
    </div>
  );
}

export default App;
