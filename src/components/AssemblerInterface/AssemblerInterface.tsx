import React from 'react';
import './AssemblerInterface.css';
import { AsmInterfaceProps } from './types';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AssemblerEditor } from './AssemblerEditor';
import { AssemblerInformations } from './AssemblerInformations';

import Box from '@mui/material/Box';

const AssemblerInterface = ({ errors, program, programHandler, assembleRunHandler }: AsmInterfaceProps): JSX.Element => {
    return (
        <Box className="asm-interface-box">
            <Box className="asm-editor-box">
                <AssemblerEditor errors={errors} program={program} programHandler={programHandler} assembleRunHandler={assembleRunHandler}></AssemblerEditor>
            </Box>
            <AssemblerInformations errors={errors}></AssemblerInformations>
        </Box>
    )
};

export { AssemblerInterface };