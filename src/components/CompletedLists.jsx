import React from "react"

export default function CompletedLists() {
    return (
        <div className="type-wrapper">
            <p className="type-wrapper__header">
                Completed - 4
            </p>
            <div className="lists-wrapper">
                <div className="list d-flex">
                    <p className="list-paragraph completed">
                        To study react fundamentals
                    </p>
                    <div className="list-icons d-flex">
                        <button className="btn-icon">
                            <i className="bi bi-check-lg"></i>
                        </button>
                        <button className="btn-icon">
                            <i className="bi bi-trash3-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}