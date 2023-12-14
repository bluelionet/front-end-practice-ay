import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { HiMinus, HiPlus } from 'react-icons/hi';

function CustomInputNumber({
  min,
  max,
  step,
  name,
  value: defaultValue,
  onChange,
  onBlur,
  disabled,
  debug,
}) {
  const inputRef = useRef(undefined);
  const [value, setValue] = useState(defaultValue);
  const minusButtonDisabled = disabled || (Number.isInteger(min) && value <= min);
  const plusButtonDisabled = disabled || (Number.isInteger(max) && value >= max);
  const enabledIconStyle = { size: '16px', color: '#4fc3f7' };
  const disabledIconStyle = { size: '16px', color: '#e0e0e0' };

  return (
    <div
      onBlur={() => {
        onBlur({ target: { name, value } });
      }}
      className="integer-field"
    >
      <button
        type="button"
        onClick={() => {
          setValue(prevValue => {
            let newValue = prevValue - step;
            if (Number.isInteger(min) && newValue < min) {
              newValue = min;
            }
            if (newValue !== prevValue) {
              inputRef.current.value = newValue.toString();
              inputRef.current.dispatchEvent(new InputEvent('input'));
              onChange({ target: { name, value: newValue } });
            }
            return newValue;
          });
        }}
        disabled={minusButtonDisabled}
        className="integer-field__minus-button"
      >
        <IconContext.Provider
          value={minusButtonDisabled ? disabledIconStyle : enabledIconStyle}
        >
          <HiMinus />
        </IconContext.Provider>
      </button>

      <input
        type="text"
        defaultValue={defaultValue}
        onBlur={() => {
          setValue(prevValue => {
            let newValue = parseInt(inputRef.current.value, 10);
            if (Number.isNaN(newValue)) {
              newValue = defaultValue;
            } else {
              if (Number.isInteger(min) && newValue < min) {
                newValue = min;
              }
              if (Number.isInteger(max) && newValue > max) {
                newValue = max;
              }
            }
            if (newValue !== prevValue) {
              inputRef.current.value = newValue.toString();
              inputRef.current.dispatchEvent(new InputEvent('input'));
              onChange({ target: { name, value: newValue } });
            }
            return newValue;
          });
        }}
        onInput={() => {
          if (debug) {
            console.log('onInput');
          }
        }}
        disabled={disabled}
        ref={inputRef}
        className="integer-field__text-input"
      />

      <button
        type="button"
        onClick={() => {
          setValue(prevValue => {
            let newValue = prevValue + step;
            if (Number.isInteger(max) && newValue > max) {
              newValue = max;
            }
            if (newValue !== prevValue) {
              inputRef.current.value = newValue.toString();
              inputRef.current.dispatchEvent(new InputEvent('input'));
              onChange({ target: { name, value: newValue } });
            }
            return newValue;
          });
        }}
        disabled={plusButtonDisabled}
        className="integer-field__plus-button"
      >
        <IconContext.Provider
          value={plusButtonDisabled ? disabledIconStyle : enabledIconStyle}
        >
          <HiPlus />
        </IconContext.Provider>
      </button>
    </div>
  );
}

CustomInputNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  debug: PropTypes.bool,
};

CustomInputNumber.defaultProps = {
  min: undefined,
  max: undefined,
  step: 1,
  onChange: () => {},
  onBlur: () => {},
  disabled: false,
  debug: false,
};

export default CustomInputNumber;
