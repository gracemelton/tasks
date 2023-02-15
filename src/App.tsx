import React from "react";
import "./App.css";
import penny from "./penny.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> Grace Melton </h1>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <img src={penny} alt="A picture of my dog Penny" />
            <div> list</div>
            <ul>
                <li> element 1</li>
                <li> element 2</li>
                <li> element 3</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column. You can put whatever you want in here, and
                        it will be on the left side.
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side.
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
