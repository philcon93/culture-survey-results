import React, { useState } from "react";
import { Badge, DataTable } from '@shopify/polaris';
import { Sort, Question } from '../../store/interfaces';
import { average, colourGrade } from "../../utilities/format";

type Props = {
    questions: Question[]
}

export const ViewTable: React.FC<Props> = ({ questions } : Props) => {
    const [ sortDirection, setSortDirection ] = useState<Sort>('none');

    return (
        <DataTable
            columnContentTypes={[ 'text', 'numeric' ]}
            headings={[ 'Question', 'Average Response' ]}
            sortable={[ false, true ]}
            onSort={(headingIndex, direction) => setSortDirection(direction)}
            rows={questions
                .sort((questionA, questionB) => {
                    const amountA = average(questionA.survey_responses)
                    const amountB = average(questionB.survey_responses)
            
                    return sortDirection === 'descending' ? amountB - amountA : amountA - amountB;
                })
                .map(question => [
                    question.description,
                    <Badge status={colourGrade(average(question.survey_responses), 5)}>
                        {average(question.survey_responses).toString()}
                    </Badge>
                ]
            )} />
    );
};