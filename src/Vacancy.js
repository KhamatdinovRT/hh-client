import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Vacancy = ({name, area, img, employer, salary, responsibility}) => {
    const image = (
            <div style={{position:"absolute", top: '6px', right:'10px' }}>
                <img style={{maxWidth:'90px', maxHeight: '67px'}} src={img}/>
            </div>
        )
    return (
        <Card style={{marginBottom:'10px'}}>
            <CardHeader
                titleStyle={{fontSize:'17px'}}
                subtitleStyle={{marginTop:'10px',fontSize:'16px'}}
                title={name}
                subtitle={salary}
                children={image}
                actAsExpander={false}
                showExpandableButton={false}
            />
            <CardText expandable={false}>
                {responsibility}
                <p style={{marginBottom:0}}>{`${area}, ${employer}`}</p>
            </CardText>
        </Card>
    )
}

export default Vacancy;