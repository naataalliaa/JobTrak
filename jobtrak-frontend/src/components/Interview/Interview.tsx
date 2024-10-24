import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Interview.css';

const companies = [
    { name: 'Amazon', logo: '/amazon-logo.png', path: '/amazon', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
    { name: 'Google', logo: '/google-logo.png', path: '/google', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
    { name: 'Apple', logo: '/apple-logo.png', path: '/apple', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
    { name: 'Netflix', logo: '/netflix-logo.png', path: '/netflix', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
    { name: 'Spotify', logo: '/spotify-logo.png', path: '/spotify', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
    { name: 'GitHub', logo: '/github-logo.png', path: '/github', questions: ['Technical Questions', 'Coding Questions', 'Behavioral Questions'] },
];

const Dashboard: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h2>INTERVIEW SUPPORT</h2>
            </header>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <main className="company-grid">
                {filteredCompanies.map((company) => (
                    <Link to={company.path} key={company.name} className="company-card">
                    <img src={company.logo} alt={`${company.name} Logo`} />
                    <h3>{company.name}</h3>
                    {company.questions.map((question, index) => (
                        <p key={index}>{question}</p>
                    ))}
                </Link>
                ))}
            </main>
        </div>
    );
};

export default Dashboard;