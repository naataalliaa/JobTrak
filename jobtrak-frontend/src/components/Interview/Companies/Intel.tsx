import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given a paragraph, determine how many lines are needed to write it in Susan\'s terminal, where only two words can be written per line.', //source: https://prepinsta.com/intel-placement-papers/coding-questions-and-answers/
            'Given a string representing people and two types of devils, determine the number of groups that can be formed.', //source: https://prepinsta.com/intel-placement-papers/coding-questions-and-answers/
            'Write a function to swap every two adjacent nodes in a singly linked list. For example, given 1 -> 2 -> 3 -> 4, the output should be 2 -> 1 -> 4 -> 3', //source: https://github.com/bvbasavaraju/competitive_programming/blob/master/interview_questions/intel.cpp
            'Given an array of integers, return indices of the two numbers such that they add up to a specific target.', //source: https://prepinsta.com/intel-placement-papers/coding-questions-and-answers/
            'Reverse a singly linked list.' //source: https://prepinsta.com/intel-placement-papers/coding-questions-and-answers/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine the number of lines needed to write a paragraph in Susan\'s terminal, we can iterate through the words in the paragraph and count the number of lines required. We can keep track of the number of words written on the current line and start a new line when the current line is full. The output will be the total number of lines needed to write the paragraph.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine the number of groups that can be formed from a string representing people and devils, we can iterate through the string and count the number of groups of people and devils. We can start a new group when we encounter a different type of character. The output will be the total number of groups formed.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function swapPairs(head) {<br>&nbsp;&nbsp;if (!head || !head.next) return head;<br>&nbsp;&nbsp;const newHead = head.next;<br>&nbsp;&nbsp;let prev = null;<br>&nbsp;&nbsp;let curr = head;<br>&nbsp;&nbsp;while (curr && curr.next) {<br>&nbsp;&nbsp;&nbsp;&nbsp;const next = curr.next;<br>&nbsp;&nbsp;&nbsp;&nbsp;const temp = next.next;<br>&nbsp;&nbsp;&nbsp;&nbsp;if (prev) prev.next = next;<br>&nbsp;&nbsp;&nbsp;&nbsp;next.next = curr;<br>&nbsp;&nbsp;&nbsp;&nbsp;curr.next = temp;<br>&nbsp;&nbsp;&nbsp;&nbsp;prev = curr;<br>&nbsp;&nbsp;&nbsp;&nbsp;curr = temp;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return newHead;<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function twoSum(nums, target) {<br>&nbsp;&nbsp;const map = new Map();<br>&nbsp;&nbsp;for (let i = 0; i < nums.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;const complement = target - nums[i];<br>&nbsp;&nbsp;&nbsp;&nbsp;if (map.has(complement)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [map.get(complement), i];<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;map.set(nums[i], i);<br>&nbsp;&nbsp;}<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'function reverseList(head) {<br>&nbsp;&nbsp;let prev = null;<br>&nbsp;&nbsp;let curr = head;<br>&nbsp;&nbsp;while (curr) {<br>&nbsp;&nbsp;&nbsp;&nbsp;const next = curr.next;<br>&nbsp;&nbsp;&nbsp;&nbsp;curr.next = prev;<br>&nbsp;&nbsp;&nbsp;&nbsp;prev = curr;<br>&nbsp;&nbsp;&nbsp;&nbsp;curr = next;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return prev;<br>}'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'How would you implement a function to find the lowest common ancestor (LCA) of two nodes in a binary tree?', //source: https://github.com/huihut/interview
            'How do you determine if a given integer is a power of two?', //source: https://github.com/huihut/interview
            'Implement a least recently used (LRU) cache. Ensure it supports get and put operations in O(1) time complexity.', //source: https://github.com/huihut/interview
            'Explain and implement a producer-consumer problem using semaphores or condition variables.', //source: https://github.com/huihut/interview
            'How would you modify quicksort to handle duplicate keys efficiently?' //source: hhttps://github.com/huihut/interview
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find the lowest common ancestor (LCA) of two nodes in a binary tree, we can recursively traverse the tree starting from the root. If the current node is null or matches either of the two nodes, we return the current node. Otherwise, we recursively search the left and right subtrees. If both subtrees return non-null values, it means the two nodes are on different sides of the current node, so the current node is the LCA.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if a given integer is a power of two, we can check if the number is positive and has only one bit set in its binary representation. We can use the bitwise AND operator with the number and its decrement to clear the least significant bit and compare the result to zero.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'class LRUCache {<br>&nbsp;&nbsp;constructor(capacity) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.capacity = capacity;<br>&nbsp;&nbsp;&nbsp;&nbsp;this.cache = new Map();<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;get(key) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (!this.cache.has(key)) return -1;<br>&nbsp;&nbsp;&nbsp;&nbsp;const value = this.cache.get(key);<br>&nbsp;&nbsp;&nbsp;&nbsp;this.cache.delete(key);<br>&nbsp;&nbsp;&nbsp;&nbsp;this.cache.set(key, value);<br>&nbsp;&nbsp;&nbsp;&nbsp;return value;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;put(key, value) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (this.cache.has(key)) this.cache.delete(key);<br>&nbsp;&nbsp;&nbsp;&nbsp;this.cache.set(key, value);<br>&nbsp;&nbsp;&nbsp;&nbsp;if (this.cache.size > this.capacity) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.cache.delete(this.cache.keys().next().value);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a producer-consumer problem, producers generate data and put it into a shared buffer, while consumers take data from the buffer and process it. We can use semaphores or condition variables to synchronize access to the buffer. Producers wait if the buffer is full, and consumers wait if the buffer is empty. When a producer or consumer accesses the buffer, it signals the other threads to wake up.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To modify quicksort to handle duplicate keys efficiently, we can partition the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. We can then recursively sort the first and third parts while the second part remains sorted.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Describe a time when you had a disagreement with a teammate or supervisor. How did you handle the situation, and what was the outcome?', //source: glassdoor.com
            'Give an example of a situation where you had multiple deadlines to meet. How did you prioritize and manage your time effectively?', //source: glassdoor.com
            'Tell me about a challenging project you worked on. How did you identify and address the main issues?', //source: glassdoor.com
            'Share an experience where you had to work with a diverse team. How did you ensure effective communication and collaboration?', //source: glassdoor.com
            'Describe a situation where you had to learn a new skill or technology quickly to complete a task. What was your approach?' //source: glassdoor.com
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a previous project, I had a disagreement with a teammate over the design approach for a feature. We discussed our perspectives and presented our arguments with supporting data. After understanding each other\'s viewpoints, we reached a compromise that incorporated the best aspects of both ideas. The outcome was a successful feature that satisfied both of our concerns.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'During a busy period, I had multiple deadlines to meet for different projects. I prioritized tasks based on their urgency and impact on project timelines. I created a detailed schedule with milestones and allocated time for each task. By staying organized and focused, I was able to meet all deadlines and deliver quality work.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I worked on a challenging project that involved migrating a legacy system to a new platform. The main issues were data compatibility and system integration. I conducted a thorough analysis of the existing system, identified potential risks, and developed a migration plan with incremental testing. By addressing issues early and involving stakeholders in decision-making, we successfully completed the project on time and within budget.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a diverse team project, I ensured effective communication and collaboration by establishing clear goals and expectations. I encouraged team members to share their perspectives and ideas, fostering a culture of inclusivity and respect. By actively listening to different viewpoints and addressing concerns promptly, we were able to leverage our diverse skills and experiences to achieve project success.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I had to learn a new technology quickly to complete a task that required specialized knowledge. I started by researching online tutorials and documentation to gain a basic understanding of the technology. I then applied the concepts through hands-on practice and sought guidance from experienced colleagues. By setting clear learning goals and dedicating time to skill development, I was able to acquire the necessary expertise to complete the task effectively.'
        ]
    }
];

const Intel: React.FC = () => {
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
                <img src={'./company-logos/intel-logo.webp'} alt="Company Logo" className="intel-logo" />
                <h2>Intel Interview Questions</h2>
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

export default Intel;