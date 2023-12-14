import CustomInputNumber from './components/CustomInputNumber.js';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>CustomInputNumber</h1>

      <h2>Enabled with all props assigned</h2>
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

      <h2>Disabled</h2>
      <CustomInputNumber
        name="foobar"
        value={0}
        disabled
      />
    </div>
  );
}
