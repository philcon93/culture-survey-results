import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Badge, Card, DataTable, Page } from '@shopify/polaris';
import constants from "../store/constants";
import { Sort, Survey } from '../store/interfaces';
import { Input, PageLoader, PageTitle } from '../components';
import { colourGrade, percentage } from "../utilities/format";

export const ListingPage: React.FC = () => {
    const [ surveys, setSurveys ] = useState<Survey[]>([]);
    const [ searchValue, setSearchValue] = useState('');
    const [ sortDirection, setSortDirection ] = useState<Sort>('none');

    useEffect(() => {
        fetch(constants.ENDPOINT_URL)
            .then(response => response.json())
            .then(data => setSurveys(data.survey_results));
    }, []);

    return (
        surveys.length > 0 ?
        <Page title='Surveys'>
            <PageTitle title='Surveys'/>
            <Card sectioned>
                <Input value={searchValue} onChange={value => setSearchValue(value)}/>
                <DataTable
                    columnContentTypes={[ 'text', 'numeric','numeric', 'numeric' ]}
                    headings={[ 'Survey', 'Participants', 'Submitted Responses', 'Response Rate' ]}
                    sortable={[ false, false, false, true ]}
                    onSort={(headingIndex, direction) => setSortDirection(direction)}
                    rows={surveys
                        .filter(survey => {
                            return Object.values(survey).some(s => s.toString().toLowerCase().includes(searchValue))
                        })
                        .sort((surveyA, surveyB) => {
                            const amountA = surveyA.response_rate
                            const amountB = surveyB.response_rate
                      
                            return sortDirection === 'descending' ? amountB - amountA : amountA - amountB;
                        })
                        .map(survey => [
                            <Link to={survey.url}>{survey.name}</Link>,
                            <Badge>{survey.participant_count.toString()}</Badge>,
                            <Badge>{survey.submitted_response_count.toString()}</Badge>,
                            <Badge status={colourGrade(survey.response_rate, 1)}>{percentage(survey.response_rate)}</Badge>
                        ]
                    )} />
            </Card>
        </Page> : <PageLoader/>
    )
}