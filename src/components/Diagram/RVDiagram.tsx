import React from 'react';
import './RVDiagram.css';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

import Box from '@mui/material/Box';

import { RVDiagramProps } from '../../types';

import { Stage, Layer, Rect, Text, Circle, Line, Group, RegularPolygon, Shape, Arc, Arrow } from 'react-konva';

const RVDiagram = ({ pc, lines, branched }: RVDiagramProps): JSX.Element => {

    const stageWidth = 1100
    const stageHeight = 600

    return (
        <Paper className="rv-diagram-paper" elevation={1}>
            <Stage className="rv-diagram-stage" width={stageWidth} height={stageHeight} scaleX={0.35} scaleY={0.35}>
                <Layer>
                    <Group id="pc-block" x={100} y={700}>
                        <Text text="PC" width={125} align='center' fontFamily='consolas' fontSize={20} />

                        <Rect
                            x={0}
                            y={25}
                            width={125}
                            height={125}
                            stroke="black"
                            fill="white"
                        />
                        <Text text={pc} x={0} y={25} width={125} height={125} align='center' verticalAlign='middle' fontFamily='consolas' fontSize={25} />
                        <RegularPolygon sides={3} x={10} y={125} radius={20} width={40} stroke="black" rotation={90} fill="white"></RegularPolygon>
                    </Group>

                    <Group id="add-block-1" x={450} y={175}>
                        <Rect
                            x={0}
                            y={25}
                            width={125}
                            height={125}
                            stroke="black"
                            fill="white"
                        />
                        <Text text={"ADD"} x={0} y={25} width={125} height={125} align='center' verticalAlign='middle' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="4-to-add-block-1" x={350} y={237.5}>
                        <Rect
                            x={0}
                            y={25}
                            width={62.5}
                            height={62.5}
                            stroke="black"
                            fill="white"
                        />
                        <Text text={"4"} x={0} y={25} width={62.5} height={62.5} align='center' verticalAlign='middle' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="instruction-memory-block" x={350} y={700}>
                        <Text text="Instruction Memory" y={-35} width={200} align='center' fontFamily='consolas' fontSize={25} />
                        <Rect
                            x={0}
                            y={25}
                            width={200}
                            height={400}
                            stroke="black"
                            fill="white"
                        />
                        <Text text="ReadAdr" x={15} y={200} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="InstrOut" x={75} y={90} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <RegularPolygon sides={3} x={10} y={400} radius={20} width={40} stroke="black" rotation={90} fill="white"></RegularPolygon>
                    </Group>

                    <Group id="concat-block" x={800} y={1000}>
                        <Text text="CONCAT" width={85} align='center' fontFamily='consolas' fontSize={25} />
                        <Shape
                            x={0}
                            y={25}
                            width={75}
                            height={150}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(75, 25);
                                context.lineTo(75, 125);
                                context.lineTo(0, 150);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                    </Group>

                    <Group id="imm-gen-block" x={710} y={1225}>
                        <Text text="ImmGen" y={-10} width={200} align='center' fontFamily='consolas' fontSize={25} />
                        <Rect
                            x={0}
                            y={25}
                            width={200}
                            height={100}
                            stroke="black"
                            fill="white"
                        />
                        <Text text="InstrIn" x={15} y={45} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="ImmOut" x={105} y={85} width={200} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="add-block-2" x={1050} y={325}>
                        <Rect
                            x={0}
                            y={25}
                            width={125}
                            height={125}
                            stroke="black"
                            fill="white"
                        />
                        <Text text={"ADD"} x={0} y={25} width={125} height={125} align='center' verticalAlign='middle' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="mux-block-reg-control" x={1130} y={850}>
                        <Shape
                            x={0}
                            y={25}
                            width={75}
                            height={150}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(75, 25);
                                context.lineTo(75, 125);
                                context.lineTo(0, 150);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="0" x={15} y={55} width={75} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="1" x={15} y={125} width={75} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="registers-block" x={1325} y={700}>
                        <Text text="Registers" width={200} y={-10} align='center' fontFamily='consolas' fontSize={25} />
                        <Rect
                            x={0}
                            y={25}
                            width={200}
                            height={400}
                            stroke="black"
                            fill="#E2EFDA"
                        />
                        <Text text="ReadReg_1" x={15} y={90} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="ReadReg_2" x={15} y={140} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="WriteReg" x={15} y={190} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="WriteData" x={15} y={240} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="RegWrite" x={15} y={290} width={200} align='left' fontFamily='consolas' fontSize={25} />

                        <Text text="ReadData_1" x={45} y={40} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="ReadData_2" x={45} y={350} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <RegularPolygon sides={3} x={10} y={400} radius={20} width={40} stroke="black" rotation={90} fill="white"></RegularPolygon>
                    </Group>

                    <Group id="mux-alu-control" x={1675} y={850}>
                        <Shape
                            x={0}
                            y={25}
                            width={75}
                            height={150}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(75, 25);
                                context.lineTo(75, 125);
                                context.lineTo(0, 150);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="0" x={15} y={55} width={75} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="1" x={15} y={125} width={75} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="alu-block" x={1850} y={400}>
                        <Text text="ALU" width={200} align='center' fontFamily='consolas' fontSize={25} />
                        <Shape
                            x={0}
                            y={25}
                            width={200}
                            height={400}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(200, 50);
                                context.lineTo(200, 350);
                                context.lineTo(0, 400);
                                context.lineTo(0, 225);
                                context.lineTo(75, 200);
                                context.lineTo(0, 175);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="S1" x={15} y={100} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="S2" x={15} y={325} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="Z" x={165} y={135} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="Result" x={95} y={212.5} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="P" x={165} y={290} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="Operation" x={35} y={380} width={200} align='left' fontFamily='consolas' fontSize={25} rotation={-15} />
                    </Group>

                    <Group id="alu-control-block" x={1850} y={975}>
                        <Text text="ALU Control" y={-20} width={150} align='center' fontFamily='consolas' fontSize={25} />
                        <Shape
                            x={0}
                            y={25}
                            width={150}
                            height={400}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(150, 50);
                                context.lineTo(150, 350);
                                context.lineTo(0, 400);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="InstrIn" x={15} y={100} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="ALUOp" x={15} y={325} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="Operation" x={15} y={212.5} width={200} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="data-memory-block" x={2400} y={700}>
                        <Text text="Data Memory" y={-10} width={200} align='center' fontFamily='consolas' fontSize={25} />
                        <Rect
                            x={0}
                            y={25}
                            width={200}
                            height={400}
                            stroke="black"
                            fill="#DDEBF7"
                        />
                        <Text text="Address" x={15} y={90} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="WriteData" x={15} y={140} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="MemWrite" x={15} y={190} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="MemWriteSize" x={15} y={240} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="MemRead" x={15} y={290} width={200} align='left' fontFamily='consolas' fontSize={25} />

                        <Text text="ReadData" x={75} y={40} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <RegularPolygon sides={3} x={10} y={400} radius={20} width={40} stroke="black" rotation={90} fill="white"></RegularPolygon>
                    </Group>

                    <Group id="branch-control-block" x={2400} y={175}>
                        <Text text="Branch Control" y={-20} width={150} align='center' fontFamily='consolas' fontSize={25} />
                        <Shape
                            x={0}
                            y={25}
                            width={150}
                            height={400}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(150, 50);
                                context.lineTo(150, 350);
                                context.lineTo(0, 400);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="BranchType" x={15} y={100} width={200} align='left' fontFamily='consolas' fontSize={22} />
                        <Text text="Z" x={15} y={212.5} width={200} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="Positive" x={15} y={325} width={200} align='left' fontFamily='consolas' fontSize={22} />
                        <Text text="Branch" x={50} y={212.5} width={200} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="and-gate-block" x={2675} y={375}>
                        <Arc
                            angle={180}
                            innerRadius={45}
                            outerRadius={0}
                            stroke="black"
                            rotation={270}
                            fill="white"
                        >
                        </Arc>
                        <Text y={-12.5} text="&" fontFamily='consolas' width={27.5} align='right' fontSize={25} />
                    </Group>

                    <Group id="mux-branch-control" x={2700} y={50}>
                        <Shape
                            x={0}
                            y={25}
                            width={75}
                            height={150}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(75, 25);
                                context.lineTo(75, 125);
                                context.lineTo(0, 150);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="0" x={15} y={55} width={75} align='left' fontFamily='consolas' fontSize={25} />
                        <Text text="1" x={15} y={125} width={75} align='left' fontFamily='consolas' fontSize={25} />
                    </Group>

                    <Group id="data-slicer-block" x={2700} y={900}>
                        <Text text="Data Slicer" y={-20} width={150} align='center' fontFamily='consolas' fontSize={25} />
                        <Shape
                            x={0}
                            y={25}
                            width={150}
                            height={400}
                            stroke="black"
                            sceneFunc={(context: any, shape: any) => {
                                context.beginPath();
                                context.moveTo(0, 0);
                                context.lineTo(150, 50);
                                context.lineTo(150, 350);
                                context.lineTo(0, 400);
                                context.closePath();
                                context.fillStrokeShape(shape);
                            }}
                            fill="white"
                        >
                        </Shape>
                        <Text text="InputData" x={15} y={100} width={200} align='left' fontFamily='consolas' fontSize={22} />
                        <Text text="LoadType" x={15} y={325} width={200} align='left' fontFamily='consolas' fontSize={22} />
                        <Text text="OutputData" x={12} y={212.5} width={200} align='left' fontFamily='consolas' fontSize={22} />
                    </Group>

                    {/* LINES */}

                    <Group id="line-1">
                        <Line
                            points={[225, 780, 280, 780]}
                            stroke={lines[1] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={280}
                            y={780}
                            fill={lines[1] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[1] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-2">
                        <Line
                            points={[280, 780, 280, 380]}
                            stroke={lines[2] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={280}
                            y={780}
                            fill={lines[2] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[2] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-3">
                        <Line
                            points={[280, 780, 280, 910]}
                            stroke={lines[3] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={280}
                            y={780}
                            fill={lines[3] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[3] ? 'red' : 'black'}
                        />
                        <Arrow
                            points={[280, 910, 348, 910]}
                            stroke={lines[3] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[3] ? 'red' : 'black'}
                        />
                    </Group>


                    <Group id="line-4">
                        <Line
                            points={[280, 380, 280, 235]}
                            stroke={lines[4] && !branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={280}
                            y={380}
                            fill={lines[4] && !branched ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[4] && !branched ? 'red' : 'black'}
                        />
                        <Arrow
                            points={[280, 235, 447, 235]}
                            stroke={lines[4] && !branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[4] && !branched ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-5">
                        <Arrow
                            points={[412, 295, 448, 295]}
                            stroke={lines[5] && !branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[5] && !branched ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-6">
                        <Arrow
                            points={[280, 380, 1048, 380]}
                            stroke={lines[6] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[6] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-7">
                        <Line
                            points={[550, 800, 590, 800]}
                            stroke={lines[7] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={590}
                            y={800}
                            fill={lines[7] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[7] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-8">
                        <Line
                            points={[590, 800, 630, 800]}
                            stroke={lines[8] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={630}
                            y={800}
                            fill={lines[8] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[8] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-9">
                        <Line
                            points={[630, 800, 670, 800]}
                            stroke={lines[9] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={670}
                            y={800}
                            fill={lines[9] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[9] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-10">
                        <Line
                            points={[670, 800, 710, 800]}
                            stroke={lines[10] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={710}
                            y={800}
                            fill={lines[10] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[10] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-11">
                        <Line
                            points={[710, 800, 750, 800]}
                            stroke={lines[11] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={750}
                            y={800}
                            fill={lines[11] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[11] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-12">
                        <Line
                            points={[750, 800, 750, 550, 1600, 550, 1600, 283]}
                            stroke={lines[12] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Arrow
                            points={[1600, 283, 2398, 283]}
                            stroke={lines[12] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[12] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-13">
                        <Line
                            points={[750, 800, 1240, 800]}
                            stroke={lines[13] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={1240}
                            y={800}
                            fill={lines[13] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[13] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-14">
                        <Line
                            points={[1240, 800, 1281.5, 800]}
                            stroke={lines[14] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Circle
                            x={1281.5}
                            y={800}
                            fill={lines[14] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[14] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-15">
                        <Line
                            points={[1240, 800, 1240, 900]}
                            stroke={lines[15] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Arrow
                            points={[1240, 900, 1323, 900]}
                            stroke={lines[15] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[15] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-16">
                        <Arrow
                            points={[1281.5, 800, 1322, 800]}
                            stroke={lines[16] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[16] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-17">
                        <Line
                            points={[1281.5, 800, 1281.5, 850]}
                            stroke={lines[17] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Arrow
                            points={[1281.5, 850, 1322, 850]}
                            stroke={lines[17] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[17] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-18">
                        <Line
                            points={[1525, 750, 1690, 750, 1690, 510]}
                            stroke={lines[18] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[18] ? 'red' : 'black'}
                        />
                        <Arrow
                            points={[1690, 510, 1848, 510]}
                            stroke={lines[18] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[18] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-19">
                        <Line
                            points={[590, 800, 590, 1575, 2300, 1575, 2300, 955]}
                            stroke={lines[19] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Arrow
                            points={[2300, 955, 2398, 955]}
                            stroke={lines[19] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[19] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-20">
                        <Line
                            points={[630, 800, 630, 1535, 2620, 1535, 2620, 1240]}
                            stroke={lines[20] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Arrow
                            points={[2620, 1240, 2698, 1240]}
                            stroke={lines[20] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[20] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-21">
                        <Line
                            points={[670, 800, 670, 1282]}
                            stroke={lines[21] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Arrow
                            points={[670, 1282, 708, 1282]}
                            stroke={lines[21] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[21] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-22">
                        <Line
                            points={[911, 1320, 961, 1320]}
                            stroke={lines[22] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Circle
                            x={961}
                            y={1320}
                            fill={lines[22] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[22] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-23">
                        <Line
                            points={[961, 1320, 961, 445]}
                            stroke={lines[23] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Arrow
                            points={[961, 445, 1048, 445]}
                            stroke={lines[23] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[23] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-24">
                        <Line
                            points={[961, 1320, 1610, 1320, 1610, 990]}
                            stroke={lines[24] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Arrow
                            points={[1610, 990, 1672, 990]}
                            stroke={lines[24] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[24] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-25">
                        <Line
                            points={[710, 800, 710, 1060]}
                            stroke={lines[25] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Circle
                            x={710}
                            y={1060}
                            fill={lines[25] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[25] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-26">
                        <Arrow
                            points={[710, 1060, 798, 1060]}
                            stroke={lines[26] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[26] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-27">

                        <Line
                            points={[710, 1060, 710, 1140]}
                            stroke={lines[27] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />
                        <Arrow
                            points={[710, 1140, 798, 1140]}
                            stroke={lines[27] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[27] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-28">

                        <Line
                            points={[1527, 1060, 1565, 1060, 1565, 917]}
                            stroke={lines[28] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            lineCap='square'
                        />

                        <Circle
                            x={1565}
                            y={917}
                            fill={lines[28] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[28] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-29">
                        <Arrow
                            points={[1565, 917, 1673, 917]}
                            stroke={lines[29] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[29] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-30">
                        {/* x={1675} y={850 */}
                        <Arrow
                            points={[1712.5, 1075, 1712.5, 1015]}
                            stroke={lines[30] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[30] ? 'red' : 'black'}
                        />
                        <Text text="ALUSrc" x={1675} y={1085} fontFamily='consolas' fontSize={25} fontStyle={'bold'} />
                    </Group>

                    <Group id="line-31">
                        <Line
                            points={[1565, 917, 1565, 850]}
                            stroke={lines[31] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[31] ? 'red' : 'black'}
                        />

                        <Arrow
                            points={[1565, 850, 2398, 850]}
                            stroke={lines[31] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[31] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-32">
                        <Line
                            points={[1750, 950, 1800, 950, 1800, 735]}
                            stroke={lines[32] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1800, 735, 1848, 735]}
                            stroke={lines[32] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[32] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-33">
                        <Line
                            points={[875, 1100, 920, 1100, 920, 1200, 1800, 1200, 1800, 1085]}
                            stroke={lines[33] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1800, 1085, 1848, 1085]}
                            stroke={lines[33] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[33] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-34">
                        <Arrow
                            points={[1800, 1310, 1848, 1310]}
                            stroke={lines[34] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[34] ? 'red' : 'black'}
                        />
                        <Text text="ALUOp" x={1720} y={1300} fontFamily='consolas' fontSize={25} fontStyle={'bold'} />
                    </Group>

                    <Group id="line-35">
                        <Line
                            points={[2000, 1200, 2050, 1200, 2050, 900, 1945, 900]}
                            stroke={lines[35] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1945, 900, 1945, 804]}
                            stroke={lines[35] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[35] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-36">
                        <Line
                            points={[2050, 545, 2200, 545, 2200, 397]}
                            stroke={lines[36] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[2200, 397, 2398, 397]}
                            stroke={lines[36] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[36] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-37">
                        <Line
                            points={[2050, 622, 2125, 622]}
                            stroke={lines[37] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />

                        <Circle
                            x={2125}
                            y={622}
                            fill={lines[37] ? 'red' : 'black'}
                            radius={5}
                            stroke={lines[37] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-38">
                        <Line
                            points={[2125, 622, 2125, 1495, 1050, 1495, 1050, 915]}
                            stroke={lines[38] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1050, 915, 1128, 915]}
                            stroke={lines[38] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[38] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-39">
                        <Line
                            points={[2125, 622, 2200, 622, 2200, 800]}
                            stroke={lines[39] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[2200, 800, 2398, 800]}
                            stroke={lines[39] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[39] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-40">
                        <Line
                            points={[2050, 700, 2300, 700, 2300, 510]}
                            stroke={lines[40] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[2300, 510, 2398, 510]}
                            stroke={lines[40] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[40] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-41">
                        <Arrow
                            points={[1205, 950, 1323, 950]}
                            stroke={lines[41] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                    </Group>

                    <Group id="line-42">
                        <Arrow
                            points={[1270, 1030, 1270, 1000, 1323, 1000]}
                            stroke={lines[42] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[42] ? 'red' : 'black'}
                        />
                        <Text text="RegWrite" x={1200} y={1040} fontFamily='consolas' fontSize={25} fontStyle={'bold'} fill={lines[42] ? 'red' : 'black'} />
                    </Group>

                    <Group id="line-43">
                        <Arrow
                            points={[2275, 900, 2398, 900]}
                            stroke={lines[43] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[43] ? 'red' : 'black'}
                        />
                        <Text text="MemWrite" x={2150} y={890} fontFamily='consolas' fontSize={25} fontStyle={'bold'} />
                    </Group>

                    <Group id="line-44">
                        <Arrow
                            points={[2275, 1000, 2398, 1000]}
                            stroke={lines[44] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[44] ? 'red' : 'black'}
                        />
                        <Text text="MemRead" x={2160} y={990} fontFamily='consolas' fontSize={25} fontStyle={'bold'} fill={lines[44] ? 'red' : 'black'} />
                    </Group>

                    <Group id="line-45">
                        <Line
                            points={[2600, 750, 2650, 750, 2650, 1010]}
                            stroke={lines[45] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[2650, 1010, 2698, 1010]}
                            stroke={lines[45] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[45] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-46">
                        <Arrow
                            points={[2550, 397, 2673, 397]}
                            stroke={lines[46] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[46] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-47">
                        <Arrow
                            points={[2625, 325, 2625, 350, 2673, 350]}
                            stroke={lines[47] && branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[47] && branched ? 'red' : 'black'}
                        />
                        <Text text="Branch" x={2580} y={300} fontFamily='consolas' fontSize={25} fontStyle={'bold'} fill={lines[47] && branched ? 'red' : 'black'} />
                    </Group>

                    <Group id="line-48">
                        <Line
                            points={[2720, 373, 2740, 373]}
                            stroke={lines[48] && branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[2740, 373, 2740, 213]}
                            stroke={lines[48] && branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[48] && branched ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-49">
                        <Line
                            points={[2850, 1122, 2900, 1122, 2900, 1615, 1075, 1615, 1075, 990]}
                            stroke={lines[49] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1075, 990, 1128, 990]}
                            stroke={lines[49] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[49] ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-50">
                        <Arrow
                            points={[1170, 1100, 1170, 1015]}
                            stroke={lines[50] ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Text text="MemToReg" x={1100} y={1110} fontFamily='consolas' fontSize={25} fontStyle={'bold'} fill={lines[50] ? 'red' : 'black'} />
                    </Group>

                    <Group id="line-51">
                        <Line
                            points={[1175, 410, 1400, 410, 1400, 185]}
                            stroke={lines[51] && branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                        />
                        <Arrow
                            points={[1400, 185, 2400, 185, 2400, 140, 2550, 140, 2550, 185, 2698, 185]}
                            stroke={lines[51] && branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[51] && branched ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-52">
                        <Arrow
                            points={[575, 260, 1250, 260, 1250, 115, 2698, 115]}
                            stroke={lines[52] && !branched ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[52] && !branched ? 'red' : 'black'}
                        />
                    </Group>

                    <Group id="line-53">
                        <Arrow
                            points={[2775, 150, 2900, 150, 2900, 30, 50, 30, 50, 780, 98, 780]}
                            stroke={lines[53] ? 'red' : 'black'}
                            strokeWidth={2.5}
                            fill={lines[53] ? 'red' : 'black'}
                        />
                    </Group>

                </Layer>
            </Stage>
        </Paper >
    )
};

export { RVDiagram };