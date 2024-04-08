import { ButtonBase, Stack, Typography } from "@mui/material";
import { CategoryData } from "@/utils/dummy-data-cards";
import { CreateCateIcon, DashboardCateIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { useFood } from "../context/Context";
import { FoodCard } from "../cards";
import { AddFoodModal } from "./AddFoodModal";
import { AddCategoryModal } from "./AddCategoryModal";
import { EmptyMenyComp } from "./EmptyMenuComp";
import { EditDeleteComp } from "./EditDeleteComp";

export const FoodCateCrud = () => {
  interface DataType {
    id: string;
    name: string;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCate, setIsModalOpenCate] = useState(false);
  const [foodCate, setFoodCate] = useState("Main Dish");
  const { allFood } = useFood();
  const [data, setData] = useState<DataType[] | null>(null);
  const [editDelete, setEditDelete] = useState("hide");

  const HandleEditDeletebutton = () => {
    setEditDelete(editDelete == "hide" ? "show" : "hide");
  };

  const menuFilteredFood = allFood.filter((food) => food.category == foodCate);
  const menuSortedFood = menuFilteredFood.sort(
    (aFood, bFood) => bFood.sale - aFood.sale
  );

  const BE_URL = "http://localhost:4000/api/category";

  useEffect(() => {
    const handleGetCategory = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const fetched_data = await fetch(BE_URL, options);
      const fetched_json = await fetched_data.json();
      setData(fetched_json.categories);
    };
    handleGetCategory();
  }, []);

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

  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  const onOpenModal = (e: any) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <Stack height={"1500px"} bgcolor={"#F7F7F8"} direction={"row"}>
      <Stack
        width={"402px"}
        height={"1500px"}
        padding={"26px 24px 26px 0"}
        gap={"40px"}
        bgcolor={"#FFF"}
      >
        <Stack width={"258px"}>
          <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
            Food menu
          </Typography>
        </Stack>
        <Stack gap={"26px"}>
          {data?.map((cate, index) => (
            <Stack
              height={"40px"}
              padding={"8px 16px"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderRadius={"8px"}
              border={"1px solid #D6D8DB"}
              bgcolor={"#FFF"}
              direction={"row"}
              width={"258px"}
              key={index}
              position={"relative"}
            >
              <ButtonBase onClick={() => setFoodCate(cate.name)}>
                <Typography fontSize={"18px"} fontWeight={500} color={"#000"}>
                  {cate.name}
                </Typography>
              </ButtonBase>
              <ButtonBase onClick={HandleEditDeletebutton}>
                <DashboardCateIcon />
                {editDelete === "show" && foodCate === cate.name && (
                  <Stack>
                    <Stack
                      position={"absolute"}
                      top={"-10px"}
                      right={"-220px"}
                      zIndex={10}
                    >
                      <EditDeleteComp cateData={cate} />
                    </Stack>
                  </Stack>
                )}
              </ButtonBase>
            </Stack>
          ))}
          <ButtonBase onClick={onOpenModalCate}>
            <Stack
              height={"40px"}
              padding={"8px 16px"}
              alignItems={"center"}
              borderRadius={"8px"}
              border={"1px solid #D6D8DB"}
              bgcolor={"#FFF"}
              width={"258px"}
              direction={"row"}
            >
              <Stack>
                <CreateCateIcon />
              </Stack>
              <Typography fontSize={"18px"} fontWeight={500} color={"#5E6166"}>
                Create new category
              </Typography>
              <AddCategoryModal
                isOpen={isModalOpenCate}
                onClose={onCloseModalCate}
                addData={data}
                setAddData={setData}
              />
            </Stack>
          </ButtonBase>
        </Stack>
      </Stack>
      <Stack height={"1500px"} padding={"24px"} gap={"32px"}>
        <Stack
          width={"894px"}
          padding={"16px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          <Stack>
            <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
              {foodCate}
            </Typography>
          </Stack>
          <ButtonBase onClick={onOpenModal}>
            <Stack
              width={"150px"}
              padding={"8px 16px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"4px"}
              bgcolor={"#18BA51"}
            >
              <Typography fontSize={"16px"} fontWeight={400} color={"#FFF"}>
                Add new food
              </Typography>
              <AddFoodModal isOpen={isModalOpen} onClose={onCloseModal} />
            </Stack>
          </ButtonBase>
        </Stack>
        <Stack gap={"40px"} flexWrap={"wrap"} direction={"row"}>
          {menuSortedFood.length === 0 ? (
            <EmptyMenyComp />
          ) : (
            menuSortedFood.map((food, index) => (
              <FoodCard key={index} food={food} />
            ))
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
