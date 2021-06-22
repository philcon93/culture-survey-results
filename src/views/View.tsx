import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import constants from "../store/constants";

import { Detail } from '../store/interfaces';

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
        <>
            {details && details.name}
        </>
    )
}