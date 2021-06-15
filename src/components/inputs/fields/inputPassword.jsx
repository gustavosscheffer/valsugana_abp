import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import clsx from "clsx";
import PropTypes from 'prop-types'
import React from 'react'

const InputPassword = ({
    onChange,
    name,
    value,
    label,
    defaultValue,
    className,
    onKeyPress
}
) => {

    const [values, setValues] = React.useState({
        showPassword: false,
      });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <FormControl
            className={clsx(className)}
            variant="outlined"
            fullWidth
        >
            <InputLabel htmlFor="outlined-adornment-password">
                {label}
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                label={label}
                name={name}
                tabindex={6}
                onKeyPress={onKeyPress}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            tabindex={-1}
                        >
                            {values.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    )
}

InputPassword.defaultProps = {
    onChange: () => { },
    disabled: false,
    multiline: false,
}

InputPassword.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    className: PropTypes.any,
}

export default InputPassword