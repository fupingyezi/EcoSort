import { View } from '@tarojs/components'
import { memo } from 'react'
import './style.scss'

const Ongoing: React.FC = memo(() => {
    return (
        <View className='ongoing'>
            <View className='ongoing-title'>摁住话筒开始识别...</View>
            <View className='ongoing-animation'>
                <View className='ongoing-animation-item1'></View>
                <View className='ongoing-animation-item2'></View>
                <View className='ongoing-animation-item3'></View>
                <View className='ongoing-animation-item4'></View>
                <View className='ongoing-animation-item5'></View>
                <View className='ongoing-animation-item6'></View>
                <View className='ongoing-animation-item7'></View>
            </View>
        </View>
    )
});

export default Ongoing;