import React from 'react';

function Body(props) {
    return <div className={`${props.prefixName}-panel-body panel-body`}>{props.children}</div>;
}

export default Body;
