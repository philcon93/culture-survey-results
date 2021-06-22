import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Badge, Card, DataTable, Page } from '@shopify/polaris';
import constants from "../store/constants";
import { Survey } from '../store/interfaces';
import { PageLoader } from '../components';
import { colourGrade, percentage } from "../utilities/format";

export const ListingPage: React.FC = () => {
    const [ surveys, setSurveys ] = useState<Survey[]>([]);

    useEffect(() => {
        fetch(constants.ENDPOINT_URL)
            .then(response => response.json())
            .then(data => setSurveys(data.survey_results));
    }, []);

    return (
        surveys.length > 0 ?
        <Page title='Surveys'>
            <Card sectioned>
                <DataTable
                    columnContentTypes={[ 'text', 'numeric','numeric', 'numeric' ]}
                    headings={[ 'Survey', 'Participants', 'Submitted Responses', 'Response Rate' ]}
                    rows={surveys.map(survey => [
                        <Link to={survey.url}>{survey.name}</Link>,
                        <Badge>{survey.participant_count.toString()}</Badge>,
                        <Badge>{survey.submitted_response_count.toString()}</Badge>,
                        <Badge status={colourGrade(survey.response_rate, 1)}>{percentage(survey.response_rate)}</Badge>
                    ])} />
            </Card>
        </Page> : <PageLoader/>
    )
}