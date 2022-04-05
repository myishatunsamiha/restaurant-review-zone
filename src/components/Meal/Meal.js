import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb } = props.meal;
    let navigate = useNavigate();

    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <p>{strMeal}</p>
            <button onClick={() => navigate(`/meal/${idMeal}`)}>Explore</button>
        </div>
    );
};

export default Meal;