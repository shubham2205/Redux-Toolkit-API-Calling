import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "./app/features/gitUserSlice";

const App = () => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => {
    return state.app.users;
  });
  console.log(datas);

  if (datas.error != null) {
    return <h1>error</h1>;
  }
  return (
    <div>
      <button onClick={() => dispatch(getAllData())}>get git users</button>
      {datas && datas.map((elem) => <li key={elem.id}>{elem.login}</li>)}
    </div>
  );
};

export default App;
