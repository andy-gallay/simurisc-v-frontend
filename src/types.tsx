export type SimulationResults = {
    dataMemory: string[],
    instructionMemory: string[],
    registers: string[],
    pc: string[],
    errors: string[],
    success: boolean,
    lines: string[],
    branched: number[],
}

export type RVDiagramProps = {
    pc: string,
    lines: number[],
    branched: number,
}