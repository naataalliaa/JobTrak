import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'How do you delete a linked list?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'How Does a Hash Table Work?', //source: https://interviewing.io/spotify-interview-questions
            'What is Breadth-First Search (BFS)?', //source: https://interviewing.io/spotify-interview-questions
            'Can you explain the concept of MITM (Man-In-The-Middle) attacks and how to prevent them?', //source: https://prepfully.com/interview-guides/spotify-software-engineer
            'Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For example, "A man, a plan, a canal: Panama" is a palindrome, but "race a car" is not.' //source: https://prepfully.com/interview-guides/spotify-software-engineer
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Could you give a simplified explanation of how JVM functions?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Explain how JVM works.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Write a function to manipulate a pandas.DataFrame.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Whats your experience with music licensing?', //source: https://4dayweek.io/interview-process/spotify-interview
            'List some unique contributions you can bring to Spotify.' //source: https://4dayweek.io/interview-process/spotify-interview
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Can you describe a previous relationship with a tough client? How did you handle it?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Describe a research project and the impact it had on the company.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'What are some things you couldve done better in your data projects?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'How comfortable are you working out of your comfort zone?' //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
        ]
    }
];

const Nvidia:  React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
    const [dropdowns, setDropdowns] = useState<{ [key: number]: boolean }>({});

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const toggleDropdown = (index: number) => {
        setDropdowns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const selectedQuestions = categories.find(category => category.name === selectedCategory)?.questions || [];

    return (
        <div className="company-interview">
            <header className="company-header">
                <img src={'./company-logos/nvidia-logo.webp'} alt="Company Logo" className="nvidia-logo" />
                <h2>Nvidia Interview Questions</h2>
            </header>
            <div className="category-container">
                {categories.map(category => (
                    <button
                        key={category.name}
                        className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="questions-container">
                <h3>{selectedCategory}</h3>
                <ul className="questions-list">
                    {selectedQuestions.map((question, index) => (
                        <li key={index} className="question-item">
                            <div className="question-number">{index + 1}.</div>
                            <div className="question-text">{question}</div>
                            <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
                                {dropdowns[index] ? <img src={'./nav/uparrow.webp'} style={{ width: '15px', height: '15px'}} alt="Up Arrow"/> : <img src={'./nav/downarrow.webp'} style={{ width: '15px', height: '15px'}} alt="Down Arrow"/>}
                            </button>
                            {dropdowns[index] && (
                                <div className="dropdown-content">
                                    {/* Add your dropdown content here */}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nvidia;