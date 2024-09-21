import { useEffect, useState } from 'react';

const useFetch = (URL) => {
  const [data, setData] = useState(null); // Start with null, since no data yet
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // Create an abort controller for fetch cancellation
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before new request

      try {
        const res = await fetch(URL, { signal });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`); // More descriptive error
        }

        const result = await res.json();
        setData(result.data || result); // Use result directly if there's no 'data' field

      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Abort the fetch if component unmounts
    };
  }, [URL]);

  return { data, error, loading };
};

export default useFetch;
