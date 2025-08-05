import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setcount] = useState(0);

  const fetchData = useCallback(async () => {
    if (!url) {
      return;
    }
    setLoading(true);
    setError(null);


    try {
      const response = await axios(url);
      setData(response?.data?.data);
      setcount(response?.data?.count);
      // console.log('-------response from api',response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData, count };
};

export default useFetchData;
