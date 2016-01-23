import React, { Component } from 'react';

export default class Body extends Component {
    render() {
        let { prefixName } = this.props;

        return (
            <ul className={`${prefixName}-list-group list-group`}>
                {
                    React.Children.map(this.props.children, (child) => {
                        return <li className={`${prefixName}-list-group-item list-group-item`}>{child}</li>;
                    })
                }
            </ul>
        );
    }
}