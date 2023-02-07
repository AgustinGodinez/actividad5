'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import Link from 'next/link';

export default function Login() {
    const [usuario, setUsuarios] = useState({})

    const getUsuarioForm = (e) => {
        e.preventDefault();

        let datos = e.target;
        let user = {
            email: datos.email.value,
            password: datos.password.value,
        };
        console.log(user);
        setUsuarios(usuario);
    }

    return (
        <div>

            <div className='container mt-5'>
                <Form onSubmit={getUsuarioForm}>
                    <InputGroup className="mb-5 mt-5" style={{ borderBottom: '5px solid rgba(255, 23, 68, 0.71)' }} >
                        <InputGroup.Text id="basic-addon1" >
                            <IconContext.Provider value={{ size: '50px' }}>
                                <HiUserCircle />
                            </IconContext.Provider>
                        </InputGroup.Text>
                        <Form.Control style={{ backgroundColor: 'rgba(217, 217, 217, 0.65)', borderradius: '10px 10px 0px 0px', height: '80px', color: '#000000', fontSize: '32px', textTransform: 'capitalize', fontWeight: '400', color: 'dark' }} className="text-center" type='email' name="email" placeholder="Email"></Form.Control>
                    </InputGroup>

                    <InputGroup className="mb-5 mt-5" style={{ borderBottom: '5px solid rgba(255, 23, 68, 0.71)' }} >
                        <InputGroup.Text id="basic-addon1" >
                            <IconContext.Provider value={{ size: '50px' }}>

                                <RiLockPasswordFill />
                            </IconContext.Provider>
                        </InputGroup.Text>
                        <Form.Control style={{ backgroundColor: 'rgba(217, 217, 217, 0.65)', borderradius: '10px 10px 0px 0px', height: '80px', color: '#000000', fontSize: '32px', textTransform: 'capitalize', fontWeight: '400', color: 'dark' }} className="text-center" type="password" name="password" placeholder="Contraseña"/>
                    </InputGroup>

                    <Stack direction="horizontal" gap={1}>
                        <div className='title-card'>
                            <h1 className="title"><Link href="/register">Regístrate aquí</Link></h1>
                            <h1 className="title">Olvidaste tu contraseña?</h1>
                        </div>
                        <div className=' ms-auto'>
                            <Button className="title" href="/" variant='person1' style={{ borderradius: '18px', color: '#FFFFFF', fontWeight: 'bolder', fontSize: '19px', padding: '15px', width: '200px' }}>
                                Entrar
                            </Button>
                        </div>
                    </Stack>
                    <Button className="title mb-5 boton" variant='primary' type="submit" value="enviar" name="enviar">
                    Entrar
                </Button>
                </Form>
            </div>
        </div>
    )
}