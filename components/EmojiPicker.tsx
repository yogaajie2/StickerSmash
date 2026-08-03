import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ children, isVisible, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>

            <Pressable onPress={onClose}>
              <MaterialIcons color="#fff" name="close" size={22} />
            </Pressable>
          </View>

          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
    height: "25%",
    position: "absolute",
    width: "100%",
  },

  titleContainer: {
    alignItems: "center",
    backgroundColor: "#464C55",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    height: "16%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  title: {
    color: "#fff",
    fontSize: 16,
  },
});
