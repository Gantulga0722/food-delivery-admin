import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ButtonBase, Stack } from "@mui/material";

export const FoodEDModal = ({
  anchorEl,
  handleClose,
  open,
  id,
}: {
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  open: boolean;
  id: "simple-popover" | undefined;
}) => {
  return (
    <Stack bgcolor={"transparent"}>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Stack gap={"30px"} bgcolor={"transparent"}>
          <ButtonBase onClick={handleClose}>
            <Stack
              width={"166px"}
              padding={"8px"}
              alignItems={"center"}
              borderRadius={"100px"}
              border={"1px solid #ECEDF0"}
              bgcolor={"#FFF"}
            >
              <Typography fontSize={"20px"} fontWeight={590} color={"#000"}>
                Edit
              </Typography>
            </Stack>
          </ButtonBase>
          <ButtonBase onClick={handleClose}>
            <Stack
              width={"166px"}
              padding={"8px"}
              alignItems={"center"}
              borderRadius={"100px"}
              border={"1px solid #ECEDF0"}
              bgcolor={"#FFF"}
            >
              <Typography fontSize={"20px"} fontWeight={590} color={"#000"}>
                Delete
              </Typography>
            </Stack>
          </ButtonBase>
        </Stack>
      </Popover>
    </Stack>
  );
};
