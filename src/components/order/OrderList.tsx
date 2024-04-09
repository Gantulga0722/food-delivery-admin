import { Stack, Typography } from "@mui/material";

export const OrderList = () => {
  return (
    <Stack>
      <Stack
        height={"44px"}
        padding={"12px 24px"}
        borderBottom={"1px solid var(--Border-BorderSubtle01, #D6D8DB)"}
        bgcolor={"#F7F7F8"}
        gap={"48px"}
        direction={"row"}
      >
        <Stack width={"206px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#3F4145"}
            lineHeight={"16px"}
            letterSpacing={"-0.12px"}
          >
            Order name
          </Typography>
        </Stack>
        <Stack width={"116px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#3F4145"}
            lineHeight={"16px"}
            letterSpacing={"-0.12px"}
          >
            Buyer info
          </Typography>
        </Stack>
        <Stack width={"206px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#3F4145"}
            lineHeight={"16px"}
            letterSpacing={"-0.12px"}
          >
            Payment
          </Typography>
        </Stack>
        <Stack width={"206px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#3F4145"}
            lineHeight={"16px"}
            letterSpacing={"-0.12px"}
          >
            Address
          </Typography>
        </Stack>
        <Stack width={"206px"}>
          <Typography
            fontSize={"12px"}
            fontWeight={600}
            color={"#3F4145"}
            lineHeight={"16px"}
            letterSpacing={"-0.12px"}
          >
            Delivery state
          </Typography>
        </Stack>
        <Stack width={"44px"}></Stack>
      </Stack>
      <Stack height={"700px"}> Orders will be Here</Stack>
    </Stack>
  );
};
