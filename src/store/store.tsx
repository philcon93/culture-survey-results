import create, { State } from 'zustand';
import constants from './constants';
import { Detail, PageStatus, Survey } from './interfaces';

export interface AppState extends State {
    surveys: Survey[],
    details: Detail | null,
    pageStatus: PageStatus,
    updatePageStatus: (status: PageStatus) => void,
    fetchSurveys: () => void,
    fetchDetails: (id: string) => void
}

export const useStore = create<AppState>((set, get) => ({
    surveys: [],
    details: null,
    pageStatus: PageStatus.Loading,
    updatePageStatus: (status: PageStatus) => set(() => ({ pageStatus: status })),
    fetchSurveys: async () => {
        if (get().surveys.length <= 0){ 
            set({ pageStatus: PageStatus.Loading });
            set({ details: null });
            fetch(constants.ENDPOINT_URL)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => {
                    set({ surveys: data.survey_results });
                    set({ pageStatus: PageStatus.Success });
                })
                .catch(() => set({ pageStatus: PageStatus.Error }));
        }
    },
    fetchDetails: async (id: string) => {
        set({ pageStatus: PageStatus.Loading });
        fetch(`${constants.ENDPOINT_URL}/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                set({ details: data.survey_result_detail });
                set({ pageStatus: PageStatus.Success });
            })
            .catch(() => set({ pageStatus: PageStatus.Error }));
    }
}))