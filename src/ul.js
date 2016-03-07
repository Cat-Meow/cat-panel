import React from 'react';

function Ul(props) {
    return (
        <ul className={`${props.prefixName}-list-group list-group`}>
            {
                React.Children.map(props.children, (child) => {
                    return <li className={`${props.prefixName}-list-group-item list-group-item`}>{child}</li>;
                })
            }
        </ul>
    );
}

export default Ul;
