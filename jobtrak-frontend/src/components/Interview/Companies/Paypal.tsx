import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an unsorted array, count the number of elements that fall between two specified values. This requires implementing a search algorithm to efficiently find the elements in the specified range', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Given a string and a series of range queries. For each query, count the number of specific characters (e.g., asterisks \'*\') within the substring defined by the range. This involves string slicing and handling multiple queries', //source: https://interviewing.io/spotify-interview-questions
            'rearrange an unsorted array so that elements alternate between high and low values. This requires sorting the array and then rearranging the elements accordingly​', //source: https://interviewing.io/spotify-interview-questions
            'The least recently used (LRU) cache stores a limited number of elements and evicts the least recently used item when the cache is full. You need to implement this cache using an appropriate data structure like a hash map and doubly linked list', //source: https://prepfully.com/interview-guides/spotify-software-engineer
            'Given two arrays, find and return the elements that are common in both arrays. This can be efficiently solved using hash sets or binary search' //source: https://prepfully.com/interview-guides/spotify-software-engineer
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Given an unsorted array, make a pass through the array and count the number of elements that fall within the specified range. This can be done in O(n) time complexity by iterating through the array and checking if each element falls within the range. The count of elements that satisfy the condition can be incremented accordingly',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Given a string and a series of range queries, iterate through each query and extract the substring defined by the range. Then, count the number of specific characters within the substring. This can be done by iterating through the substring and counting the occurrences of the specified character',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To rearrange an unsorted array so that elements alternate between high and low values, first sort the array in ascending order. Then, create a new array and rearrange the elements by picking the highest and lowest values alternately from the sorted array',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To implement an LRU cache, use a combination of a hash map and a doubly linked list. The hash map stores the key-value pairs, and the doubly linked list maintains the order of elements based on their usage. When an element is accessed, it is moved to the front of the list. When the cache is full, the least recently used item at the end of the list is evicted',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Given two arrays, create a hash set to store the elements of one array. Then, iterate through the second array and check if each element is present in the hash set. If it is, add the element to the result array of common elements'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain the concept of polymorphism in Java', //source: https://www.simplilearn.com/paypal-interview-questions-article
            'Write a program to validate IPv4 addresses', //source: https://www.simplilearn.com/paypal-interview-questions-article
            'Explain the techniques of encapsulation, aggregation, and association in Java', //source: https://www.interviewkickstart.com/blogs/interview-questions/paypal-interview-questions
            'What is the difference between var, let, and const in JavaScript?', //source: https://www.interviewkickstart.com/blogs/interview-questions/paypal-interview-questions
            'How do you optimize a SQL query that is running slow?' //source: https://www.interviewkickstart.com/blogs/interview-questions/paypal-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Polymorphism in Java is the ability of a single method to perform different actions based on the object it is acting upon. There are two types of polymorphism in Java: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding)',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To validate IPv4 addresses in Java, you can use regular expressions. Create a pattern that matches the format of an IPv4 address and use a matcher to check if a given string matches the pattern. This can help ensure that the input string is a valid IPv4 address',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Encapsulation, aggregation, and association are object-oriented programming concepts in Java. Encapsulation is the bundling of data and methods that operate on the data into a single unit. Aggregation is a relationship where one class contains a reference to another class, but the referenced class can exist independently. Association is a relationship where one class is related to another class through a field or method',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In JavaScript, var, let, and const are used to declare variables. var is function-scoped and can be redeclared and reassigned. let is block-scoped, can be reassigned, but not redeclared. const is block-scoped, cannot be reassigned, and cannot be redeclared. Use const for variables that should not be reassigned, let for variables that may be reassigned, and avoid using var',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To optimize a slow-running SQL query, you can consider various strategies such as adding indexes to columns used in the query, rewriting the query to use more efficient joins or subqueries, reducing the number of rows returned by adding filters or conditions, and optimizing the database schema to improve query performance'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Why do you want to work at PayPal?', //source: https://candor.co/articles/interview-prep/paypal-interview-questions-and-process
            'Tell me about a time when you used your negotiation skills?', //https://candor.co/articles/interview-prep/paypal-interview-questions-and-process
            'Describe a project where you had to take the initiative?', //source: https://algo.monster/interview-guides/paypal
            'What was the biggest mistake you made in your most recent job?' //source: https://algo.monster/interview-guides/paypal
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'I want to work at PayPal because of its reputation as a leading online payment platform and its commitment to innovation and customer service. I am excited about the opportunity to contribute to a company that is shaping the future of digital payments and e-commerce',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a previous role, I negotiated a partnership agreement with a vendor that resulted in a significant cost savings for our company. I researched alternative vendors, negotiated pricing and terms, and presented a compelling case to our leadership team. The successful negotiation led to a long-term partnership that benefited our company financially',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I took the initiative on a project to streamline our team\'s data reporting process. I identified inefficiencies in our current system, proposed a new reporting structure, and led the implementation of the changes. The project resulted in a 20% reduction in reporting time and improved data accuracy',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In my most recent job, I made a mistake by overlooking a critical detail in a project timeline, which resulted in a delay in the project delivery. I took responsibility for the error, communicated the issue to my team, and worked with them to develop a plan to mitigate the delay. I learned the importance of thorough project planning and attention to detail from this experience'
        ]
    }
];

const Paypal: React.FC = () => {
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
                <img src={'./company-logos/paypal-logo.webp'} alt="Company Logo" className="paypal-logo" />
                <h2>Paypal Interview Questions</h2>
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

export default Paypal;