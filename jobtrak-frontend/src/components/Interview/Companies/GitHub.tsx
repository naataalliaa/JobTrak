import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions', //source: https://github.com/yangshun/tech-interview-handbook
        questions: [
            'Write a function to reverse a string.',
            'Implement a binary search algorithm.',
            'Explain the difference between an array and a linked list.',
            'Write a function to check if a string is a palindrome.',
            'Explain the concept of recursion with an example.'
        ]
    },
    {   
        name: 'Technical Questions', //source: https://www.toptal.com/github/interview-questions
        questions: [
            'What is GitHub and how does it work?',
            'Explain the concept of version control.',
            'Explain the difference between "git" and "GitHub."',
            'What is a branch and how do you create one?',
            'What are the benefits of using GitHub?'
        ]
    },
    {
        name: 'Behavioral Questions', //source: https://github.com/yangshun/tech-interview-handbook
        questions: [
          'Why do you want to work for GitHub?',
          'What are you looking for in your next role?',
          'How do you handle tight deadlines and pressure?',
          'What frustrates you in your current job and how do you deal with it?',
          'Give an example of a time when you had to learn a new technology quickly.'
        ]
    }
];

const Github: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const selectedQuestions = categories.find(category => category.name === selectedCategory)?.questions || [];

    return (
        <div className="company-interview">
            <header className="company-header">
                <img src={'./github-logo.png'} alt="Company Logo" className="github-logo" />
                <h2>Github Interview Questions</h2>
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Github;