import { useEffect, useState } from "react";

export interface UseFetchType<T> {
    data: T;
    isLoading: boolean;
    error: string;
}

const useFetch = <T>(url: string): UseFetchType<T> => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    // Empty array dependency, use effect runs only once
    useEffect(() => {
        const abortCntrl = new AbortController();

        fetch(url, { signal: abortCntrl.signal })
        .then((res: Response) => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
    
            return res.json();
        })
        .then((data: T) => {
            setData(data);
            setIsLoading(false);
            setError('');
        })
        .catch((err: TypeError) => {
            if (err.name === 'AbortError') {
                console.log('Fetch Aborted');
            } else {
                setIsLoading(false);
                setError(err.message);
            }
        });

        // Clean up function
        return () => abortCntrl.abort();
    }, [url]);

    return {data, error, isLoading} as UseFetchType<T>;
}

export default useFetch;