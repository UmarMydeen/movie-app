import React from 'react';
import PropTypes from 'prop-types';

const ConnectedDropdown = ({
    label,
    options,
    onSelection
}) => {
    return (
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                    {label}
                </span>
            </div>
            <select
                class="form-select"
                aria-label="Default select example"
                onChange={onSelection}
            >
                <option selected value="">--Select--</option>
                {
                    options.map(({ value, text }) => (
                        <option value={value}>{text}</option>
                    ))
                }
            </select>
        </div>
    );
}

ConnectedDropdown.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelection: PropTypes.func.isRequired,
};

export default ConnectedDropdown;