import React from "react";
import { useHistory } from 'react-router';
import { DisplayText, Heading, TextStyle } from '@shopify/polaris';
import { Container, Row, Col } from 'react-grid-system';
import constants from "../store/constants";
import { Card, FluidImage } from '../components';

export const DashboardPage: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <Card>
                <Container>
                    <Row>
                        <Col md={6}>
                            <DisplayText size="extraLarge">Welcome to Goat Surveys</DisplayText><br/>
                            <TextStyle>Empower your teams and fuel positive change with employee surveys, performance, and development tools – all in one intuitive platform.</TextStyle>
                        </Col>
                        <Col md={6}>
                            <FluidImage
                                src="https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/w4mEoxmJkr3t3KZijFmMrou8dg8=/1440x0/cultureampcom/production/ba1/737/575/ba1737575c8d88b17d1253a2/science-feature-culture-lab2x.png" />
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Card onClick={() => history.push(constants.LISTING_ROUTE)}>
                <Heading>Employee Surveys</Heading>
                <TextStyle variation="subdued">View your Survey scores, how each survey question was answered, and understand your people.</TextStyle>
            </Card>
            <Card>
                <Heading>Performance Management <TextStyle variation="subdued">- Coming Soon!</TextStyle></Heading>
                <TextStyle variation="subdued">Build high‑performing teams with performance reviews, feedback, goal‑tracking & 1‑on‑1s delivered in the flow of work.</TextStyle>
            </Card>
            <Card>
                <Heading>Employee Development <TextStyle variation="subdued">- Coming Soon!</TextStyle></Heading>
                <TextStyle variation="subdued">Develop your people with behavior change tools and just‑in‑time learning for managers and employees.</TextStyle>
            </Card>
        </>
    );
};