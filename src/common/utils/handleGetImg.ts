import Taro from '@tarojs/taro';
import { post } from './request';

interface AlbumProps {
    setIsVisible: (isVisible: boolean) => void;
    setImgUrl: (imgUrl: string) => void;
    requestType: 'op' | 'user';
    sourceType: 'album' | 'camera';
    setContent?: (content: string) => void;
}

const handleChooseImage = ({
    setIsVisible,
    setImgUrl,
    // requestType,
    sourceType,
    setContent
}: AlbumProps) => {
    Taro.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: [sourceType],
        success: (res) => {
            res.tempFiles.forEach((item) => {
                Taro.showLoading({
                    title: '正在处理图片...',
                    mask: true
                });
                post("/ecosort/detect", item.path).then((res) => {
                    console.log(res);
                    setImgUrl(res.data.image_url); 
                    if(setContent) setContent(res.data.msg);
                    Taro.hideLoading();
                }).catch((err) => {
                    console.log(err);
                    Taro.hideLoading();
                    Taro.showToast({
                        title: `处理图片失败(${err.errMsg})`,
                        duration: 1000,
                        icon: 'none'
                    });
                });
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
    });
};

export default handleChooseImage;