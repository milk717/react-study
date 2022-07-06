import ReactPlayer from 'react-player/lazy';
import Container from '@mui/material/Container';
import styled, { css }from 'styled-components';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Icon from "@mui/material/Icon"
import React from "react";
import IconButton from '@mui/material/IconButton';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastRewindIcon from '@mui/icons-material/FastRewind';

const PlayerWapper = styled.div`
    width: "100%";
    position: "relative";
`;

const ControlsWrapper = styled.div`
    position: 'abosolute';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: "rgba(0,0,0,0,6)";
    display: "flex";
    flexDirection: "column";
    justifyContent: "space-between";
    zIndex: 1;
`;

const ControlsIcons = styled.button`
    color: "#777";
    fontSize: 50;
    transform: "scale(0.9)";
    "&:hover": {
        color: "#fff",
        transform: "scale(1)",
    };
`;


const MediaPlayer = ({playList, index}) => {
    return (
        <Container  maxWidth="md">
            <h2>동영상 재생 페이지 입니다.</h2>
            <PlayerWapper>
                <ReactPlayer
                    url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on (디폴트 음소거일 때만 자동재생됨)
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                    // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
            </PlayerWapper>
                {/* middle controls */}
            <ControlsWrapper>
                <Grid container direaction="row" alignItems="center" justify="center">
                    <ControlsIcons>
                        <FastRewindIcon fontSize="inherit" />
                    </ControlsIcons>

                    <ControlsIcons>
                        <PlayArrowIcon fontSize="inherit" />
                    </ControlsIcons>

                    <ControlsIcons>
                        <FastForwardIcon fontSize="inherit" />
                    </ControlsIcons>
                </Grid>

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
        </Container>
    )
}

export default MediaPlayer;