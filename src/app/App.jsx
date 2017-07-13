import React, { Component } from 'react'
import RecordsContainer from "./Record/index/RecordsContainer";

class App extends Component {
    render () {
        return (
            <div className="container">
                <header>

                </header>
                <div className="universal-actions clearfix">
                    <div className="pull-left">
                        <a
                            href="javascript:void(0);"
                            className="btn btn-blue"
                        >
                            New
                        </a>
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