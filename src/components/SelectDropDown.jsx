import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDropDown(props) {
  
  const {
    state,
    setState,
  } = props
  
  const handleChange = (e) => {
    setState(e.target.value)
  };

  const options = [
    {
      id: 1,
      label: "Low Quality",
    },
    {
      id: 2,
      label: "Medium Quality",
    },
    {
      id: 3,
      label: "High Quality",
    },
  ];

  return (
    <FormControl fullWidth>
      <Select id="demo-simple-select" value={state} onChange={handleChange}>
        {options.map((option, i) => {
          return <MenuItem
            key={i}
            value={option.id}
          >{option.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}
