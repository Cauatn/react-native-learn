import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  header: {
    marginTop: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFCFE",
    marginTop: 48,
  },
  description: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  input: {
    backgroundColor: "#1F1E25",
    flex: 1,
    height: 56,
    fontSize: 14,
    color: "#fff",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31F67D",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 42,
    gap: 16,
  },
});

export default styles;
