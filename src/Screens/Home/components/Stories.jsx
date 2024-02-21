import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Following} from "../../../Mock/Following";
import {users} from "../../../Mock/User";
import {Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';


export default function Stories() {
    return (
        <ScrollView horizontal={true} className="flex-row px-3 py-2" showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-x-4">
                {users.map((content, key) => (
                    <View className="text-center items-center justify-center">
                        <LinearGradient
                            colors={['#C913B9', '#FECD00']}
                            className={`rounded-full w-[76px] h-[76px] items-center justify-center`}
                        >
                            <View className="border-[3px] border-white rounded-full">
                                <Image
                                    className="w-[64px] h-[64px] rounded-full"
                                    source={{uri: content.Avatar}}
                                />
                            </View>
                            {content.Story === false && <View
                                className="w-5 h-5 right-0 bottom-0 absolute bg-blue-400 rounded-full items-center justify-center">
                                <Text className="text-white font-extrabold">+</Text>
                            </View>}
                        </LinearGradient>
                        <Text className="text-sm text-[#6e6e6e]">Hikayen</Text>
                    </View>
                ))}

                {Following.map((content, key) => (
                    <View key={key} className="items-center justify-center">
                        <LinearGradient
                            colors={['#C913B9', '#FECD00']}
                            className={`rounded-full w-[76px] h-[76px] items-center -z-20 justify-center`}
                        >
                            <View className="border-[3px] border-white rounded-full">
                                <Image
                                    className="w-[64px] h-[64px]  rounded-full z-20"
                                    source={{uri: content.Avatar}}
                                />
                            </View>
                        </LinearGradient>
                        <Text>{content.Name}</Text>
                    </View>
                ))}

            </View>
        </ScrollView>);
}