import { Box, Typography, InputBase, Stack, ButtonBase } from "@mui/material";
import { EyeIcon, HiddenEyeIcon, LocationIcon } from "../icons";
import { Dispatch, SetStateAction, useState } from "react";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const TextInput = ({
  text,
  placeHolderText,
  setText,
  value,
  setFunction,
}: {
  text: string;
  placeHolderText: string;
  setText: (_p: string) => void;
  value: string;
  setFunction: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <Box
        border={"1px solid #ECEDF0"}
        display={"flex"}
        height={"48px"}
        padding={"8px 16px"}
        borderRadius={"4px"}
        sx={{ backgroundColor: "#F7F7F8" }}
      >
        <InputBase
          value={value}
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder={placeHolderText}
          onChange={(e) => {
            setText(`${e.target.value}`);
            setFunction(`${e.target.value}`);
          }}
        />
      </Box>
    </Stack>
  );
};

export const PassWordInput = ({
  text,
  placeHolderText,
  setFunction,
}: {
  text: string;
  placeHolderText: string;
  setFunction: Dispatch<SetStateAction<string>>;
}) => {
  const [type, setType] = useState("password");

  const HandlerType = () => {
    setType(type == "password" ? "text" : "password");
  };

  return (
    <Stack gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <Box
        border={"1px solid #ECEDF0"}
        display={"flex"}
        height={"48px"}
        padding={"8px 16px"}
        borderRadius={"4px"}
        sx={{ backgroundColor: "#F7F7F8" }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder={placeHolderText}
          type={type}
          onChange={(e) => setFunction(`${e.target.value}`)}
        />
        <ButtonBase onClick={() => HandlerType()}>
          {type == "password" ? (
            <HiddenEyeIcon size={"24px"} />
          ) : (
            <EyeIcon size={"24px"} />
          )}
        </ButtonBase>
      </Box>
    </Stack>
  );
};

export const AddresseInput = ({
  stat,
  text,
  data,
}: {
  stat: string;
  text: string;
  data: any[];
}) => {
  console.log("zipdata in input", data);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box
      sx={{
        minWidth: 120,
        backgroundColor: "#F7F7F8",
        borderRadius: "4px",
        border: "none",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <LocationIcon /> {text}
          </Stack>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={text}
          onChange={handleChange}
        >
          {data.map((item) => {
            if (item.stat === stat) {
              return item.sub_items.map(
                (
                  sub: {
                    mnname:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | null
                      | undefined;
                  },
                  subIndex: React.Key | null | undefined
                ) => (
                  <MenuItem key={subIndex} value={10}>
                    {sub.mnname}
                  </MenuItem>
                )
              );
            } else {
              if (item.sub_items.stat === stat) {
                return item.sub_items.sub_items.map(
                  (
                    sub: {
                      mnname:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                    },
                    subIndex: React.Key | null | undefined
                  ) => (
                    <MenuItem key={subIndex} value={10}>
                      {sub.mnname}
                    </MenuItem>
                  )
                );
              }
            }
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
