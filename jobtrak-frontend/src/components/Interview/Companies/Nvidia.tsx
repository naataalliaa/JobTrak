import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'You are given an array of stones with positive integer weights. Each stone can be smashed with another one. If both stones have the same weight, they both get destroyed; otherwise, the smaller stone is destroyed, and the larger stone\'s weight is reduced by the smaller stone\'s weight. Keep performing this until one stone remains and return its weight.', //source: https://algo.monster/interview-guides/nvidia
            'Given an array, the degree of an array is defined as the number of times the most frequent element appears. Find the smallest contiguous subarray that has the same degree as the array.', //source: https://algo.monster/interview-guides/nvidia
            'Implement an LRU (Least Recently Used) cache that supports both get and put operations. The cache should be able to evict the least recently used item when it exceeds its capacity.', //source: https://algo.monster/interview-guides/nvidia
            'Given a sequence of integers, determine if it could represent the preorder traversal of a binary search tree.', //source: https://algo.monster/interview-guides/nvidia
            'Given a chessboard, find the minimum number of moves a knight needs to reach from a given position to a target position.' //source: https://algo.monster/interview-guides/nvidia
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'You can solve this problem by using a max heap to store the stone weights. After inserting all the stones into the heap, you can repeatedly extract the two heaviest stones, smash them, and insert the result back into the heap until only one stone remains. The final stone weight is the result of the operations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, you can use a hashmap to store the frequency of each element in the array. Then, you can use a sliding window to find the smallest subarray that has the same degree as the array.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To implement an LRU cache, you can use a hashmap to store key-value pairs and a doubly linked list to maintain the order of keys based on their access time. When a new key is accessed, you can move it to the front of the list, and when the cache is full, you can evict the least recently used key from the back of the list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if a sequence of integers could represent the preorder traversal of a binary search tree, you can use a stack to simulate the traversal. If the sequence satisfies the preorder property of a binary search tree, you can return true; otherwise, return false.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find the minimum number of moves a knight needs to reach from a given position to a target position on a chessboard, you can use breadth-first search (BFS) to explore all possible moves from the starting position and calculate the minimum number of moves to reach the target position.'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Given an array of stones with positive integer weights, perform operations on the stones (similar to a heap). Each operation involves selecting the two heaviest stones, smashing them, and continuing until only one stone remains. This problem tests knowledge of heaps and basic data structures.', //source: https://interviewprep.org/nvidia-interview-questions/
            'Find the smallest subarray such that if you remove it, the degree of the array (the number of occurrences of the most frequent element) is minimized. This is a typical example of using hashmaps and sliding window techniques.', //source: https://interviewprep.org/nvidia-interview-questions/
            'Given an integer, you need to reduce it to 0 by using a set of operations like subtracting 1, dividing by 2, etc. This problem tests dynamic programming strategies to minimize operations.', //source: https://interviewprep.org/nvidia-interview-questions/
            'Implement a Least Recently Used (LRU) cache system. This requires handling efficient cache eviction, which is commonly solved using a combination of hashmaps and doubly linked lists.', //source: https://interviewprep.org/nvidia-interview-questions/
            'Given an array, determine if there exists a way to partition the array into two parts with equal sums. This problem is a good test for understanding array manipulation and two-pointer techniques.' //source: https://interviewprep.org/nvidia-interview-questions/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, you can use a max heap to store the stone weights. After inserting all the stones into the heap, you can repeatedly extract the two heaviest stones, smash them, and insert the result back into the heap until only one stone remains. The final stone weight is the result of the operations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, you can use a hashmap to store the frequency of each element in the array. Then, you can use a sliding window to find the smallest subarray such that removing it minimizes the degree of the array.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, you can use dynamic programming to find the minimum number of operations required to reduce the integer to 0. You can store the results of subproblems in a memoization table to avoid redundant calculations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To implement an LRU cache system, you can use a hashmap to store key-value pairs and a doubly linked list to maintain the order of keys based on their access time. When a new key is accessed, you can move it to the front of the list, and when the cache is full, you can evict the least recently used key from the back of the list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if there exists a way to partition the array into two parts with equal sums, you can calculate the total sum of the array and check if it is even. If it is, you can use a two-pointer technique to find a partition that divides the array into two parts with equal sums.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Describe a time when you had to adapt to a significant change in a project. How did you handle the transition?', //source: https://4dayweek.io/interview-process/nvidia-interview
            'Tell me about a time when you improved a process or made a task more efficient.', //source: https://4dayweek.io/interview-process/nvidia-interview
            'Describe a time when you had to collaborate with others on a project. What was your role, and how did you ensure the success of the team?', //source: https://4dayweek.io/interview-process/nvidia-interview
            'Tell us about a situation where you and your team disagreed on a solution. How did you handle the discussion and what was the outcome?' //source: https://4dayweek.io/interview-process/nvidia-interview
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'I had to adapt to a significant change in a project when I was working on a team project in college. We were assigned a project to create a website for a local business, and we had to use a specific programming language that none of us were familiar with. I took the initiative to learn the language and taught my team members how to use it. We were able to complete the project on time and received positive feedback from the client.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I improved a process at my previous job by automating a manual task that was time-consuming and error-prone. I created a script that automated the task, which saved the team hours of work each week and reduced the number of errors.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I collaborated with others on a project at my previous job where we had to create a marketing campaign for a new product launch. My role was to create the visual assets for the campaign, and I worked closely with the copywriters and marketing team to ensure that the visuals aligned with the messaging. We had regular check-ins to discuss our progress and make adjustments as needed. The campaign was successful, and the product launch exceeded our sales goals.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'I had a situation at my previous job where my team disagreed on the best solution to a technical issue. We had a deadline to meet, so I suggested that we each research our proposed solutions and present our findings to the team. We had a productive discussion where we weighed the pros and cons of each solution and ultimately decided on a hybrid approach that incorporated the best aspects of each proposal. The outcome was successful, and we were able to meet the deadline.'
        ]
    }
];

const Nvidia: React.FC = () => {
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
                <img src={'./company-logos/nvidia-logo.webp'} alt="Company Logo" className="nvidia-logo" />
                <h2>Nvidia Interview Questions</h2>
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

export default Nvidia;