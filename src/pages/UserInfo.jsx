import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const { name, age, gender } = useSelector(state => state.user);

    return (
        <div>
            <h2>Информация о пользователе:</h2>
            <p>Имя: {name}</p>
            <p>Возраст: {age}</p>
            <p>Пол: {gender}</p>
        </div>
    );
};

export default UserInfo;
