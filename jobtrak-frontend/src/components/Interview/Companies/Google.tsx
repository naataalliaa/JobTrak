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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'The kth largest element in a number stream can be found by using a min-heap. We can maintain a min-heap of size k. As we iterate through the stream, we add each element to the heap. If the size of the heap exceeds k, we remove the smallest element from the heap. The root of the heap will always be the kth largest element in the stream.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To design a class to efficiently find the kth largest element in a stream of numbers, we can use a min-heap. We can maintain a min-heap of size k. As we iterate through the stream, we add each element to the heap. If the size of the heap exceeds k, we remove the smallest element from the heap. The root of the heap will always be the kth largest element in the stream.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To reverse a linked list, we can use a three-pointer approach. We maintain three pointers: prev, current, and next. We iterate through the list, updating the next pointer to point to the current node\'s next node. We then update the current node\'s next pointer to point to the previous node. Finally, we update the prev and current pointers to move to the next nodes in the list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To design a stack that supports push, pop, and retrieving the minimum element in constant time, we can use two stacks. One stack will store the elements of the stack, and the other stack will store the minimum element at each level of the main stack. When pushing an element onto the stack, we compare it to the top element of the minimum stack. If it is smaller, we push it onto the minimum stack. When popping an element, we check if it is the minimum element. If it is, we pop it from the minimum stack as well.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find all pairs of elements with the minimum absolute difference in an array of integers, we can sort the array first. We then iterate through the array, calculating the absolute difference between each pair of adjacent elements. We keep track of the minimum absolute difference and the pairs that achieve that difference. If we find a pair with a smaller absolute difference, we update the minimum and the pairs.'
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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Congestion control in Transmission Control Protocol (TCP) is a mechanism to prevent network congestion and ensure that data is transmitted efficiently. TCP uses a variety of congestion control algorithms, such as slow start and congestion avoidance, to regulate the flow of data between two endpoints. These algorithms help prevent network congestion by adjusting the rate at which data is sent based on network conditions.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'A web architecture consists of various components that work together to deliver web services. These components include web servers, databases, load balancers, content delivery networks (CDNs), and caching servers. Web servers handle incoming requests and serve web pages, databases store and retrieve data, load balancers distribute traffic across multiple servers, CDNs cache and deliver content, and caching servers store frequently accessed data to improve performance.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Agile software development is an iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback. Agile teams work in short cycles called sprints to deliver working software incrementally. They prioritize customer satisfaction, respond to change, and continuously improve their processes. Agile methodologies include Scrum, Kanban, and Extreme Programming (XP).',
            '<br /><strong>Answer:</strong><br /><br />' +
            'API stands for Application Programming Interface. It is a set of rules and protocols that allow different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information. To explain API to a child, you can use the analogy of a waiter taking an order from a customer and delivering it to the kitchen. The waiter acts as an intermediary (API) between the customer (application) and the kitchen (server).',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To influence and drive positive change, you can use a variety of metrics to measure performance, identify areas for improvement, and track progress. Some metrics you can use include key performance indicators (KPIs), customer satisfaction scores, net promoter scores (NPS), employee engagement scores, and product adoption rates. By analyzing these metrics, you can identify trends, set goals, and make data-driven decisions to drive positive change.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you took ownership of a project', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'Describe a situation where you had to adapt to a significant change', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'How do you prioritize your work when you have multiple deadlines?', //source: https://igotanoffer.com/blogs/tech/google-behavioral-interview
            'Why do you want to work at Google?' //source: https://www.interviewkickstart.com/blogs/articles/google-behavioral-interview-questions-to-get-hired-at-google
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'When I took ownership of a project, I led a team to develop a new feature for our product. I defined the project scope, set clear goals, and delegated tasks to team members. I communicated regularly with stakeholders, tracked progress, and resolved issues as they arose. By taking ownership of the project, I was able to deliver the feature on time and within budget, exceeding customer expectations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I had to adapt to a significant change when our company underwent a reorganization. I embraced the change by staying positive, seeking feedback from colleagues, and learning new skills to adapt to the new structure. I communicated openly with my team, shared information about the changes, and supported others through the transition. By adapting to the change, I was able to maintain productivity and contribute to the company\'s success.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To prioritize my work when I have multiple deadlines, I use a combination of time management techniques and prioritization strategies. I start by creating a list of tasks and deadlines, then I assess the urgency and importance of each task. I prioritize tasks based on deadlines, impact, and dependencies, and I allocate time and resources accordingly. I also communicate with stakeholders to set realistic expectations and adjust priorities as needed.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I want to work at Google because I admire the company\'s innovative culture, talented employees, and impact on the tech industry. Google is known for its cutting-edge products, commitment to diversity and inclusion, and focus on solving complex problems. I am excited about the opportunity to work on challenging projects, collaborate with top engineers, and contribute to Google\'s mission of organizing the world\'s information and making it universally accessible and useful.'
        ]
    }
];

const Google: React.FC = () => {
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
                <img src={'./company-logos/google-logo.webp'} alt="Company Logo" className="google-logo" />
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

export default Google;