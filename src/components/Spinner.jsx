import loader from '../assets/loading.gif'
export default function Spinner ({contSt}){
        return(
            <div className={contSt}>
                <img src={loader} className='h-20 w-20'alt=""/>
            </div>
        )
}