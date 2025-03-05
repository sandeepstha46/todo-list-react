import React, {useEffect, useState} from 'react';
import TodoLists from "../components/TodoLists";
import CompletedLists from "../components/CompletedLists";

import '../css/home.css'

export default function Home() {

    const [input, setInput] = useState();

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    // to store value in localstorage
    const onSubmitHandler = (e) => {
        e.preventDefault();

        localStorage.setItem("task", input);
    }


    return (
        <div className="todo-wrapper">
            <form className="form form-vertical d-flex" onSubmit={onSubmitHandler}>
                <input className="form-vertical__input" type="text" name="task" onChange={onChangeHandler} required={true} placeholder="Eg: I have to do my homework" />
                <button className="form-vertical__button" type="submit">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </form>

            <TodoLists/>

            <CompletedLists />
        </div>
    )
}