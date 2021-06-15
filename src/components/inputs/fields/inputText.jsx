import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const InputText = ({ shrink, onChange, name, value, label, defaultValue, disabled, multiline, className, onKeyPress, key, autoComplete}) => {
  return (
    <TextField
      id={label}
      label={label}
      variant="outlined"
      fullWidth
      className={className}
      onChange={onChange}
      name={name}
      value={value}
      autoComplete={autoComplete}
      defaultValue={defaultValue}
      disabled={disabled}
      multiline={multiline}
      InputLabelProps={shrink ? { shrink: shrink } : null}
      onKeyPress={onKeyPress}
    />
  )
}

InputText.defaultProps = {
  onChange: () => {},
  disabled: false,
  multiline: false,
  shrink: false
}

InputText.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  className: PropTypes.any,
  autoComplete: PropTypes.any
}

export default InputText