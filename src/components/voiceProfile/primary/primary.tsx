import { View } from '@tarojs/components'
import { memo } from 'react'
import './style.scss'

const Primary: React.FC = memo(() => {
    return (
        <View className='primary'>
            <View className='primary-content1'>摁住话筒开始识别...</View>
            <View className='primary-content2'>请告诉我你要分类的垃圾名称或者你在处理过程中的困惑</View>
        </View>
    )
});

export default Primary;