import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SchedulesScreen from "./screens/SchedulesScreens";
import RoutinesScreen from "./screens/RoutinesScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


// Screen names
const schedulesName = "Schedules"
const routinesName = "Routines"
const workoutName = "Workout"
const historyName = "History"
const settingsName = "Settings"

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator initialRouteName={workoutName}>
                <Tab.Screen name={schedulesName} component={SchedulesScreen} />
                <Tab.Screen name={routinesName} component={RoutinesScreen} />
                <Tab.Screen name={workoutName} component={WorkoutScreen} />
                <Tab.Screen name={historyName} component={HistoryScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
        </>
    );
  }