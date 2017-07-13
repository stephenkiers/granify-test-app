import React, { Component } from 'react'
import Record from "./components/Record";

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
                <div className="index-of-records">
                    {
                        [0,1,2,3,4,5,6,7,8,9].map(i => {
                            return (
                                <Record
                                    key={i}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;