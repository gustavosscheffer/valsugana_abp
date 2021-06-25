import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { maskService } from '../../../services/verifyMask'
import CepMask from '../../masks/cep'

const InputCep = ({ onChange, value, defaultValue, disabled, className, style }) => {
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
      label="CEP"
      variant="outlined"
      name="cep"
      fullWidth
      autoComplete="new-password"
      onChange={handleChange}
      className={className}
      style={style}
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      InputProps={{
        inputComponent: CepMask
      }}
    />
  )
}

InputCep.defaultProps = {
  onChange: () => {},
  disabled: false
}

InputCep.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  className: PropTypes.any
}

export default InputCep