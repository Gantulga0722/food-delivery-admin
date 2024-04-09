import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ButtonBase, InputBase, Stack } from "@mui/material";
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

export const EditCateModal = ({
  isOpen,
  onClose,
  cateData,
}: {
  isOpen: boolean;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  cateData: DataType;
}) => {
  const [newCateName, setNewCateName] = React.useState(cateData.name);
  const updatedCateData = { ...cateData, name: newCateName };
  const BE_URL = "http://localhost:4000/api/category";

  const handleEditCategory = async () => {
    const data = {
      _id: updatedCateData._id,
      name: updatedCateData.name,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log("CateId", cateData._id);
    try {
      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
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
              Edit Category
            </Typography>
            <Stack width={"24px"} height={"24px"}></Stack>
          </Stack>
          <Stack gap={"16px"} paddingY={"24px"}>
            <Typography fontSize={"14px"} fontWeight={500} color={"#121316"}>
              Edit category name
            </Typography>
            <Stack
              height={"56px"}
              paddingX={"12px"}
              borderRadius={"8px"}
              bgcolor={"#F4F4F4"}
              justifyContent={"center"}
            >
              <InputBase
                placeholder={"Write new category name"}
                value={newCateName}
                onChange={(e) => setNewCateName(`${e.target.value}`)}
              ></InputBase>
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
            <ButtonBase
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                handleEditCategory();
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
                  Edit
                </Typography>
              </Stack>
            </ButtonBase>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
