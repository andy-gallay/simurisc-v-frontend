import React from 'react';
import './AssemblerInformations.css';
import { AsmInformationsProps } from './types';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

import Box from '@mui/material/Box';

const AssemblerInformations = ({ errors }: AsmInformationsProps): JSX.Element => {
    return (
        <Box className="asm-infos-box">
            <Typography variant="h5" className="typography-title">ASSEMBLER INFOS</Typography>
            <Paper elevation={1}>
                <div id="feedbackConsole">
                    {'> '}{errors.length > 0 ?
                        <span style={{ color: 'red' }}>{errors.map(error => <span>{error}</span>)}</span>
                        :
                        <span>{'Ready to assemble...'}</span>}
                </div>
            </Paper>
        </Box>
    )
};

export { AssemblerInformations };