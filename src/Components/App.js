import React,{Component} from "react";
import GlobalStyle from "./GlobalStyles";
import Home from "./Wrapper";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import {MyApi} from "../Api";
import {SeoulWeatherApi} from "../WeatherApi";

class App extends React.Component {

  async componentDidMount(){
    try{
        const {data:{data:{movies}}} = await MyApi.PHBoon();
        console.log(movies);

        const gettin = await MyApi.PHBoon();
        console.log(gettin);
    }catch{
        console.log("err");
    }
}

  async componentDidMount(){
    try{
        const Wgettin = await SeoulWeatherApi.SeoulWeather();
        console.log(Wgettin);
    }catch{
        console.log("err");
    }
  }
  
  render(){
    return(
      <>
      <Helmet>
        <title>0117 practice</title>
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Home/>
      <Footer/>
      </>
    );
  }
}

export default App;
