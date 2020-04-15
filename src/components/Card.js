import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-lightest-blue dib br3 pd3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?set=set4&size=300x300`} alt='kitten'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;