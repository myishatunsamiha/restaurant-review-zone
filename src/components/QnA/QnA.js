import React, { useEffect, useState } from 'react';

const QnA = () => {
    const [quesAns, setQuesAns] = useState([]);

    useEffect(() => {
        fetch('qna.json')
            .then(res => res.json())
            .then(data => setQuesAns(data))
    }, [])

    return (
        <div>
            {
                quesAns.map(qa => <div>
                    <p>{qa.ques}</p>
                    <p>{qa.ans}</p>
                </div>)
            }
        </div>
    );
};

export default QnA;