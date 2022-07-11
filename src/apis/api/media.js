import instance from '../utils/index';

export const getMediaData = async (mediaId) => {
    try{
        const response = await instance.get(
            `/mediaDummy/${mediaId}.json`,
        );
        // console.log(response.data);
        return response.data;
    } catch (error){
        console.log(error);
    }
}
