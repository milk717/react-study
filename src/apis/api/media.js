import instance from '../utils/index';

export const getMediaData = async (mediaId) => {
    try{
        const response = await instance.get(
            `/mediaDummy/${mediaId}.json`,
        );
        return response.data;
    } catch (error){
        console.log(error);
    }
}
