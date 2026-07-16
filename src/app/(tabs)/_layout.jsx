import { Tabs } from "expo-router";
import { House, Play, Bell, Cog } from 'lucide-react-native'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (focused ? <House color="blue" /> : <House />),

        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",
          tabBarIcon: ({ focused }) => (focused ? <Play color="blue" /> : <Play />),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (focused ? <Bell color="blue" /> : <Bell />),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (focused ? <Cog color="blue" /> : <Cog />),
        }}
      />
    </Tabs>
  );
}
