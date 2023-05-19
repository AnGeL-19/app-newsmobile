import React, { useCallback, useEffect, useState } from "react"

export const useNews = () => {

    const [page, setPage] = useState(1)
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    const getArticles = useCallback(async () => {
  
      try {

          setLoading(true)
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?pageSize=10&page=${page}&country=us&apiKey=fb82d469683e498e9ae85b49eda2590f`,
          );

          const json = await response.json();

          if (json.articles && json.articles.length > 0) {
            setArticles(prev =>prev.concat(json.articles));
          }

          setLoading(false);

        } catch (error) {
          console.error(error);
          setLoading(true);
        }
  
    },[page])
  
    useEffect(() => {
      getArticles()
    }, [page])

    const nextPage = () => {
        setPage(prev => prev + 1)
    }

    return { articles, loading,  nextPage}
}