import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = ({ url, payLoad, get, post, put, delet }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };
  const postData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url, { data: payLoad });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    get ? fetchData() : post && postData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
