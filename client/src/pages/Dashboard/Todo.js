import { Loading } from "../../Components";
import { useAppContext } from "../../context/appContext";

const Todo = (props) => {
  const { isLoading, user } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }
  return <div date-theme={user.theme}></div>;
};

export default Todo;
