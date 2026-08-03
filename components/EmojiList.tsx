import { Image } from "expo-image";
import { PropsWithChildren, useState } from "react";

import {
  FlatList,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

type Props = PropsWithChildren<{
  onCloseModal: () => void;
  onSelect: (image: ImageSourcePropType) => void;
}>;

export default function EmojiList({ onCloseModal, onSelect }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={emoji}
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onCloseModal();
            onSelect(item);
          }}
        >
          <Image key={index} source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  image: {
    height: 100,
    marginRight: 20,
    width: 100,
  },
});
