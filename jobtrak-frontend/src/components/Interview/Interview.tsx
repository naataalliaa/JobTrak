import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Interview.css';

const companies = [
    { name: 'Amazon', logo: '/company-logos/amazon-logo.webp', path: '/amazon' },
    { name: 'Google', logo: '/company-logos/google-logo.webp', path: '/google' },
    { name: 'Apple', logo: '/company-logos/apple-logo.webp', path: '/apple' },
    { name: 'Netflix', logo: '/company-logos/netflix-logo.webp', path: '/netflix' },
    { name: 'Spotify', logo: '/company-logos/spotify-logo.webp', path: '/spotify' },
    { name: 'GitHub', logo: '/company-logos/github-logo.webp', path: '/github' },
    { name: 'Microsoft', logo: '/company-logos/microsoft-logo.webp', path: '/microsoft' },
    { name: 'Uber', logo: '/company-logos/uber-logo.webp', path: '/uber' },
    { name: 'Nvidia', logo: '/company-logos/nvidia-logo.webp', path: '/nvidia' },
    { name: 'Meta', logo: '/company-logos/meta-logo.webp', path: '/meta' },
    { name: 'Tesla', logo: '/company-logos/tesla-logo.webp', path: '/tesla' },
    { name: 'Paypal', logo: '/company-logos/paypal-logo.webp', path: '/paypal' },
    { name: 'Oracle', logo: '/company-logos/oracle-logo.webp', path: '/oracle' },
    { name: 'Palo Alto', logo: '/company-logos/palo-alto-logo.webp', path: '/palo-alto' },
    { name: 'Micron', logo: '/company-logos/micron-logo.webp', path: '/micron' },
    { name: 'Intel', logo: '/company-logos/intel-logo.webp', path: '/intel' },
    { name: 'Qualcomm', logo: '/company-logos/qualcomm-logo.webp', path: '/qualcomm' },
    { name: 'Cisco', logo: '/company-logos/cisco-logo.webp', path: '/cisco' },
];

// Sort companies once outside the component
const sortedCompanies = companies.sort((a, b) => a.name.localeCompare(b.name));

const Dashboard: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCompanies = useMemo(() => {
        return sortedCompanies.filter(company =>
            company.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

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
                        <img src={company.logo} alt={`${company.name} Logo`} loading="lazy" />
                        <h3>{company.name}</h3>
                    </Link>
                ))}
            </main>
        </div>
    );
};

export default Dashboard;