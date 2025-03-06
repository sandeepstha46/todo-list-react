import React from "react"

export default function CompletedLists({lists, onCompleteHandler, onDeleteHandler}) {

    const completedLists = lists.filter((item) => item.completed)

    const checkListsHandler = () => {
        if(completedLists.length === 0){
            return ("All tasks has been completed");
        }
    }

    return (
        <div className="type-wrapper">
            <p className="type-wrapper__header">
                Completed - {completedLists.length}
            </p>
            <div className="lists-wrapper">
                {completedLists.length > 0 ? null : <p className="empty-lists">{checkListsHandler()}</p>}
                {completedLists.map((item, index) => (
                    <div className="list d-flex" key={index}>
                        <p className="list-paragraph completed">
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