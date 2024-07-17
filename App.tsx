import { StatusBar, View } from "react-native";
import Home from "./src/app/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Home />
    </>
  );
}
