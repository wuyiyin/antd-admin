import React from 'react'
import { Statistic, Row, Col, Button, Icon } from 'antd';
import Dashnum from './Dashnum.jsx'




export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return <div style={{display:'flex'}}>
            <Dashnum></Dashnum>
            <Dashnum></Dashnum>
            <Dashnum></Dashnum>
        </div>
    }

}