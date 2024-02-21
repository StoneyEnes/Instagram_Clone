import {StatusBar} from 'expo-status-bar';
import {View} from "react-native";
import Screens from "./src/Screens";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView className="w-full h-full flex">
            <NavigationContainer>
                <Screens/>
            </NavigationContainer>
        </SafeAreaView>
    );
}
