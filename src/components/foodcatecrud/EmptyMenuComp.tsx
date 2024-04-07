import { ResetTvRounded } from "@mui/icons-material";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { AddFoodIcon } from "../icons";
import { AddFoodModal } from "./AddFoodModal";
import { useState } from "react";

export const EmptyMenyComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  const onOpenModal = (e: any) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <Stack
      width={"384px"}
      alignItems={"center"}
      gap={"30px"}
      margin={"auto"}
      marginTop={"50px"}
    >
      <ButtonBase onClick={onOpenModal}>
        <Stack
          width={"80px"}
          height={"80px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AddFoodIcon />
        </Stack>
      </ButtonBase>
      <AddFoodModal isOpen={isModalOpen} onClose={onCloseModal} />
      <Stack width={"383px"} height={"66px"} justifyContent={"center"}>
        <Typography
          fontSize={"16px"}
          fontWeight={400}
          color={"#808080"}
          textAlign={"center"}
        >
          Уучлаарай, Таны меню хоосон байна.
        </Typography>
      </Stack>
    </Stack>
  );
};
