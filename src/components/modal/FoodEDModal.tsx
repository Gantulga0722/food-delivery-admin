import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ButtonBase, Stack } from "@mui/material";
import { FoodEditModal } from "./FoodEditModal";

type PropType = {
  food: {
    category: string;
    id: number;
    foodName: string;
    price: number;
    imagePath: string;
    ingredients: string[];
    stock: number;
    sale: number;
    onClick?: (() => void | undefined) | undefined;
  };
};

export const FoodEDModal = ({ food }: PropType) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    console.log();
    setIsModalOpen(false);
  };
  const onOpenModal = (e: any) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };
  console.log("foodId", food._id);

  const BE_URL = "https://food-delivery-be-zeta.vercel.app/api/food";

  const handleDeleteDelete = async () => {
    const data = {
      _id: food._id,
    };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
    } catch (error) {
      console.error("Error", error);
    }
  };

  const autoReloadPage = (interval: number): void => {
    setTimeout(() => {
      window.location.reload();
    }, interval);
  };

  return (
    <Stack gap={"30px"}>
      <ButtonBase onClick={onOpenModal}>
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
      <ButtonBase
        onClick={() => {
          handleDeleteDelete();
          autoReloadPage(2000);
        }}
      >
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
      <FoodEditModal isOpen={isModalOpen} onClose={onCloseModal} food={food} />
    </Stack>
  );
};
