import React from 'react';
import './AssemblerEditor.css';
import { AsmEditorProps } from './types';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const AssemblerEditor = ({ errors, program, programHandler, assembleRunHandler }: AsmEditorProps): JSX.Element => {
    return (
        <Box className="asm-editor-box">
            <div className="asm-editor-topbar">
                <Button onClick={assembleRunHandler} className="assemble-run-button" variant="outlined" endIcon={<SendIcon />}>Assemble & Run</Button>
                <Typography variant="h5" className="typography-title">PROGRAM EDITOR</Typography>
            </div>
            <Paper className="codemirror-paper" elevation={1}>
                <CodeMirror
                    value={program}
                    height={'60vh'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={programHandler}
                    id="codemirror-editor"
                />
            </Paper>
        </Box>
    )
};

export { AssemblerEditor };