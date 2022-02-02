import React from "react"

export default function Navbar() {
    return (
        <div className="nav">
            
            <div className="small-box">
                <button className="button-task">
                    <div className="tasks">
                        <div className="circle-task">
                            <i className="fas fa-check-square" />
                        </div>
                        <h4>Tasks</h4>
                    </div>
                </button>
                <button className="button-notes">
                    <div className="notes">
                        <div className="circle-notes">
                            <i className="fas fa-sticky-note" />
                        </div>
                        <h4>Notes</h4>
                    </div>
                </button>
                <button className="button-calendar">
                    <div className="calendar">
                        <div className="circle-calendar">
                            <i className="fas fa-calendar" />
                        </div>
                        <h4>Calendar</h4>
                    </div>
                </button>
            </div>
        </div>
    )
}