import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 16,
  },

  name: {
    backgroundColor: "#1F1E25",
    flex: 1,
    height: 56,
    fontSize: 14,
    color: "#fff",
    padding: 12,
    borderRadius: 5,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
});

export default styles;
