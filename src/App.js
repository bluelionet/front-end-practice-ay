import CustomInputNumber from './components/CustomInputNumber.js';
import RoomAllocation from './components/RoomAllocation.js';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>&lt;CustomInputNumber /&gt;</h1>

      <h2>enabled (min = 0, max = 10, step = 2)</h2>
      <CustomInputNumber
        min={0}
        max={10}
        step={2}
        name="foobar"
        value={0}
        onChange={e => {
          console.log(`onChange: e.target.name = '${e.target.name}', e.target.value = ${e.target.value}.`);
        }}
        onBlur={e => {
          console.log(`onBlur: e.target.name = '${e.target.name}', e.target.value = ${e.target.value}.`);
        }}
        debug
      />

      <h2>disabled</h2>
      <CustomInputNumber
        name="foobar"
        value={0}
        disabled
      />

      <br />

      <h1>&lt;RoomAllocation /&gt;</h1>
      <h2>enabled (guest = 10, room = 3)</h2>
      <RoomAllocation
        guest={10}
        room={3}
        onChange={result => {
          console.log(result);
        }}
      />
    </div>
  );
}
