import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'

const InputNumber = ({ onChange, name, value, label, defaultValue, disabled, className, style }) => {
  const handleChange = useCallback(
    (e) => {
      const newValue = parseInt(e.target.value)

      if (isNaN(newValue)) {
        e.preventDefault()
      } else {
        onChange(e)
      }
    },
    [onChange]
  )

  return (
    <TextField
      type="number"
      label={label}
      variant="outlined"
      fullWidth
      style={style}
      className={className}
      onChange={handleChange}
      name={name}
      value={value}
      inputProps={{ min: 0 }}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  )
}

InputNumber.defaultProps = {
  onChange: () => {},
  disabled: false
}

InputNumber.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool
}

export default InputNumber