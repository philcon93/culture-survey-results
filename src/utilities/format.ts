import { SurveyResponses } from "../store/interfaces";

// Returns a percentage with symbol 
export const percentage = (value: number): string => {
    return (value * 100).toFixed(2) + '%';
}

// Returns the average value of survey responses
export const average = (responses: SurveyResponses[]): number => {
    return +(responses.reduce((acc, item) => acc + Number(item.response_content), 0) / responses.length).toFixed(2);
};

// Returns a status colour depending on how high the value divided by total is
export const colourGrade = (value: number, total: number): 'critical' | 'warning' | 'success' => {
    const grade = value / total;

    if (grade < 0.4) {
        return 'critical';
    } else if (grade < 0.77) {
        return 'warning';
    }

    return 'success';
}