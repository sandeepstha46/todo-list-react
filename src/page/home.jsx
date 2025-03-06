import React, {useEffect, useState} from 'react';
import TodoLists from "../components/TodoLists";
import CompletedLists from "../components/CompletedLists";

import '../css/home.css'

export default function Home() {

    const [inputValue, setInputValue] = useState('');
    const [lists, setLists] = useState([]);


    // to load lists from local storage when page loads
    useEffect(() => {
        const storedLists = localStorage.getItem("lists");

        // if the item is stored and not empty, it will load the lists of local storage to storedLists
        if (storedLists) {
            setLists(JSON.parse(storedLists));
        }
    },
        // this is dependency array that ensures this affect runs only once when page loads
        [])


    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onHandleAdd = () => {
        setLists([...lists,  {text: inputValue, completed: false}]);
        setInputValue('');
    }

    // to save lists to local storage
    const onSubmitHandler = (e) => {
        e.preventDefault();

        onHandleAdd(); // add the lists

        localStorage.setItem("lists", JSON.stringify(lists));
    }

    const onCompletedHandler = (index) => {
        const updatedLists = lists.map((list, i) =>
            i === index ? { ...list, completed: !list.completed} : list
        );
        setLists(updatedLists);
    }

    const onDeleteHandler = (index) => {
        const updatedLists = lists.filter((_, i) => i !== index);
        setLists(updatedLists);
        localStorage.setItem("lists", JSON.stringify(updatedLists));
    }




    return (
        <div className="todo-wrapper">
            <form className="form form-vertical d-flex" onSubmit={onSubmitHandler}>
                <input className="form-vertical__input" type="text" name="task" value={inputValue} onChange={onChangeHandler} required={true} placeholder="Eg: I have to do my homework" />
                <button className="form-vertical__button" type="submit">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </form>

            <TodoLists lists={lists} onCompleteHandler={onCompletedHandler} onDeleteHandler={onDeleteHandler} />

            <CompletedLists lists={lists} onCompleteHandler={onCompletedHandler} onDeleteHandler={onDeleteHandler}/>
        </div>
    )
}