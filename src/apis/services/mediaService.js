export const getMediaDataInfo = (mediaData) =>{
    mediaData['date'] = mediaData['date'].slice(0, 10);
    // console.log(mediaData['date']);
    return mediaData;
}