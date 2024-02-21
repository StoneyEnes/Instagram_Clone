import {Image, Text, TouchableOpacity, View} from "react-native";
import {users} from "../../../Mock/User";
import {LinearGradient} from "expo-linear-gradient";
import Icons from "../../../Icons";
import {useState} from "react";


export default function Posts() {

    const [like, setLike] = useState(false)

    return (
        users.map((content, key) => (
            <View className="flex-col">
                <View key={key} className="h-[50px] mt-2 w-full px-3 justify-between flex-row items-center">
                    <View>

                        <View key={key} className="items-center gap-x-2 justify-center flex-row">
                            <LinearGradient
                                colors={['#C913B9', '#FECD00']}
                                className={`rounded-full w-[40px] h-[40px] items-center -z-20 justify-center`}
                            >
                                <View className="border-[2px] border-white rounded-full">
                                    <Image
                                        className="w-[32px] h-[32px]  rounded-full z-20"
                                        source={{uri: content.Avatar}}
                                    />
                                </View>
                            </LinearGradient>
                            <View className="flex-col">
                                <Text className="font-bold">{content.owner_name}</Text>
                                {
                                    content.sponsored === true && <Text className="font-normal">Sponsorlu</Text>
                                }
                            </View>
                        </View>

                    </View>
                    <View>
                        <Icons type="dots"/>
                    </View>
                </View>

                {/*Resim Kısmı*/}
                <View className="items-center justify-center">
                    <Image source={{uri: content.image}} className="w-full h-[400px]"/>
                </View>

                <View className="flex-row h-10 px-3 w-full justify-between items-center">
                    <View className="flex-row gap-x-3">
                        <TouchableOpacity onPress={() => setLike(!like)}>
                            <Icons type="Heart" fill={like}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icons type="comments"/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icons type="send"/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Icons type="bookmark"/>
                    </TouchableOpacity>
                </View>

            </View>
        ))
    );
}