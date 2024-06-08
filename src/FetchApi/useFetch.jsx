import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error while fetching data");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;
