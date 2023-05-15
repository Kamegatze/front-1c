import React, { useState } from "react";
import {Container, Card, Form, Button} from 'react-bootstrap'
import { createProject } from "../config/create-project-axios";

const InitProject = () => {
    
    const[name, setName] = useState("");
    const[groupId, setGroupId] = useState("");
    const[javaVersion, setJavaVersion] = useState(20);

    
    //сохранять имя проетка и groupdId

    const init = async() => {
        try{
            //await createProject(name,groupId, javaVersion, []);
            localStorage.setItem('name', name)
            localStorage.setItem('groupId', groupId)
            alert("Проект успешно создан");
            createProject(name, groupId, javaVersion);
        } catch (e) {
            alert(e)
        }
    }

    return(
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card className="p-3" style={{ width: 600 }}>
                <h2 className="d-flex justify-content-center">Создать новый проект</h2>
                <Form className="d-flex flex-column p-3 m-3">
                    <Form.Label> Имя проекта:
                        <Form.Control value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Label>
                    <Form.Label> GroupId:
                        <Form.Control value={groupId} onChange={e => setGroupId(e.target.value)}/>
                    </Form.Label>
                    <Form.Label> Java Version:
                        <Form.Select aria-label="Default select example" onChange={e => setJavaVersion(e.target.value)}>
                            <option value="20">20</option>
                            <option value="17">17</option>
                            <option value="11">11</option>
                            <option value="8">8</option>
                        </Form.Select>
                    </Form.Label>
                    <Button variant="success" onClick={init}>Создать проект</Button>
                </Form>
            </Card>
        </Container>
    );
}

export default InitProject;