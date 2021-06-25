import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

function CelularMask(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /\d/, /\d/, ')', ' ', /\d/,' ', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'_'}
            showMask
            id="outlined-basic"
        />
    );
}

CelularMask.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export default CelularMask;