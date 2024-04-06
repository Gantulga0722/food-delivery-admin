import { Stack, Typography } from "@mui/material";
import {
  StepIconIn,
  StepIconOut,
} from "../../../../food-devlivery/src/components/icons";

export const OrderStep = ({
  step,
  stepName,
  status,
}: {
  step: string;
  stepName: string;
  status: string;
}) => {
  return (
    <Stack
      gap={"16px"}
      padding={"16px 24px"}
      width={"432px"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack>
        <Stack width={"48px"} height={"48px"}>
          <Stack position={"relative"}>
            <StepIconOut />
            <Stack position={"absolute"} top={"12px"} left={"12px"}>
              <StepIconIn />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={"4px"}>
        <Typography fontSize={"14px"} fontWeight={400} color={"#8B8E95"}>
          {step}
        </Typography>
        <Typography fontSize={"20px"} fontWeight={400} color={"#8B8E95"}>
          {stepName}
        </Typography>
        <Typography fontSize={"16px"} fontWeight={400} color={"#8B8E95"}>
          {status}
        </Typography>
      </Stack>
    </Stack>
  );
};
