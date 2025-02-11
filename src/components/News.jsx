import { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
    api_key = import.meta.env.VITE_API_KEY
    constructor() {
        super();
        this.state = {
            articles: [],
            loaded: false,
            page: 1,
        }
    }
    static defaultProps = {
        title: 'NewsMonkey Top - Headlines',
        category: 'general'
    }
    static propTypes = {
        title: PropTypes.string,
    }
    capitalize = (text)=>{
        return (text[0].toUpperCase()+text.slice(1))
    }
    update= async (pg=1)=>{
        this.setState({ category: this.props.category })
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.api_key}&page=${pg}&pageSize=6`
        this.setState({ loaded: true })
        let res = await fetch(url);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loaded: false,
            noOfPages: Math.ceil(data.totalResults / 6),
        })
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`
    }
    prevClick = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.update(this.state.page-1);
    }
    nextClick = async () => {
        this.setState({
            page: this.state.page + 1,
        }),
        this.update(this.state.page+1)
    }
    componentDidMount() {
        this.setState({
            page: this.state.page
       }),
        this.update();
    }
    render() {
        let { styles, title } = this.props
        return (
            <>
                <div style={styles} className='w-[100vw] py-20'>
                    <div className='w-[80vw] mx-auto flex flex-col gap-7'>
                        <div className='lg:text-3xl text-2xl mx-auto font-bold'>{title}</div>
                        <div className='flex flex-wrap gap-7 justify-center items-center'>
                            {this.state.loaded ? (<Spinner contSt='h-[70vh] grid place-content-center w-[100vw]' />) : (this.state.articles).map((ele) => (
                                !this.state.loaded && <NewsItem key={ele.url} time={ele.publishedAt} auth={ele.author} url={ele.url} itemSt={styles.color === 'white' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} imgUrl={ele.urlToImage} title={ele.title} desc={ele.description} />))
                            }
                        </div>
                        <div className='flex justify-between'>
                            <button style={this.state.page > 1 ? { display: 'block' } : { visibility: 'hidden' }} onClick={this.prevClick} className='px-3 text-center rounded-xl py-1 text-white hover:cursor-pointer hover:bg-blue-500 bg-blue-600'>&larr; Previous</button>
                            <button style={(this.state.page + 1 <= this.state.noOfPages) ? { visibility: "visible" } : { visibility: "hidden" }} onClick={this.nextClick} className='px-3 text-center rounded-xl py-1 text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer'>Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}