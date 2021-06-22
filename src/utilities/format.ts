import { SurveyResponses } from "../store/interfaces";

export const percentage = (value: number): string => {
    return (value * 100).toFixed(2) + '%';
}

export const average = (responses: SurveyResponses[]): string => {
    return (responses.reduce((acc, item) => acc + Number(item.response_content), 0) / responses.length).toFixed(2);
};