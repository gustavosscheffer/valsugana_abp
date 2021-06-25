import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

function CepMask(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            placeholderChar={'_'}
            showMask
            id="outlined-basic"
        />
    );
}

CepMask.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export default CepMask;