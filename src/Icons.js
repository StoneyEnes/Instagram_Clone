import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {Image} from 'expo-image';

//Home Icons
import HomeIcon from "../assets/BottomBarIcons/Black/Home.svg"
import HomeIconFilled from "../assets/BottomBarIcons/Black/Home-Filled.svg"
//Search Icons
import SearchIcon from "../assets/BottomBarIcons/Black/Search.svg"
import SearchIconFilled from "../assets/BottomBarIcons/Black/Search-Filled.svg"
//Reels Icons
import ReelsIcon from "../assets/BottomBarIcons/Black/Reels.svg"
import ReelsIconFilled from "../assets/BottomBarIcons/Black/Reels-Filled.svg"
//Shop Icons
import ShopIcons from "../assets/BottomBarIcons/Black/Shop.svg"
import ShopIconsFilled from "../assets/BottomBarIcons/Black/Shop-Filled.svg"
//Main Logo
import IGLogo from "../assets/IGLogo.svg"
//Header Icons
import Heart from "../assets/HeaderIcons/Heart.svg"
import HeartFilled from "../assets/HeaderIcons/Heart-Filled.svg"
import Messages from "../assets/HeaderIcons/Messages.svg"
import Create from "../assets/HeaderIcons/Create.svg"
//Shared
import Dots from "../assets/3Dots.svg"
import Comment from "../assets/Comments.svg"
import Bookmark from "../assets/Bookmark.svg"
import Send from "../assets/Send.svg"

export default function Icons({type, color, size, fill}) {
    const iconProps = {size, color};


    const getIconByType = (type) => {
        switch (type) {
            case 'home':
                return fill ? <Image source={HomeIconFilled} className="w-6 h-6"/> :
                    <Image className="w-6 h-6" source={HomeIcon}/>;
            case 'search':
                return fill ? <Image source={SearchIconFilled} className="w-6 h-6"/> :
                    <Image className="w-6 h-6" source={SearchIcon}/>;
            case 'reels':
                return fill ? <Image source={ReelsIconFilled} className="w-6 h-6"/> :
                    <Image className="w-6 h-6" source={ReelsIcon}/>;
            case 'shop':
                return fill ? <Image source={ShopIconsFilled} className="w-6 h-6"/> :
                    <Image className="w-6 h-6" source={ShopIcons}/>;
            case 'IGLogo':
                return <Image source={IGLogo} className="w-[104px] h-[30px]"/>
            case 'Heart' :
                return fill ? <Image source={HeartFilled} className="w-7 h-7"/> : <Image source={Heart} className="w-7 h-7"/>
            case 'Messages' :
                return <Image source={Messages} className="w-7 h-7"/>
            case 'Create' :
                return <Image source={Create} className="w-7 h-7"/>
            case 'dots' :
                return <Image source={Dots} className="w-[14px] h-[3px]"/>
            case 'comments' :
                return <Image source={Comment} className="w-7 h-7" />
            case 'send' :
                return <Image source={Send} className="w-7 h-7"/>
            case 'bookmark' :
                return <Image source={Bookmark} className="w-7 h-7"/>

            default:
                return null;
        }
    }
    return getIconByType(type);

}