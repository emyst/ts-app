import { useEffect, useState } from 'react';
import { IService } from '../types/IService';
import {ITodos} from "../types/ITodo";

interface IFetchTodosService{
    id: number;
}
const FetchTodosService  = (props: IFetchTodosService) => {
    const [result, setResult] = useState<IService<ITodos>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1/todos?userId=${props.id}`)
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default FetchTodosService;