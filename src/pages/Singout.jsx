import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/slices/isLoading.slice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Singout = () => {
const [adminn,setadmin]=useState("admin")
const {handleSubmit,register}=useForm()
const dispatch=useDispatch()
const navigate=useNavigate()

const summit=(data)=>{
dispatch(setLoading(true))

axios.post(`https://e-commerce-api.academlo.tech/api/v1/users`,data)
.then(()=>{
   navigate("/") 
})
.catch(error=>console.log(error.response?.data))
.finally(dispatch(setLoading(false)))
}


    return (
        <div>
            <h2 style={{textAlign:"center"}}>SING OUT</h2>
 <Form style={{width:"50%",margin:"auto"}} onSubmit={handleSubmit(summit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" {...register("firstName")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" {...register("lastName")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Phone"  {...register("phone")} />
      </Form.Group>

      <Form.Group style={{display:"none"}} className="mb-3" controlId="formBasicPassword">
        <Form.Label>ADMIN</Form.Label>
        <Form.Control type="text" value={adminn} placeholder="Last Name"  {...register("role")}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Singout;