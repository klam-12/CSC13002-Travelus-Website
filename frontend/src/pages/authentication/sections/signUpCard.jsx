import React, { useState } from 'react';
import '../authentication.css';
import FacebookGoogleButton from './fb_ggButton';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import defaultImage from './ech.png';
import { Link } from 'react-router-dom';
import '../authentication.css';
import gg from '../../../assets/icons/gg.svg'
import fb from '../../../assets/icons/fb.svg'
import { Grid } from '@mui/material';

const GENDER_CHOICES = [
  ["M", "Nam"],
  ["W", "Nữ"]
];

const SignUpCard = ({ onRegister }) => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: '',
    password: '',
    full_name: '',
    birth_date: '',
    address: '',
    gender: '',
    phone: '',
    role: "USER",
    avatar: null,
  });
  const [formData, updateFormData] = useState(initialFormData);
	const [errors, setErrors] = useState({});


 

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axiosInstance.post(`/user/register/`, {
        email: formData.email,
        password: formData.password,
        full_name: formData.full_name,
        birth_date: formData.birth_date,
        address: formData.address,
        gender: formData.gender, // Retrieve gender from formData
        phone: formData.phone,
        role: formData.role,
        avatar: null,
      }).then((res) => {
        navigate('/signin');
        console.log(res);
        console.log(res.data);
      });
      console.log('Signup successful');
    } catch (error) {
			console.error('Signup failed', error);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ global: 'Signup failed. Please check your information.' });
      }
    }
  };

  return (
    <div className="authentication-card">
      <h2 className="authentication-title">ĐĂNG KÝ LÀM THÀNH VIÊN TRAVELUS THÔI!</h2>
      <form className="authentication-form" noValidate>
        <input className="authentication-info" type="text" id="full_name" name="full_name" placeholder="Họ và tên" required onChange={handleChange}></input> <br></br>
        <input className="authentication-info" type="email" id="email" name="email" placeholder="Email" required onChange={handleChange}></input> <br></br>
				<div className="error-message">{errors.email}</div>
        <input className="authentication-info" type="password" id="password" name="password" placeholder="Mật khẩu (Chiều dài 9-30 kí tự, gồm chữ và số)" required onChange={handleChange}></input> <br></br>
				<div className="error-message">{errors.password}</div>
        <input className="authentication-info" type="tel" id="phone" name="phone" placeholder="Số điện thoại (gồm 10 chữ số)" required onChange={handleChange}></input> <br></br>
				<div className="error-message">{errors.phone}</div>
        <input className="authentication-info" type="date" id="dob" name="birth_date" placeholder="Ngày sinh" required onChange={handleChange} style={{cursor: 'text'}}></input> <br></br>
        <select className="authentication-info" name="gender" id="gender" onChange={handleChange} style={{cursor: 'text'}}>
          <option value="M">Nam</option>
          <option value="W">Nữ</option>
          <option value="other">Khác</option>
				
        </select>
        <input className="authentication-info" type="text" id="address" name="address" placeholder="Địa chỉ nhà" onChange={handleChange}></input> <br></br>
        <input className="sign-up-submit" type="submit" value="Đăng ký" onClick={handleSubmit}></input> <br></br>
        <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FacebookGoogleButton src={fb} content="Facebook"></FacebookGoogleButton>
                </Grid>
                <Grid item xs={6}>
                    <FacebookGoogleButton src={gg} content="Google"></FacebookGoogleButton>
                </Grid>
            </Grid>
            <p>Bạn đã có tài khoản? <Link to="/signin" relative="path" className="sign-in-link">Đăng nhập</Link></p>
        </form>
    </div>
  );
};

export default SignUpCard;
