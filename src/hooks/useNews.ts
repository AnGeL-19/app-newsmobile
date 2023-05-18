import React, { useCallback, useEffect, useState } from "react"

export const useNews = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    const getArticles = useCallback(async () => {
  
      try {

          setLoading(false)

          const response = await fetch(
            'https://newsapi.org/v2/top-headlines?pageSize=10&country=us&apiKey=fb82d469683e498e9ae85b49eda2590f',
          );

          const json = await response.json();
          setArticles(json.articles);
          setLoading(loading);

        } catch (error) {
          console.error(error);
          setLoading(false);
        }
  
    },[])
  
    useEffect(() => {
      getArticles()
    }, [])

    return { articles, loading }
}