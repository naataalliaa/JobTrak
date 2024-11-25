import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array of integers, find the next biggest number.', //source: https://www.codinginterview.com/guide/amazon-interview-questions
            'Design a function that, given an array of entities and an integer N, keeps looping around the array removing the Nth remaining entity until there is only one entity remaining.', //source: https://igotanoffer.com/blogs/tech/amazon-coding-interview-questions
            'Given a sorted dictionary (array of words) of an alien language, find the order of characters in the language.', //source: https://www.designgurus.io/blog/amazon-14-question
            'Given an array of integers, find all pairs of elements with the minimum absolute difference of any two elements.', //source: https://www.educative.io/blog/crack-amazon-coding-interview-questions
            'Write a function that, given an array of lockers and an incoming package, the function will return the optimal locker for that package.'//source: https://www.codinginterview.com/guide/amazon-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Initialize a Stack:</strong> This stack will keep track of elements as we traverse the array from right to left.<br /><br />' +
            '<li><strong>Traverse the Array in Reverse:</strong> For each element, pop elements from the stack until we find a bigger element or the stack becomes empty.<br /><br />' +
            '<li><strong>Update Result Array:</strong> If the stack is empty, it means there is no bigger element to the right, so we put -1. Otherwise, the top of the stack is the next biggest element.<br /><br />' +
            '<li><strong>Push Current Element to Stack:</strong> Push the current element to the stack for further comparisons. <ul /><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Initialize a List:</strong> Create a new list from the given array of entities.<br /><br />' +
            '<li><strong>Set Index:</strong> Start with an index of 0.<br /><br />' +
            '<li><strong>Loop Until One Entity Remains:</strong> Continue looping until there\'s only one entity left in the list.<br /><br />' +
            '<ul><li><strong>Calculate Next Index:</strong> Update the index to the Nth remaining entity.<br /><br />' +
            '<li><strong>Remove Entity:</strong> Remove the entity at the calculated index.<br /><br /></ul>' +
            '<li><strong>Return the Last Entity:</strong> Once only one entity remains, return it.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Create a Graph:</strong> Initialize a graph and an in-degree map for all characters in the dictionary.<br /><br />' +
            '<li><strong>Build the Graph:</strong> Compare adjacent words to determine the order of characters and build the graph accordingly.<br /><br />' +
            '<li><strong>Topological Sort:</strong> Perform a topological sort on the graph to find the order of characters.<br /><br />' +
            '<li><strong>Return the Order:</strong> Return the order of characters as the result.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Sort the Array:</strong> Sort the array to have elements in ascending order.<br /><br />' +
            '<li><strong>Find Minimum Difference:</strong> Iterate through the array to find the minimum absolute difference between adjacent elements.<br /><br />' +
            '<li><strong>Find Pairs:</strong> Iterate through the array again to find pairs with the minimum absolute difference.<br /><br />' +
            '<li><strong>Return Pairs:</strong> Return the pairs as the result.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            '<ul><li><strong>Calculate Distance:</strong> Calculate the distance of each locker from the incoming package.<br /><br />' +
            '<li><strong>Find Optimal Locker:</strong> Determine the locker with the shortest distance to the package.<br /><br />' +
            '<li><strong>Return Optimal Locker:</strong> Return the optimal locker for the incoming package.</ul><br />'
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
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'These suggestions aim to enhance user experience, integrate advanced technologies, improve design and accessibility, and incorporate community and sustainability initiatives. This comprehensive approach ensures that Amazon continues to be a leader in e-commerce, meeting modern consumer expectations and setting new standards in the industry.<br /><br />' +
            '<ul><li><strong>Enhanced User Experience:</strong> Implement personalized recommendations, intuitive navigation, and seamless checkout processes.<br /><br />' +
            '<li><strong>Advanced Technologies:</strong> Integrate AI for predictive analytics, AR/VR for virtual shopping experiences, and blockchain for secure transactions.<br /><br />' +
            '<li><strong>Design and Accessibility:</strong> Optimize for mobile devices, improve site speed, and ensure accessibility for all users.<br /><br />' +
            '<li><strong>Community and Sustainability:</strong> Promote local businesses, support environmental initiatives, and reduce carbon footprint.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Metrics play a crucial role in driving positive change by providing insights, measuring performance, and guiding strategic decisions. Here are some key metrics that influence and drive positive change at Amazon:<br /><br />' +
            '<ul><li><strong>Customer Satisfaction:</strong> Measure customer feedback, ratings, and reviews to improve products and services.<br /><br />' +
            '<li><strong>Operational Efficiency:</strong> Track key performance indicators (KPIs) to optimize processes and reduce costs.<br /><br />' +
            '<li><strong>Employee Engagement:</strong> Monitor employee satisfaction, retention, and development to enhance productivity and morale.<br /><br />' +
            '<li><strong>Market Share:</strong> Analyze market trends, competition, and growth opportunities to expand market presence.<br /><br />' +
            '<li><strong>Innovation Impact:</strong> Evaluate new product launches, research and development, and technological advancements to drive innovation and growth.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Handling projects outside of one\'s scope of work requires adaptability, collaboration, and problem-solving skills. Here is an example of how I handled a project outside of my scope of work:<br /><br />' +
            '<ul><li><strong>Situation:</strong> I was assigned to lead a cross-functional project that required expertise in areas beyond my role.<br /><br />' +
            '<li><strong>Action:</strong> I proactively sought guidance from team members, conducted research, and attended training sessions to acquire the necessary skills.<br /><br />' +
            '<li><strong>Result:</strong> By leveraging my existing knowledge and learning new skills, I successfully completed the project, exceeding expectations and gaining valuable experience.<br /><br />' +
            '<li><strong>Key Takeaways:</strong> This experience taught me the importance of adaptability, continuous learning, and collaboration in handling challenging projects effectively.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'My skills and qualities align with Amazon\'s core values and leadership principles, enabling me to succeed in a dynamic and innovative environment. Here are some skills that will help me thrive at Amazon:<br /><br />' +
            '<ul><li><strong>Customer Obsession:</strong> I prioritize customer needs, deliver exceptional service, and build lasting relationships.<br /><br />' +
            '<li><strong>Innovation:</strong> I embrace creativity, think outside the box, and drive continuous improvement.<br /><br />' +
            '<li><strong>Results Orientation:</strong> I set ambitious goals, focus on outcomes, and strive for excellence in all endeavors.<br /><br />' +
            '<li><strong>Collaboration:</strong> I work effectively in teams, communicate openly, and leverage diverse perspectives for success.<br /><br />' +
            '<li><strong>Adaptability:</strong> I thrive in fast-paced environments, embrace change, and learn quickly to meet evolving challenges.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Bringing a product to market involves strategic planning, market research, product development, marketing, and sales. Here is an overview of the process:<br /><br />' +
            '<ul><li><strong>Market Research:</strong> Identify market needs, target audience, and competition to inform product development.<br /><br />' +
            '<li><strong>Product Development:</strong> Design, prototype, and test the product to meet customer requirements and quality standards.<br /><br />' +
            '<li><strong>Marketing Strategy:</strong> Develop branding, messaging, and promotional campaigns to create awareness and generate demand.<br /><br />' +
            '<li><strong>Sales and Distribution:</strong> Establish distribution channels, pricing strategies, and sales targets to maximize revenue and market reach.<br /><br />' +
            '<li><strong>Launch and Evaluation:</strong> Execute the product launch, gather feedback, and analyze performance to refine the product and marketing strategies.</ul><br />'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Can you describe a time when you took ownership of a project?', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'Tell me about a time when you had to work with a difficult team member.', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'How do you prioritize your work when you have multiple deadlines?', //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
            'Give an example of a time when you went above and beyond for a customer.' //source: https://www.interviewgenie.com/blog/interviewing-at-amazon-behavioral-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Taking ownership of a project demonstrates accountability, leadership, and initiative. Here is an example of when I took ownership of a project:<br /><br />' +
            '<ul><li><strong>Situation:</strong> I was assigned a critical project with a tight deadline and high visibility.<br /><br />' +
            '<li><strong>Action:</strong> I created a detailed project plan, identified key milestones, and allocated resources effectively.<br /><br />' +
            '<li><strong>Result:</strong> By taking ownership of the project, I ensured timely delivery, met quality standards, and exceeded stakeholder expectations.<br /><br />' +
            '<li><strong>Key Takeaways:</strong> This experience taught me the importance of ownership, communication, and problem-solving in project management.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Working with difficult team members requires patience, communication, and conflict resolution skills. Here is an example of how I handled a difficult team member:<br /><br />' +
            '<ul><li><strong>Situation:</strong> I encountered a team member who was resistant to collaboration and caused tension within the team.<br /><br />' +
            '<li><strong>Action:</strong> I initiated a one-on-one conversation, actively listened to their concerns, and offered support and guidance.<br /><br />' +
            '<li><strong>Result:</strong> By addressing the underlying issues, building trust, and fostering open communication, we were able to work together effectively and achieve our goals.<br /><br />' +
            '<li><strong>Key Takeaways:</strong> This experience reinforced the importance of empathy, conflict resolution, and teamwork in overcoming challenges with difficult team members.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Prioritizing work effectively involves time management, organization, and adaptability. Here is how I prioritize my work when facing multiple deadlines:<br /><br />' +
            '<ul><li><strong>Evaluate Deadlines:</strong> Assess the urgency and importance of each task to determine the order of priority.<br /><br />' +
            '<li><strong>Create a Schedule:</strong> Develop a timeline, set realistic goals, and allocate time for each task based on deadlines.<br /><br />' +
            '<li><strong>Focus on High-Impact Tasks:</strong> Identify critical tasks that contribute to key objectives and address them first.<br /><br />' +
            '<li><strong>Adapt to Changes:</strong> Remain flexible, adjust priorities as needed, and communicate proactively with stakeholders.<br /><br />' +
            '<li><strong>Monitor Progress:</strong> Track task completion, adjust timelines if necessary, and seek assistance if deadlines are at risk.</ul><br />',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Going above and beyond for a customer demonstrates dedication, empathy, and commitment to service excellence. Here is an example of when I went above and beyond for a customer:<br /><br />' +
            '<ul><li><strong>Situation:</strong> A customer encountered an issue with our product and reached out for assistance.<br /><br />' +
            '<li><strong>Action:</strong> I listened to their concerns, investigated the problem thoroughly, and provided personalized support and solutions.<br /><br />' +
            '<li><strong>Result:</strong> By going the extra mile, I resolved the issue promptly, exceeded the customer\'s expectations, and strengthened our relationship.<br /><br />' +
            '<li><strong>Key Takeaways:</strong> This experience reinforced the value of empathy, problem-solving, and proactive communication in delivering exceptional customer service.</ul><br />'
        ]
    }
];

const Amazon: React.FC = () => {
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
                <img src={'./company-logos/amazon-logo.webp'} alt="Company Logo" className="amazon-logo" />
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

export default Amazon;