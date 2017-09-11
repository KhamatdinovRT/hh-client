import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import './Vacancy.css';

const Vacancy = ({ name, area, img, employer, salary, responsibility }) => {
    const styles = {
        cardStyle: {
            marginBottom: '10px'
        },
        titleStyle: {
            fontSize: '17px'
        },
        subtitleStyle: {
            marginTop: '10px',
            fontSize: '16px'
        }
    }

    const image = (
        <div className='img-container'>
            <img alt='' src={img} />
        </div>
    )

    return (
        <Card style={styles.cardStyle}>
            <CardHeader
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
                title={name}
                subtitle={salary}
                children={image}
                actAsExpander={false}
                showExpandableButton={false}
            />
            <CardText expandable={false}>
                {responsibility}
                <p className='area-block'>{`${area}, ${employer}`}</p>
            </CardText>
        </Card>
    )
}

export default Vacancy;