import { SurveyResponses } from "../store/interfaces";

export const percentage = (value: number): string => {
    return (value * 100).toFixed(2) + '%';
}

export const average = (responses: SurveyResponses[]): number => {
    return +(responses.reduce((acc, item) => acc + Number(item.response_content), 0) / responses.length).toFixed(2);
};

export const colourGrade = (value: number, total: number): 'critical' | 'warning' | 'success' => {
    const grade = value / total;

    if (grade < 0.45) {
        return 'critical';
    } else if (grade < 0.77) {
        return 'warning';
    }

    return 'success';
}