import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import { Fact } from "@/types";

const useFetch = () => {
    const [data, setData] = useState<Fact[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);

    const fetchData = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('/api/facts');
            setData(response.data);
            setError(null);
        } 
        catch (error) {
            if (axios.isAxiosError(error)) {
                // Ici, on est sûr que err est une instance de AxiosError
                setError(error);
            } else {
                // Si ce n'est pas une AxiosError, on peut choisir de définir une nouvelle erreur
                // ou de passer null à setError, selon la gestion d'erreur que vous souhaitez implémenter
                setError(new AxiosError("An unexpected error occurred")); 
            }
        }
        finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

     // La fonction refetch utilise useCallback pour garantir une référence stable,
    // ce qui est utile si elle est passée en tant que dépendance d'effet ou appelée dans des gestionnaires d'événements
    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, refetch };
};

export default useFetch;