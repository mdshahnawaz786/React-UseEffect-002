import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Movie from "./Components/Movie";



const App = () => {

  const [first, setfirst] = useState("")
  const [button, setButton] = useState(false)
  const [data, setData] = useState("")


  

  useEffect(() => {
    fetchApi(first)
  }, [button])
  


  async function fetchApi(searchInput){
    const fetchedApi = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=aac381e6`)
    const toText = await fetchedApi.text();
    const toJson = JSON.parse(toText)
    console.log(toJson);
    // console.log(toJson.Title);
    // console.log(toJson.Year);
    // console.log(toJson.Type);
    // console.log(toJson.Poster);

   setData(toJson.Search)
  }



  return <div className="App">
    <Header heading="HOOKED"/>
    <Input first={first} setfirst={setfirst} button={button} setButton={setButton}/>
   
    <p style={{textAlign:"center", color:"#2c2e37"}}>Sharing a few of our favourite movies</p>
   


    <Movie data={data}/>
  </div>;
};

export default App;
