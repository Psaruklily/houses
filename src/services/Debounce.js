import {useEffect} from 'react';

export default function useDebounce(value, handler) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            handler(value || null);
        }, 200);

        return () => {
            clearTimeout(timeout);
        }
    }, [value])
}
