    // context/SidebarContext.js
    import React, { createContext, useContext, useReducer, useCallback } from 'react';

    const SidebarContext = createContext();

    const initialState = {
    selectedGrade: null,
    selectedCourse: null,
    selectedChapter: null,
    courses: [],
    chapters: [],
    subchapters: [],
    loading: false,
    };

    function sidebarReducer(state, action) {
    switch (action.type) {
        case 'SET_GRADE':
        return {
            ...state,
            selectedGrade: action.payload,
            selectedCourse: null,
            selectedChapter: null,
            chapters: [],
            subchapters: [],
        };
        case 'SET_COURSE':
        return {
            ...state,
            selectedCourse: action.payload,
            selectedChapter: null,
            subchapters: [],
        };
        case 'SET_CHAPTER':
        return {
            ...state,
            selectedChapter: action.payload,
        };
        case 'SET_COURSES':
        return {
            ...state,
            courses: action.payload,
        };
        case 'SET_CHAPTERS':
        return {
            ...state,
            chapters: action.payload,
        };
        case 'SET_SUBCHAPTERS':
        return {
            ...state,
            subchapters: action.payload,
        };
        case 'SET_LOADING':
        return {
            ...state,
            loading: action.payload,
        };
        default:
        return state;
    }
    }

    export function SidebarProvider({ children }) {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);

    return (
        <SidebarContext.Provider value={{ state, dispatch }}>
        {children}
        </SidebarContext.Provider>
    );
    }

    export function useSidebar() {
    return useContext(SidebarContext);
    }