import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Badge, DataTable } from '@shopify/polaris';
import { Sort, Survey } from '../../store/interfaces';
import { colourGrade, percentage } from "../../utilities/format";

type Props = {
    searchValue?: string,
    surveys: Survey[]
}

export const ListingTable: React.FC<Props> = ({ searchValue, surveys } : Props) => {
    const [ sortDirection, setSortDirection ] = useState<Sort>('none');

    return (
        <DataTable
            columnContentTypes={[ 'text', 'numeric', 'numeric', 'numeric' ]}
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
    );
};