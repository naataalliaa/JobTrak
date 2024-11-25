import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given a binary tree, check if it is a valid binary search tree.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Implement an LRU cache.', //source: https://www.educative.io/blog/apple-coding-interview-questions
            'Design a tic-tac-toe game.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Implement a function to reverse a linked list.', //source: https://www.codinginterview.com/guide/apple-interview
            'Given an array of integers, find all pairs of elements with the minimum absolute difference.' //source: https://www.educative.io/blog/apple-coding-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To check if a binary tree is a valid binary search tree,</strong> you can perform an in-order traversal of the tree and check if the resulting list of values is sorted in ascending order. If it is, then the tree is a valid binary search tree.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To implement an LRU cache,</strong> you can use a combination of a doubly linked list and a hash map. The doubly linked list will keep track of the order of the elements in the cache, with the most recently used element at the front and the least recently used element at the back. The hash map will allow for quick lookups of elements in the cache.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To design a tic-tac-toe game,</strong> you can represent the game board as a 3x3 matrix and keep track of the current player\'s turn. You can then implement functions to check for a win condition, update the game board with each player\'s move, and switch players after each turn.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To reverse a linked list,</strong> you can iterate through the list and change the pointers of each node to point to the previous node instead of the next node. You will also need to keep track of the current, previous, and next nodes while traversing the list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To find all pairs of elements with the minimum absolute difference in an array of integers,</strong> you can first sort the array and then iterate through it to find the pairs with the smallest absolute difference. You can keep track of the minimum difference and update it as you find smaller differences.'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain the differences between HTTP and HTTPS', //source: https://www.careercup.com/page?pid=apple-interview-questions
            'How would you optimize a database query that is running too slow?', //source: https://www.geeksforgeeks.org/apple-interview-questions-set-46-sde-1/
            'What are design patterns, and why are they important?', //source: https://www.interviewcake.com/apple-interview-questions
            'Explain the difference between concurrency and parallelism.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'Describe your process for writing and testing software.' //source: https://www.careercup.com/page?pid=apple-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>HTTP (Hypertext Transfer Protocol)</strong> is a protocol used for transmitting data over the internet.<br /><br /> <strong>HTTPS (Hypertext Transfer Protocol Secure)</strong> is a secure version of HTTP that uses encryption to protect data. HTTPS is commonly used for secure transactions, such as online banking and shopping, to prevent eavesdropping and tampering.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>To optimize a database query that is running too slow,</strong> you can use techniques such as indexing, query optimization, and database tuning. Indexing involves creating indexes on columns that are frequently queried, while query optimization involves rewriting the query to improve performance. Database tuning involves adjusting database parameters and configurations to improve overall performance.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Design patterns are reusable solutions to common design problems in software development.</strong> They provide a template for solving design problems and help developers communicate and collaborate effectively. Design patterns are important because they promote code reusability, maintainability, and scalability, and they help developers write clean, modular, and maintainable code.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Concurrency is the ability of a system to handle multiple tasks at the same time, while parallelism is the ability of a system to execute multiple tasks simultaneously.</strong> Concurrency is achieved by interleaving tasks and switching between them, while parallelism is achieved by executing tasks in parallel using multiple processors or cores. Concurrency is typically used to improve responsiveness and resource utilization, while parallelism is used to improve performance and throughput.',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Planning and Requirements Gathering:</strong> Understand the requirements and scope of the software project.<br /><br />' +
            '<strong>Design:</strong> Create a high-level design of the software architecture and components.<br /><br />' +
            '<strong>Implementation:</strong> Write the code according to the design and requirements.<br /><br />' +
            '<strong>Testing:</strong> Develop and execute test cases to ensure the software works as expected.<br /><br />' +
            '<strong>Deployment:</strong> Deploy the software to production and monitor its performance.<br /><br />' +
            '<strong>Maintenance:</strong> Provide ongoing support and maintenance for the software to fix bugs and add new features.<br /><br /><br />' + 
            '<strong>Example:</strong><br /><br />' +
            '<strong>Planning and Requirements Gathering:</strong> Understand the requirements, such as user authentication, product listings, and payment processing.<br /><br />' +
            '<strong>Design:</strong> Plan the architecture using MVC and design the components like user authentication, product catalog, and payment gateway.<br /><br />' +
            '<strong>Implementation:</strong> Write code for each component, ensuring they follow best practices and are well-documented. <br /><br />' +
            '<strong>Testing:</strong> Write unit tests for each component, perform integration tests to ensure they work together, and conduct system tests to ensure the application functions as a whole. <br /><br />' +
            '<strong>Deployment:</strong> Deploy the application to a cloud platform using CI/CD pipelines.<br /><br />' +
            '<strong>Maintenance:</strong> Use monitoring tools to track the application\'s performance and make updates based on user feedback.<br /><br />',
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to lead a project without much guidance.', //source: https://www.mockquestions.com/company/Apple/
            'Describe a situation where you had to handle a difficult client or customer.', //source: https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-EI_IE1138.0,5_KO6,23.htm
            'How do you manage tight deadlines and multiple projects?', //source: https://www.mockquestions.com/company/Apple/
            'Share an example of a time when you took the initiative to solve a problem.', //source: https://www.careercup.com/page?pid=apple-interview-questions
            'Tell me about a time when you received criticism and how you handled it' //source: https://www.careercup.com/page?pid=apple-interview-questions
        ]
        ,
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Assess the Situation:</strong> I began by thoroughly understanding the project requirements and the objectives. I gathered all available information to ensure a clear understanding of the end goals.<br /><br />' +
            '<li><strong>Initiate Planning:</strong> I organized a kickoff meeting with all team members to discuss the project goals, timelines, and initial ideas. This helped in aligning everyone\’s understanding and setting clear expectations.<br /><br />' +
            '<li><strong>Define Roles and Responsibilities:</strong> I identified the strengths of each team member and assigned specific roles and responsibilities accordingly. This ensured that everyone knew what was expected of them and played to their strengths. <br /><br />' +
            '<li><strong>Set Milestones:</strong> I broke down the project into manageable tasks and set clear milestones. This helped in tracking progress and maintaining focus on the deliverables.<br /><br />' +
            '<li><strong>Encourage Collaboration and Communication:</strong> With little guidance, open and constant communication was crucial. I scheduled regular check-ins and encouraged team members to voice their concerns, share progress, and provide feedback. We used collaboration tools to keep everyone in the loop.<br /><br />' +
            '<li><strong>Problem Solving:</strong> Whenever we encountered obstacles, I facilitated brainstorming sessions to explore potential solutions. I made decisions based on the collective input of the team, ensuring everyone felt included and valued. <br /><br />' +
            '<li><strong>Stay Flexible:</strong> I maintained flexibility to adapt to any changes or new information. This involved revisiting and adjusting our plan when necessary to keep the project on track.<br /><br />' +
            '<li><strong>Documentation:</strong> I ensured that all decisions, changes, and progress were well-documented. This created a clear trail that could be referred back to and provided transparency.<br /><br />' ,
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Stay Calm and Listen:</strong> I allowed the customer to express their frustration without interrupting. This helped them feel heard.<br /><br />' +
            '<li><strong>Empathize:</strong> I acknowledged their frustration and apologized for the inconvenience: "I\’m really sorry for the confusion and the inconvenience this has caused you."<br /><br />' +
            '<li><strong>Clarify the Issue:</strong> I asked specific questions to understand the exact nature of the issue: "Can you provide me with the details of the service you were charged for so I can look into it?" <br /><br />' +
            '<li><strong>Apologize and Take Responsibility:</strong> I apologized again and assured them that I would personally handle the resolution: "I apologize for this error. I\'m going to take care of this for you right away."<br /><br />' +
            '<li><strong>Solve the Problem:</strong> I reviewed the customer\'s account, identified the mistake, and removed the incorrect charge. I also ensured that their account was corrected to prevent future issues.<br /><br />' +
            '<li><strong>Follow Up:</strong> I informed the customer of the resolution and sent a confirmation email. A few days later, I followed up to ensure they were satisfied with the outcome. <br /><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Prioritize Tasks:<br /><br /></strong>' +
            '<ul><li>Start by listing all your tasks and deadlines.<br /><br />' +
            '<li> Use a prioritization method like the Eisenhower Matrix to categorize tasks based on urgency and importance. </ul><br />' +
            '<br /><li><strong>Create a Schedule:</strong><br /><br />' +
            '<ul><li>Break down your projects into smaller tasks with deadlines.<br /><br />' +
            '<li>Allocate specific time blocks for each task in your calendar.<br /><br />' +
            '<li>Be realistic about how long each task will take.</ul><br /><br />' +
            '<li><strong>Stay Organized:</strong><br /><br />' +
            '<ul><li>Use project management tools like Trello or Asana to track tasks and deadlines.<br /><br />' +
            '<li>Set reminders and deadlines for each task.<br /><br />' +
            '<li>Keep all related documents and materials organized and easily accessible.</ul><br /><br />' +
            '<li><strong>Set Clear Goals:</strong><br /><br />' +
            '<ul><li>Define clear goals and objectives for each project.<br /><br />' +
            '<li>Break down larger projects into smaller milestones.<br /><br />' +
            '<li>Track your progress and adjust your schedule as needed.</ul><br /><br />' +
            '<li><strong>Communicate Effectively:</strong><br /><br />' +
            '<ul><li>Keep your team or stakeholders informed about your progress.<br /><br />' +
            '<li>Communicate any delays or issues as soon as they arise.<br /><br />' +
            '<li>Ask for help or delegate tasks if needed.</ul><br /><br />' +
            '<li><strong>Avoid Multitasking:</strong><br /><br />' +
            '<ul><li>Focus on one task at a time to ensure quality and efficiency.<br /><br />' +
            '<li>Take breaks between tasks to recharge and refocus.<br /><br />' +
            '<li>Use the Pomodoro Technique to work in focused intervals.</ul><br /><br />' +
            '<li><strong>Review and Reflect:</strong><br /><br />' +
            '<ul><li>Review your progress at the end of each day or week.<br /><br />' +
            '<li>Identify what worked well and what could be improved.<br /><br />' +
            '<li>Adjust your schedule and priorities based on your reflections.</ul><br /><br />' +
            '<li><strong>Example:</strong><br /><br />' +
            '<ul><li><strong>Prioritize Tasks:</strong> I start by listing all my tasks and deadlines for the week. I categorize them based on urgency and importance using the Eisenhower Matrix.<br /><br />' +
            '<li><strong>Create a Schedule:</strong> I allocate specific time blocks in my calendar for each task, ensuring I have enough time to complete them.<br /><br />' +
            '<li><strong>Stay Organized:</strong> I use Trello to track my tasks and deadlines, set reminders, and keep all project-related documents in one place.<br /><br />' +
            '<li><strong>Set Clear Goals:</strong> I define clear goals and milestones for each project, which helps me stay focused and motivated.<br /><br />' +
            '<li><strong>Communicate Effectively:</strong> I keep my team informed about my progress, communicate any delays, and ask for help when needed.<br /><br />' +
            '<li><strong>Avoid Multitasking:</strong> I focus on one task at a time to ensure quality and efficiency, taking breaks between tasks to recharge.<br /><br />' +
            '<li><strong>Review and Reflect:</strong> At the end of each week, I review my progress, identify areas for improvement, and adjust my schedule and priorities accordingly.</ul><br /><br />' ,
            '<br /><strong>Answer:</strong><br /><br />' +
            '<li><strong>Research:</strong> research the issue and identified potential solutions.<br /><br />' +
            '<li><strong>Propose a Solution:</strong> present my findings and proposed a solution to my team.<br /><br />' +
            '<li><strong>Implement the Solution:</strong> work with my team to implement the solution and monitored the results.<br /><br />' +
            '<li><strong>Follow Up:</strong> follow up to ensure the solution was effective and made adjustments as needed.<br /><br /><br />' +
            '<li><strong>Example:</strong><br /><br />' +
            '<strong>Research:</strong> When our team encountered a recurring issue with our software deployment process, I researched the root cause and identified potential solutions.<br /><br />' +
            '<strong>Propose a Solution:</strong> I presented my findings to the team and proposed a new deployment process that addressed the underlying issues.<br /><br />' +
            '<strong>Implement the Solution:</strong> I worked with the team to implement the new process and provided training and support to ensure a smooth transition.<br /><br />' +
            '<strong>Follow Up:</strong> I monitored the deployment process and gathered feedback from team members to make adjustments and improvements as needed.</ul><br /><br />' ,
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Listen and Understand:</strong> Emphasize your ability to listen and understand the feedback without becoming defensive.<br /><br />' +
            '<li><strong>Reflect and Learn:</strong> Share what you learned from the experience and how it has benefited your work.<br /><br />' +
            '<li><strong>Respond Positively:</strong> Focus on how the criticism helped you grow rather than dwelling on negative feelings.<br /><br />' +
            '<li><strong>Seek Feedback:</strong> Explain the specific steps you took to address the criticism and improve.,</ul><br /><br />' +
            '<strong>Example:</strong><br /><br />' +
            '<ul><li><strong>Listen and Understand:</strong> When I received criticism from a team member about my approach to a project, I listened to their feedback and asked clarifying questions to understand their perspective.<br /><br />' +
            '<strong><li>Reflect and Learn:</strong> I took the feedback as an opportunity to reflect on my actions and consider how I could improve. I reviewed my approach and identified areas where I could make changes.<br /><br />' +
            '<strong><li>Respond Positively:</strong> I responded to the team member with a positive attitude, thanking them for their feedback and expressing my willingness to make changes.<br /><br />' +
            '<strong><li>Seek Feedback:</strong> I sought feedback from other team members to gather different perspectives and ensure I was addressing the issue effectively.<br /><br />' +
            '<strong><li>Follow Up:</strong> I followed up with the team member who provided the initial feedback to share the changes I had made and ensure they were satisfied with the outcome.</ul></ul><br /><br />'
        ]
    }
];

const Apple: React.FC = () => {
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
                <img src={'./company-logos/apple-logo.webp'} alt="Company Logo" className="apple-logo" />
                <h2>Apple Interview Questions</h2>
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

export default Apple;