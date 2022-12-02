import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import isLoadingSlice, { setLoading } from '../store/slices/isLoading.slice';
import { Link } from 'react-router-dom';
const Login = () => {

    const navigatee=useNavigate()
    const dispatch=useDispatch()

const { register, handleSubmit } = useForm();

const submi =(data)=>{
    dispatch(setLoading(true))
    axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login",data)
    .then(res=>{
        console.log(res) 
        navigatee("/")
        localStorage.setItem("token",res.data.data.token)
    })
    .catch(error=>{
        if(error.response?.status===404){
            alert("credenciales incorrectas")
        }else{
            console.log(error.response?.data)
        }
    })
    .finally(()=>dispatch(setLoading(false)))
}

    return (
        <div>
            <h2 style={{textAlign:"center"}}>login</h2>

            <div className='test-user'>
                <h5>test user</h5>
                <p>email:bryandavid@gmail.com</p>
                <p>password:bryan123</p>
            </div>

            <Form onSubmit={handleSubmit(submi)} style={{margin:"0 auto",maxWidth:500}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password")}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Link className='sign' to="/register">do you havent account? Sign up</Link>
        </div>
    );
};

export default Login;