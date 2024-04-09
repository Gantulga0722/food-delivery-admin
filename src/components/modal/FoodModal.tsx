import * as React from "react";
import { Stack, Modal, Typography, Button } from "@mui/material";
import { ModalPmButtons } from "./ModalPmButtons";
import { ModalBaskButton } from "../buttons";
import { useBag } from "@/components/context/BagContext";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  backGroundColor: "#FFF",
  p: 4,
};
export const FoodModal = ({
  isOpen,
  onClose,
  food,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  food: any;
}) => {
  const { bagItem, setBagItem } = useBag();

  const [bagCount, setBagCount] = useState(1);
  const { foodName, price, imagePath, sale, ingredients, category, id, stock } =
    food;

  const HadlerDataToBag = () => {
    const itemInBag = {
      category: category,
      id: id,
      foodName: foodName,
      price: price,
      imagePath: imagePath,
      ingredients: ingredients,
      stock: stock,
      sale: sale,
      count: bagCount,
    };

    setBagItem([...bagItem, itemInBag]);
  };

  const salePrice = price - (price * sale) / 100;
  const subHandle = () => {
    bagCount < 1 ? setBagCount(bagCount) : setBagCount(bagCount - 1);
  };
  const sumHandle = () => {
    setBagCount(bagCount + 1);
  };

  return (
    <Stack borderRadius={"16px"}>
      <Modal
        keepMounted
        open={isOpen}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Stack sx={style} direction={"row"} gap={"33px"} position={"relative"}>
          <Stack
            width={"500px"}
            height={"500px"}
            sx={{
              backgroundImage: `URL(${imagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
                top={"48px"}
                left={"48px"}
              >
                <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
                  {sale}%
                </Typography>
              </Stack>
            ) : (
              <Stack></Stack>
            )}
          </Stack>
          <Stack gap={"32px"} position={"relative"}>
            <Stack
              width={"24px"}
              height={"24px"}
              position={"absolute"}
              top={"-20px"}
              right={"4px"}
            >
              <Button onClick={onClose}>X</Button>
            </Stack>
            <Stack marginTop={"50px"}>
              <Stack alignItems={"flex-start"}>
                <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
                  {foodName}
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={"16px"}>
                <Typography
                  fontSize={"18px"}
                  fontWeight={600}
                  color={"#18BA51"}
                >
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
            <Stack gap={"12px"}>
              <Typography color={"#000"} fontSize={"18px"} fontWeight={600}>
                Орц
              </Typography>
              <Stack
                padding={"8px"}
                direction={"row"}
                gap={"5px"}
                borderRadius={"8px"}
                sx={{ backgroundColor: "#F6F6F6" }}
              >
                {ingredients.map(
                  (ingre: string, index: React.Key | null | undefined) => (
                    <Typography
                      key={index}
                      color={"#767676"}
                      fontSize={"16px"}
                      fontWeight={400}
                    >
                      {ingre},
                    </Typography>
                  )
                )}
              </Stack>
            </Stack>
            <Stack>
              <Typography color={"#000"} fontSize={"18px"} fontWeight={600}>
                Тоо
              </Typography>
            </Stack>
            <ModalPmButtons
              subHandle={subHandle}
              sumHandle={sumHandle}
              value={bagCount}
            />
            <ModalBaskButton clickFunc={HadlerDataToBag} onClose={onClose} />
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};
