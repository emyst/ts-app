import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import {ITodos} from "../types/ITodo";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    listItem: {
        padding: 0,
        lineHeight: 0.7
    },
    listItemText: {
        padding: 0,
        fontSize:'0.9em',
    },
    checkbox:{
        margin: 0,
        padding: 0
    },
    title: {
        marginTop: 10,
        marginBottom: 0
    }
}));

interface Props {
    data: ITodos;
}

const TodosList: React.FC<Props> = ({data}) => {
    const classes = useStyles();

    return (
        <>
            <h4 className={classes.title}>ToDo List:</h4>
            <List className={classes.root}>
                {data && (data instanceof Array) && data.slice(0,15).map( row  => {
                    const labelId = `checkbox-list-label-${row.id}`;

                    return (
                        <ListItem key={row.id} role={undefined}  className={classes.listItem}>
                            <ListItemIcon>
                                <Checkbox className={classes.checkbox}
                                    edge="start"
                                    checked={row.completed}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={row.title} classes={{primary:classes.listItemText}}/>
                        </ListItem>
                    );
                })}
            </List>
        </>
    )
}

export default TodosList