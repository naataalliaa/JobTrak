import React, { useState } from 'react';
import './company.css'; // Assuming your CSS file is named company.css

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array of integers, find the next biggest number.', //source: https://www.codinginterview.com/guide/amazon-interview-questions
            'Design a function that, given an array of entities and an integer N, keeps looping around the array removing the Nth remaining entity until there is only one entity remaining.', //source: https://igotanoffer.com/blogs/tech/amazon-coding-interview-questions
            'Given a sorted dictionary (array of words) of an alien language, find the order of characters in the language.', //source: https://www.designgurus.io/blog/amazon-14-question
            'Given an array of integers, find all pairs of elements with the minimum absolute difference of any two elements.', //source: https://www.educative.io/blog/crack-amazon-coding-interview-questions
            'Write a function that, given an array of lockers and an incoming package, the function will return the optimal locker for that package.'//source: https://www.codinginterview.com/guide/amazon-interview-questions
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'How would you improve Amazon’s website?', //source: https://topinterview.com/interview-advice/amazon-interview-questions-and-answers
            'What metrics do you use to influence and drive positive change?', //source: https://topinterview.com/interview-advice/amazon-interview-questions-and-answers
            'Tell me about a time when you handled a project outside of your scope of work.', //source: https://topinterview.com/interview-advice/amazon-interview-questions-and-answers
            'What skills do you possess that will help you succeed at Amazon?', //source: https://topinterview.com/interview-advice/amazon-interview-questions-and-answers
            'Explain how you would bring a product to market.' //source: https://topinterview.com/interview-advice/amazon-interview-questions-and-answers
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Can you describe a time when you took ownership of a project?', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'Tell me about a time when you had to work with a difficult team member.', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'How do you prioritize your work when you have multiple deadlines?', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'Give an example of a time when you went above and beyond for a customer.' //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
        ]
    }
];

const Amazon: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const selectedQuestions = categories.find(category => category.name === selectedCategory)?.questions || [];

    return (
        <div className="company-interview">
            <header className="company-header">
                <img src={'./amazon-logo.png'} alt="Company Logo" className="amazon-logo" />
                <h2>Amazon Interview Questions</h2>
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

export default Amazon;