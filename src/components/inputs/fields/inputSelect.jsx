import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const SelectDarwin = ({
  onChange,
  name,
  value,
  selectedValue,
  label,
  defaultValue,
  style,
  disabled,
  options,
  colummName,
  valueName
}) => {
  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        disabled={disabled}
        value={value}
        onChange={onChange}
        style={style}
        name={name}
        autoComplete="new-password"
        defaultValue={defaultValue}>
        {options.map((item) => (
          <MenuItem key={item[valueName]} value={selectedValue ? item : item[valueName]}>
            {item[colummName]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

SelectDarwin.defaultProps = {
  onChange: () => {},
  disabled: false,
  selectedValue: false,
  valueName: 'id',
  colummName: 'nome'
}

SelectDarwin.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool
}

export default SelectDarwin