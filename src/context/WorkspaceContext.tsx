import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';


type Tab = {
  id: string;
  title: string;
  pathname: string;
  content: React.ReactNode;
};

type WorkspaceState = {
  tabs: Tab[];
  activeTab: string;
};

type WorkspaceAction =
  | { type: 'ADD_TAB'; payload: { pathname: string; title: string } }
  | { type: 'CLOSE_TAB'; payload: { id: string } }
  | { type: 'SWITCH_TAB'; payload: { id: string } }
  | { type: 'UPDATE_TAB_CONTENT'; payload: { id: string; content: React.ReactNode } };

type WorkspaceContextType = {
  state: WorkspaceState;
  dispatch: React.Dispatch<WorkspaceAction>;
};

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

const initialState: WorkspaceState = {
  tabs: [{ id: '1', title: 'Tab 1', pathname: '/signin', content: null }],
  activeTab: '1',
};

const workspaceReducer = (state: WorkspaceState, action: WorkspaceAction): WorkspaceState => {
    switch (action.type) {
        case 'ADD_TAB': {
            const newId = uuidv4(); // Generate a unique ID
            const newTab: Tab = {
              id: newId,
              title: action.payload.title,
              pathname: action.payload.pathname,
              content: null,
            };
            return {
              ...state,
              tabs: [...state.tabs, newTab],
              activeTab: newId,
            };
      }
      case 'CLOSE_TAB': {
        const { id } = action.payload;
        const tabIndex = state.tabs.findIndex((tab) => tab.id === id);
        const newTabs = state.tabs.filter((tab) => tab.id !== id);
      
        const nextActiveTab =
          state.activeTab === id && newTabs.length > 0
            ? newTabs[Math.max(0, tabIndex - 1)].id
            : state.activeTab;
      
        return {
          ...state,
          tabs: newTabs,
          activeTab: nextActiveTab,
        };
      }
      
      case 'SWITCH_TAB': {
        return {
          ...state,
          activeTab: action.payload.id,
        };
      }
      case 'UPDATE_TAB_CONTENT': {
        const { id, content } = action.payload;
        const updatedTabs = state.tabs.map((tab) =>
          tab.id === id ? { ...tab, content } : tab
        );
        return {
          ...state,
          tabs: updatedTabs,
        };
      }
      default:
        throw new Error(`Unhandled action type: ${(action as WorkspaceAction).type}`);
    }
  };  

export const WorkspaceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(workspaceReducer, initialState);
  
    return (
      <WorkspaceContext.Provider value={{ state, dispatch }}>
        {children}
      </WorkspaceContext.Provider>
    );
  };
  

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};
