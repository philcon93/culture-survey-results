import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Badge, Card, Heading, DataTable, Page } from '@shopify/polaris';
import constants from "../store/constants";
import { Detail } from '../store/interfaces';
import { PageLoader } from '../components';
import { average, colourGrade } from "../utilities/format";

export const ViewPage: React.FC = () => {
    const [ details, setDetails ] = useState<Detail>();
    let { id } = useParams<{ id: string}>();

    useEffect(() => {
        if (id) {
            fetch(`${constants.ENDPOINT_URL}/${id}`)
            .then(response => response.json())
            .then(data => setDetails(data.survey_result_detail));
        }
    }, [ id ]);

    return (
        details ?
        <Page breadcrumbs={[{content: 'Surveys', url: '/surveys'}]} title={details.name}>{
            details.themes.map((theme, index) => (
                <Card sectioned key={index}>
                    <Heading>{theme.name}</Heading>
                    <DataTable
                        columnContentTypes={[ 'text', 'numeric' ]}
                        headings={[ 'Question', 'Average response' ]}
                        rows={theme.questions.map(question => [
                            question.description,
                            <Badge status={colourGrade(average(question.survey_responses), 5)}>
                                {average(question.survey_responses).toString()}
                            </Badge>
                        ])} />
                </Card>
            ))
        }</Page> : <PageLoader />
    );
};