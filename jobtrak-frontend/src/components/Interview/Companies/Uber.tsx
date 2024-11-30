import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Write a function that detects if a linked list contains a cycle. This is often solved using Floyd’s Tortoise and Hare algorithm, which utilizes two pointers moving at different speeds', //source: https://www.interviewcake.com/uber-interview-questions
            'Implement a Queue Using Two Stacks', //source: https://algo.monster/interview-guides/uber
            'Write a function to verify if a binary tree is a valid binary search tree (BST). This is typically solved by performing an in-order traversal and ensuring that the nodes’ values are in a strictly increasing order', //source: https://www.interviewcake.com/uber-interview-questions
            'Given an array of integers, write a function to find the product of all elements in the array except for the element at the current index. The problem can be solved using prefix and suffix arrays or in O(n) time with constant space', //source: https://algo.monster/interview-guides/uber
            'Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For example, "A man, a plan, a canal: Panama" is a palindrome, but "race a car" is not.' //source: https://www.interviewcake.com/uber-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To detect if a linked list contains a cycle, you can use Floyd’s Tortoise and Hare algorithm. This algorithm involves two pointers moving through the list at different speeds. If there is a cycle in the list, the two pointers will eventually meet at the same node. By detecting this condition, you can determine whether the list contains a cycle or not.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To implement a queue using two stacks, you can simulate the queue operations by using one stack for push operations and another stack for pop operations. When a new element is enqueued, push it onto the first stack. When a dequeue operation is called, check if the second stack is empty. If it is, pop all elements from the first stack and push them onto the second stack. Then, pop the top element from the second stack to simulate the dequeue operation. This approach has an amortized time complexity of O(1) for enqueue and dequeue operations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To verify if a binary tree is a valid binary search tree (BST), you can perform an in-order traversal of the tree and ensure that the nodes’ values are in a strictly increasing order. During the traversal, keep track of the previous node’s value and compare it with the current node’s value. If the current node’s value is less than or equal to the previous node’s value, the tree is not a valid BST. This approach ensures that the left subtree contains values less than the current node, and the right subtree contains values greater than the current node.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find the product of all elements in an array except for the element at the current index, you can use prefix and suffix arrays. First, calculate the prefix products of the array from left to right. Then, calculate the suffix products of the array from right to left. Finally, multiply the corresponding prefix and suffix products to get the final result. This approach has a time complexity of O(n) and does not require division.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if a string is a palindrome, considering only alphanumeric characters and ignoring cases, you can clean the string by removing non-alphanumeric characters and converting it to lowercase. Then, compare the cleaned string with its reverse to check if it is a palindrome.'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Given a rotated sorted array, find the point where the array was rotated. You need to return the index of the smallest element in the array', //source: https://www.interviewcake.com/uber-interview-questions
            'Write a function to determine if a singly linked list contains a cycle. This problem involves using the "tortoise and hare" algorithm', //source: https://www.interviewcake.com/uber-interview-questions
            'Given an array of integers, for each index, calculate the product of all numbers in the array except for the number at that index. This problem can be solved using dynamic programming or prefix/suffix arrays', //source: https://www.interviewcake.com/uber-interview-questions
            'Implement a queue using two stacks. This classic problem requires the candidate to understand the operations of stacks and how to simulate a queue with them', //source: https://www.interviewkickstart.com/blogs/interview-questions/uber-tech-interview-process
            'Write a function to check if a binary tree is a valid binary search tree (BST). This problem typically requires in-order traversal and validation of node values​' //source: https://www.interviewkickstart.com/blogs/interview-questions/uber-tech-interview-process
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find the point where a rotated sorted array was rotated, you can use a modified binary search algorithm. The key observation is that the smallest element in the array is the only element that is smaller than its predecessor. By comparing the middle element of the array with the last element, you can determine whether the rotation point is to the left or right of the middle element. This allows you to narrow down the search space until you find the rotation point.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if a singly linked list contains a cycle, you can use the "tortoise and hare" algorithm. This algorithm involves two pointers moving through the list at different speeds. If there is a cycle in the list, the two pointers will eventually meet at the same node. By detecting this condition, you can determine whether the list contains a cycle or not.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To calculate the product of all numbers in an array except for the number at each index, you can use prefix and suffix arrays. First, calculate the prefix products of the array from left to right. Then, calculate the suffix products of the array from right to left. Finally, multiply the corresponding prefix and suffix products to get the final result. This approach has a time complexity of O(n) and does not require division.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To implement a queue using two stacks, you can simulate the queue operations by using one stack for push operations and another stack for pop operations. When a new element is enqueued, push it onto the first stack. When a dequeue operation is called, check if the second stack is empty. If it is, pop all elements from the first stack and push them onto the second stack. Then, pop the top element from the second stack to simulate the dequeue operation. This approach has an amortized time complexity of O(1) for enqueue and dequeue operations.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To check if a binary tree is a valid binary search tree (BST), you can perform an in-order traversal of the tree and validate that the node values are in ascending order. During the traversal, keep track of the previous node\'s value and compare it with the current node\'s value. If the current node\'s value is less than or equal to the previous node\'s value, the tree is not a valid BST. This approach ensures that the left subtree contains values less than the current node, and the right subtree contains values greater than the current node.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Describe a time when you had to adjust to a significant change in your project or team. How did you manage it?', //source: https://passmyinterview.com/uber-interview/
            'Tell me about a time you faced a challenge in meeting a deadline. What steps did you take to overcome the obstacle?', //source: https://passmyinterview.com/uber-interview/
            'Give me an example of a time when you had to make a tough decision with limited information. How did you proceed?', //source: https://www.interviewquery.com/interview-guides/uber
            'Can you describe a situation where you worked with a team that didn’t perform well? How did you handle it?' //source: https://www.interviewquery.com/interview-guides/uber
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'I faced a challenge in meeting a deadline when a critical team member unexpectedly fell ill. To overcome the obstacle, I immediately assessed the impact on the project timeline and identified key tasks that could be redistributed among the remaining team members. I communicated with stakeholders about the situation and adjusted expectations accordingly. By prioritizing tasks and working collaboratively with the team, we were able to meet the deadline without compromising the quality of the deliverables.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When I had to make a tough decision with limited information, I gathered as much data as possible from reliable sources and consulted with subject matter experts to fill in the gaps. I also considered the potential risks and benefits of each option and evaluated the potential outcomes. By weighing the available information and using my best judgment, I made a decision that aligned with the project goals and minimized the associated risks.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a situation where I worked with a team that didn’t perform well, I took a proactive approach to address the issue. I scheduled a team meeting to discuss the challenges we were facing and identify the root causes of the performance issues. I provided constructive feedback and offered support to team members who needed additional training or resources. By fostering open communication and collaboration, we were able to improve team performance and achieve our project goals.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When I had to adjust to a significant change in my project or team, I focused on maintaining a positive attitude and adapting to the new circumstances. I communicated with team members and stakeholders to ensure everyone was informed about the changes and aligned on the revised project goals. I also sought feedback and input from team members to address any concerns or challenges that arose. By staying flexible and resilient, I was able to successfully manage the transition and deliver the project on time.'
        ]
    }
];

const Uber: React.FC = () => {
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
                <img src={'./company-logos/uber-logo.webp'} alt="Company Logo" className="uber-logo" />
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

export default Uber;