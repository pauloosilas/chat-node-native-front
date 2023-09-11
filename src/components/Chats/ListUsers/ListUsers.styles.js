import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    marginBottom: 50,
    paddingBottom: 50,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    color: "#666",
    fontSize: 16,
  },
  email: {
    color: "#333",
    opacity: 0.6,
    marginTop: 2,
  },
});
