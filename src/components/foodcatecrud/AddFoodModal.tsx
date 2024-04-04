import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, Stack } from "@mui/material";
import { CloseIconModal } from "../icons";
import { AddFoodInfo, FoodInfoCateSelect } from "../inputs";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "16px",
  p: 3,
};

export const AddFoodModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const BE_URL = "http://localhost:4000/api/category";
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0);
  const [imagePath, setImagePath] = useState("");
  const [ingredients, setIngedients] = useState<string[]>([]);
  const [sale, setSale] = useState(0);

  const handleAddCategory = async () => {
    const data = {
      category: category,
      name: foodName,
      price: price,
      imagePath: imagePath,
      ingredients: ingredients,
      sale: sale,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log("fethc", FETCHED_JSON);
  };

  return (
    <Stack>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={"flex"} flexDirection={"column"}>
          <Stack
            padding={"16px 24px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={"1px solid #E0E0E0"}
            bgcolor={"#FFF"}
            direction={"row"}
          >
            <ButtonBase onClick={onClose}>
              <CloseIconModal />
            </ButtonBase>
            <Typography fontSize={"24px"} fontWeight={700} color={"#161616"}>
              Create food
            </Typography>
            <Stack width={"24px"} height={"24px"}></Stack>
          </Stack>
          <Stack gap={"16px"} paddingY={"24px"}>
            <AddFoodInfo
              text={"Хоолны нэр"}
              value={foodName}
              placehold={"Хоолны нэр оруулна уу"}
              setFunction={setFoodName}
            />
            <FoodInfoCateSelect
              text={"Хоолны ангилал"}
              value={category}
              placehold={"Select Category"}
              setFunction={setCategory}
            />
            <AddFoodInfo
              text={"Хоолны орц"}
              value={ingredients}
              placehold={"Хоолны орц оруулна уу"}
              setFunction={setIngedients}
            />
            <AddFoodInfo
              text={"Хоолны үнэ"}
              value={price}
              placehold={"Хоолны үнэ оруулна уу"}
              setFunction={setPrice}
            />
            <AddFoodInfo
              text={"Хямдралтай"}
              value={sale}
              placehold={"Хямдралын хувь оруулна уу"}
              setFunction={setSale}
            />

            <Stack gap={"8px"}>
              <Typography fontSize={"14px"} fontWeight={500} color={"#121316"}>
                Хоолны зураг
              </Typography>
              <Stack
                width={"284px"}
                height={"122px"}
                padding={"8px"}
                gap={"8px"}
                justifyContent={"center"}
                borderRadius={"8px"}
                border={"1px dashed #D6D7DC"}
                bgcolor={"rgba(186, 188, 196, 0.12)"}
              >
                <Typography
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#525252"}
                >
                  Add image for the food
                </Typography>
                <ButtonBase>
                  <Stack
                    padding={"8px 12px"}
                    borderRadius={"8px"}
                    bgcolor={"#393939"}
                  >
                    <Typography
                      fontSize={"16px"}
                      fontWeight={700}
                      color={"#FFF"}
                    >
                      Add image
                    </Typography>
                  </Stack>
                </ButtonBase>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            paddingTop={"24px"}
            gap={"16px"}
            alignItems={"center"}
            borderTop={"1px solid #E0E0E0"}
            justifyContent={"flex-end"}
            direction={"row"}
          >
            <ButtonBase>
              <Stack
                padding={"10px 8px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#3F4145"}
                >
                  Clear
                </Typography>
              </Stack>
            </ButtonBase>
            <ButtonBase>
              <Stack
                padding={"10px 16px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"4px"}
                bgcolor={"#393939"}
              >
                <Typography fontSize={"16px"} fontWeight={700} color={"#FFF"}>
                  Continue
                </Typography>
              </Stack>
            </ButtonBase>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
