import ToDoItem from "@/components/ToDoItem";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1 / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToDoItem title="Test1" isDone={false} />
      <ToDoItem title="Test2" isDone={false} />
      <ToDoItem title="Test3" isDone={true} />
    </View>
  );
}
