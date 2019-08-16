import React from 'react';
import Loader from './Loader';
import {IService} from "../types/IService";
import FetchTodosService from "../services/FetchTodosService";
import {ITodos} from "../types/ITodo";
import TodosTable from "./TodosList";

interface Props {
    id: number;
}

const Todos: React.FC<Props> = (props) => {
    const {id} = props

    const service: IService<ITodos> = FetchTodosService({id});

    return (
        <div>
            {service.status === 'loading' && (
                <div className="loader-container">
                    <Loader/>
                </div>
            )}
            {service.status === 'loaded' &&
            service.payload &&
            service.payload &&
            (service.payload instanceof Array) &&

            <TodosTable data={service.payload}/>}

            {service.status === 'error' && <div>Error message</div>}
        </div>
    )
}

export default Todos;