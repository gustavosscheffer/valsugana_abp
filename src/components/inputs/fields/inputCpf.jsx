import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { maskService } from '../../../services/verifyMask'
import CpfMask from '../../masks/cpf'

const InputCpf = ({ onChange, value, defaultValue, disabled, className, shrink }) => {
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
      label="CPF"
      variant="outlined"
      name="cpf"
      fullWidth
      autoComplete="new-password"
      onChange={handleChange}
      className={className}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      InputLabelProps={shrink ? { shrink: shrink } : null}
      InputProps={{
        inputComponent: CpfMask
      }}
    />
  )
}

InputCpf.defaultProps = {
  onChange: () => {},
  disabled: false
}

InputCpf.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.any
}

export default InputCpf