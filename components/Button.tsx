import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            color="#25292e"
            name="picture-o"
            size={18}
            style={styles.buttonIcon}
          />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    height: 68,
    justifyContent: "center",
    marginHorizontal: 20,
    padding: 3,
    width: 320,
  },

  button: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
