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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'function reverseString(str) {<br>&nbsp;&nbsp;return str.split("").reverse().join("");<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function binarySearch(arr, target) {<br>&nbsp;&nbsp;let left = 0;<br>&nbsp;&nbsp;let right = arr.length - 1;<br>&nbsp;&nbsp;while (left <= right) {<br>&nbsp;&nbsp;&nbsp;&nbsp;const mid = left + Math.floor((right - left) / 2);<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] === target) return mid;<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] < target) left = mid + 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;else right = mid - 1;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return -1;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'An array stores elements in contiguous memory locations, allowing for fast random access. A linked list consists of nodes where each node stores a data element and a reference (link) to the next node in the sequence. This allows for efficient insertion and deletion operations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function isPalindrome(str) {<br>&nbsp;&nbsp;const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");<br>&nbsp;&nbsp;const reversedStr = cleanStr.split("").reverse().join("");<br>&nbsp;&nbsp;return cleanStr === reversedStr;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Recursion is a programming technique where a function calls itself to solve subproblems. For example, the factorial of a number n is calculated as n * factorial(n - 1) until n is 1.'
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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'GitHub is a web-based platform used for version control and collaboration. It allows developers to work together on projects, track changes, and manage code.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. It allows multiple people to work on a project simultaneously without interfering with each other.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '"Git" is a version control system that tracks changes in source code during software development. "GitHub" is a web-based platform that provides hosting for Git repositories and additional collaboration features.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'A branch is a parallel version of a repository that allows you to work on different features or fixes without affecting the main codebase. You can create a branch using the "git branch" command.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'The benefits of using GitHub include version control, collaboration, code review, issue tracking, continuous integration, and deployment automation.'
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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'I want to work for GitHub because I admire the company\'s mission to make it easier for developers to collaborate and build software. I believe in the power of open-source development and want to contribute to a platform that supports it.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In my next role, I am looking for opportunities to learn and grow as a developer. I want to work on challenging projects that push me out of my comfort zone and help me develop new skills.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I handle tight deadlines and pressure by prioritizing tasks, breaking them down into smaller steps, and staying organized. I also communicate with my team to set realistic expectations and ask for help when needed.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'One thing that frustrates me in my current job is the lack of clear communication between teams. To deal with it, I proactively reach out to other teams, schedule regular meetings, and use collaboration tools to streamline communication.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When I had to learn a new technology quickly, I started by reading the documentation and watching tutorials to get a basic understanding. I then worked on a small project to apply what I learned and troubleshoot any issues. I also asked for help from more experienced developers and attended workshops to deepen my knowledge.'
        ]
    }
];

const Github: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
    const [dropdowns, setDropdowns] = useState<{ [key: number]: boolean }>({});

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setDropdowns({}); // Reset dropdowns when category changes
    };

    const toggleDropdown = (index: number) => {
        setDropdowns(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const selectedCategoryData = categories.find(category => category.name === selectedCategory);
    const selectedQuestions = selectedCategoryData?.questions || [];
    const selectedAnswers = selectedCategoryData?.answers || [];

    return (
        <div className="company-interview">
            <header className="company-header">
                <img src={'./company-logos/github-logo.webp'} alt="Company Logo" className="github-logo" />
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
                            <div className="question-content">
                                <div className={`question-text ${dropdowns[index] ? 'unbold' : ''}`}>
                                    {dropdowns[index] && <strong>Question:</strong>}
                                    {dropdowns[index] && <br />}
                                    {dropdowns[index] && <br />}
                                    {question}
                                </div>
                                <button className="dropdown-button" onClick={() => toggleDropdown(index)}>
                                    {dropdowns[index] ? <img src={'./nav/uparrow.webp'} style={{ width: '15px', height: '15px'}} alt="Up Arrow"/> : <img src={'./nav/downarrow.webp'} style={{ width: '15px', height: '15px'}} alt="Down Arrow"/>}
                                </button>
                            </div>
                            {dropdowns[index] && (
                                <div className="dropdown-content" dangerouslySetInnerHTML={{ __html: selectedAnswers[index] }} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Github;