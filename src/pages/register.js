'use client'

/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import { AiTwotoneMail, AiOutlineUser, AiOutlineCalendar, AiOutlineIdcard,AiOutlineEnvironment, AiOutlineBorderlessTable, AiOutlineMobile, AiOutlineNumber } from 'react-icons/ai';
import { GiModernCity } from 'react-icons/gi';
import Col from 'react-bootstrap/Col';
import '../styles/Home.module.css'
import { FaCity } from 'react-icons/fa';
import { Formik } from 'formik';
import * as yup from 'yup';
import apiClient from '@/apiClient';
import Toast from 'react-bootstrap/Toast';


const schema = yup.object().shape({
    nombre: yup.string().required('El campo nombre es requerido').max(150, 'Se aceptan maximo 150 caracteres'),
    apellido_paterno: yup.string().required('El campo apellido paterno es requerido').max(200, 'Se aceptan maximo 200 caracteres'),
    apellido_materno: yup.string().optional().max(200, 'Se aceptan maximo 200 caracteres'),
    curp: yup.string().required('El campo CURP es requerido').length(18, 'El curp se compone de 18 caracteres'),
    fecha_nacimiento: yup.date().optional(),
    email: yup.string().required('El campo Email es requerido').email('Email invalido').max(350, 'Se aceptan maximo 350 caracteres'),
    password: yup.string().required('El campo password es requerido').min(8, 'Debe contener al menos 8 caracteres'),
    calle: yup.string().required('El campo calle es requerido').max(300, 'Se aceptan maximo 300 caracteres'),
    num_ext: yup.string().required('El campo Numero Exterior es requerido').max(5, 'Se aceptan maximo 5 caracteres'),
    num_int: yup.string().optional().max(20, 'Se aceptan maximo 20 caracteres'),
    codigo_postal: yup.string().required('El Codigo postal es requerido').length(5, 'El CP se compone de 5 caracteres'),
    celular: yup.number().required('El numero de celular es requerido').min(10, 'Se esperan 10 caracteres'),
    estado: yup.string().optional().max(250, 'Se aceptan maximo 250 caracteres'),
    ciudad: yup.string().optional().max(400, 'Se aceptan maximo 400 caracteres'),
  });

