import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './Screens/Register'
import OTPVerify from "./Screens/OTPVerify";
import StudentDetails from "./Screens/StudentDetails";
import BoardDetails from "./Screens/BoardDetails";
import AppTour from "./Screens/AppTour";
import Home from "./Screens/Drawer/Home";
import Exam_corner from "./Screens/Drawer/Exam_corner"
import Subscriptions from "./Screens/Drawer/Subscriptions"
import Analytics from "./Screens/Drawer/Analytics"
import Downloads from "./Screens/Drawer/Downloads"
import Notifications from "./Screens/Drawer/Notifications"
import Referrals from "./Screens/Drawer/Referrals"
import Share_app from "./Screens/Drawer/Share_app"
import DrawerContent from "./Screens/Drawer/DrawerContent";
import Enquiry from "./Screens/Drawer/Enquiry";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recent from "./Screens/BottomTab/Recent"
import Exams from "./Screens/BottomTab/Exams"
import Profile from "./Screens/BottomTab/Profile"
import Contact from "./Screens/BottomTab/Contact"
import Icon from 'react-native-vector-icons/MaterialIcons';
import CourseHome from "./Screens/Course/CourseHome";
import Chapter from "./Screens/Course/Chapter";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Videos from "./Screens/TopTab/Videos";
import QNBank from "./Screens/TopTab/QNBank";
import ChapterTest from "./Screens/TopTab/ChapterTest";
import Resources from "./Screens/TopTab/Resources";
import { View } from "react-native";
import TopTabContent from "./Screens/TopTab/TopTabContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} navigation={navigation} />}>
      <Drawer.Screen name="BottomTabs" component={MyBottomtab} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name='Exam' component={Exam_corner} options={{ headerShown: false }} />
      <Drawer.Screen name='Subscriptions' component={Subscriptions} options={{ headerShown: false }} />
      <Drawer.Screen name='Analytics' component={Analytics} options={{ headerShown: false }} />
      <Drawer.Screen name='Downloads' component={Downloads} options={{ headerShown: false }} />
      <Drawer.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
      <Drawer.Screen name='Referrals' component={Referrals} options={{ headerShown: false }} />
      <Drawer.Screen name='Share' component={Share_app} options={{ headerShown: false }} />
      <Drawer.Screen name="Enquiry" component={Enquiry} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}
function MyBottomtab() {
  return (
    <BottomTab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 12, fontFamily: "Gilroy-Medium" },
      tabBarItemStyle: { height: 40, alignSelf:'center' },
      tabBarStyle: { backgroundColor: '#ffffff',width:"90%",alignSelf:'center',borderRadius:5,elevation:5,marginBottom:10 }
    }} >
      <BottomTab.Screen name="Home" component={Home}
        options={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: "#bbbbbb",
          tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />),
          headerShown: false
        }}
      />
      <BottomTab.Screen name="Recent" component={Recent}
        options={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: "#bbbbbb",
          tabBarIcon: ({ color, size }) => (<Icon name="play-arrow" size={size} color={color} />),
          headerShown: false
        }} />
      <BottomTab.Screen name="Exams" component={Exams}
        options={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: "#bbbbbb",
          tabBarIcon: ({ color, size }) => (<Icon name="edit-document" size={size} color={color} />),
          headerShown: false
        }} />
      <BottomTab.Screen name="Profile" component={Profile}
        options={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: "#bbbbbb",
          tabBarIcon: ({ color, size }) => (<Icon name="person" size={size} color={color} />),
          headerShown: false
        }} />
      <BottomTab.Screen name="Contact" component={Contact}
        options={{
          tabBarActiveTintColor: "#00C458",
          tabBarInactiveTintColor: "#bbbbbb",
          tabBarIcon: ({ color, size }) => (<Icon name="call" size={size} color={color} />),
          headerShown: false
        }} />
    </BottomTab.Navigator>
  )
}
function TopTabbar({ navigation,route }) {
  const { subject, title, chapter, parts } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#ff0000" }}>
      <TopTabContent chapter={chapter} parts={parts} title={title} subject={subject} navigation={navigation} />
      <TopTab.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 11, fontFamily: "Gilroy-Medium" },
        tabBarStyle: { backgroundColor: "#00202F" },
        tabBarIndicatorStyle: { backgroundColor: '#00C458' }, // Customize the indicator line color
        }}
      >
        <TopTab.Screen name="Videos" component={Videos}
          options={{
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#9F9F9F",
            // tabBarIcon: ({ color, size }) => (<Icon name="play-circle" size={size} color={color} />),
            headerShown: false
          }} />
        <TopTab.Screen name="Chapter Test" component={ChapterTest}
          options={{
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#9F9F9F",
            // tabBarIcon: ({ color, size }) => (<Icon name="note-alt" size={size} color={color} />),
            headerShown: false
          }} />
        <TopTab.Screen name="Resources" component={Resources}
          options={{
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#9F9F9F",
            // tabBarIcon: ({ color, size }) => (<Icon name="edit-document" size={size} color={color} />),
            headerShown: false
          }} />
        <TopTab.Screen name="QN Bank" component={QNBank}
          options={{
            tabBarActiveTintColor: "#ffffff",
            tabBarInactiveTintColor: "#9F9F9F",
            // tabBarIcon: ({ color, size }) => (<Icon name="edit-document" size={size} color={color} />),
            headerShown: false
          }} />
      </TopTab.Navigator>
    </View>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerify" component={OTPVerify} options={{ headerShown: false }} />
        <Stack.Screen name="StudentDetails" component={StudentDetails} options={{ headerShown: false }} />
        <Stack.Screen name="BoardDetails" component={BoardDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Drawerkey" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="AppTour" component={AppTour} options={{ headerShown: false }} />
        <Stack.Screen name="CourseHome" component={CourseHome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Chapter" component={Chapter} options={{ headerShown: false }} />
        <Stack.Screen name="TopTab" component={TopTabbar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;