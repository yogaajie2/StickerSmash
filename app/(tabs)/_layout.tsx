import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#25292e" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#ffd33d",
        tabBarStyle: { backgroundColor: "#25292e" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
