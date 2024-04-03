import { Box, ButtonBase, Container, Stack, Typography } from "@mui/material";
import { FooterIcon, FbIcon, InstaIcon, TwitIcon } from "./icons";
import { useRouter } from "next/router";
import { FooterButton } from "@/components/buttons";

export const Footer = () => {
  const router = useRouter();
  return (
    <Box
      height={"545px"}
      bgcolor={"#18BA51"}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundImage: 'URL("/Group 522 (Traced).png")' }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "1258px",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"1258px"}
          height={"322px"}
          gap={"40px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"8px"}
          >
            <Box>
              <FooterIcon />
            </Box>
            <Box>
              <Typography color={"white"}>Food Delivery</Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"1258px"}
          >
            <ButtonBase onClick={() => router.push("/")}>
              <FooterButton text={"Нүүр"} />
            </ButtonBase>
            <ButtonBase>
              <FooterButton text={"Холбоо барих"} />
            </ButtonBase>
            <ButtonBase onClick={() => router.push("/menu")}>
              <FooterButton text={"Хоолны цэс"} />
            </ButtonBase>
            <ButtonBase>
              <FooterButton text={"Үйлчилгээний нөхцөл"} />
            </ButtonBase>
            <ButtonBase>
              <FooterButton text={"Хүргэлтийн бүс"} />
            </ButtonBase>
            <ButtonBase>
              <FooterButton text={"Нууцлалын бодлого"} />
            </ButtonBase>
          </Stack>
          <Stack gap={"18px"} direction={"row"} alignItems={"center"}>
            <FbIcon />
            <InstaIcon />
            <TwitIcon />
          </Stack>
          <Box
            borderBottom={"1px solid"}
            borderColor={"white"}
            width="inherit"
          ></Box>
          <Stack gap={"8px"} alignItems={"center"}>
            <Typography color={"white"}>© 2024 Pinecone Foods LLC </Typography>
            <Typography color={"white"}>
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
