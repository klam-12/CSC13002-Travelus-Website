import './tourCard.css'
import React from 'react';
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';
import { Rating } from '@mui/material';

const split = (content) => {
  const paragraphs = content.split('\\n');
  console.log(paragraphs);
  return (
      <div>
          {paragraphs.map((paragraph, index) => (
              <p key={index}>
                  {paragraph}
                  <br />
              </p>
          ))}
      </div>
  );
}
const TourCard = (props) => {
  const post  = props.props;
  const imageUrl =  `http://127.0.0.1:8000${post.main_picture}`;
    const [value, setValue] = React.useState(5);
    return (
        <div className="tour-card">
            <img src={imageUrl} alt="Avatar" style={{width:'100%'}}/>
        <div className="tour-card-container">
          <h4 className="tour-card-name"><b> {post.from_location} - {post.to_location}</b></h4>
          <Rating name="read-only" value={post.avg_star} readOnly />
            <p className="tour-info">{split(post.detail.substr(0, 150))}... </p>
            <hr className="solid"/>
        </div>
        
        <div className="tour-price-container">
          <span><span className="tour-info-price">From <span class="tour-price">{post.price}</span><TourCardButton id = {post.id}></TourCardButton></span></span> 
        </div>
      </div>
    );
};
export default TourCard;