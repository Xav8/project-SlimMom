import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSavedFormData } from "../../Redux/calculator/calcSlice";
import { loadSavedaddFood } from "../../Redux/diary/addFoodSlice";
import styles from "../Aside/Aside.module.css";

const Aside = () => {
  const { data: formData } = useSelector((state) => state.formData);
  const { data: addFood } = useSelector((state) => state.addFood);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    const savedAddFood = localStorage.getItem("addFood");
    if (savedFormData && savedAddFood) {
      dispatch(loadSavedFormData(JSON.parse(savedFormData)));
      dispatch(loadSavedaddFood(JSON.parse(savedAddFood)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (formData && addFood) {
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("addFood", JSON.stringify(addFood));
    }
  }, [formData, addFood]);

  const consumedCalories = Math.round(addFood.calories);
  const leftCalories = formData.BMR
    ? Math.round(formData.BMR - consumedCalories)
    : "N/A";
  const dailyRate = Math.round(formData.BMR) || "N/A";
  const percentageOfNormal = formData.BMR
    ? ((consumedCalories / formData.BMR) * 100).toFixed(0)
    : "N/A";

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  return (
    <div className={styles.containerAside}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>Summary for {formattedDate}</h3>
          <ul className={styles.contentList}>
            <li>
              Left <span>{leftCalories} kcal</span>{" "}
            </li>
            <li>
              Consumed <span>{consumedCalories} kcal</span>
            </li>
            <li>
              Daily rate <span>{dailyRate} kcal</span>
            </li>
            <li>
              n% of normal
              <span>{percentageOfNormal}%</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Food not recommended</h3>
          <ul className={styles.contentList}>
            {formData?.forbiddenCategories?.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
