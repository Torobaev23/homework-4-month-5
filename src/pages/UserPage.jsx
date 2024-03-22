import React from 'react';
import { useDispatch } from 'react-redux';
import { changeName, changeAge, changeGender } from '../store/userSlice.js';

const UserPage = () => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(changeName(event.target[0].value));
        dispatch(changeAge(event.target[1].value));
        dispatch(changeGender(event.target[2].value));
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Возраст'/>
                <input type="text" placeholder='Пол'/>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
}

export default UserPage;
