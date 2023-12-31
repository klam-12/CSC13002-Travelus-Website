import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import avatar from '../../assets/icons/avatar.jpg'
import React, {Fragment, useState} from 'react';
import './navBar.css'
import Avatar from '../avatar/avatar';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';
// import handleLogout

const UseImageUrl = (loggedInUser) => {
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      if (loggedInUser) {
        const userAvatar = loggedInUser.avatar;
        const defaultAvatarUrl = 'https://social.salework.net/images/default-avatar.jpg';
       
        setImageUrl(userAvatar ? `http://127.0.0.1:8000${userAvatar}` : defaultAvatarUrl);
      }
    }, [loggedInUser]);
  
    return imageUrl;
  };


const NavBar = () => {
    const navigate = useNavigate();
    let storedUser = localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null;
    const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : null);
    const HandleLogout = async (e) => {
        const refresh_token = localStorage.getItem('refresh_token');
        console.log(refresh_token)
        // try {
        //     const refresh_token = localStorage.getItem('refresh_token');
        //     console.log(refresh_token)
        //     if (refresh_token) {
        //       // headers = {
        //       //   'Authorization': `Bearer ${refresh_token}`
        //       // }
        //       // const response = await axiosInstance.post('/user/logout/', { refresh_token });
        //       const access_token = localStorage.getItem('access_token');
        //       const auth = `Bearer ` + access_token
              
        //       console.log(access_token)
        //       console.log(auth)
              useEffect(() => {
                const response = axiosInstance.post('user/logout/', {
                  refresh_token: localStorage.getItem('refresh_token'),
                });
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user');
                axiosInstance.defaults.headers['Authorization'] = null;
                if (response.status === 205) {
                  // Đăng xuất thành công
                  // localStorage.removeItem('access_token');
                  // localStorage.removeItem('refresh_token');
                  // localStorage.removeItem('user');
                  window.location.reload();
                  navigate('/login'); 
                 
                } else {
                  // Xử lý lỗi đăng xuất không thành công
                  console.error('Đăng xuất không thành công.');
                }
              });
              // const response = axiosInstance.post('user/logout/', refresh_token);
              
            }

    
    const guestLinks = ()=>(
            <Fragment>
            <li className="item">
                    <Link to="/register" relative="path">Đăng ký</Link>
                    </li>
                    <li className="item">
                    <Link to="/signin" relative="path">Đăng nhập</Link>
                    </li>
            </Fragment>
    )
    const authLinks = ()=>
    {
        const imageUrl = UseImageUrl(loggedInUser);
        console.log(loggedInUser.email)
    return (
        
        <Fragment>
             <li className="item">
             <Link to={`/profile`} relative="path">
                <Avatar image={imageUrl}></Avatar>
            </Link>
        </li>
        <li className="item">
        {/* <Link relative="path" onClick={handleLogout}>Đăng xuất</Link> */}
        <Link relative="path" to='/logout'>Đăng xuất</Link>
        </li>
                
        </Fragment>
    )}

    return (
            <div>
        <nav className="navbarItems">
            <div className="container">
                <div className="logo">
                    <HashLink smooth to="/tour"  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Travelus</HashLink>
                </div>
                    <ul className="item-list">
                    <li className="item">
                        {/* <a href="/#aboutUs">Về chúng tôi</a> */}
                        <HashLink smooth to="/#aboutUs">Về chúng tôi</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#aboutUs'}} relative="path">Về chúng tôi</Link> */}
                    </li>
                    <li className="item">
                        <Link to="/test" relative="path">Tất cả tours</Link>
                    </li>
                    <li className="item">
                        {/* <a href="/#hotTours">Hot tours</a> */}
                        <HashLink smooth to="/#hotTours">Hot tours</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#hotTours'}} relative="path">Hot tours</Link> */}
                    </li>
                    <li className="item">
                        {/* <a href="/#feedback">Feedbacks</a> */}
                        <HashLink smooth to="/#feedback">Feedbacks</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#feedback'}} relative="path">Feedbacks</Link> */}
                    </li>
                    {loggedInUser ? authLinks() :  guestLinks()}
                    </ul>
            </div>
                   
 
        </nav>
            </div>
    );
};
export  default NavBar;