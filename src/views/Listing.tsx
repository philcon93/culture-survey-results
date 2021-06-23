import React, { useEffect, useState } from "react";
import constants from "../store/constants";
import { Survey } from '../store/interfaces';
import { Card, Input, ListingTable, PageLoader, PageTitle } from '../components';

export const ListingPage: React.FC = () => {
    const [ surveys, setSurveys ] = useState<Survey[]>([]);
    const [ searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch(constants.ENDPOINT_URL)
            .then(response => response.json())
            .then(data => setSurveys(data.survey_results));
    }, []);

    return (
        surveys.length > 0 ?
        <>
            <PageTitle title='Surveys'/>
            <Card>
                <Input
                    placeholder='Search Surveys...'
                    value={searchValue}
                    onChange={value => setSearchValue(value)} />
                <ListingTable surveys={surveys} searchValue={searchValue} />
            </Card>
        </> : <PageLoader/>
    )
}