import { InputBase, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const AddFoodInfo = ({
  text,
  placehold,
  setFunction,
}: {
  text: string;
  placehold: string;
  setFunction: Dispatch<SetStateAction<string>>;
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
