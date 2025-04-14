import Taro from '@tarojs/taro';

interface AlbumProps {
    setIsVisible: (isVisible: boolean) => void;
    setImgUrl: (imgUrl: string) => void;
    requestType: 'op' | 'user';
    sourceType: 'album' | 'camera';
}

const handleChooseImage = ({
    setIsVisible,
    setImgUrl,
    // requestType,
    sourceType
}: AlbumProps) => {
    Taro.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: [sourceType],
        success: (res) => {
            res.tempFiles.forEach((item) => {
                setImgUrl(item.path);
                setIsVisible(false);
            });
        },
        fail: (err) => {
            Taro.showToast({
                title: `选择图片失败(${err.errMsg})`,
                duration: 1000,
                icon: 'none'
            });
        }
    })
}

export default handleChooseImage; 