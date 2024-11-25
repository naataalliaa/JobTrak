import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given a number, remove n characters to find the minimum number', //source: https://leetcode.com/discuss/interview-question/1213018/cisco-coding-question
            'Raman was playing a game where he wins and loses money in each step. Help Raman find the minimum amount he should start with to avoid running out of money', //source: https://prepinsta.com/cisco-coding-questions-and-answers/
            'Find the maximum value in each sliding window of size k in an array', //source: https://leetcode.com/discuss/interview-question/1213018/cisco-coding-question
            'Given an array of integers, return indices of the two numbers such that they add up to a specific target.', //source: https://prepinsta.com/cisco-coding-questions-and-answers/
            'Reverse a singly linked list' //source: https://prepinsta.com/cisco-coding-questions-and-answers/
        ],
        answers: [
            'To find the minimum number, we can use a greedy approach. We can iterate through the number from left to right and remove the first character that is greater than the next character. If we remove n characters, we will find the minimum number. If we remove more than n characters, we will not find the minimum number. We can use a stack to keep track of the characters we have removed. We can then convert the stack to a string to get the minimum number.', //source: https://leetcode.com/discuss/interview-question/1213018/cisco-coding-question
            'To find the minimum amount Raman should start with, we can use a greedy approach. We can iterate through the steps from left to right and keep track of the current amount of money Raman has. If Raman loses money and his current amount is less than the minimum amount he should start with, we update the minimum amount. If Raman wins money, we add the amount he wins to his current amount. We return the minimum amount Raman should start with.', //source: https://prepinsta.com/cisco-coding-questions-and-answers/   
            'To find the maximum value in each sliding window of size k in an array, we can use a deque data structure. We can iterate through the array and keep track of the indices of the elements in the current window. If the maximum element in the window is outside the window, we remove it from the deque. We add the current element to the deque. If the index of the maximum element is less than the index of the first element in the window, we remove the maximum element from the deque. We add the maximum element to the result.', //source: https://leetcode.com/discuss/interview-question/1213018/cisco-coding-question
            'To find the indices of the two numbers that add up to a specific target, we can use a hashmap to store the indices of the elements we have seen. We iterate through the array and check if the difference between the target and the current element is in the hashmap. If it is, we return the indices of the two numbers. If it is not, we add the current element to the hashmap.', //source: https://prepinsta.com/cisco-coding-questions-and-answers/
            'To reverse a singly linked list, we can use a three-pointer approach. We can iterate through the list and keep track of the current, next, and previous nodes. We update the next pointer to point to the previous node. We update the previous pointer to point to the current node. We update the current pointer to point to the next node. We continue this process until we reach the end of the list. We return the new head of the list, which is the previous node.', //source: https://prepinsta.com/cisco-coding-questions-and-answers/'
        ]

    },
    {
        name: 'Technical Questions',
        questions: [
            'How would you design a scalable and maintainable software system for managing network devices?', //source: https://interviewprep.org/cisco-systems-interview-questions/
            'How would you troubleshoot a slow network connection between two routers?', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'Explain spanning tree protocol and its benefits.', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'What are the differences between IOS and NX-OS?', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'Describe how to configure VLANs on a Cisco switch.' //source: https://carreersupport.com/cisco-engineer-interview-questions/
        ],
        answers: [
            'To design a scalable and maintainable software system for managing network devices, we can use a microservices architecture. We can break down the system into smaller services that are responsible for specific tasks. We can use a message queue to communicate between the services. We can use a database to store the configuration of the network devices. We can use a load balancer to distribute the traffic between the services. We can use monitoring and alerting to keep track of the health of the system. We can use version control to manage the codebase.', //source: https://interviewprep.org/cisco-systems-interview-questions/
            'To troubleshoot a slow network connection between two routers, we can use a network analyzer to capture and analyze the traffic between the routers. We can check the bandwidth utilization, latency, and packet loss. We can check the routing tables on the routers to make sure the routes are correct. We can check the interface statistics on the routers to make sure there are no errors. We can check the configuration of the routers to make sure it is correct. We can check the physical connections between the routers to make sure they are secure.', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'Spanning Tree Protocol (STP) is a network protocol that prevents loops in a network topology. It works by selecting a root bridge and calculating the shortest path to the root bridge for each switch in the network. STP blocks redundant links to prevent loops. The benefits of STP include loop prevention, network stability, and automatic failover in case of link failure.', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'IOS (Internetwork Operating System) is the operating system used on Cisco routers and switches. It is a monolithic operating system that runs on a single processor. NX-OS (Network Operating System) is the operating system used on Cisco Nexus switches. It is a modular operating system that runs on multiple processors. The main differences between IOS and NX-OS are the architecture, features, and hardware support.', //source: https://carreersupport.com/cisco-engineer-interview-questions/
            'To configure VLANs on a Cisco switch, we can use the following steps: 1. Access the switch console. 2. Enter privileged exec mode. 3. Enter global configuration mode. 4. Create the VLANs using the "vlan" command. 5. Assign ports to the VLANs using the "interface" command. 6. Configure the ports as access ports or trunk ports. 7. Verify the configuration using the "show vlan" command. 8. Save the configuration using the "write memory" command.', //source: https://carreersupport.com/cisco-engineer-interview-questions/
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to overcome a challenge or obstacle in your work.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'Describe a situation where you successfully collaborated with a team to achieve a common goal.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'How do you handle negative feedback from a supervisor or colleague?', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'Can you give an example of a time when you had to take initiative and solve a problem without being asked?', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'Share an experience where you demonstrated your creativity and problem-solving skills.' //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
        ],
        answers: [
            'To overcome a challenge or obstacle in my work, I used my problem-solving skills to identify the root cause of the issue and develop a solution. I collaborated with my team to implement the solution and monitor the results. I communicated with stakeholders to keep them informed of the progress and address any concerns. I remained positive and focused on finding a resolution, which helped me overcome the challenge and achieve a successful outcome.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'To collaborate with a team to achieve a common goal, I actively listened to my team members\' ideas and perspectives. I shared my own ideas and contributed to the discussion. I delegated tasks based on team members\' strengths and skills. I provided support and encouragement to team members to keep them motivated. I communicated openly and honestly with the team to address any issues or conflicts. I celebrated the team\'s achievements and recognized their contributions to the project.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'To handle negative feedback from a supervisor or colleague, I listened carefully to the feedback and asked clarifying questions to understand the specific issues. I remained calm and professional during the conversation. I accepted responsibility for my actions and acknowledged the areas where I needed to improve. I developed a plan to address the feedback and shared it with the supervisor or colleague. I followed up with them to show that I was committed to making positive changes based on their feedback.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'To take initiative and solve a problem without being asked, I identified an opportunity to improve a process or address an issue. I researched the problem and developed a plan to solve it. I presented my plan to my supervisor or team and explained the benefits of implementing it. I took ownership of the project and worked with the team to implement the solution. I monitored the results and made adjustments as needed to ensure the success of the project.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
            'To demonstrate my creativity and problem-solving skills, I used my knowledge and experience to develop innovative solutions to complex problems. I thought outside the box and considered different perspectives to find the best solution. I collaborated with my team to brainstorm ideas and evaluate different options. I tested the solutions and analyzed the results to determine the most effective approach. I communicated the results to stakeholders and received positive feedback on my creativity and problem-solving skills.', //source: https://interviewsmile.com/resources/company/cisco-behavioral-interview-questions-and-answers/
        ]

    }
];

const Cisco: React.FC = () => {
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
                <img src={'./company-logos/cisco-logo.webp'} alt="Company Logo" className="cisco-logo" />
                <h2>Cisco Interview Questions</h2>
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

export default Cisco;