import React, { useEffect } from "react";
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { Heading } from '@shopify/polaris';
import constants from "../store/constants";
import { PageStatus } from '../store/interfaces';
import { Card, PageEmptyState, PageLoader, PageTitle, ViewTable } from '../components';
import { colourGrade, percentage } from "../utilities/format";
import { useStore } from "../store/store";

export const ViewPage: React.FC = () => {
    const { id } = useParams<{ id: string}>();
    const history = useHistory();
    const fetchDetails = useStore(state => state.fetchDetails);
    const details = useStore(state => state.details);
    const pageStatus = useStore(state => state.pageStatus);

    useEffect(() => {
        if (id) {
            fetchDetails(id);
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