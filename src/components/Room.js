import { useState } from 'react';
import PropTypes from 'prop-types';
import CustomInputNumber from './CustomInputNumber.js';

function Room({
  adult: defaultAdult,
  child: defaultChild,
  guestMax,
  onAdultChange,
  onChildChange,
}) {
  const [adult, setAdult] = useState(defaultAdult);
  const [child, setChild] = useState(defaultChild);

  return (
    <div className="field-group">
      <div className="field-group__title">
        房間：{adult + child} 人
      </div>
      <div className="field-group__field">
        <label>
          大人
          <br />
          <span>年齡 20+</span>
        </label>
        <CustomInputNumber
          min={1}
          max={guestMax - child}
          name="adult"
          value={defaultAdult}
          onChange={e => {
            setAdult(e.target.value);
            onAdultChange(e.target.value);
          }}
        />
      </div>
      <div className="field-group__field">
        <label>小孩</label>
        <CustomInputNumber
          min={0}
          max={guestMax - adult}
          name="child"
          value={defaultChild}
          onChange={e => {
            setChild(e.target.value);
            onChildChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

Room.propTypes = {
  adult: PropTypes.number.isRequired,
  child: PropTypes.number.isRequired,
  guestMax: PropTypes.number.isRequired,
  onAdultChange: PropTypes.func.isRequired,
  onChildChange: PropTypes.func.isRequired,
};

export default Room;
