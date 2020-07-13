import React from 'react';

class BigComp extends React.Component {

    render() {

        let classString = "BigComp " + this.props.color + "Class";
        console.log(classString);

        return (
            <div className={classString}>
                <p>{this.props.name}</p>
                <h1>{this.props.number}</h1>
                <p>F O L L O W E R S</p>
                <p>{this.props.today} Today</p>
            </div>
        );
    }
}

export default BigComp;