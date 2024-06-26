import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, Stack } from "@mui/material";
import { CloseIconModal } from "../icons";
import { AddFoodInfo } from "../inputs";
import { ConstructionOutlined } from "@mui/icons-material";

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

interface DataType {
  _id: string;
  name: string;
}

export const AddCategoryModal = ({
  isOpen,
  onClose,
  addData,
  setAddData,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addData: DataType[] | null;
  setAddData: React.Dispatch<React.SetStateAction<any[] | null>>;
}) => {
  const BE_URL = "https://food-delivery-be-zeta.vercel.app/api/category";
  const [categoryName, setCategoryName] = React.useState("");

  const handleAddCategory = async () => {
    const data = {
      name: categoryName,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setAddData((addData: DataType[] | null) => {
        if (addData) {
          return [...addData, FETCHED_JSON];
        } else {
          return [FETCHED_JSON];
        }
      });
    } catch (error) {
      console.error("Error", error);
    }
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
              Create new Category
            </Typography>
            <Stack width={"24px"} height={"24px"}></Stack>
          </Stack>
          <Stack gap={"16px"} paddingY={"24px"}>
            <AddFoodInfo
              text={"Category name"}
              placehold={"Write Category name"}
              value={categoryName}
              setFunction={setCategoryName}
            />
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
            <ButtonBase
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                handleAddCategory();
                onClose(e);
              }}
            >
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
