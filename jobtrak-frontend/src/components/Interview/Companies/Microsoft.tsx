import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array of integers, return indices of the two numbers that add up to a specific target.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Check if a string containing parentheses is valid based on matching and proper closure.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Find the length of the longest substring without repeating characters in a string.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Find the median of two sorted arrays.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Search for a target value in a rotated sorted array in logarithmic time.' //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, we can use a hash table to store the indices of the elements we have seen so far. We iterate through the array and for each element, we check if the difference between the target and the current element is in the hash table. If it is, we return the indices of the two elements. If not, we add the current element to the hash table and continue iterating. This solution has a time complexity of O(n) and a space complexity of O(n).',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, we can use a stack to keep track of the opening parentheses we encounter. When we encounter a closing parenthesis, we check if it matches the top of the stack. If it does, we pop the top of the stack. If it doesn\'t, the string is invalid. After iterating through the string, if the stack is empty, the string is valid. This solution has a time complexity of O(n) and a space complexity of O(n).',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, we can use a sliding window approach. We maintain a set to store the characters we have seen so far and two pointers to define the window. We iterate through the string and for each character, we check if it is in the set. If it is, we remove characters from the start of the window until the character is no longer in the set. We update the maximum length of the window as we iterate. This solution has a time complexity of O(n) and a space complexity of O(min(n, m)), where n is the length of the string and m is the size of the character set.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, we can merge the two arrays and sort them. If the total length of the merged array is odd, the median is the middle element. If the total length is even, the median is the average of the two middle elements. This solution has a time complexity of O(n log n) and a space complexity of O(n).',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To solve this problem, we can use a modified binary search algorithm. We compare the middle element of the array with the target value to determine which half of the array is sorted. We then check if the target value is within the sorted half of the array and adjust the search space accordingly. This solution has a time complexity of O(log n) and a space complexity of O(1).'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Find two numbers in an array that add up to a specific target.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Given a string, find the length of the longest substring without repeating characters.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Merge two sorted linked lists into a single sorted list.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Traverse a binary tree level by level.', //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
            'Search for a target value in a rotated sorted array.' //source: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Create a Hash Map: I start by creating a dictionary to store the numbers and their indices as I iterate through the array. This helps in checking the complement efficiently. </br>' +
            'Iterate Through the Array: For each element in the array, I calculate the complement, which is the difference between the target and the current element.</br>' +
            'Check the Complement: I then check if the complement exists in the hash map. If it does, it means we have found the two numbers that add up to the target.</br>' +
            'Return the Indices: If the complement is found, I return the indices of the two numbers.</br>' +
            'Continue if Not Found: If the complement is not found, I add the current number and its index to the hash map and move to the next element.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Create a Hash Set: I start by creating a hash set to store the characters I have seen so far. This helps in checking for duplicates efficiently.</br>' +
            'Use Two Pointers: I use two pointers to define the window. The left pointer points to the start of the substring, and the right pointer points to the end of the substring.</br>' +
            'Expand the Window: I expand the window by moving the right pointer to the right as long as the characters are unique.</br>' +
            'Update the Maximum Length: I update the maximum length of the substring as I iterate through the string.</br>' +
            'Shrink the Window: If I encounter a duplicate character, I shrink the window by moving the left pointer to the right until the substring is unique again.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Create a Dummy Node: I start by creating a dummy node to serve as the head of the merged list. I also create a current pointer to keep track of the current position in the merged list.</br>' +
            'Iterate Through the Lists: I iterate through the two linked lists, comparing the values of the nodes at each position.</br>' +
            'Merge the Lists: I connect the nodes in ascending order to the merged list as I iterate through the input lists.</br>' +
            'Handle Remaining Nodes: If one list is longer than the other, I connect the remaining nodes to the merged list.</br>' +
            'Return the Merged List: I return the next node after the dummy node, which is the head of the merged list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Create a Queue: I start by creating a queue to store the nodes at each level as I traverse the binary tree.</br>' +
            'Add the Root Node: I add the root node to the queue to start the traversal process.</br>' +
            'Traverse Level by Level: I traverse the binary tree level by level by processing the nodes at each level before moving to the next level.</br>' +
            'Add Child Nodes: For each node, I add its child nodes to the queue to process them in the next iteration.</br>' +
            'Return the Result: I return the result, which is a list of lists containing the nodes at each level.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Create a Binary Search Function: I create a binary search function to search for the target value in a rotated sorted array.</br>' +
            'Check the Middle Element: I compare the middle element of the array with the target value to determine which half of the array is sorted.</br>' +
            'Search the Sorted Half: I check if the target value is within the sorted half of the array and adjust the search space accordingly.</br>' +
            'Repeat the Process: I repeat the process until the target value is found or the search space is empty.</br>' +
            'Return the Result: I return the index of the target value if it is found or -1 if it is not found.'

        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time you had to deal with a difficult team member. How did you handle it?', //source: https://careersherpa.net/behavioral-interview-questions-answers/
            'Describe a situation where you had to quickly adapt to a significant change.', //source: https://careersherpa.net/behavioral-interview-questions-answers/
            'Can you tell me about a time when you had to manage multiple competing priorities?', //source: https://careersherpa.net/behavioral-interview-questions-answers/
            'Tell me about a time when you had to resolve a conflict within your team.', //source: https://careersherpa.net/behavioral-interview-questions-answers/
            'Tell me about a time when you had to resolve a conflict within your team.' //source: https://careersherpa.net/behavioral-interview-questions-answers/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Difficult Team Member: I had a team member who was not meeting deadlines and causing delays in our project. I scheduled a one-on-one meeting with them to discuss the issue and understand the root cause of the problem. We identified the challenges they were facing and worked together to come up with a plan to address them. I provided support and guidance to help them improve their performance, and we set up regular check-ins to monitor progress. The team member was able to meet the deadlines, and the project was completed successfully.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Adapting to Change: In my previous role, our company underwent a reorganization that changed our reporting structure and team responsibilities. I quickly adapted to the new structure by attending training sessions and seeking guidance from my manager. I proactively reached out to team members to understand their new roles and responsibilities and collaborated with them to ensure a smooth transition. I embraced the change as an opportunity to learn and grow, and I successfully adapted to the new environment.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Managing Competing Priorities: I was working on multiple projects with tight deadlines and competing priorities. I prioritized the tasks based on their deadlines and impact on the overall project goals. I communicated with the project stakeholders to set realistic expectations and managed their priorities effectively. I also delegated tasks to team members based on their strengths and expertise to ensure timely completion of the projects. By staying organized and focused, I was able to successfully manage the competing priorities and deliver high-quality results.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Resolving Conflict: There was a conflict between two team members who had different opinions on how to approach a project task. I scheduled a team meeting to discuss the issue and encouraged open communication between the team members. I listened to their perspectives and facilitated a constructive discussion to find a common ground. We identified the strengths of each approach and combined them to come up with a solution that satisfied both team members. By addressing the conflict proactively and promoting collaboration, we were able to resolve the issue and complete the project successfully.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Conflict Resolution: I encountered a conflict within my team regarding the allocation of project tasks. Some team members felt that the workload was not distributed fairly, which led to tension and decreased morale. I organized a team meeting to address the issue and create a transparent process for task allocation. I explained the rationale behind the task assignments and solicited feedback from the team members to ensure their concerns were heard. We collaboratively revised the task distribution to balance the workload and accommodate individual preferences. By fostering open communication and involving the team in the decision-making process, we resolved the conflict and improved team dynamics.'
        ]
    }
];

const Microsoft: React.FC = () => {
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
                <img src={'./company-logos/microsoft-logo.webp'} alt="Company Logo" className="microsoft-logo" />
                <h2>Microsoft Interview Questions</h2>
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

export default Microsoft;