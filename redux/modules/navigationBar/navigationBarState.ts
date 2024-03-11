import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/app/store';
import { NavigationBar } from './@type';

export interface NavigationState {
    value: NavigationBar;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: NavigationState = {
    value: {
        page: 'dashboard',
        isOpen: 'open'
    },
    status: 'idle',
};

export const navigationBarSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setNavigation: (
            state,
            action: {
                payload: NavigationBar;
                type: string;
            },
        ) => {
            state.value = {
                page: action.payload.page,
                isOpen: action.payload.isOpen,
            };
        },
    },
});

export const { setNavigation } = navigationBarSlice.actions;

export const selectNavigation = (state: RootState) => state.navigation.value;

export default navigationBarSlice.reducer;
