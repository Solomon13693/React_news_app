import React from 'react'

function NewsData({news}) {
    return (
        <div className="border p-8">
            <h1 className="mb-5 text-2xl font-bold border-b  pb-4">{news.title}</h1>
            <p className="text-xs mb-5">{news.description}</p>
            <a target="_blank" href={news.url}> <i className="fas fa-globe"></i>  <span className="text-blue-900 text-xs" >{news.url}</span></a>
            <p className="my-3"><i class="fas fa-user-tie"></i> {news.author}</p>
            <p className=""><i class="fas fa-calendar-alt"></i> {news.publishedAt}</p>
        </div>
    )
}

export default NewsData
