import React from "react";
import {IUser} from "../types/IUser";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 300
    }
}));

interface Props {
    user: IUser | null;
}

const UserCard: React.FC<Props> = (props) => {
    const classes = useStyles();

    const {user} = props
    if (!user) {
        return null
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" component="p">
                    <b>Name:</b>{` ${user.name}`}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Username:</b>{` ${user.username}`}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Email:</b>{` ${user.email}`}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Phone:</b>{` ${user.phone}`}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Website:</b>{` ${user.website}`}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Address:</b>{` ${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.geo.lat}, ${user.address.geo.lng}) `}
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Company:</b>{` "${user.company.name}", ${user.company.catchPhrase}, ${user.company.bs}`}
                </Typography>
            </CardContent>
        </Card>)
}

export default UserCard;