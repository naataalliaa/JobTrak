import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Reverse a linked list.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Find the first non-repeating character in a string.', //source: https://interviewing.io/spotify-interview-questions
            'Merge two sorted arrays.', //source: https://interviewprep.org/qualcomm-interview-questions/
            'Find the longest common prefix in a list of strings.', //source: https://interviewprep.org/qualcomm-interview-questions/
            'Implement a basic version of the strStr() function.' //source: https://interviewprep.org/qualcomm-interview-questions/
        ],
        answers: [
            'To reverse a linked list, you can iterate through the list and change the next pointer of each node to point to the previous node. You also need to keep track of the previous and current nodes to update the pointers correctly. Here is an example implementation in Python:',
            'To find the first non-repeating character in a string, you can iterate through the string and count the occurrences of each character. Then, you can iterate through the string again and return the first character that has a count of 1. Here is an example implementation in Python:',
            'To merge two sorted arrays, you can use a two-pointer approach where you iterate through both arrays simultaneously and compare the elements at each position. You can then merge the elements into a new array in sorted order. Here is an example implementation in Python:',
            'To find the longest common prefix in a list of strings, you can iterate through the characters of the first string and compare them with the corresponding characters in the other strings. You can stop when you reach a character that does not match or when you reach the end of the shortest string. Here is an example implementation in Python:',
            'To implement a basic version of the strStr() function, you can iterate through the haystack string and check if each substring of the same length as the needle string matches the needle. If a match is found, you can return the index of the start of the match. Here is an example implementation in Python:'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'How does stack corruption occur, and how can it be prevented?', //source:https://workat.tech/company/qualcomm/interview-questions/problem-solving
            'What is the difference between TCP and UDP?', //source: https://workat.tech/company/qualcomm/interview-questions/problem-solving
            'How would you maintain efficiency and reliability in large-scale distributed systems?', //source: https://mindmajix.com/qualcomm-interview-questions
            'Describe the process of debugging and testing software to ensure quality.', //source: https://mindmajix.com/qualcomm-interview-questions
            'Explain the differences between heap memory and stack memory. ' //source: https://mindmajix.com/qualcomm-interview-questions
        ],
        answers: [
            'Stack corruption occurs when a program writes data beyond the bounds of a stack-allocated buffer, which can overwrite the return address of a function or other important data structures. This can lead to crashes, security vulnerabilities, and other unexpected behavior. Stack corruption can be prevented by using safe programming practices, such as bounds checking, input validation, and using secure functions that handle memory safely. Tools like AddressSanitizer and Valgrind can also help detect and prevent stack corruption.',
            'TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two common transport layer protocols used in computer networks. TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of data. It is used for applications that require guaranteed delivery, such as web browsing, email, and file transfer. UDP is a connectionless protocol that provides faster, but less reliable, delivery of data. It is used for applications that can tolerate some data loss, such as streaming media, online gaming, and voice over IP (VoIP).',
            'Maintaining efficiency and reliability in large-scale distributed systems requires careful design, implementation, and monitoring. Some key strategies include using load balancing to distribute traffic evenly across servers, implementing fault tolerance mechanisms to handle failures gracefully, and using caching to reduce latency and improve performance. It is also important to monitor system performance, identify bottlenecks, and optimize resource utilization to ensure that the system can scale to meet increasing demand.',
            'Debugging and testing software is an essential part of the software development process to ensure that the software meets quality standards and performs as expected. Debugging involves identifying and fixing errors or bugs in the code, while testing involves verifying that the software functions correctly and meets the requirements. Common debugging and testing techniques include unit testing, integration testing, regression testing, and performance testing. Tools like debuggers, profilers, and automated testing frameworks can help streamline the debugging and testing process.',
            'Heap memory and stack memory are two types of memory used by programs to store data during execution. Stack memory is used for local variables and function call frames and is managed automatically by the compiler. It is fast and efficient but limited in size and scope. Heap memory is used for dynamically allocated memory and is managed manually by the programmer using functions like malloc and free. It is slower and less efficient than stack memory but can be used to store larger amounts of data and data structures that need to persist beyond the scope of a function.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Describe a time when you had to troubleshoot a complex technical issue.', //source: https://interviewprep.org/qualcomm-interview-questions/
            'Can you give an example of a project where you had to collaborate with cross-functional teams?', //source: https://interviewprep.org/qualcomm-interview-questions/
            'Tell me about a time when you introduced a new technology or technique that significantly impacted a project.', //source: https://interviewprep.org/qualcomm-interview-questions/
            'How did you handle a situation where you had to meet a tight deadline?' //source: https://interviewprep.org/qualcomm-interview-questions/
        ],
        answers: [
            'I had to troubleshoot a complex technical issue when I was working on a project that required me to integrate a new API. The API was not well-documented, and I had to spend a significant amount of time reading through the documentation and experimenting with different configurations to get it to work. I also reached out to the API provider for support, and they were able to provide me with some additional information that helped me resolve the issue. In the end, I was able to successfully integrate the API into the project and meet the project deadline.',
            'I collaborated with cross-functional teams on a project that required us to develop a new feature for our product. The feature required input from multiple teams, including engineering, design, and product management. I worked closely with each team to gather requirements, provide updates on progress, and address any issues that arose. By collaborating effectively with the cross-functional teams, we were able to deliver the feature on time and with high quality.',
            'I introduced a new technology that significantly impacted a project when I suggested using a new data visualization tool to analyze the project data. The tool allowed us to create interactive visualizations that made it easier to identify trends and patterns in the data. As a result, we were able to make data-driven decisions more quickly and accurately, which improved the overall project outcomes. The team was impressed with the tool and adopted it for future projects.',
            'I had to meet a tight deadline when I was working on a project that required me to deliver a new feature to a customer by a specific date. To meet the deadline, I created a detailed project plan that outlined the tasks that needed to be completed, assigned responsibilities to team members, and set milestones to track progress. I also communicated regularly with the team to ensure that everyone was on track and addressed any issues that arose quickly. By staying organized, prioritizing tasks, and working efficiently, we were able to deliver the feature on time and exceed the customer\'s expectations.'
        ]
    }
];

const Qualcomm: React.FC = () => {
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
                <img src={'./company-logos/qualcomm-logo.webp'} alt="Company Logo" className="qualcomm-logo" />
                <h2>Qualcomm Interview Questions</h2>
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

export default Qualcomm;