import {Component} from "react";
import React from "react";
import "./EventList.css"
import Event from "./Event/Event";

export  default class EventList extends React.Component {
    render(){
        return (
            <div className='event-list-container'>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        )
    }
}