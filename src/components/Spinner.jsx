import  { Component } from 'react'
import loader from '../assets/loading.gif'
export default class Spinner extends Component{
    render(){
        let {contSt}=this.props
        return(
            <div className={contSt}>
                <img src={loader} className='h-20 w-20'alt=""/>
            </div>
        )
    }
}