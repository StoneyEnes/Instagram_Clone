import {Image, Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import Search from "./Search";
import Reels from "./Reels";
import Shop from "./Shop";
import Profile from "./Profile";
import Icons from "../Icons";
import {users} from "../Mock/User";

export default function Screens() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={
            {
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: 'gray',
            }
        }>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Icons type="home" color size={24} fill={focused}/>
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Icons type="search" color size={24} fill={focused}/>
                    ),
                }}
            />

            <Tab.Screen
                name="Reels"
                component={Reels}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Icons type="reels" color size={24} fill={focused}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Icons type="shop" color size={24} fill={focused}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {users.map((user, key) => (
                                <View key={key} className="w-6 h-6 rounded-full overflow-hidden">
                                    <Image source={{ uri: user.Avatar }} className="w-full h-full" />
                                </View>
                            ))}
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    )
        ;
}