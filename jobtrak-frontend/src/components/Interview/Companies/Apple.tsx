import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given a binary tree, check if it is a valid binary search tree.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Implement an LRU cache.', //source: https://www.educative.io/blog/apple-coding-interview-questions
            'Design a tic-tac-toe game.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Implement a function to reverse a linked list.', //source: https://www.codinginterview.com/guide/apple-interview
            'Given an array of integers, find all pairs of elements with the minimum absolute difference.' //source: https://www.educative.io/blog/apple-coding-interview-questions
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain the differences between HTTP and HTTPS', //source: https://www.careercup.com/page?pid=apple-interview-questions
            'How would you optimize a database query that is running too slow?', //source: https://www.geeksforgeeks.org/apple-interview-questions-set-46-sde-1/
            'What are design patterns, and why are they important?', //source: https://www.interviewcake.com/apple-interview-questions
            'Explain the difference between concurrency and parallelism.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Describe your process for writing and testing software.' //source: https://www.careercup.com/page?pid=apple-interview-questions
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to lead a project without much guidance.', //source: https://www.mockquestions.com/company/Apple/
            'Describe a situation where you had to handle a difficult client or customer.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'How do you manage tight deadlines and multiple projects?', //source: https://www.mockquestions.com/company/Apple/
            'Share an example of a time when you took the initiative to solve a problem.', //source: https://www.careercup.com/page?pid=apple-interview-questions
            'Tell me about a time when you received criticism and how you handled it' //source: https://www.careercup.com/page?pid=apple-interview-questions
        ]
    }
];

const Apple: React.FC = () => {
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
                <img src={'./company-logos/apple-logo.webp'} alt="Company Logo" className="apple-logo" />
                <h2>Apple Interview Questions</h2>
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

export default Apple;