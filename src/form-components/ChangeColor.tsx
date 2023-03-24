import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "organge",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="update color"
                    label={color}
                    value={color}
                    checked={color === "good"}
                    key={color}
                    background-color={color}
                />
            ))}
            <div>You have chosen </div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
