import { Component } from "react"
import { NavLink } from "react-router-dom"
import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'
export default class Navbar extends Component{
    constructor(){
        super();
        this.state={
            mode: Dark
        }
        this.modeHandler = this.modeHandler.bind(this);
    }
    modeHandler(){
        if(this.state.mode===Dark){
            this.setState({mode:Light})
        }
        else{
            this.setState({mode:Dark})
        }
    }
    render(){
        let {stylec}=this.props;
        return(
            <>
                <nav className="h-14 w-[100vw] flex justify-between items-center fixed top-0 bg-gray-300/50 backdrop-blur-md">
                <div className="flex gap-4"> 
                    <div style={this.state.mode===Light?{color:'white'}:{color:'black'}} className="font-bold  text-xl ml-4">NewsMonkey<span className="text-red-500 font-extrabold text-xl">.</span></div>
                    <div className="flex gap-4  mt-1">
                        <NavLink to="/business"className={({isActive})=>
                            isActive?"font-bold ":""
                        } end>Business</NavLink>
                        <NavLink to="/entertainment"className={({isActive})=>
                            isActive?"font-bold ":""
                        }end>Entertainment</NavLink>
                        <NavLink to="/health"className={({isActive})=>
                            isActive?"font-bold ":""
                        }end>Health</NavLink>
                        <NavLink to="/science"className={({isActive})=>
                            isActive?"font-bold ":""
                        }end>Science</NavLink>
                        <NavLink to="/technology"className={({isActive})=>
                            isActive?"font-bold ":""
                        }end>Technology</NavLink>
                        <NavLink to="/sports"className={({isActive})=>
                            isActive?"font-bold ":""
                        }end>Sports</NavLink>
                    </div>
                </div>
                    <div className="mr-6 flex gap-4">
                    {/* <select name="catagory" id="">
                    </select> */}
                        <NavLink to='/' end className={({isActive})=>
                            isActive?"font-bold ":""
                        }>Home</NavLink>
                        <NavLink to='/about'className={({isActive})=>
                            isActive?"font-bold":""
                        } end>About</NavLink>
                        <img src={this.state.mode} onClick={()=>{
                            this.modeHandler();
                            stylec();
                        }
                        }
                             className="hover:cursor-pointer" alt="" />
                    </div>
                </nav>
            </>
        )
    }
}