import React, { Component } from 'react'
import RecordsContainer from "./Record/index/RecordsContainer";
import NewRecordButtonContainer from "./components/NewRecordButton/NewRecordButtonContainer";
import UpdateRecordModalContainer from "./Record/update_modal/UpdateRecordModalContainer";
import StatsContainer from "./AppState/Stats/StatsContainer";

class App extends Component {
    render () {
        return (
            <div>
                <header>
                    <h1>
                        <img src="https://www.granify.com/hs-fs/hub/315877/file-2096520345-png/images/granify-logo-white-1.png?t=1499980498886" />
                        <span>
                            Javascript Test Application
                        </span>
                    </h1>
                </header>
                <div className="container">
                    <div className="universal-actions clearfix">
                        <div className="pull-right">
                            <StatsContainer />
                        </div>
                        <div className="pull-left">
                            <NewRecordButtonContainer />
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