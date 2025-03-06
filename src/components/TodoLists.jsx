import React from "react"

export default function TodoLists ({lists, onCompleteHandler, onDeleteHandler}) {

    const todoItems = lists.filter((item) => !item.completed)

    const checkListsHandler = () => {
        if(todoItems.length === 0){
            return ("You have completed all the tasks");
        }
    }

    console.log(todoItems)

    return (
        <div className="type-wrapper">
            <p className="type-wrapper__header">
                Tasks to do - {todoItems.length}
            </p>
            <div className="lists-wrapper">
                <p className="empty-lists">{checkListsHandler()}</p>
                {todoItems.map((item,index) => (
                    <div className="list d-flex" key={index}>
                        <p className="list-paragraph">
                            {item.text}
                        </p>
                        <div className="list-icons d-flex">
                            <button className="btn-icon" onClick={ () => onCompleteHandler(lists.indexOf(item)) }>
                                <i className="bi bi-check-lg"></i>
                            </button>
                            <button className="btn-icon" onClick={ () => onDeleteHandler(lists.indexOf(item)) }>
                                <i className="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}