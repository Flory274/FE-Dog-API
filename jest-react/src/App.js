import React, { useEffect, useState } from "react";
import "./App.css";
import { getDogs } from "./api/dogs";
import Dogs from "./components/Dogs";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(async () => {
    const dogs = await getDogs();
    setDogs(dogs.message);
  }, []);

  console.log("hhfg", Dogs);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Menu />
        <div>
          {dogs.map((dog, index) => (
            <div key={index}>
              <Dogs image={dog} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
