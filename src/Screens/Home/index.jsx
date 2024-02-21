import {View, Text, ScrollView} from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

export default function HomeScreen() {
    return (
        <ScrollView vertical={true} className="flex-1" stickyHeaderIndices={[0]}>
            <Header/>
            <Stories/>
            <Posts />
        </ScrollView>
    );
}