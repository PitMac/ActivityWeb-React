import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type DropDownProps = {
  handleChange: (event: SelectChangeEvent) => void;
  handleChangePart: (event: SelectChangeEvent) => void;
  data: string[] | number[];
  title: string;
  participants: string;
  type: string;
};

export const DropDown = ({
  handleChange,
  data,
  type,
  handleChangePart,
  participants,
}: DropDownProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 3, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          {data.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 3, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-disabled-label">
          Participants
        </InputLabel>
        <Select value={participants} onChange={handleChangePart}>
          <MenuItem key={1} value={1}>
            1
          </MenuItem>
          {(type === "cooking" || type === "social") && (
            <MenuItem key={2} value={2}>
              2
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
