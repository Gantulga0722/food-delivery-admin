import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const AddFoodInfo = ({
  text,
  placehold,
  setFunction,
  value,
}: {
  text: string;
  placehold: string;
  setFunction: Dispatch<SetStateAction<any>>;
  value: any;
}) => {
  return (
    <Stack gap={"8px"}>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        {text == "Хямдралтай эсэх" ? (
          <Stack padding={"4px 0"}>
            <Stack
              width={"28px"}
              padding={"2px"}
              alignItems={"flex-start"}
              bgcolor={"#8B8E95"}
              borderRadius={"10px"}
            >
              <Stack
                width={"12px"}
                height={"12px"}
                borderRadius={"18px"}
                bgcolor={"#FFF"}
              ></Stack>
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
        <Typography fontSize={"14px"} fontWeight={500} color={"#121316"}>
          {text}
        </Typography>
      </Stack>
      <Stack
        height={"56px"}
        paddingX={"12px"}
        borderRadius={"8px"}
        bgcolor={"#F4F4F4"}
        justifyContent={"center"}
      >
        <InputBase
          placeholder={placehold}
          onChange={(e) => setFunction(`${e.target.value}`)}
        ></InputBase>
      </Stack>
    </Stack>
  );
};

export const FoodInfoCateSelect = ({
  text,
  placehold,
  setFunction,
  value,
}: {
  text: string;
  placehold: string;
  setFunction: Dispatch<SetStateAction<any>>;
  value: string;
}) => {
  interface DataType {
    _id: string;
    name: string;
  }
  const [selectedCategory, setSelectedCategory] = useState<
    DataType | undefined
  >();
  const [data, setData] = useState<DataType[] | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    const selected = data?.find((cat) => cat._id == event.target.value);
    setSelectedCategory(selected);
    setFunction(selected?._id);
  };

  const BE_URL = "http://localhost:4000/api/category";

  useEffect(() => {
    const handleGetCategory = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const fetched_data = await fetch(BE_URL, options);
      const fetched_json = await fetched_data.json();
      console.log("cate fetch", fetched_json);
      setData(fetched_json.categories);
    };
    handleGetCategory();
  }, []);
  console.log({ data });
  return (
    <Stack gap={"8px"}>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <Typography fontSize={"14px"} fontWeight={500} color={"#121316"}>
          {text}
        </Typography>
      </Stack>
      <Stack
        height={"56px"}
        paddingX={"12px"}
        borderRadius={"8px"}
        bgcolor={"#F4F4F4"}
        justifyContent={"center"}
      >
        <FormControl fullWidth sx={{ outline: "none", border: "none" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={selectedCategory?.id}
            label="Select category"
            onChange={handleChange}
            sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
            placeholder="Select category"
          >
            {data?.map((cate, index) => (
              <MenuItem key={index} value={cate._id}>
                {cate.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};
