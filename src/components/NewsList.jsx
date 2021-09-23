import React, { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'
import NewsData from '../components/NewsData'
import PreLoader from './PreLoader';

function NewsList() {
    const {data} = useContext(NewsContext)
    console.log(data);
    return (
        <div className="container m-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" >
            {data ? data.articles.map(news => <NewsData news={news} key={news.url} /> ) :  <PreLoader/> }
        </div>
    )
}

export default NewsList
