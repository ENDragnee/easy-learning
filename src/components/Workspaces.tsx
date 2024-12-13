import React, { ReactNode } from 'react';
import { WorkspaceProvider, useWorkspace } from '@/context/WorkspaceContext';

interface WorkspacesProps {
  children: ReactNode;
}

const Workspaces: React.FC<WorkspacesProps> = ({ children }) => (
  <WorkspaceProvider>
    <Workspace />
    {children}
  </WorkspaceProvider>
);

const Workspace = () => {
  const { state, dispatch } = useWorkspace();

  const handleAddTab = () => {
    dispatch({ type: 'ADD_TAB', payload: { pathname: '/new', title: 'New Tab' } });
  };

  const handleCloseTab = (id: string) => {
    dispatch({ type: 'CLOSE_TAB', payload: { id } });
  };

  const handleSwitchTab = (id: string) => {
    dispatch({ type: 'SWITCH_TAB', payload: { id } });
  };

  return (
    <div>
      <button onClick={handleAddTab}>Add Tab</button>
      <div>
        {state.tabs.map((tab) => (
          <div key={tab.id}>
            <span>{tab.title}</span>
            <button onClick={() => handleSwitchTab(tab.id)}>Switch</button>
            <button onClick={() => handleCloseTab(tab.id)}>Close</button>
          </div>
        ))}
      </div>
      <div>Active Tab: {state.activeTab}</div>
    </div>
  );
};

export default Workspaces;
