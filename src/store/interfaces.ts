export interface Survey {
    name: string,
    participant_count: number,
    response_rate: number,
    submitted_response_count: number,
    url: string
}

export interface Detail {
    name: string,
    url: string,
    participant_count: number,
    response_rate: number,
    submitted_response_count: number,
    themes: Theme[]
}

export interface Theme {
    name: string,
    questions: Question[]
}

export interface Question {
    description: string,
    question_type: string,
    survey_responses: SurveyResponses[]
}

export interface SurveyResponses {
    id: number,
    question_id: number,
    respondent_id: number,
    response_content: string
}

export type Sort = 'ascending' | 'descending' | 'none';

export enum PageStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
    Update = 'Update'
}