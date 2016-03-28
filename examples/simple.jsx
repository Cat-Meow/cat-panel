import React, { Component } from 'react';
import Panel from '../src/panel.js';

export default class Example extends Component {
    render () {
        return (
            <Panel
                header='展示'
                footer='测试'
                myStyle='info'
            >
                <Panel.Body>
                    <p>Panel</p>
                </Panel.Body>
                <Panel.Ul>
                    <div>1</div>
                    <div>2</div>
                </Panel.Ul>
            </Panel>
        )
    }
}
