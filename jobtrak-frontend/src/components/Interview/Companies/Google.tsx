import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Find the kth largest element in a number stream.', //source: https://www.educative.io/blog/google-coding-interview-questions
            'Design a class to efficiently find the kth largest element in a stream of numbers.', //source: https://www.educative.io/blog/google-coding-interview-questions
            'Implement a function to reverse a linked list.', //source: https://www.codinginterview.com/guide/google-interview-questions
            'Design a stack that supports push, pop, and retrieving the minimum element in constant time.', //source: https://www.codinginterview.com/guide/google-interview-questions
            'Given an array of integers, find all pairs of elements with the minimum absolute difference.' //source: https://www.educative.io/blog/google-coding-interview-questions
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain what congestion control is in Transmission Control Protocol (TCP)', //source: https://www.theforage.com/blog/interview-questions/google-interview-questions
            'Describe a web architecture and its components', //source: https://www.theforage.com/blog/interview-questions/google-interview-questions
            'What is agile software development?', //source: https://www.theforage.com/blog/interview-questions/google-interview-questions
            'How would you explain API to a child?', //source: https://www.theforage.com/blog/interview-questions/google-interview-questions
            'What metrics do you use to influence and drive positive change?' //source: https://theinterviewguys.com/google-interview-questions
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you took ownership of a project', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'Describe a situation where you had to adapt to a significant change', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'How do you prioritize your work when you have multiple deadlines?', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'Why do you want to work at Google?' //source: https://www.interviewkickstart.com/blogs/articles/google-behavioral-interview-questions-to-get-hired-at-google
        ]
    }
];

const Google: React.FC = () => {
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
                <img src={'./company-logos/google-logo.png'} alt="Company Logo" className="google-logo" />
                <h2>Google Interview Questions</h2>
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
                            <button onClick={() => toggleDropdown(index)}>
                                {dropdowns[index] ? 'Hide Details' : 'Show Details'}
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

export default Google;