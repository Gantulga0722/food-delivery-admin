import { ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FoodEDModal } from "../modal/FoodEDModal";

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
export const FoodCard = ({ food }: PropType) => {
  const [isModalOpen, setIsModalOpen] = useState("close");
  const { foodName, price, imagePath, sale } = food;
  const salePrice = price - (price * sale) / 100;

  return (
    <ButtonBase
      onClick={() => setIsModalOpen(isModalOpen == "close" ? "open" : "close")}
    >
      <Stack gap={"14px"} marginTop={"30px"}>
        <Stack
          width={"282px"}
          height={"186px"}
          borderRadius={"16px"}
          boxShadow={
            "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
          }
          sx={{
            backgroundImage: `URL(${imagePath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          position={"relative"}
        >
          <Stack
            position={"absolute"}
            top={"53px"}
            left={"58px"}
            display={isModalOpen == "close" ? "none" : "flex"}
          >
            <FoodEDModal food={food} />
          </Stack>
          {sale > 0 ? (
            <Stack
              padding={"4px 16px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"16px"}
              border={"1px solid #FFF"}
              sx={{
                backgroundColor: "#18BA51",
                backdropFilter: "blur(50px)",
              }}
              position={"absolute"}
              top={"16px"}
              right={"16px"}
            >
              <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
                {sale}%
              </Typography>
            </Stack>
          ) : (
            <Stack></Stack>
          )}
        </Stack>
        <Stack width={"282px"} gap={"2px"}>
          <Stack alignItems={"flex-start"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
              {foodName}
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={"16px"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
              {salePrice}₮
            </Typography>
            {sale > 0 ? (
              <Typography
                fontSize={"18px"}
                fontWeight={400}
                color={"#272727"}
                sx={{ textDecoration: "line-through" }}
              >
                {price}₮
              </Typography>
            ) : (
              <Typography></Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};
