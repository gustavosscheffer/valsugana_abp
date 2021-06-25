import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { maskService } from '../../../services/verifyMask'
import PhoneMask from '../../masks/celular'

const InputTelefone = ({ onChange, value, name, label, defaultValue, disabled, className, shrink }) => {
  const handleChange = useCallback(
    async (event) => {
      const { name } = event.target
      let value = await maskService.deskMask(event, name)
      event = {
        target: {
          value: value,
          name: name
        }
      }
      onChange(event)
    },
    [onChange]
  )

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      name={name}
      fullWidth
      onChange={handleChange}
      autoComplete="new-password"
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      InputLabelProps={shrink ? { shrink: shrink } : null}
      InputProps={{
        inputComponent: PhoneMask,
        shrink: true
      }}
    />
  )
}

InputTelefone.defaultProps = {
  onChange: () => {},
  disabled: false
}

InputTelefone.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.any
}

export default InputTelefone