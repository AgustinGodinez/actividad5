'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Stack } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import { AiTwotoneMail } from 'react-icons/ai';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { GiModernCity } from 'react-icons/gi';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import '../styles/Home.module.css'
import { FaAddressCard, FaCity } from 'react-icons/fa';




export default function Login() {

    const [usuario, setUsuarios] = useState({})

    const datosChange = e => {
        setDatos(e.target.value)
    }

    const getUsuarioForm = (e) => {
        e.preventDefault();

        let datos = e.target;
        let user = {
            nombre: datos.nombre.value,
            apellidos: datos.apellidos.value,
            fechaNacimiento: datos.fechaNacimiento.value,
            email: datos.email.value,
            password: datos.password.value,
            direccion: datos.direccion.value,
            telefono: datos.telefono.value,
            estado: datos.estado.value,
            ciudad: datos.ciudad.value,
            postal: datos.postal.value,
            enviar: datos.enviar.value,
        };
        console.log(user);
        setUsuarios(usuario);
    }
    return (
        <div className='container mt-5 bg-danger bg-opacity-25 mb-5 rounded-4' >
            <Form onSubmit={getUsuarioForm}>
                <h1 className="title mb-5 "> Personal</h1>
                <hr></hr>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" name="nombre" placeholder="Nombre"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" name="apellidos" placeholder="apellidos"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="date" name="fechaNacimiento" placeholder="Fecha de nacimiento"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <h1 className="title mb-5 ">Cuenta</h1>
                <hr></hr>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <AiTwotoneMail />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type='email' name="email" placeholder="Email"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <RiLockPasswordFill />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="password" name="password" placeholder="Contraseña"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <h1 className="title mb-5 ">Contacto</h1>
                <hr></hr>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <FaAddressCard />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type='text' name="direccion" placeholder="Dirección "></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <BsFillTelephoneInboundFill />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="tel" name="telefono" placeholder="Telefono"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <GiModernCity />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type='text' name="estado" placeholder="Estados"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <FaCity />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="text" name="ciudad" placeholder="Ciudad"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <InputGroup className="mb-5  borderline" >
                            <InputGroup.Text id="basic-addon1" >
                                <IconContext.Provider value={{ size: '25px' }}>
                                    <HiUserCircle />
                                </IconContext.Provider>
                            </InputGroup.Text>
                            <Form.Control className="text-center  labelformme" type="number" name="postal" placeholder="Codigo Postal"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button className="title mb-5 boton" variant='primary' type="submit" value="enviar" name="enviar">
                    Entrar
                </Button>
            </Form>
        </div>
    )
}