export default function Login() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({
        title: '',
        message: '',
        type: ''
    })

    const getUsuarioForm = (values) => {
        console.log('Enviando Alta');
        apiClient.post('/user',{values})
        .then(response =>{
            console.log(response);
            setShow(true);
            setNotification({title: 'Success', message: response.data.message, type: 'success'});
        })
        .catch(error =>{
            console.table(error.response.data.errors);
            console.error(error);
            setShow(true);
            setNotification({title: 'Error', message: error.data, type: 'danger'});
        })
    }

    return (
        <>
        <Formik
            validationSchema={schema}
            onSubmit={getUsuarioForm}
            initialValues={{
                nombre: '',
                apellido_paterno: '',
                apellido_materno: '',
                curp: '',
                fecha_nacimiento: '',
                email: '',
                password: '',
                calle: '',
                num_ext: '',
                num_int: '',
                codigo_postal: '',
                celular: '',
                estado: '',
                ciudad: '',
            }}
            >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
            }) => (
                <div className='container mt-5 bg-danger bg-opacity-25 mb-5 rounded-4' >
                    <Form onSubmit={handleSubmit}>
                        <h1 className="title mb-5 "> Personal</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group className="mb-2" as={Col}>
                                <Form.Label>Nombre</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineUser />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type="text" name="nombre" 
                                        placeholder="Nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        isInvalid={!!errors.nombre}
                                        isValid={touched.nombre && !errors.nombre}
                                        feedback={errors.nombre}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-2" as={Col}>
                                <Form.Label>Apellido Paterno</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineUser />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type="text" 
                                        name="apellido_paterno"
                                        placeholder="Apellido Paterno"
                                        value={values.apellido_paterno}
                                        onChange={handleChange}
                                        isInvalid={!!errors.apellido_paterno}
                                        feedback={errors.apellido_paterno}></Form.Control>
                                        <Form.Control.Feedback type="invalid">{errors.apellido_paterno}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-2" as={Col}>
                                <Form.Label>Apellido Materno</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineUser />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type="text" name="apellido_materno" 
                                        placeholder="Apellido Materno"
                                        value={values.apellido_materno}
                                        onChange={handleChange}
                                        isInvalid={!!errors.apellido_materno}
                                        feedback={errors.apellido_materno}></Form.Control>
                                        <Form.Control.Feedback type="invalid">{errors.apellido_materno}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-2" as={Col}>
                                <Form.Label>CURP</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineIdcard />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                    type="text" 
                                    name="curp" 
                                    placeholder="CURP"
                                    value={values.curp}
                                    onChange={handleChange}
                                    isInvalid={!!errors.curp}
                                    feedback={errors.curp}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.curp}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-2" as={Col}>
                                <Form.Label>Fecha Nacimiento</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineCalendar />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                    type="date" 
                                    name="fecha_nacimiento" 
                                    placeholder="Fecha de nacimiento"
                                    value={values.fecha_nacimiento}
                                    onChange={handleChange}
                                    isInvalid={!!errors.fecha_nacimiento}
                                    feedback={errors.fecha_nacimiento}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.fecha_nacimiento}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Col></Col>
                        </Row>
                        <h1 className="title mb-5 ">Cuenta</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Email</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiTwotoneMail />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                    type='email' 
                                    name="email" 
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    feedback={errors.email}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Password</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <RiLockPasswordFill />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                    feedback={errors.password}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <h1 className="title mb-5 ">Contacto</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Calle</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineEnvironment />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                    type='text' 
                                    name="calle" 
                                    placeholder="Calle"
                                    value={values.calle}
                                    onChange={handleChange}
                                    isInvalid={!!errors.calle}
                                    feedback={errors.calle}></Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.calle}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Número Exterior</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineBorderlessTable />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme"
                                        type='number' 
                                        name="num_ext" 
                                        placeholder="Num Ext"
                                        value={values.num_ext}
                                        onChange={handleChange}
                                        isInvalid={!!errors.num_ext}
                                        feedback={errors.num_ext}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.num_ext}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Número Interior</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineBorderlessTable />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type='text' 
                                        name="num_int"
                                        placeholder="Num Int"
                                        value={values.num_int}
                                        onChange={handleChange}
                                        isInvalid={!!errors.num_int}
                                        feedback={errors.num_int}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.num_int}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Código Postal</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineNumber />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type="number" 
                                        name="codigo_postal" 
                                        placeholder="Codigo Postal"
                                        value={values.codigo_postal}
                                        onChange={handleChange}
                                        isInvalid={!!errors.codigo_postal}
                                        feedback={errors.codigo_postal}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.codigo_postal}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Celular</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <AiOutlineMobile />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme"
                                        type="number" 
                                        name="celular" 
                                        placeholder="Celular"
                                        value={values.celular}
                                        onChange={handleChange}
                                        isInvalid={!!errors.celular}
                                        feedback={errors.celular}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.celular}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Estado</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <GiModernCity />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type='text' 
                                        name="estado" 
                                        placeholder="Estado"
                                        value={values.estado}
                                        onChange={handleChange}
                                        isInvalid={!!errors.estado}
                                        feedback={errors.estado}>    
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.estado}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Ciudad</Form.Label>
                                <InputGroup className="mb-5" >
                                    <InputGroup.Text id="basic-addon1" >
                                        <IconContext.Provider value={{ size: '25px' }}>
                                            <FaCity />
                                        </IconContext.Provider>
                                    </InputGroup.Text>
                                    <Form.Control className="text-center  labelformme" 
                                        type="text" 
                                        name="ciudad" 
                                        placeholder="Ciudad"
                                        value={values.ciudad}
                                        onChange={handleChange}
                                        isInvalid={!!errors.ciudad}
                                        feedback={errors.ciudad}>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.ciudad}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Col></Col>
                        </Row>
                        <Button className="title mb-5 boton" variant='primary' type="submit" value="enviar" name="enviar">
                            Registrarse
                        </Button>
                    </Form>
                </div>
            )}
        </Formik>
        <Toast show={show} onClose={setShow} bg={notification.type}>
          <Toast.Header>
            <img src="Changarrito.png" className="rounded me-2" alt="logo" width="30" height="30"/>
            <strong className="me-auto">Changarrito</strong>
          </Toast.Header>
          <Toast.Body>{notification.message}</Toast.Body>
        </Toast>
      </>
    )
}