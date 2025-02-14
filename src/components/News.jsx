import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import LoadingBar from "react-top-loading-bar";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';
export default function News({title= 'NewsMonkey Top - Headlines',category= 'general',country,styles}) {
    const api_key = import.meta.env.VITE_API_KEY
    const[articles,setArticles]=useState([])
    const[loaded,setLoaded]=useState(false)
    const[page,setPage]=useState(1)
    const[tR,setTr]=useState(0)
    const[progress,setProgress]=useState(0)
    function capitalize (text){
        return (text[0].toUpperCase() + text.slice(1))
    }
    const fetchMore = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${api_key}&page=${page+1}`
        let res = await fetch(url);
        let data = await res.json();
        setArticles(articles.concat(data.articles))
        setPage(page+1)
    }
    const update = async () => {
        setLoaded(true)
        setProgress(50)
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${api_key}&page=1`
        let res = await fetch(url);
        let data = await res.json();
        setArticles(data.articles)
        setLoaded(false)
        setTr(data.totalResults)
        setProgress(100)
        document.title = `${capitalize(category)} - NewsMonkey`
    }
    useEffect(()=>{
        update();
        setProgress(0)
    },[])
        return (
            <>
                <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() =>progress}
                />
                <div style={styles} className='w-[100vw] py-20'>
                    <div className='w-[80vw] mx-auto flex flex-col gap-7'>
                        <div className='lg:text-3xl text-2xl mx-auto flex justify-center font-bold'>{title}</div>
                        <InfiniteScroll
                            dataLength={articles.length} //This is important field to render the next data
                            next={fetchMore}
                            hasMore={articles.length+page< tR}
                            loader={<Spinner contSt="flex items-center justify-center mt-7" />}>
                            <div className='flex flex-wrap gap-7 justify-center items-center'>
                                {loaded ? (<Spinner contSt='h-[70vh] grid place-content-center w-[100vw]' />) : (articles).map((ele) => (
                                    !loaded && <NewsItem key={ele.url} time={ele.publishedAt} auth={ele.author} url={ele.url} itemSt={styles.color === 'white' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }} imgUrl={ele.urlToImage || ele.urlToImage !== "" ? ele.urlToImage : 'https://sportshub.cbsistatic.com/i/r/2025/02/11/b8507a2f-3f33-4c86-9dbe-51e8b4f00a43/thumbnail/1200x675/2c15065fcfee90a14f21dea07d0d7039/unctop25-1.jpg'} title={ele.title} desc={ele.description} />))
                                }
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </>
        )
        
    }
News.propTypes = {
    title: PropTypes.string
}