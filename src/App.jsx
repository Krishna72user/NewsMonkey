import Navbar from './components/Navbar'
import News from './components/News'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import { Component } from 'react'
export default class App extends Component{
  styles={
    color:'black',
    backgroundColor:'white'
  }
  constructor(){
    super();
    this.state={
      mode:'light',
    }
    this.styleCnger=this.styleCnger.bind(this);
  }
  styleCnger(){
    if(this.state.mode=='dark'){
      this.setState({mode:'light'})
      this.styles={
        color:'black',
        backgroundColor:'white'
      }
    }
    else{
      this.setState({mode:'dark'})
      this.styles={
        color:'white',
        backgroundColor:'black'
      }
    }
  }
  render(){
    return(
      <>
        <Navbar stylec={this.styleCnger} />
        <Routes>
          <Route path='/' element={<News country='us' styles = {this.styles}/>}/>
          <Route path='/business' element={<News country='us' key='business' title='NewsMonkey Top - Business - Headlines' category='business' styles = {this.styles}/>}/>
          <Route path='/entertainment' element={<News country='us' key='entertainment'title='NewsMonkey Top - Entertainment - Headlines' category='entertainment' styles = {this.styles}/>}/>
          <Route path='/sports' element={<News country='us' category='sports'key='sports'title='NewsMonkey Top - Sports - Headlines' styles = {this.styles}/>}/>
          <Route path='/health' element={<News country='us'key='health' title='NewsMonkey Top - Health - Headlines'  category='health' styles = {this.styles}/>}/>
          <Route path='/science' element={<News country='us'key='science' title='NewsMonkey Top - Science - Headlines' category='science' styles = {this.styles}/>}/>
          <Route path='/technology' element={<News country='us'key='technology' title='NewsMonkey Top - Technology - Headlines' category='technology' styles = {this.styles}/>}/>
          <Route path='/about' element={<About style = {this.styles} />}/>
        </Routes>
      </>
    )
  }
}

