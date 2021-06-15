import React from 'react';
import Logo from '../../assets/images/logo.png'

function LogoValsugana({
    width,
    height
}) {
  return(
      <img src={Logo} alt="logo" width={width} height={height} />
  )
}

export default LogoValsugana;