import { useEffect, useState } from 'react';
import { IService } from '../types/IService';
import {IUsers} from '../types/IUser';

const FetchUserService  = () => {
    const [result, setResult] = useState<IService<IUsers>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));

    }, []);

    return result;
};

export default FetchUserService;