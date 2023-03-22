import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface positionProps {
    setPosition: (position: number) => void;
    position: number;
}

function ShoveBoxButton({ position, setPosition }: positionProps) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    //const newPosition = () => setPosition(4 + position);

    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    //const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <span>
                    <ShoveBoxButton
                        position={position}
                        setPosition={setPosition}
                    ></ShoveBoxButton>
                </span>
                <span>
                    <MoveableBox
                        position={position}
                        //setPosition={setPosition}
                    ></MoveableBox>
                </span>
            </div>
        </div>
    );
}
