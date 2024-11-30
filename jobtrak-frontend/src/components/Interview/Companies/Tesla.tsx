import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array of integers and a value, determine if there are any two integers in the array whose sum equals the given value. This problem evaluates your ability to work with arrays and apply hashing or the two-pointer technique to optimize the solution', //source: https://algo.monster/interview-guides/tesla
            ' move all zeros in an array to the left while maintaining the order of the other elements.', //source: https://algo.monster/interview-guides/tesla
            'Given the head of a linked list and a key, delete the node that contains the given key.', //source: https://algo.monster/interview-guides/tesla
            'Write a function to find duplicate values in a list of integers, considering both positive and negative numbers. You would typically solve this using a set or dictionary for efficient lookup​', //source: https://algo.monster/interview-guides/tesla
            'Given the root node of a binary tree, swap the \'left\' and \'right\' children for each node. This is a classic problem that helps assess your understanding of tree data structures and recursion​' //source: https://algo.monster/interview-guides/tesla
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'function twoSum(arr, target) {<br>&nbsp;&nbsp;const map = {};<br>&nbsp;&nbsp;for (let i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (map[target - arr[i]] !== undefined) return true;<br>&nbsp;&nbsp;&nbsp;&nbsp;map[arr[i]] = i;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return false;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function moveZerosToLeft(arr) {<br>&nbsp;&nbsp;let zeroCount = 0;<br>&nbsp;&nbsp;for (let i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] === 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr.splice(i, 1);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zeroCount++;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;arr.unshift(...Array(zeroCount).fill(0));<br>&nbsp;&nbsp;return arr;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function deleteNode(head, key) {<br>&nbsp;&nbsp;if (head === null) return null;<br>&nbsp;&nbsp;if (head.val === key) return head.next;<br>&nbsp;&nbsp;let prev = head;<br>&nbsp;&nbsp;let curr = head.next;<br>&nbsp;&nbsp;while (curr !== null) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (curr.val === key) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    prev.next = curr.next;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    break;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;prev = curr;<br>&nbsp;&nbsp;&nbsp;&nbsp;curr = curr.next;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return head;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function findDuplicates(arr) {<br>&nbsp;&nbsp;const set = new Set();<br>&nbsp;&nbsp;const duplicates = new Set();<br>&nbsp;&nbsp;for (const num of arr) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (set.has(num)) duplicates.add(num);<br>&nbsp;&nbsp;&nbsp;&nbsp;set.add(num);<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return Array.from(duplicates);<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function swapChildren(root) {<br>&nbsp;&nbsp;if (root === null) return null;<br>&nbsp;&nbsp;const temp = root.left;<br>&nbsp;&nbsp;root.left = root.right;<br>&nbsp;&nbsp;root.right = temp;<br>&nbsp;&nbsp;swapChildren(root.left);<br>&nbsp;&nbsp;swapChildren(root.right);<br>&nbsp;&nbsp;return root;<br>}'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Design a database schema for storing receipt details', //source: https://www.interviewquery.com/interview-guides/tesla-software-engineer
            'Find the most expensive queries in an application', //source: https://algo.monster/interview-guides/tesla
            'How would you deal with failures in a distributed system?', //source: https://www.interviewquery.com/interview-guides/tesla-software-engineer
            'Write a function to move all zeroes to the end of an array while maintaining the order of non-zero elements', //source: https://algo.monster/interview-guides/tesla
            'Given an array of strings, group the anagrams' //source: https://www.interviewquery.com/interview-guides/tesla-software-engineer
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'CREATE TABLE Receipts (<br>&nbsp;&nbsp;receipt_id INT PRIMARY KEY,<br>&nbsp;&nbsp;customer_id INT,<br>&nbsp;&nbsp;total_amount DECIMAL,<br>&nbsp;&nbsp;purchase_date DATE,<br>&nbsp;&nbsp;FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)<br>);',
            '<br /><strong>Answer:</strong><br /><br />' +
            'SELECT query, MAX(cost) AS max_cost<br>FROM queries_table<br>GROUP BY query<br>ORDER BY max_cost DESC<br>LIMIT 10;',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Failures in a distributed system can be handled through redundancy, monitoring, and fault tolerance. Redundancy involves having backup systems or data to take over in case of failure. Monitoring helps detect failures early and take corrective action. Fault tolerance ensures that the system can continue operating even if some components fail.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function moveZeroesToEnd(arr) {<br>&nbsp;&nbsp;let nonZeroIndex = 0;<br>&nbsp;&nbsp;for (let i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] !== 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[nonZeroIndex] = arr[i];<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (i !== nonZeroIndex) arr[i] = 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nonZeroIndex++;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return arr;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function groupAnagrams(strs) {<br>&nbsp;&nbsp;const map = new Map();<br>&nbsp;&nbsp;for (const str of strs) {<br>&nbsp;&nbsp;&nbsp;&nbsp;const key = [...str].sort().join("");<br>&nbsp;&nbsp;&nbsp;&nbsp;if (!map.has(key)) map.set(key, []);<br>&nbsp;&nbsp;&nbsp;&nbsp;map.get(key).push(str);<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return Array.from(map.values());<br>}'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Describe a time when you had to solve a complex technical problem. How did you approach it, and what was the outcome?', //source: https://www.interviewquery.com/interview-guides/tesla-software-engineer
            'Tell me about a time when you worked under a tight deadline. How did you manage your time and ensure the project was completed on time?', //source: https://algo.monster/interview-guides/tesla
            'Give an example of a time when you worked with a team that had differing opinions. How did you handle the situation and ensure the project moved forward?', //source: https://www.interviewquery.com/interview-guides/tesla-software-engineer
            'Describe a situation where you had to learn a new technology or process quickly. How did you manage the learning curve, and how did it impact the project?' //source: https://algo.monster/interview-guides/tesla
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'In my previous role, we encountered a performance issue with our database queries that was affecting the overall application speed. I analyzed the query execution plans, identified the bottlenecks, and optimized the queries by adding appropriate indexes. This resulted in a significant improvement in application performance, reducing query times by 50%.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'During a project deadline crunch, I created a detailed project plan with milestones and deadlines for each task. I prioritized tasks based on their dependencies and criticality, and communicated with the team to ensure everyone was on the same page. By managing my time effectively and delegating tasks where necessary, we were able to meet the deadline successfully.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a team project, we had differing opinions on the choice of technology stack to use. I facilitated a discussion to understand each team member\'s perspective and concerns. We evaluated the pros and cons of each option and reached a consensus by focusing on the project requirements and long-term maintainability. This collaborative approach helped us make an informed decision and move forward with a unified vision.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When tasked with implementing a new CI/CD pipeline for our project, I had to learn Jenkins and Docker quickly to meet the project requirements. I leveraged online tutorials, documentation, and hands-on practice to ramp up my skills. Despite the initial learning curve, I was able to set up the pipeline successfully, resulting in automated builds and deployments that improved our development workflow.'
        ]
    }
];

const Tesla: React.FC = () => {
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
                <img src={'./company-logos/tesla-logo.webp'} alt="Company Logo" className="tesla-logo" />
                <h2>Tesla Interview Questions</h2>
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

export default Tesla;