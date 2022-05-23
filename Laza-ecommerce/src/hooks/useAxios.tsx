import { useEffect, useState } from 'react';

// API
import { http } from 'api';

type useAxiosProps = {
  method: string;
  url: string;
  headers?: any;
  body?: string; // post, put, patch
};

export interface IResponse<T> {
  data: T;
  loading: boolean;
  error: any;
}

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
        });

        setData(resp.data ? resp.data : resp);
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
