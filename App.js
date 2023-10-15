import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import colors from "./constants/colors";
import IconButton from "./UI/IconButton";

const BottomTap = createBottomTabNavigator();
const materialBottomTap = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTapNavigator = () => {
  return (
    <BottomTap.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarLabelStyle: { paddingBottom: 6, fontSize: 11 },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: "black",
        headerRight: () => (
          <IconButton
            icon={"add"}
            color={colors.white}
            size={28}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTap.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent",
          tabBarIcon: (tabInfo, size) => (
            <Ionicons
              name="hourglass"
              size={20}
              color={tabInfo.focused ? colors.white : tabInfo.tintColor}
            />
          ),
        }}
      />
      <BottomTap.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="calendar"
              size={20}
              color={tabInfo.focused ? colors.white : tabInfo.tintColor}
            />
          ),
        }}
      />
    </BottomTap.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.white,
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={BottomTapNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
