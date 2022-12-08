import React from 'react';
import './CycleBar.css';
import { Paper, Slider, Typography, IconButton } from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import Box from '@mui/material/Box';

import { CycleBarProps } from './types';

const CycleBar = ({ success, numberOfCycles, currentCycle, cycleHandler, cycleIncreaser, cycleDecreaser }: CycleBarProps): JSX.Element => {
    return (
        <Paper className="cycle-bar-paper" elevation={1}>
            <Box className="cycle-bar-player-box">
                <IconButton onClick={cycleDecreaser} disabled={!success || currentCycle == 0}><NavigateBeforeOutlinedIcon></NavigateBeforeOutlinedIcon></IconButton>
                <IconButton><PlayArrowOutlinedIcon></PlayArrowOutlinedIcon></IconButton>
                <IconButton onClick={cycleIncreaser} disabled={!success || currentCycle == (numberOfCycles - 1)}><NavigateNextOutlinedIcon></NavigateNextOutlinedIcon></IconButton>
            </Box>
            <Box className="slider-box">
                <Slider
                    aria-label="Cycle count"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    value={currentCycle}
                    step={1}
                    marks
                    min={0}
                    max={numberOfCycles - 1}
                    onChange={cycleHandler}
                    disabled={!success}
                    size='small'
                />
            </Box>

            <Box className="current-cycle-box">
                <span className="current-cycle-span">
                    {currentCycle} / {success ? numberOfCycles - 1 : '?'}
                </span>
            </Box>
        </Paper>
    )
};

export { CycleBar };