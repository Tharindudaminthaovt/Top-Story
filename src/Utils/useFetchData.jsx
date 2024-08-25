import { useState, useEffect } from "react";
import axios from "axios";


const useFetchData = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }&sortBy=publishedAt`
      );
      
      setNews(response.data.articles);
     
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
 
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useFetchData;
