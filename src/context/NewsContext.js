import { createContext, useEffect, useState } from "react"

export const NewsContext = createContext()

export const NewsContextProvider = ({children}) => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c2543e08103b4d76880f9e8be84e09b6')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    return (
        <NewsContext.Provider value={{data}} >
            {children}
        </NewsContext.Provider>
    )
}
