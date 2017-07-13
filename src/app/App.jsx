import React, { Component } from 'react'
import RecordsContainer from "./Record/index/RecordsContainer";
import NewRecordButtonContainer from "./components/NewRecordButton/NewRecordButtonContainer";
import UpdateRecordModalContainer from "./Record/update_modal/UpdateRecordModalContainer";
import StatsContainer from "./AppState/Stats/StatsContainer";

class App extends Component {
    render () {
        return (
            <div>
                <div className="container">
                    <div className="universal-actions clearfix">
                        <div className="pull-left">
                            <NewRecordButtonContainer />
                        </div>
                        <div className="pull-right">
                            <StatsContainer />
                        </div>
                    </div>
                    <RecordsContainer />
                </div>
                <UpdateRecordModalContainer />
            </div>
        )
    }
}

export default App;