import { useEffect, useState } from "react";

export interface UseFetchType<T> {
    data: T;
    isLoading: boolean;
    error: string;
    postData: (data: T) => void;
}

interface PostDataOptions {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
}

const useFetch = <T>(url: string, method = "GET"): UseFetchType<T> => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [options , setOptions] = useState<PostDataOptions | null>(null);

    const postData = (data: T) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    // Empty array dependency, use effect runs only once
    useEffect(() => {
        const abortCntrl = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
      
            try {
              const res = await fetch(url, { ...options,signal: abortCntrl.signal, method });
      
              if (!res.ok) {
                throw new Error(res.statusText);
              }
              const resData = (await res.json()) as T;
      
              setIsLoading(false);
              setError("");
              setData(resData);
            } catch (err: unknown) {
              setIsLoading(false);
              let error = "Could not fetch the data";
      
              if (err instanceof Error) {
                error += ": " + err.message;
              }
      
              if (abortCntrl.signal.aborted) {
                error += ". The fetch was aborted";
              }
      
              setError(error);
            }
        };

        if (method === "GET") {
            fetchData();
        }

        if (method === "POST" && options) {
            fetchData();
        }

        // Clean up function
        return () => abortCntrl.abort();
    }, [url, options, method]);

    return {data, error, isLoading, postData} as UseFetchType<T>;
}

export default useFetch;