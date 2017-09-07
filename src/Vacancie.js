import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Vacancie = ({name, area, img, employer, salary, responsibility}) => {
    const image = (
            <div style={{position:"absolute", top: '6px', right:'10px' }}>
                <img style={{maxWidth:'90px', maxHeight: '67px'}} src={img}/>
            </div>
        )
    return (
        <Card style={{marginBottom:'10px'}}>
            <CardHeader
                title={name}
                subtitle="Subtitle"
                children={image}
                actAsExpander={false}
                showExpandableButton={false}
            />
            <CardText expandable={false}>
                {responsibility}
                <p>{area}</p>
            </CardText>
        </Card>
    )
}

export default Vacancie;