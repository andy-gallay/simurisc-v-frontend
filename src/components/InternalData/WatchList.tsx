import React from 'react';
import './WatchList.css';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import AddIcon from '@mui/icons-material/Add';

import Box from '@mui/material/Box';
import { WatchListProps } from './types';

const WatchList = ({ dataMemory, registers, currentCycle, success }: WatchListProps): JSX.Element => {

    const [registersWatchlist, setRegistersWatchlist] = React.useState<number[]>([])
    const [dataMemoryWatchlist, setDataMemoryWatchlist] = React.useState<number[]>([])

    const [registersDialogOpen, setRegistersDialogOpen] = React.useState(false);
    const [dataMemoryDialogOpen, setDataMemoryDialogOpen] = React.useState(false);

    const [registerIndex, setRegisterIndex] = React.useState(0)
    const [dataMemoryIndex, setDataMemoryIndex] = React.useState(0)

    const [validRegisterIndex, setValidRegisterIndex] = React.useState(true)
    const [validDataMemoryIndex, setValidDataMemoryIndex] = React.useState(true)

    React.useEffect(() => {
        setValidRegisterIndex(!(isNaN(registerIndex) || !isInteger(registerIndex) || registerIndex > 31 || registerIndex < 0))
    }, [registerIndex])

    React.useEffect(() => {
        setValidDataMemoryIndex(!(isNaN(dataMemoryIndex) || !isInteger(dataMemoryIndex) || dataMemoryIndex > 1023 || dataMemoryIndex < 0))
    }, [dataMemoryIndex])

    const addRegisterToWatchList = (reg: number) => {
        var previousState = registersWatchlist
        reg = Number(reg)
        if (!previousState.includes(reg) && previousState.length < 5) {
            previousState.push(reg)
            previousState.sort()
            setRegistersWatchlist(previousState)
        }
    }

    const addDataMemoryToWatchList = (dataMemory: number) => {
        var previousState = dataMemoryWatchlist
        dataMemory = Number(dataMemory)
        if (!previousState.includes(dataMemory) && previousState.length < 5) {
            previousState.push(dataMemory)
            previousState.sort()
            setDataMemoryWatchlist(previousState)
        }
    }

    const removeRegisterFromWatchList = (reg: number) => {
        if (registersWatchlist.includes(reg)) {
            let watchlist = [...registersWatchlist]
            watchlist.splice(registersWatchlist.indexOf(reg), 1)
            setRegistersWatchlist(watchlist)
        }
    }

    const removeDataMemoryFromWatchList = (dataMemory: number) => {
        if (dataMemoryWatchlist.includes(dataMemory)) {
            let watchlist = [...dataMemoryWatchlist]
            watchlist.splice(dataMemoryWatchlist.indexOf(dataMemory), 1)
            setDataMemoryWatchlist(watchlist)
        }
    }

    const handleRegistersClickOpen = () => {
        setRegistersDialogOpen(true);
    };

    const handleDataMemoryClickOpen = () => {
        setDataMemoryDialogOpen(true);
    };

    const handleRegistersClose = () => {
        setRegistersDialogOpen(false);
    };

    const handleDataMemoryClose = () => {
        setDataMemoryDialogOpen(false);
    };

    const isInteger = (value: any) => {
        const numberValue = Number(value)
        if (!isNaN(numberValue)) {
            return Math.floor(numberValue) == numberValue
        }
        return false
    }

    return (
        <Box className="watch-list-box">
            <Typography variant="h6" className="watch-list-title">WATCH LIST</Typography>
            <Box className="lists-box">
                <Box className="registers-list-box">
                    {registersWatchlist.map((registerIndex) => (
                        <div className='registers-list-element' key={registerIndex}>
                            <div className='registers-list-element-index'>{'x' + registerIndex}</div>
                            <div className='registers-list-element-value'>{registers[registerIndex]}</div>
                            <IconButton aria-label="delete" size="small" onClick={() => { removeRegisterFromWatchList(registerIndex) }}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </div>
                    ))}
                    {registersWatchlist.length < 5 &&
                        < Button variant="outlined" className="add-to-watch-list-button" endIcon={<AddIcon />} onClick={handleRegistersClickOpen}>Add register</Button>
                    }
                </Box>

                <Box className="data-memory-list-box">
                    {dataMemoryWatchlist.map((dataMemoryIndex) => (
                        <div className='data-memory-list-element' key={dataMemoryIndex}>
                            <div className='data-memory-list-element-index'>{'m' + dataMemoryIndex}</div>
                            <div className='data-memory-list-element-value'>{dataMemory[dataMemoryIndex]}</div>
                            <IconButton aria-label="delete" size="small" onClick={() => { removeDataMemoryFromWatchList(dataMemoryIndex) }}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </div>
                    ))}
                    {dataMemoryWatchlist.length < 5 &&
                        <Button variant="outlined" className="add-to-watch-list-button" endIcon={<AddIcon />} onClick={handleDataMemoryClickOpen}>Add data memory</Button>
                    }
                </Box>

                <Dialog className='registers-dialog' open={registersDialogOpen} onClose={handleRegistersClose}>
                    <DialogTitle>{'Add register to watchlist'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a register to the watch list, type the index of the register
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Register index"
                            fullWidth
                            variant="standard"
                            value={registerIndex}
                            onChange={(e: any) => setRegisterIndex(e.target.value)}
                            error={!validRegisterIndex}
                            helperText="Register index should be comprised between 0 and 31 (included)"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleRegistersClose}>Close</Button>
                        <Button disabled={!validRegisterIndex} onClick={() => {
                            addRegisterToWatchList(registerIndex)
                            handleRegistersClose()
                        }}>Add</Button>
                    </DialogActions>
                </Dialog>

                <Dialog className='data-memory-dialog' open={dataMemoryDialogOpen} onClose={handleDataMemoryClose}>
                    <DialogTitle>{'Add data memory cell to watchlist'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a data memory cell to the watch list, type the index of the data memory cell
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Data memory cell index"
                            fullWidth
                            variant="standard"
                            value={dataMemoryIndex}
                            onChange={(e: any) => setDataMemoryIndex(e.target.value)}
                            error={!validDataMemoryIndex}
                            helperText="Data memory cell index should be comprised between 0 and 1023 (included)"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDataMemoryClose}>Close</Button>
                        <Button disabled={!validDataMemoryIndex} onClick={() => {
                            addDataMemoryToWatchList(dataMemoryIndex)
                            handleDataMemoryClose()
                        }}>Add</Button>
                    </DialogActions>
                </Dialog>

            </Box>
        </Box >
    )
};

export { WatchList };