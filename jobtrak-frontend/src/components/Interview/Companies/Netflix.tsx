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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To design a stack that supports push, pop, and retrieving the minimum element in constant time, you can use two stacks. One stack will store the actual elements, and the other stack will store the minimum element at each level of the stack. When pushing an element, you can compare it with the top element of the minimum stack and push the smaller of the two. When popping an element, you can pop from both stacks. To retrieve the minimum element, you can return the top element of the minimum stack.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find all pairs of elements with the minimum absolute difference in an array of integers, you can sort the array first. Then, you can iterate through the array and calculate the absolute difference between adjacent elements. Keep track of the minimum difference and the pairs that achieve it. If the difference between two adjacent elements is less than the minimum difference, update the minimum difference and the pairs. Finally, return the pairs with the minimum difference.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To check if a string is a palindrome, you can use two pointers starting from the beginning and end of the string. Move the pointers towards each other while comparing the characters at each position. If the characters are not equal at any point, the string is not a palindrome. If the pointers meet in the middle of the string, the string is a palindrome.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To design a queue that supports enqueue, dequeue, and retrieving the maximum element in constant time, you can use two double-ended queues (deques). One deque will store the actual elements, and the other deque will store the maximum element at each level of the queue. When enqueuing an element, you can compare it with the back element of the maximum deque and enqueue the larger of the two. When dequeuing an element, you can dequeue from both deques. To retrieve the maximum element, you can return the back element of the maximum deque.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To design a binary search tree (BST) iterator, you can use a stack to simulate the inorder traversal of the BST. Initialize the stack with the leftmost path of the BST. When next() is called, pop the top element from the stack and push the right child and its leftmost path onto the stack. When hasNext() is called, return whether the stack is not empty.'
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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Load balancing is the process of distributing incoming network traffic across multiple servers. It is important in a distributed system to ensure that no single server is overwhelmed with requests, leading to improved performance, fault tolerance, and scalability.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Microservices architecture decomposes an application into smaller, independent services that are easier to develop, deploy, and scale. Monolithic architecture, on the other hand, builds an application as a single unit, making it simpler to develop but harder to maintain and scale.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'The CAP theorem states that in a distributed system, it is impossible to simultaneously guarantee consistency, availability, and partition tolerance. This means that in the event of a network partition, a distributed system must choose between consistency and availability. The implications of the CAP theorem are that distributed systems must be designed with trade-offs in mind.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To handle a database schema migration in a production environment, you can follow best practices such as performing the migration during off-peak hours, backing up the database before making changes, and testing the migration in a staging environment. You can also use tools like database migration scripts and version control to track changes and roll back if necessary.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'A load balancer distributes incoming network traffic across multiple servers to ensure that no single server is overwhelmed. It improves the performance, availability, and reliability of a web application by routing requests to the most appropriate server based on factors like server health, network latency, and server load.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to lead a team through a challenging project', //source: https://www.mockquestions.com/company/Netflix/
            'Describe a situation where you had to adapt to a significant change at work', //source: https://www.mockquestions.com/company/Netflix/
            'How do you handle conflicts within a team?', //source: https://www.mockquestions.com/company/Netflix/
            'Share an example of a time when you went above and beyond to meet a deadline' //source: https://www.mockquestions.com/company/Netflix/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'One time, I had to lead a team through a challenging project that had a tight deadline and high stakes. I organized regular meetings to keep everyone on track, delegated tasks based on team members\' strengths, and provided support and guidance when needed. By fostering open communication and collaboration, we were able to successfully deliver the project on time and exceed expectations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a previous role, our company underwent a significant reorganization that changed our team structure and reporting lines. I adapted to the change by staying positive, seeking feedback from leadership, and proactively building relationships with new team members. I embraced the opportunity to learn new skills and perspectives, which helped me navigate the transition smoothly.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Conflicts within a team are inevitable, but I believe they can be resolved constructively through open communication and empathy. When conflicts arise, I listen to all perspectives, identify common goals, and facilitate a discussion to find a mutually beneficial solution. By fostering a culture of respect and understanding, I help team members address conflicts productively and maintain positive working relationships.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To meet a tight deadline on a critical project, I volunteered to work overtime and collaborated closely with team members to streamline our workflow. I prioritized tasks, set clear milestones, and communicated regularly with stakeholders to ensure alignment. By going above and beyond my regular responsibilities, I was able to deliver the project ahead of schedule and demonstrate my commitment to achieving results.'
        ]
    }
];

const Netflix: React.FC = () => {
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

export default Netflix;