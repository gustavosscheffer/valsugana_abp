import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

function CpfMask(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'_'}
            showMask
            id="outlined-basic"
        />
    );
}

CpfMask.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export default CpfMask;