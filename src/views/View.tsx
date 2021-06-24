import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { Heading } from '@shopify/polaris';
import constants from "../store/constants";
import { Detail, PageStatus } from '../store/interfaces';
import { Card, PageEmptyState, PageLoader, PageTitle, ViewTable } from '../components';
import { colourGrade, percentage } from "../utilities/format";

export const ViewPage: React.FC = () => {
    const [ pageStatus, setPageStatus ] = useState<PageStatus>(PageStatus.Loading);
    const [ details, setDetails ] = useState<Detail>();
    const { id } = useParams<{ id: string}>();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            fetch(`${constants.ENDPOINT_URL}/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    setDetails(data.survey_result_detail);
                    setPageStatus(PageStatus.Success);
                })
                .catch(() => setPageStatus(PageStatus.Error));
        }
    }, [ id ]);

    if (pageStatus === PageStatus.Error) {
        return (
            <PageEmptyState
                action={{ content: 'Go to Surveys', onAction: () => history.push(constants.LISTING_ROUTE) }}
                text='There seems to be something off with this page, try going back to the survey listing page and try again :)' />
        )
    }

    return (
        pageStatus === PageStatus.Success && details ?
        <>
            <PageTitle
                title={details.name}
                badge={{ content: percentage(details.response_rate), type: colourGrade(details.response_rate, 1)}}
                breadcrumb={{ url: constants.LISTING_ROUTE}} />
            { details.themes.map((theme, index) => (
                <Card key={index}>
                    <Heading>Theme: {theme.name}</Heading>
                    <ViewTable questions={theme.questions} />
                </Card>
            ))}
        </> : <PageLoader />
    );
};