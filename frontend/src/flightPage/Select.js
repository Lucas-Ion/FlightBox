import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>     
      <Radio {...controlProps('b')} color="secondary" />    
    </div>
  );
}
