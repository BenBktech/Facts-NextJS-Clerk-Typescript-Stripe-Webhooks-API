import { AxiosError } from "axios";

export interface Fact {
    fact: string;
}

export interface AllFactsProps {
    allFacts: Fact[];
}

export interface UseFetchReturn {
    data: Fact[];
    isLoading: boolean;
    error: AxiosError | null;
    refetch: RefetchProps;
};  

export interface RefetchProps {
    refetch: () => void;
}

