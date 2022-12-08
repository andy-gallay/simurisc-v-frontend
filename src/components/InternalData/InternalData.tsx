import React from 'react';
import './InternalData.css';
import { Typography, IconButton } from '@mui/material';
import { Paper } from '@mui/material';

import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Box from '@mui/material/Box';
import { InternalDataProps } from './types';

const InternalData = ({ dataMemory, registers, currentCycle, success }: InternalDataProps): JSX.Element => {

    let formattedDataMemory: number[][] = new Array(1024)
    let formattedRegister: number[][] = new Array(1024)

    formattedDataMemory.fill(new Array(1024).fill(0))
    formattedRegister.fill(new Array(32).fill(0))

    const [currentMemoryTab, setCurrentMemoryTab] = React.useState(1)
    const [currentRegistersTab, setCurrentRegistersTab] = React.useState(1)

    const increaseMemoryTab = () => {
        if (currentMemoryTab < 64) {
            setCurrentMemoryTab(currentMemoryTab + 1)
        }
    }

    const decreaseMemoryTab = () => {
        if (currentMemoryTab > 1) {
            setCurrentMemoryTab(currentMemoryTab - 1)
        }
    }

    const increaseRegistersTab = () => {
        if (currentRegistersTab < 2) {
            setCurrentRegistersTab(currentRegistersTab + 1)
        }
    }

    const decreaseRegistersTab = () => {
        if (currentRegistersTab > 1) {
            setCurrentRegistersTab(currentRegistersTab - 1)
        }
    }

    return (
        <Box className="internal-data-box">
            <Box className="register-memory-box">
                <Box className="internal-memory-header-box">
                    <IconButton onClick={decreaseRegistersTab}><NavigateBeforeOutlinedIcon></NavigateBeforeOutlinedIcon></IconButton>
                    <Typography variant="h6" className="table-title">REGISTERS</Typography>
                    <IconButton onClick={increaseRegistersTab}><NavigateNextOutlinedIcon></NavigateNextOutlinedIcon></IconButton>
                    {currentRegistersTab} / 2
                </Box>

                <Box className="registers-tables-box">

                    <Box className="internal-memory-box-1">
                        <table className="data-memory-table">
                            {registers.slice(0, 8).map((value: number, key: number) => (
                                <tr>
                                    <td className="idx-td">x{key + (currentRegistersTab - 1) * 16}</td>
                                    <td className="value-td">{value}</td>
                                </tr>
                            ))}
                        </table>
                    </Box>

                    <Box className="internal-memory-box-2">
                        <table className="data-memory-table">
                            {registers.slice(8, 16).map((value: number, key: number) => (
                                <tr>
                                    <td className="idx-td">x{key + (currentRegistersTab - 1) * 16 + 8}</td>
                                    <td className="value-td">{value}</td>
                                </tr>
                            ))}
                        </table>
                    </Box>

                </Box>
            </Box>

            <Box className="internal-memory-box">
                <Box className="internal-memory-header-box">
                    <IconButton onClick={decreaseMemoryTab}><NavigateBeforeOutlinedIcon></NavigateBeforeOutlinedIcon></IconButton>
                    <Typography variant="h6" className="table-title">DATA MEMORY</Typography>
                    <IconButton onClick={increaseMemoryTab}><NavigateNextOutlinedIcon></NavigateNextOutlinedIcon></IconButton>
                    {currentMemoryTab} / 64
                </Box>

                <Box className="internal-memory-tables-box">

                    <Box className="internal-memory-box-1">
                        <table className="data-memory-table">
                            {dataMemory.slice(0, 8).map((value: number, key: number) => (
                                <tr>
                                    <td className="idx-td">m{key + (currentMemoryTab - 1) * 16}</td>
                                    <td className="value-td">{value}</td>
                                </tr>
                            ))}
                        </table>
                    </Box>

                    <Box className="internal-memory-box-2">
                        <table className="data-memory-table">
                            {dataMemory.slice(8, 16).map((value: number, key: number) => (
                                <tr>
                                    <td className="idx-td">m{key + (currentMemoryTab - 1) * 16 + 8}</td>
                                    <td className="value-td">{value}</td>
                                </tr>
                            ))}
                        </table>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
};

export { InternalData };