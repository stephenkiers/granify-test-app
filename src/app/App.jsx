import React, { Component } from 'react'
import RecordsContainer from "./Record/index/RecordsContainer";
import NewRecordButtonContainer from "./components/NewRecordButtonContainer";

class App extends Component {
    render () {
        return (
            <div className="container">
                <div className="universal-actions clearfix">
                    <div className="pull-left">
                        <NewRecordButtonContainer />
                    </div>
                    <div className="pull-right">
                        <div className="pill" title="Total">
                            <strong>Total</strong>
                            <span>20</span>
                        </div>
                        <div className="pill" title="Avg /hour">
                            <strong>Avg /hour</strong>
                            <span>10</span>
                        </div>
                        <div className="pill positive" title="Last hour">
                            <strong>Last hour</strong>
                            <span>+8</span>
                        </div>
                    </div>
                </div>
                <RecordsContainer />
            </div>
        )
    }
}

export default App;