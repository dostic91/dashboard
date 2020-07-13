import React from 'react';
import SmallComp from './SmallComp/SmallComp';

class Bottom extends React.Component {

    render() {
        return (
            <div className="Bottom">
                <h2>Overview - Today</h2>
                <div className="row">
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                    <div className="col-md-3">
                        <SmallComp/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;