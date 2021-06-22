import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, Heading, DataTable } from '@shopify/polaris';
import constants from "../store/constants";
import { Detail } from '../store/interfaces';
import { Page, PageLoader } from '../components';
import { average } from "../utilities/format";

export const ViewPage: React.FC = () => {
    const [ details, setDetails ] = useState<Detail>();
    let { id } = useParams<{ id: string}>();

    useEffect(() => {
        if ( id ) {
            fetch(`${constants.ENDPOINT_URL}/${id}`)
            .then(response => response.json())
            .then(data => setDetails(data.survey_result_detail));
        }
    }, [ id ]);

    return (
        details ?
        <Page title={details.name}>{
            details.themes.map((theme, index) => (
                <Card sectioned>
                    <Heading>{theme.name}</Heading>
                    <DataTable
                        columnContentTypes={[ 'text', 'numeric' ]}
                        headings={[ 'Question', 'Average response' ]}
                        rows={theme.questions.map((question, index) => [
                            question.description,
                            average(question.survey_responses)])} />
                </Card>
            ))
        }</Page> : <PageLoader/>
    );
};