import { useState } from 'react';

type LoadingHookResult = [boolean, (loading: boolean) => void, () => void];

const useLoading = (): LoadingHookResult => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    const resetLoading = () => {
        setIsLoading(false);
    };

    return [isLoading, setLoading, resetLoading];
};

export default useLoading;
