import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import Sidenav from './Components/Sidenav';


export default class App extends Component {
  pageSize = 8;
  apikey = 'ac9358b4233a4676954f1ea6674f9a28'

  state = {
    progress:0
  }
setProgress = (progress) =>{
  this.setState({progress: progress})
}

componentDidMount() {
  document.title = "Daily New App"; // Set default title
}
  render() {
    return (
      
      <BrowserRouter>
        
        <Navbar />
        <LoadingBar
        color='#FF0000'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>  
                  <Route path="/" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
                  <Route path="/general" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
                  
                  <Route path="/business" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in"  category="businees"/>} />
                  <Route path="/entertainment" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in"  category="entertainment" />} />        
                  <Route path="/sports" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in"  category="sports" />} />
                  <Route path="/science" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in"  category="science" />} />
                  <Route path="/technology" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in"  category="technology" />} />
                  <Route exact path="/health" element={<News  setProgress= {this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
              </Routes>           
      </BrowserRouter>
    
    )
  }
}


