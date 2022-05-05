import React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches(props) {
  const {
    state,
    setState
  } = props

  return (
    <div>
      <Switch onChange={() => {setState((prevState) => {return !prevState})}} {...label} defaultChecked />
    </div>
  );
}
