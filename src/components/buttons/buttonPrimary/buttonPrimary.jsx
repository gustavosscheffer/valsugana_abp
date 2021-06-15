import React from 'react'
import { Button } from '@material-ui/core'
import { useStyles } from '../styles'

const ButtonPrimary = ({
    text,
    onClick,
    style,
    disabled,
}) => {
    const classes = useStyles();
    return (
        <Button onClick={onClick} disabled={disabled} className={classes.primary} style={style}>
            {text}
        </Button>
    )
}

export default ButtonPrimary