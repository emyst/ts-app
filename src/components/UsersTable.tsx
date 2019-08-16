import React, {useState} from "react";
import {IUser, IUsers} from "../types/IUser";

import Todos from "./Todos";
import UserInfoModal from "./UserInfoModal";
import UserCard from "./UserCard";

import {
    FilteringState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';


const generateRows = (data: IUsers) => {
    let result: IUser[] = []

    if (data && (data instanceof Array)) {
        data.map(item => result.push({
            name: item.name,
            username: item.username,
            email: item.email,
            website: item.website,
            address: item.address,
            company: item.company,
            id: item.id,
            phone: item.phone
        }))
    }
    return result;
}

interface Props {
    data: IUsers;
}

const UsersTable: React.FC<Props> = ({data}) => {

    const [open, setOpen] = useState(false);
    const [record, setRecord] = useState<IUser | null>(null);

    const [columns] = useState([
        {name: 'name', title: 'Name'},
        {name: 'username', title: 'Username'},
        {name: 'email', title: 'Email'},
        {name: 'website', title: 'Website'},

    ]);
    const [rows] = useState(generateRows(data));

    const [filteringStateColumnExtensions] = useState([
        {columnName: 'name', filteringEnabled: false},
        {columnName: 'email', filteringEnabled: false},
    ]);

    const handleOpen = (record: IUser) => {
        setOpen(true);
        setRecord(record);
    };

    const handleClose = () => {
        setOpen(false);
        setRecord(null);
    };

    const TableRow = (props: Table.DataRowProps) => (
        <Table.Row {...props} onClick={() => handleOpen(props.row)} style={{cursor: 'pointer'}}/>
    );

    return (
        <>
            <Grid
                rows={rows}
                columns={columns}
            >
                <FilteringState
                    defaultFilters={[]}
                    columnExtensions={filteringStateColumnExtensions}
                />
                <IntegratedFiltering/>
                <Table rowComponent={TableRow}/>
                <TableHeaderRow/>
                <TableFilterRow/>
            </Grid>

            <UserInfoModal open={open} handleClose={handleClose}>
                {record &&
                <>
                    <UserCard user={record}/>
                    <Todos id={record.id}/>
                </>
                }
            </UserInfoModal>
        </>
    )
}

export default UsersTable;