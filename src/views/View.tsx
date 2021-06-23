import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Heading } from '@shopify/polaris';
import constants from "../store/constants";
import { Detail } from '../store/interfaces';
import { Card, PageLoader, PageTitle, ViewTable } from '../components';

export const ViewPage: React.FC = () => {
    const [ details, setDetails ] = useState<Detail>();
    const { id } = useParams<{ id: string}>();

    useEffect(() => {
        if (id) {
            fetch(`${constants.ENDPOINT_URL}/${id}`)
            .then(response => response.json())
            .then(data => setDetails(data.survey_result_detail));
        }
    }, [ id ]);

    return (
        details ?
        <>
            <PageTitle title={details.name} breadcrumb={{ url: '/surveys'}}/>
            { details.themes.map((theme, index) => (
                <Card key={index}>
                    <Heading>{theme.name}</Heading>
                    <ViewTable questions={theme.questions} />
                </Card>
            ))}
        </> : <PageLoader />
    );
};