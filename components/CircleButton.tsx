import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons color="#25292e" name="add" size={38} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    borderColor: "#ffd33d",
    borderRadius: 42,
    borderWidth: 4,
    height: 84,
    marginHorizontal: 60,
    padding: 3,
    width: 84,
  },

  circleButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 42,
    flex: 1,
    justifyContent: "center",
  },
});
