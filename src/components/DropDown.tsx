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
      <FormControl variant="filled" sx={{ m: 3, minWidth: 190 }}>
        <InputLabel style={{ color: "white" }}>Type</InputLabel>
        <Select color="success" value={type} onChange={handleChange}>
          {data.map((d) => (
            <MenuItem
              key={d}
              value={d}
              style={{
                textTransform: "capitalize",
                fontSize: 16,
                marginTop: -8,
                marginBottom: -8,
                backgroundColor: "#222222",
              }}
            >
              <p
                style={{ textTransform: "capitalize", fontSize: 16, margin: 0 }}
              >
                {d}
              </p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 3, minWidth: 190 }}>
        <InputLabel style={{ color: "white" }}>Participants</InputLabel>
        <Select
          color="success"
          value={participants}
          onChange={handleChangePart}
        >
          <MenuItem
            style={{
              textTransform: "capitalize",
              fontSize: 16,
              marginTop: -8,
              marginBottom: -8,
              backgroundColor: "#222222",
            }}
            key={1}
            value={1}
          >
            <p
              style={{
                textTransform: "capitalize",
                fontSize: 16,
                margin: 0,
              }}
            >
              1
            </p>
          </MenuItem>
          {(type === "cooking" || type === "social") && (
            <MenuItem
              style={{
                textTransform: "capitalize",
                fontSize: 16,
                marginTop: -8,
                marginBottom: -8,
                backgroundColor: "#222222",
              }}
              key={2}
              value={2}
            >
              <p
                style={{
                  textTransform: "capitalize",
                  fontSize: 16,
                  margin: 0,
                }}
              >
                2
              </p>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
