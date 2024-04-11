import { ButtonBase, Stack, Typography } from "@mui/material";
import { CateDeleteIcon, CateEditIcon } from "../icons";
import { useState } from "react";
import { EditCateModal } from "./EditCateModal";

interface DataType {
  _id: string;
  name: string;
}

export const EditDeleteComp = ({
  cateData,
  cateId,
}: {
  cateData: DataType;
  cateId: string;
}) => {
  const [isModalOpenCate, setIsModalOpenCate] = useState(false);
  const onCloseModalCate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsModalOpenCate(false);
  };
  const onOpenModalCate = (e: any) => {
    e.stopPropagation();
    setIsModalOpenCate(true);
  };

  const BE_URL = "https://food-delivery-be-zeta.vercel.app/api/category";

  const handleDeleteCategory = async () => {
    const data = {
      _id: cateId,
    };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log("CateId", cateId);
    try {
      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Stack
      width={"200px"}
      bgcolor={"#FFF"}
      borderRadius={"8px"}
      justifyContent={"flex-start"}
    >
      <ButtonBase onClick={onOpenModalCate}>
        <Stack
          padding={"8px 16px"}
          alignItems={"center"}
          gap={"16px"}
          direction={"row"}
          justifyContent={"flex-start"}
        >
          <Stack
            width={"24px"}
            height={"24px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CateEditIcon />
          </Stack>
          <Typography fontSize={"16px"} fontWeight={500} color={"#161616"}>
            Edit name
          </Typography>
          <EditCateModal
            isOpen={isModalOpenCate}
            onClose={onCloseModalCate}
            cateData={cateData}
          />
        </Stack>
      </ButtonBase>
      <ButtonBase onClick={handleDeleteCategory}>
        <Stack
          padding={"8px 16px"}
          alignItems={"center"}
          gap={"16px"}
          direction={"row"}
        >
          <Stack
            width={"24px"}
            height={"24px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CateDeleteIcon />
          </Stack>
          <Typography
            fontSize={"16px"}
            fontWeight={500}
            color={"#161616"}
            sx={{
              "&:hover": {
                color: "#DF1F29",
              },
            }}
          >
            Delete Category
          </Typography>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};
