import { StyleSheet } from "react-native";

import colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_purple,
  },

  containerLogo: {
    flex: 2,
    backgroundColor: colors.light_purple,
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: colors.gray_400,
  },

  button: {
    // position: 'absolute',
    backgroundColor: colors.dark_purple,
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    marginTop: 32,
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default styles;
