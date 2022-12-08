import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AssemblerInformations } from './components/AssemblerInterface/AssemblerInformations';
import { AssemblerInterface } from './components/AssemblerInterface/AssemblerInterface';
import { RVDiagram } from './components/Diagram/RVDiagram';
import { InternalData } from './components/InternalData/InternalData';
import { CycleBar } from './components/CycleBar/CycleBar';
import { WatchList } from './components/InternalData/WatchList';
import { SimulationResults } from './types';

import { Paper } from '@mui/material';

import axios from 'axios'

const program = [
  "lui x3, 15",
  "lui x4, x4"
]

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Accept': '*/*',
}

const requestUrl = 'http://localhost:8080/simulate'

function FormatProgram(program: string): string[] {
  const trimmedProgram = program.replace(/  +/g, ' ');
  return trimmedProgram.split(/\r?\n/);
}

function App() {

  const [program, setProgram] = React.useState("lui x1, 5\nlui x2, 5\nadd x3, x1, x2\nlui x4, 0\nsw x3, 0(x4)");

  const [currentCycleRegisters, setCurrentCycleRegisters] = React.useState<number[]>(new Array(32).fill(0))
  const [currentCycleDataMemory, setCurrentCycleDataMemory] = React.useState<number[]>(new Array(1024).fill(0))
  const [currentCyclePC, setCurrentCyclePC] = React.useState<string>('0')
  const [currentCycleLines, setCurrentCycleLines] = React.useState<number[]>(new Array(54).fill(0))

  const [currentProgram, setCurrentProgram] = React.useState<string[]>(Array<string>())
  const [currentInstruction, setCurrentInstruction] = React.useState<string>("None")

  const assembleAndSimulate = async () => {
    const formattedProgram = FormatProgram(program);
    setCurrentProgram(formattedProgram)
    try {
      let res = await axios.post<SimulationResults>(requestUrl, { program: formattedProgram }, { headers: headers });
      setSimulationResults(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [simulationResults, setSimulationResults] = React.useState({
    dataMemory: [''],
    instructionMemory: [''],
    registers: [''],
    pc: [''],
    errors: [''],
    success: false,
    lines: [''],
    branched: [0]
  })

  const [currentCycle, setCurrentCycle] = React.useState(0)

  React.useEffect(() => {
    if (simulationResults.success) {
      const currentCycleRegistersString = simulationResults.registers[currentCycle]
      const currentCycleDataMemoryString = simulationResults.dataMemory[currentCycle]
      const currentCycleLinesString = simulationResults.lines[currentCycle]

      const newCurrentCycleRegisters = currentCycleRegistersString.split(',').map(Number)
      const newCurrentCycleDataMemory = currentCycleDataMemoryString.split(',').map(Number)
      const newCurrentCycleLines = currentCycleLinesString.split(',').map(Number)

      setCurrentCycleRegisters(newCurrentCycleRegisters)
      setCurrentCycleDataMemory(newCurrentCycleDataMemory)
      setCurrentCyclePC(simulationResults.pc[currentCycle])
      setCurrentCycleLines(newCurrentCycleLines)
      setCurrentInstruction(currentProgram[currentCycle])
    }
  }, [currentCycle])

  const handleAssembleRun = () => {
    assembleAndSimulate()
    setCurrentCycle(0)
  }

  const handleCycleChange = (event: any) => {
    setCurrentCycle(event.target.value)
  }

  const increaseCycle = () => {
    if (simulationResults.success && currentCycle < simulationResults.pc.length - 1) setCurrentCycle(currentCycle + 1)
  }

  const decreaseCycle = () => {
    if (simulationResults.success && currentCycle > 0) setCurrentCycle(currentCycle - 1)
  }

  return (
    <div className="App">
      <div className="overall-container">
        <div className="asm-interface">
          <AssemblerInterface errors={simulationResults.errors} program={program} programHandler={setProgram} assembleRunHandler={handleAssembleRun}></AssemblerInterface>
          {currentInstruction}
        </div>
        <div className="right-side-container">
          <CycleBar success={simulationResults.success} numberOfCycles={simulationResults.pc.length} currentCycle={currentCycle} cycleHandler={handleCycleChange} cycleIncreaser={increaseCycle} cycleDecreaser={decreaseCycle}></CycleBar>
          <RVDiagram pc={currentCyclePC} lines={currentCycleLines} branched={simulationResults.branched[currentCycle]}></RVDiagram>

          <Paper className="internal-data-div" elevation={1}>
            <InternalData dataMemory={currentCycleDataMemory} registers={currentCycleRegisters} currentCycle={currentCycle} success={simulationResults.success}></InternalData>
            <WatchList dataMemory={currentCycleDataMemory} registers={currentCycleRegisters} currentCycle={currentCycle} success={simulationResults.success}></WatchList>
          </Paper>
        </div>
      </div>
      {/* <AssemblerInformations errors={['ERROR errUnexpectedToken: Unexpected token, got register, expected immediate value (integer):2']}></AssemblerInformations> */}
    </div>
  );
}

export default App;
