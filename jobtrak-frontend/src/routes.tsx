import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Interview from './components/Interview/Interview';
import { IInterview } from './components/types/interviewTypes';

const AppRoutes = ({
    handleAddInterview,
    currentUser,
}: {
    handleAddInterview: (interview: Omit<IInterview, '_id'>) => Promise<void>;
    currentUser: string;
}) => (
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                    <Dashboard
                        handleAddInterview={handleAddInterview}
                        currentUser={currentUser}
                    />
                }
            />
            {/* <Route
                path="/interview"
                element={
                    <Interview
                        handleAddInterview={handleAddInterview}
                        currentUser={currentUser}
                    />
                }
            /> */}
        </Routes>
    </Router>
);

export default AppRoutes;
