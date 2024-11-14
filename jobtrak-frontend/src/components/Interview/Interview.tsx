import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Interview.css';

const companies = [
    { name: 'Amazon', logo: '/company-logos/amazon-logo.png', path: '/amazon' },
    { name: 'Google', logo: '/company-logos/google-logo.png', path: '/google' },
    { name: 'Apple', logo: '/company-logos/apple-logo.png', path: '/apple' },
    { name: 'Netflix', logo: '/company-logos/netflix-logo.png', path: '/netflix' },
    { name: 'Spotify', logo: '/company-logos/spotify-logo.png', path: '/spotify' },
    { name: 'GitHub', logo: '/company-logos/github-logo.png', path: '/github' },
    { name: 'Microsoft', logo: '/company-logos/microsoft-logo.png', path: '/microsoft' },
    { name: 'Uber', logo: '/company-logos/uber-logo.png', path: '/uber' },
    { name: 'Nvidia', logo: '/company-logos/nvidia-logo.png', path: '/nvidia' },
    { name: 'Meta', logo: '/company-logos/meta-logo.png', path: '/meta' },
    { name: 'Tesla', logo: '/company-logos/tesla-logo.png', path: '/tesla' },
    { name: 'Paypal', logo: '/company-logos/paypal-logo.png', path: '/paypal' },
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
                    </Link>
                ))}
            </main>
        </div>
    );
};

export default Dashboard;