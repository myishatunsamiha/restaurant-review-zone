import React, { useEffect, useState } from 'react';
import restaurant from '../../images/restaurant.jpeg';
import Meal from '../Meal/Meal';
import './About.css';

const About = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    return (
        <div className='about'>

            <div className='restaurant-intro'>
                <h1>The Express Inn</h1>
                <img src={restaurant} alt="" />
                <p style={{ textAlign: 'justify' }}>The greenaries around the inn and we the express inn members are waiting to serve you with the excellent food for your soul. You are welcome with your friends, family and loved ones. We are going to provide you the best food and service possible.</p>
            </div>

            <h2>Popular Dishes</h2>
            <div className="popular-dishes">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default About;