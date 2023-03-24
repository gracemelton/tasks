import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="check edit"
                label="Edit mode?"
                checked={edit}
                onChange={() => setEdit(!edit)}
            />

            {edit ? (
                <Form.Check
                    type="checkbox"
                    id="check student"
                    label="Is student?"
                    checked={student}
                    onChange={() => setStudent(!student)}
                />
            ) : (
                <></>
            )}
            <div>{"\n"}</div>
            {edit ? (
                <Form.Group controlId="formEnterName">
                    <Form.Label> Enter Name of Student</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            ) : (
                <></>
            )}

            <p>
                {name} is {student ? "" : "not"} a Student
            </p>
        </div>
    );
}
