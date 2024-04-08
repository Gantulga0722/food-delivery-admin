import { ButtonBase, Stack, Typography } from "@mui/material";
import { CateDeleteIcon, CateEditIcon } from "../icons";
import { useState } from "react";
import { EditCateModal } from "./EditCateModal";

interface DataType {
  id: string;
  name: string;
}

export const EditDeleteComp = ({ cateData }: { cateData: DataType }) => {
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
      <ButtonBase>
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
