import React from "react";
import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/core/styles";

const getModalStyle = () => {
    const top = 40;
    const left = 40;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 300
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 10,
    },
    paper: {
        height: 680,
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
    },
}));

interface Props {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const UserInfoModal: React.FC<Props> = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const {open, handleClose, children} = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
                {children}
            </div>
        </Modal>
    )
}

export default UserInfoModal;
