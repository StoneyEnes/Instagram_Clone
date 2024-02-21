import {View, TouchableOpacity} from "react-native";
import Icons from "../../../Icons";

export default function Header() {
    return (
        <View className="flex-row justify-between items-center px-[14px] h-14 pt-3 bg-white">
            <View>
                <Icons type="IGLogo"/>
            </View>
            <View className="flex-row gap-x-6">
                <TouchableOpacity>
                    <Icons type="Heart" fill={false}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons type="Messages"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons type="Create" />
                </TouchableOpacity>
            </View>
        </View>
    );
}