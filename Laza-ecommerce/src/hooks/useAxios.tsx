import { http } from 'api';
import { useEffect, useState } from 'react';

type useAxiosProps = {
  method: string;
  url: string;
  headers?: any;
  body?: string; // post, put, patch
};

const useAxios = ({ url, method, body }: useAxiosProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await http({
          method,
          url,
          data: body,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await resp?.data;

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useAxios;
