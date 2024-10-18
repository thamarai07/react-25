import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
  const [Data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null); // Fixing type

  async function fetchData() {
    if (url) {
      setPending(true);
      try {
        const response = await fetch(url, { ...option }); // Await fetch
        if (!response.ok) throw new Error(response.statusText); // Proper error handling

        const data = await response.json(); // Correct method is `.json()`
        setData(data);
        setError(null); // Clear error if successful
      } catch (e) {
        setError(`${e} - Some error occurred`);
      } finally {
        setPending(false); // Always set pending to false after request completes
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [url, error]); // Only refetch when URL or options change

  return { Data, pending, error };
}
