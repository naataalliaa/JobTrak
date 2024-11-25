import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given two strings, string1 and string2, write a function to determine if string1 is a subsequence of string2. This tests understanding of string traversal and efficient checking of subsequences.', //source: https://leetcode.com/
            'Implement a SinglyLinkedList class with methods for adding elements at the head or tail, removing elements, checking the presence of an item, retrieving elements by index, and determining the list\'s length', //source: https://leetcode.com/
            'Swap Nodes in a Singly Linked List: Given a singly linked list and two positions x and y, write a function to swap the nodes at these positions, using pointer manipulation instead of swapping values', //source: https://leetcode.com/
            'Write a function that checks whether a given singly linked list contains a cycle. This is a common interview question to test understanding of linked lists and Floyd’s Tortoise and Hare algorithm', //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
            'Implement a function that finds the Kth largest element in an unsorted array using a heap or quickselect algorithm' //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to test your understanding of string manipulation and traversal. When answering, explain how you would iterate through the characters of the two strings to determine if string1 is a subsequence of string2. Be sure to consider edge cases and optimize your solution for efficiency.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to test your understanding of linked lists and data structures. When answering, describe the implementation of a SinglyLinkedList class, including the methods for adding, removing, and retrieving elements. Be sure to explain how the class handles edge cases and maintains the integrity of the linked list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to test your understanding of linked lists and pointer manipulation. When answering, describe the process of swapping nodes in a singly linked list at two given positions, x and y. Be sure to explain how to manipulate the pointers to maintain the integrity of the linked list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to test your understanding of linked lists and cycle detection algorithms. When answering, describe the process of checking for a cycle in a singly linked list using Floyd’s Tortoise and Hare algorithm. Be sure to explain the algorithm’s time complexity and space complexity.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to test your understanding of arrays and sorting algorithms. When answering, describe the implementation of a function that finds the Kth largest element in an unsorted array using a heap or quickselect algorithm. Be sure to explain the algorithm’s time complexity and space complexity.'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain the concept of security zones in Palo Alto firewalls.', //source: https://interviewbaba.com/palo-alto-interview-questions/
            'What is the difference between App-ID and traditional port-based firewalls?', //source: https://interviewbaba.com/palo-alto-interview-questions/
            'Describe the process of configuring a Site-to-Site VPN.', //source: https://interviewbaba.com/palo-alto-interview-questions/
            'What is WildFire, and how does it work?', //source: https://interviewbaba.com/palo-alto-interview-questions/
            'Explain the role of Panorama in Palo Alto deployments.' //source: https://interviewbaba.com/palo-alto-interview-questions/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your understanding of Palo Alto firewalls and network security. When answering, provide a detailed explanation of security zones, their purpose, and how they are used to secure network traffic. Be sure to highlight your knowledge of network security best practices and Palo Alto firewall features and capabilities.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your knowledge of Palo Alto firewalls and network security. When answering, describe the differences between App-ID and traditional port-based firewalls, and explain the advantages of using App-ID for application-based firewall policies. Be sure to highlight your understanding of network security concepts and Palo Alto firewall features.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your technical expertise in configuring network security solutions. When answering, describe the process of configuring a Site-to-Site VPN, including the steps involved, the configuration settings, and the security considerations. Be sure to highlight your experience with network security technologies and Palo Alto firewall deployments.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your knowledge of Palo Alto Networks security solutions. When answering, provide a detailed explanation of WildFire, its purpose, and how it works to detect and prevent advanced threats. Be sure to highlight your understanding of threat intelligence, malware analysis, and security best practices.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your understanding of Palo Alto Networks security solutions. When answering, describe the role of Panorama in Palo Alto deployments, including its features, capabilities, and benefits. Be sure to highlight your experience with network security management, policy management, and centralized security administration.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to collaborate with a cross-functional team to achieve a goal. How did you manage to work with different stakeholders?', //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
            'Describe a situation where you faced a difficult technical challenge. How did you approach solving it, and what was the outcome?', //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
            'Can you give an example of a time you had to learn a new skill or technology quickly to complete a project?', //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
            'Tell me about a time when you disagreed with a team member. How did you handle the situation, and what was the result?' //source: https://www.interviewquery.com/interview-guides/palo-alto-networks-software-engineer
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your ability to work with others and communicate effectively. When answering, focus on the specific situation, your actions, and the outcome. Be sure to highlight your ability to collaborate, problem-solve, and communicate effectively with others.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your problem-solving skills and technical expertise. When answering, provide a detailed description of the technical challenge, your approach to solving it, and the outcome. Be sure to highlight your ability to think critically, troubleshoot, and find creative solutions to complex problems.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your ability to learn new skills and adapt to new technologies. When answering, describe the situation, the new skill or technology you needed to learn, and how you went about learning it. Be sure to highlight your ability to quickly acquire new skills and apply them effectively to achieve your goals.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'This question is designed to assess your conflict resolution skills and ability to work well with others. When answering, describe the situation, the disagreement, how you handled it, and the outcome. Be sure to highlight your ability to communicate effectively, listen to others, and find common ground to resolve conflicts.'
        ]
    }
];

const PaloAlto: React.FC = () => {
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
                <img src={'./company-logos/palo-alto-logo.webp'} alt="Company Logo" className="palo-alto-logo" />
                <h2>Palo Alto Interview Questions</h2>
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

export default PaloAlto;