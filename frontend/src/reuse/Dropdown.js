import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = (props) => {
 
  const handleChange = (e) => {
     props.handleValueChange(e)
  };

  // console.log(value);
  return (
    <div>
      <label className="mb-2">{props.label}</label>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.initialOptionLabel}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.initialOptionLabel}
            onChange={handleChange}
            placeholder="chooseCategory"
          >
            {props.getDropdownDetails &&
              props.getDropdownDetails.map((item, index) => {
                return (
                    <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                );
              })}
              {/* <MenuItem value="hello">hello</MenuItem>
              <MenuItem value="hi">hi</MenuItem>
              <MenuItem value="how">how</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
      </div>
  );
};

export default Dropdown;