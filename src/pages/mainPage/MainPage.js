import { useDispatch, useSelector } from "react-redux";

export default function MainPage(params) {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

  // const INCREASE = "INCREASE";
  // const DECREASE = "DECREASE";

  const incActionGenerator = () => {
    dispatch({
      type: "INCREASE",
      preload: "increase the current value",
    });
  };

  const decActionGenerator = () => {
    dispatch({
      type: "DECREASE",
      preload: "decrease the current value",
    });
  };
  const deleteTitles = () => {
    dispatch({
      type: "DELETE_ALL",
    });
  };

  return (
    <>
      <span>{value}</span>
      <button onClick={incActionGenerator}>+</button>
      <button onClick={decActionGenerator}>-</button>

      <button onClick={deleteTitles}>delete all</button>
    </>
  );
}
