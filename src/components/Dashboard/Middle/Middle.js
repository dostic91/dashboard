import React from 'react';
import BigComp from './BigComp/BigComp';

class Middle extends React.Component {

    render() {

        let contentList = this.props.list;

        return (
            <div className="Middle">
                <div className="row">
                    {contentList.map(
                        (item) =>
                            <div className="col-md-3">
                                <BigComp name={item.name} color={item.class} number={item.number} today={item.today}/>
                            </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Middle;