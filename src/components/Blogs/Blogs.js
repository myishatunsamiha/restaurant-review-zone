import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [quesAns, setQuesAns] = useState([]);

    useEffect(() => {
        fetch('qna.json')
            .then(res => res.json())
            .then(data => setQuesAns(data))
    }, [])

    return (
        <div className='blogs'>
            {
                quesAns.map(qa => <div key={qa.id}>
                    <h3><strong>Q. </strong>{qa.ques}</h3>
                    <p><strong>Ans: </strong>{qa.ans}</p>
                </div>)
            }
        </div>
    );
};

export default Blogs;