import React from 'react';
import FetchUserService from '../services/FetchUsersService';
import Loader from './Loader';
import {IService} from "../types/IService";
import {IUsers} from "../types/IUser";
import UsersTable from "./UsersTable";


const Users: React.FC = () => {
    const service: IService<IUsers> = FetchUserService();

    return (
        <div>
            {service.status === 'loading' && (
                <div className="loader-container">
                    <Loader />
                </div>
            )}
            {service.status === 'loaded' &&
            service.payload &&
            service.payload &&
            (service.payload instanceof Array) &&

            <UsersTable data={service.payload}/> }

            {service.status === 'error' && <div>Error message</div>}
        </div>
    )
}

export default Users