import { ButtonBase, Stack, Typography } from "@mui/material";

export const HeaderButton = ({ text }: { text: string }) => {
  return (
    <Stack
      padding={"8px 16px"}
      color={"black"}
      sx={{
        fontWeight: 700,
        "&:hover": {
          color: "#18BA51",
        },
        fontSize: "14px",
      }}
    >
      {text}
    </Stack>
  );
};

export const FooterButton = ({ text }: { text: string }) => {
  return (
    <Stack>
      <Typography color={"white"} sx={{ textDecorationLine: "underline" }}>
        {text}
      </Typography>
    </Stack>
  );
};

export const LoginButton = ({ text }: { text: string }) => {
  return (
    <Stack
      border={"1px solid #ECEDF0"}
      height={"48px"}
      padding={"8px 16px"}
      borderRadius={"4px"}
      sx={{
        backgroundColor: "#F7F7F8",
        "&:hover": {
          borderColor: "#18BA51",
          color: "#272727",
        },
      }}
      width={"384px"}
      justifyContent={"center"}
      fontSize={"16px"}
      fontWeight={400}
      color={"#8B8E95"}
    >
      {text}
    </Stack>
  );
};

export const MenuButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <ButtonBase onClick={onClick}>
      <Stack
        width={"280px"}
        border={"1px solid #D6D8DB"}
        borderRadius={"8px"}
        padding={"8px 16px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#FFF",
          fontWeight: 500,
          "&:hover": {
            borderColor: "#FFF",
            color: "#FFF",
            backgroundColor: "#18BA51",
          },
        }}
      >
        {text}
      </Stack>
    </ButtonBase>
  );
};

export const ModalBaskButton = ({
  clickFunc,
  onClose,
}: {
  clickFunc: () => void;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <ButtonBase
      onClick={() => {
        clickFunc();
        onClose;
      }}
    >
      <Stack
        width={"384px"}
        height={"48px"}
        border={"1px solid #D6D8DB"}
        borderRadius={"4px"}
        padding={"8px 16px"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#FFF"}
        sx={{
          backgroundColor: "#18BA51",
          fontWeight: 400,
          fontSize: "16px",
        }}
      >
        Сагслах
      </Stack>
    </ButtonBase>
  );
};
