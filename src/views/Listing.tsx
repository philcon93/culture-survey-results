import React, { useCallback, useEffect, useState } from "react";
import { Modal, TextContainer } from '@shopify/polaris';
import { PageStatus } from '../store/interfaces';
import { Card, Input, ListingTable, PageEmptyState, PageLoader, PageTitle } from '../components';
import { useStore } from "../store/store";

export const ListingPage: React.FC = () => {
    const [ searchValue, setSearchValue] = useState('');
    const [ showModal, setShowModal ] = useState(false);
    const fetchSurveys = useStore(state => state.fetchSurveys);
    const pageStatus = useStore(state => state.pageStatus);
    const surveys = useStore(state => state.surveys);

    useEffect(() => {
        fetchSurveys();
    }, []);

    const handleModalChange = useCallback(() => setShowModal(!showModal), [showModal]);

    if (pageStatus === PageStatus.Error) {
        return (
            <PageEmptyState
                action={{ content: 'Reload page', onAction: () => window.location.reload() }}
                text='There seems to be something off with this page, try reloading the page :)' />
        )
    }

    return (
        pageStatus === PageStatus.Success && surveys.length > 0 ?
        <>
            <PageTitle title='Surveys' action={{ content: 'Create survey', onAction: handleModalChange }}/>
            <Card>
                <Input
                    placeholder='Search Surveys...'
                    value={searchValue}
                    onChange={value => setSearchValue(value)} />
                <ListingTable surveys={surveys} searchValue={searchValue} />
            </Card>
            <Modal
                open={showModal}
                onClose={handleModalChange}
                title="Coming Soon!"
                secondaryActions={[ { content: 'Close', onAction: handleModalChange } ]}>
                <Modal.Section>
                    <TextContainer>
                        We are so glad you are excited as us about creating surveys,
                        this feature is almost ready and we will let you know when its available.
                    </TextContainer>
                </Modal.Section>
            </Modal>
        </> : <PageLoader/>
    )
}