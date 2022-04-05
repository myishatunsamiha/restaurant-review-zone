import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css';

const MealDetails = () => {
    let params = useParams();
    const id = params.idMeal;
    const [selectedMeal, setSelectedMeal] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setSelectedMeal(data.meals))
    }, [])
    return (
        <div className='meal-details'>

            <img src={selectedMeal[0]?.strMealThumb} alt="" />
            <h5>Meal Title: {selectedMeal[0]?.strMeal}</h5>
            <p>Origin: {selectedMeal[0]?.strArea}</p>
            <p style={{ textAlign: 'justify' }}>Instructions: {selectedMeal[0]?.strInstructions}</p>
            <p>YouTube Link: <a href={selectedMeal[0]?.strYoutube} target='_blank' rel="noreferrer">{selectedMeal[0]?.strYoutube}</a></p>
        </div>
    );
};

export default MealDetails;