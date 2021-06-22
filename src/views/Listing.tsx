import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import constants from "../store/constants";

import { Survey } from '../store/interfaces';

export const ListingPage: React.FC = () => {
    const [ surveys, setSurveys ] = useState<Survey[]>([]);

    useEffect(() => {
        fetch(constants.ENDPOINT_URL)
            .then(response => response.json())
            .then(data => setSurveys(data.survey_results));
    }, []);
    return (
        <>
            {
                surveys && surveys.map((survey, index) => (
                    <div key={index}>
                        <Link to={survey.url}>{survey.name}</Link>
                    </div>
                ))
            }
        </>
    )
}