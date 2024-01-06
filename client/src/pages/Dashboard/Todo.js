import { Loading } from "../../Components";
import { useAppContext } from "../../context/appContext";

const Todo = (props) => {
  const { isLoading, user } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <div date-theme={user.theme}>
      {`allowCustomTodo: ${user.allowCustomTodo}`}

      {`requestMinApplicationPerMonth: ${user.requestMinApplicationPerMonth}`}

      {`requestPostInterviewFollow_up: ${user.requestPostInterviewFollow_up}`}

      {`minApplicationPerMonth: ${user.minApplicationPerMonth}`}
    </div>
  );
};

export default Todo;
