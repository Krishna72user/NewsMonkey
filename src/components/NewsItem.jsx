import { Component } from "react"

export default class NewsItem extends Component{
    constructor(){
        super();
    }
    render(){
        let {imgUrl,title,desc,url,itemSt,auth,time}=this.props;
        return(
            <>
                <div style={itemSt} className="flex flex-col pb-7 w-[20em] justify-center items-center gap-5 rounded-2xl">
                    <img src={imgUrl!==null||imgUrl==""?imgUrl:'https://dims.apnews.com/dims4/default/ca91408/2147483647/strip/true/crop/3476x1955+0+181/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5d%2F2d%2F3b78f638c5431cc3e09e44e3d421%2F2f6234e5bc564a599f285890c0be2cd4'} className="rounded-t-xl" alt="" />
                    <div className="px-4 flex flex-col  gap-3">
                        <div className="title font-bold text-xl ">{title!==null?title:""}</div>
                        <div className="desc ">{desc!==null?desc:""}</div>
                    </div>
                    <p className="px-3 text-sm text-gray-500">By {auth?auth:"Unknown"} on {(new Date(time)).toDateString() }</p>
                    <a href={url} target="_blank" className="py-1 px-4  hover:cursor-pointer rounded-xl text-white bg-blue-500 hover:bg-blue-300" >Read more</a>
                </div>
            </>
        )
    }
}