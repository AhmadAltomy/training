import { useState } from "react";

type ErrorHookResult = [boolean, string, (message: string) => void, () => void];

const useError = (): ErrorHookResult => {
    const [errorInfo, setErrorInfo] = useState<{ hasError: boolean; message: string }>({
        hasError: false,
        message: '',
    });

    const setError = (message: string) => {
        setErrorInfo({ hasError: true, message });
    };

    const clearError = () => {
        setErrorInfo({ hasError: false, message: '' });
    };

    return [errorInfo.hasError, errorInfo.message, setError, clearError];
};


export default useError;