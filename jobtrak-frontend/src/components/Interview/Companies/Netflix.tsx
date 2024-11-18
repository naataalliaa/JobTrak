import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Design a stack that supports push, pop, and retrieving the minimum element in constant time', //source: https://www.codinginterview.com/guide/netflix-interview-questions
            'Given an array of integers, find all pairs of elements with the minimum absolute difference', //source: https://www.educative.io/path/speedrun-the-netflix-coding-interview-top-problems-in-javascript
            'Implement a function to check if a string is a palindrome', //source: https://www.codinginterview.com/guide/netflix-interview-questions
            'Design a queue that supports enqueue, dequeue, and retrieving the maximum element in constant time', //source: https://www.codinginterview.com/guide/netflix-interview-questions
            'Design a binary search tree (BST) iterator' //source: https://www.codinginterview.com/guide/netflix-interview-questions
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain the concept of load balancing and its importance in a distributed system', //source: https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/
            'What is the difference between microservices and monolithic architecture?', //source: https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/
            'Describe the CAP theorem and its implications for distributed systems', //source: https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/
            'How would you handle a database schema migration in a production environment?', //source: https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers
            'What is the role of a load balancer in a web application architecture?' //source: https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to lead a team through a challenging project', //source: https://www.mockquestions.com/company/Netflix/
            'Describe a situation where you had to adapt to a significant change at work', //source: https://www.mockquestions.com/company/Netflix/
            'How do you handle conflicts within a team?', //source: https://www.mockquestions.com/company/Netflix/
            'Share an example of a time when you went above and beyond to meet a deadline' //source: https://www.mockquestions.com/company/Netflix/
        ]
    }
];

const Netflix:  React.FC = () => {
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
                <img src={'./company-logos/netflix-logo.webp'} alt="Company Logo" className="netflix-logo" />
                <h2>Netflix Interview Questions</h2>
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

export default Netflix;