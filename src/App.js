import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import CollectionCard from "./components/CollectionCard";
import Punklist from "./components/Punklist";
import axios from "axios";
import Main from "./components/Main";

// use effect is for API call.

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xB2a100F369936F56880C3735a4FA6e748604EBc3&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main/>
      {/* <CollectionCard
        id={0}
        name={"Cyber Punk"}
        traits={[{ value: 7 }]}
        image="https://lh3.googleusercontent.com/hJKQWDj6ZUlEnBsdxH-_gK7sAosVTJjBLP_UE4TD-wVBFATfXgRJheHy1CGwp8Ly3Gz3yNvW7H9fJOjbyYt6qsmDzcld6ObliXouJz8=w301"
      /> */}
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
