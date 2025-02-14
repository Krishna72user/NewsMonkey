import Navbar from './components/Navbar'
import News from './components/News'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import { useState } from 'react'
export default function App(){

  const[mode,setMode]=useState('light')
  const[styles,setStyles]=useState({color:'black',backgroundColor:'white' })

  function styleCnger(){
    if(mode=='dark'){
      setMode('light')
      setStyles({
        color:'black',
        backgroundColor:'white'
      })
    }
    else{
      setMode('dark')
      setStyles({
        color:'white',
        backgroundColor:'black'
      })
    }
  }
    return(
      <>
        <Navbar stylec={styleCnger} />
        <Routes>
          <Route path='/' element={<News country='us' styles = {styles}/>}/>
          <Route path='/business' element={<News country='us' key='business' title='NewsMonkey Top - Business - Headlines' category='business' styles = {styles}/>}/>
          <Route path='/entertainment' element={<News country='us' key='entertainment'title='NewsMonkey Top - Entertainment - Headlines' category='entertainment' styles = {styles}/>}/>
          <Route path='/sports' element={<News country='us' category='sports'key='sports'title='NewsMonkey Top - Sports - Headlines' styles = {styles}/>}/>
          <Route path='/health' element={<News country='us'key='health' title='NewsMonkey Top - Health - Headlines'  category='health' styles = {styles}/>}/>
          <Route path='/science' element={<News country='us'key='science' title='NewsMonkey Top - Science - Headlines' category='science' styles = {styles}/>}/>
          <Route path='/technology' element={<News country='us'key='technology' title='NewsMonkey Top - Technology - Headlines' category='technology' styles = {styles}/>}/>
          <Route path='/about' element={<About style = {styles} />}/>
        </Routes>
      </>
    )
  
}

