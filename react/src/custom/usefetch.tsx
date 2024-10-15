import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
  const [Data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string |  null>();

  async function fetData() {
    if (url) {
      setPending(true);
      try {
        const response : any = fetch(url, { ...option });
        if(!response.ok) throw new Error((await response).statusText)
            const data = await response.json();
            setData(data);
            setError(null)
            setPending(false);
      } catch (e) {
        setError(`${e} Some error occur`);
        setPending(false);
      }
    }
  }
  useEffect(() => {
    fetData();
  }, [url]);

  return {Data,pending,error};
}
