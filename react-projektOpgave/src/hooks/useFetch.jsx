import { useEffect, useState } from "react";

const useFetch = (url, key) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(key ? data[key] : data);
    console.log("Fetch Attempt", data);
  };

  useEffect(() => {
    fetchData();
  }, [url, key]);

  return { data };
};

export default useFetch;
