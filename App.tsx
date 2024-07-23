import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";

import {} from "expo-font";

import theme from "./src/theme";
import { StatusBar, Text } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Groups />
    </ThemeProvider>
  );
}
