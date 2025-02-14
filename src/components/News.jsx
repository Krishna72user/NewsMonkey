import { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import LoadingBar from "react-top-loading-bar";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    api_key = import.meta.env.VITE_API_KEY
    constructor() {
        super();
        this.state = {
            articles: [],
            loaded: false,
            page: 1,
            tR: 0,
            progress:0
        }
    }
    static defaultProps = {
        title: 'NewsMonkey Top - Headlines',
        category: 'general'
    }
    static propTypes = {
        title: PropTypes.string
    }
    capitalize = (text) => {
        return (text[0].toUpperCase() + text.slice(1))
    }
    fetchMore = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.api_key}&page=${this.state.page+1}`
        let res = await fetch(url);
        let data = await res.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            page: this.state.page + 1,
        })
        console.log(data)
        console.log("tr:", this.state.tR)
        console.log("loaded:", this.state.articles.length + data.articles.length)
    }
    update = async () => {
        this.setState({ category: this.props.category, loaded: true,progress:50 })
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.api_key}&page=1`
        let res = await fetch(url);
        let data = await res.json();
        this.setState({
            articles: data.articles,
            loaded: false,
            tR: data.totalResults,
            progress:100
        })
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`
    }
    componentDidMount() {
        this.update();
        this.setState({
            progress:0
        })
    }
    render() {
        let { styles, title } = this.props
        return (
            <>
                <LoadingBar
                color="#f11946"
                progress={this.state.progress}
                onLoaderFinished={() =>this.state.progress}
                />
                <div style={styles} className='w-[100vw] py-20'>
                    <div className='w-[80vw] mx-auto flex flex-col gap-7'>
                        <div className='lg:text-3xl text-2xl mx-auto flex justify-center font-bold'>{title}</div>
                        <InfiniteScroll
                            dataLength={this.state.articles.length} //This is important field to render the next data
                            next={this.fetchMore}
                            hasMore={this.state.articles.length+this.state.page < this.state.tR}
                            loader={<Spinner contSt="flex items-center justify-center mt-7" />}>
                            <div className='flex flex-wrap gap-7 justify-center items-center'>
                                {this.state.loaded ? (<Spinner contSt='h-[70vh] grid place-content-center w-[100vw]' />) : (this.state.articles).map((ele) => (
                                    !this.state.loaded && <NewsItem key={ele.url} time={ele.publishedAt} auth={ele.author} url={ele.url} itemSt={styles.color === 'white' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} imgUrl={ele.urlToImage || ele.urlToImage !== "" ? ele.urlToImage : 'https://sportshub.cbsistatic.com/i/r/2025/02/11/b8507a2f-3f33-4c86-9dbe-51e8b4f00a43/thumbnail/1200x675/2c15065fcfee90a14f21dea07d0d7039/unctop25-1.jpg'} title={ele.title} desc={ele.description} />))
                                }
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </>
        )

    }
}