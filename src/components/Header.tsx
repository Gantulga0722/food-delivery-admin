import * as React from "react";
import { PineConeIcon, LoginIcon } from "./icons/Icons";
import { Box, Typography, Stack, Container, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { HeaderButton } from "@/components/buttons";
import { useBag } from "./context/BagContext";

export const Header = () => {
  const router = useRouter();
  const { bagItem } = useBag();

  return (
    <Stack
      direction={"row"}
      paddingY={"8px"}
      justifyContent={"space-between"}
      sx={{ backgroundColor: "#FFF" }}
      position={"fixed"}
      zIndex={20}
      width={"100%"}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1306px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"24px"}>
          <ButtonBase onClick={() => router.push("/")}>
            <Stack width={"41px"} height={"41px"} padding={"7px 4px"}>
              <PineConeIcon />
            </Stack>
          </ButtonBase>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <ButtonBase onClick={() => router.push("/")}>
              <HeaderButton text={"НҮҮР"} />
            </ButtonBase>
            <ButtonBase onClick={() => router.push("/order")}>
              <HeaderButton text={"ЗАХИАЛГА"} />
            </ButtonBase>
          </Stack>
        </Stack>
        <Box
          sx={{
            flexGrow: 0,
            gap: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              padding: "8px 16px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LoginIcon />
            <ButtonBase onClick={() => router.push("/login")}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "black",
                }}
              >
                Нэвтрэх
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};
