import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import navigationBarReducer from '@/redux/modules/navigationBar/navigationBarState';

export const store = configureStore({
    reducer: {
        navigation: navigationBarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
