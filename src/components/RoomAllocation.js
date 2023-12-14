import { useState } from 'react';
import PropTypes from 'prop-types';
import Room from './Room.js';

function RoomAllocation({ guest, room, onChange }) {
  const initialResult = [];
  for (let i = 0; i < room; i += 1) {
    initialResult.push({ adult: 1, child: 0 });
  }
  const [result, setResult] = useState(initialResult);
  const allocatedGuest = result.reduce((sum, { adult, child }) => sum + adult + child, 0);

  return (
    <div className="form">
      <div className="form__title">
        住客人數：{guest} 人 / {room} 房
      </div>
      <div className="form__message">
        尚未分配人數：{guest - allocatedGuest} 人
      </div>
      <div className="form__field-groups">
        {result.map(({ adult, child }, index) => (
          <Room
            key={index}
            adult={adult}
            child={child}
            guestMax={allocatedGuest === guest ? (adult + child) : 4}
            onAdultChange={(newAdult) => {
              setResult(prevResult => {
                const newResult = [...prevResult];
                newResult[index].adult = newAdult;
                onChange(newResult);
                return newResult;
              });
            }}
            onChildChange={(newChild) => {
              setResult(prevResult => {
                const newResult = [...prevResult];
                newResult[index].child = newChild;
                onChange(newResult);
                return newResult;
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}

RoomAllocation.propTypes = {
  guest: PropTypes.number.isRequired,
  room: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RoomAllocation;
