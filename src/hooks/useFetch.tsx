import { useEffect, useState } from 'react';

function useFetch<Data>(url: string) {
  const [state, setState] = useState<{ data: Data | null; loading: boolean }>({
    data: null,
    loading: true
  });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setState({
          data: data.data,
          loading: false
        });
      });
  }, [url]);

  return state;
}

export default useFetch;
