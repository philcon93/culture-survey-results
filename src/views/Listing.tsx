import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Card, DataTable } from '@shopify/polaris';
import constants from "../store/constants";
import { Survey } from '../store/interfaces';
import { Page, PageLoader } from '../components';
import { percentage } from "../utilities/format";

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
                rows={surveys.map((survey, index) => [
                    <Link to={survey.url}>{survey.name}</Link>,
                    survey.participant_count,
                    survey.submitted_response_count,
                    percentage(survey.response_rate)
                ])} />
            </Card>
        </Page> : <PageLoader/>
    )
}