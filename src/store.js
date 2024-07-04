import {configureStore} from "@reduxjs/toolkit";
import dataTable from './features/dataTable';

export const store = configureStore({
    reducer: {
        dataTable,
    },
});