import React from 'react';
import TodoLists from "../components/TodoLists";
import CompletedLists from "../components/CompletedLists";

import '../css/home.css'

export default function Home() {
    return (
        <div className="todo-wrapper">
            <form className="form form-vertical d-flex">
                <input className="form-vertical__input" type="text" name="name" placeholder="Eg: I have to do my homework" />
                <button className="form-vertical__button" type="submit">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </form>

            <TodoLists/>

            <CompletedLists />
        </div>
    )
}