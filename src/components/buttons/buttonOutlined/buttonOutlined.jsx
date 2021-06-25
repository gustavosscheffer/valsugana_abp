import { Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';

const ButtonOutlined = ({
    text,
    onClick,
    style,
    disabled,
}) => {
    const classes = useStyles();
    return (
        <Button onClick={onClick} disabled={disabled} className={classes.outlined} style={style}>
            {text}
        </Button>
    )
}

export default ButtonOutlined