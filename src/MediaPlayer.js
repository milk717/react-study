import ReactPlayer from 'react-player/lazy';
import Container from '@mui/material/Container';
import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography'
import Icon from "@mui/material/Icon"
import React from "react";
import IconButton from '@mui/material/IconButton';
import Forward10Icon from '@mui/icons-material/Forward10';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Replay10Icon from '@mui/icons-material/Replay10';


const ControlsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,6);
    opacity:0.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    visibility: hidden;
`;

const PlayerWapper = styled.div`
    width: 100%;
    position: relative;
    &: hover{
        ${ControlsWrapper}{
            visibility: visible;  
        };  
    };
`;

const MiddleControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: center;
`;

const ControlsIcons = styled.button`
    color: #777;
    background-color: #000;
    font-size: 3rem;
    margin: 10px;
    transform: scale(1);
    &:hover {
        color: #fff;
        transform: scale(1.2);
    };
`;


const MediaPlayer = ({playList, index}) => {
    return (
        <Container>
            <h2>동영상 재생 페이지 입니다.</h2>
            <PlayerWapper id='player'>
                <ReactPlayer
                    url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on (디폴트 음소거일 때만 자동재생됨)
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
                <ControlsWrapper>
                    <MiddleControlsWrapper >
                        <ControlsIcons>
                            <Replay10Icon fontSize="inherit" />
                        </ControlsIcons>

                        <ControlsIcons>
                            <PlayCircleIcon fontSize="inherit" />
                        </ControlsIcons>

                        <ControlsIcons>
                            <Forward10Icon fontSize="inherit" />
                        </ControlsIcons>
                    </MiddleControlsWrapper>

                    {/*/!* bottom controls *!/*/}
                    {/*<Grid*/}
                    {/*    container*/}
                    {/*    direction="row"*/}
                    {/*    justify="space-between"*/}
                    {/*    alignItems="center"*/}
                    {/*    style={{ padding: 16 }}*/}
                    {/*>*/}
                    {/*    <Grid item xs={12}>*/}
                    {/*        <PrettoSlider*/}
                    {/*            min={0}*/}
                    {/*            max={100}*/}
                    {/*            defaultValue={20}*/}
                    {/*            ValueLabelComponent={ValueLabelComponent}*/}
                    {/*        />*/}
                    {/*    </Grid>*/}

                    {/*    <Grid item>*/}
                    {/*        <Grid container alignItems="center" direction="row">*/}
                    {/*            <IconButton className={classes.bottomIcons}>*/}
                    {/*                <PlayArrowIcon fontSize="large" />*/}
                    {/*            </IconButton>*/}

                    {/*            <IconButton className={classes.bottomIcons}>*/}
                    {/*                <VolumeUpIcon fontSize="large" />*/}
                    {/*            </IconButton>*/}

                    {/*            <Slider*/}
                    {/*                min={0}*/}
                    {/*                max={100}*/}
                    {/*                defaultValue={100}*/}
                    {/*                className={classes.volumeSlider}*/}
                    {/*            />*/}

                    {/*            <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>*/}
                    {/*                <Typography>05:05</Typography>*/}
                    {/*            </Button>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Button*/}
                    {/*            onClick={handlePopover}*/}
                    {/*            variant="text"*/}
                    {/*            className={classes.bottomIcons}*/}
                    {/*        >*/}
                    {/*            <Typography>1X</Typography>*/}
                    {/*        </Button>*/}
                    {/*        <Popover*/}
                    {/*            id={id}*/}
                    {/*            open={open}*/}
                    {/*            anchorEl={anchorEl}*/}
                    {/*            onClose={handleClose}*/}
                    {/*            anchorOrigin={{*/}
                    {/*                vertical: "top",*/}
                    {/*                horizontal: "center",*/}
                    {/*            }}*/}
                    {/*            transformOrigin={{*/}
                    {/*                vertical: "bottom",*/}
                    {/*                horizontal: "center",*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <Grid container direction="column-reverse">*/}
                    {/*                {[0.5, 1, 1.5, 2].map((rate) => (*/}
                    {/*                    <Button variant="text">*/}
                    {/*                        <Typography color="secondary">{rate}</Typography>*/}
                    {/*                    </Button>*/}
                    {/*                ))}*/}
                    {/*            </Grid>*/}
                    {/*        </Popover>*/}
                    {/*        <IconButton className={classes.bottomIcons}>*/}
                    {/*            <FullScreenIcon fontSize="large" />*/}
                    {/*        </IconButton>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </ControlsWrapper>
            </PlayerWapper>


        </Container>
    )
}

export default MediaPlayer;