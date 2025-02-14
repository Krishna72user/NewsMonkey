import { Component } from "react"
import { NavLink } from "react-router-dom"
import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            mode: Dark,
            trans: false
        }
        this.modeHandler = this.modeHandler.bind(this);
    }

    drawer = () => {
        if (this.state.trans === false) {
            this.setState({ trans: true })
        }
        else {
            this.setState({ trans: false })
        }
    }
    modeHandler() {
        if (this.state.mode === Dark) {
            this.setState({ mode: Light })
        }
        else {
            this.setState({ mode: Dark })
        }
    }
    render() {
        let { stylec } = this.props;
        return (
            <>
                <nav className="lg:invisible">
                    <div className={`h-94 ${this.state.trans ? 'visible' : 'hidden'}  ${this.state.mode === Light ? "bg-black" : "bg-white"}`}></div>
                    <div className="h-14 w-[100vw] flex  justify-between items-center z-10 fixed top-0  bg-gray-300/50 backdrop-blur-md">
                        <div style={this.state.mode === Light ? { color: 'white' } : { color: 'black' }} className="font-bold text-xl ml-4">NewsMonkey<span className="text-red-500 font-extrabold text-xl">.</span></div>
                        <div className="mr-8 flex gap-4">
                            <img src={this.state.mode} onClick={() => {
                                this.modeHandler();
                                stylec();
                            }} className="hover:cursor-pointer" alt="" />
                            <FontAwesomeIcon icon={faBarsStaggered} className="hover:cursor-pointer" onClick={this.drawer} style={this.state.mode === Light ? { color: 'white' } : { color: 'black' }} size="lg" />
                        </div>
                    </div>
                    <div style={this.state.mode === Light ? { color: 'white' } : { color: 'black' }} className={`flex gap-4 w-[100vw] justify-center text-md p-5 -translate-y-80  items-center fixed transition-transform duration-1000 ${this.state.trans ? "-translate-y-5" : ""} bg-gray-300/50 backdrop-blur-md flex-col`}>
                        <NavLink to='/' end className={({ isActive }) =>
                            isActive ? "font-bold " : ``
                        }>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) =>
                            isActive ? "font-bold" : ""
                        } end>About</NavLink>
                        <NavLink to="/business" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Business</NavLink>
                        <NavLink to="/entertainment" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Entertainment</NavLink>
                        <NavLink to="/health" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Health</NavLink>
                        <NavLink to="/science" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Science</NavLink>
                        <NavLink to="/technology" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Technology</NavLink>
                        <NavLink to="/sports" className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        } end>Sports</NavLink>
                    </div>
                </nav>



                <nav className="h-14 w-[100vw] invisible lg:visible flex justify-between items-center fixed top-0 bg-gray-300/50 backdrop-blur-md">
                    <div className="flex gap-4">
                        <div style={this.state.mode === Light ? { color: 'white' } : { color: 'black' }} className="font-bold text-xl md:text-2xl ml-4">NewsMonkey<span className="text-red-500 font-extrabold text-xl">.</span></div>
                        <div className="flex gap-4  mt-1">
                            <NavLink to="/business" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Business</NavLink>
                            <NavLink to="/entertainment" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Entertainment</NavLink>
                            <NavLink to="/health" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Health</NavLink>
                            <NavLink to="/science" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Science</NavLink>
                            <NavLink to="/technology" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Technology</NavLink>
                            <NavLink to="/sports" className={({ isActive }) =>
                                isActive ? "font-bold " : ""
                            } end>Sports</NavLink>
                        </div>
                    </div>
                    <div className="mr-6 flex gap-4">
                        <NavLink to='/' end className={({ isActive }) =>
                            isActive ? "font-bold " : ""
                        }>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) =>
                            isActive ? "font-bold" : ""
                        } end>About</NavLink>
                        <img src={this.state.mode} onClick={() => {
                            this.modeHandler();
                            stylec();
                        }} className="hover:cursor-pointer" alt="" />
                    </div>
                </nav>
            </>
        )
    }
}