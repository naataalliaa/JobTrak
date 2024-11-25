import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Write a function to find the maximum sum of a subarray using Kadane’s algorithm.', //source: https://glassdoor.com
            'Reverse a linked list both iteratively and recursively. Discuss time and space complexity.', //source: https://glassdoor.com
            'Implement a function to check if one string is a rotation of another using only one call to a substring search method.', //source: https://glassdoor.com
            'Write a function to rotate an N x N matrix 90 degrees clockwise in place.', //source: https://indeed.com
            'Implement a quicksort algorithm and explain the scenarios where it performs better or worse compared to merge sort.' //source: https://indeed.com
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'Kadane’s algorithm is used to find the maximum sum of a subarray within an array of integers. The algorithm maintains two variables: maxEndingHere and maxSoFar. maxEndingHere represents the maximum sum of a subarray ending at the current index, while maxSoFar represents the maximum sum seen so far. The algorithm iterates through the array, updating maxEndingHere by taking the maximum of the current element and the sum of the current element and maxEndingHere. If maxEndingHere becomes negative, it is reset to zero. The algorithm updates maxSoFar with the maximum of maxSoFar and maxEndingHere at each step. The final value of maxSoFar is the maximum sum of a subarray in the array.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To reverse a linked list iteratively, you can maintain three pointers: prev, curr, and next. Initialize prev to null and curr to the head of the list. While curr is not null, update next to curr\'s next node, set curr\'s next pointer to prev, and move prev and curr one step forward. After iterating through the list, the new head of the reversed list is prev. The time complexity of this approach is O(n), where n is the number of nodes in the linked list. To reverse a linked list recursively, you can define a recursive function that takes the current node as an argument and returns the new head of the reversed list. The function should reverse the rest of the list recursively and update the next pointer of the current node. The base case is when the current node is null or the last node in the list. The time complexity of the recursive approach is also O(n), where n is the number of nodes in the linked list.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To check if one string is a rotation of another using only one call to a substring search method, you can concatenate one string with itself and check if the other string is a substring of the concatenated string. For example, to check if "waterbottle" is a rotation of "erbottlewat", you can concatenate "waterbottle" with itself to get "waterbottlewaterbottle". Then, you can check if "erbottlewat" is a substring of "waterbottlewaterbottle" using a substring search method like KMP or Rabin-Karp. If the string is a rotation, the rotated string will always be a substring of the concatenated string. This approach ensures that you only need one call to a substring search method and has a time complexity of O(n), where n is the length of the strings.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To rotate an N x N matrix 90 degrees clockwise in place, you can perform a series of swaps on the matrix elements. Start by transposing the matrix, which involves swapping elements across the diagonal. Then, reverse the rows of the transposed matrix to rotate it 90 degrees clockwise. The transposition step swaps elements (i, j) and (j, i) for all valid indices i and j. The row reversal step swaps elements in each row from left to right. By combining these two steps, you can rotate the matrix in place without using additional storage. The time complexity of this approach is O(n^2), where n is the number of rows or columns in the matrix.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Quicksort is a sorting algorithm that uses a divide-and-conquer strategy to sort elements in an array. It selects a pivot element and partitions the array into two subarrays: elements less than the pivot and elements greater than the pivot. The algorithm recursively sorts the subarrays and combines them to produce the final sorted array. Quicksort performs well on average and in the best case when the pivot divides the array into roughly equal-sized subarrays. However, it can perform poorly in the worst case when the pivot is the smallest or largest element in the array, leading to unbalanced partitions. Merge sort, on the other hand, divides the array into two halves, sorts each half recursively, and merges them together. Merge sort has a consistent time complexity of O(n log n) in all scenarios, making it more predictable than quicksort.'

        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Explain how DRAM works, including concepts like refresh cycles and row buffer management.', //source: https://glassdoor.com
            'Discuss the key steps in the semiconductor manufacturing process and the challenges at each stage.', //source: https://github.com
            'How would you identify and resolve setup or hold time violations in a circuit design?', //source: https://github.com
            'Explain how you would use SPC tools to monitor and improve manufacturing quality.', //source: https://glassdoor.com
            'Describe how you would identify and troubleshoot faults in semiconductor devices and improve yield rates.' //source: https://indeed.com
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'DRAM (Dynamic Random Access Memory) is a type of volatile memory that stores data in capacitors within an integrated circuit. To maintain the stored data, DRAM requires periodic refresh cycles to recharge the capacitors and prevent data loss. During operation, the memory controller sends periodic refresh commands to the DRAM, which triggers the memory cells to read and rewrite their contents. Additionally, DRAM uses row buffer management to improve memory access speeds. When a memory row is accessed, the data is loaded into a row buffer for faster retrieval in subsequent read or write operations. By keeping frequently accessed data in the row buffer, DRAM can reduce latency and improve memory performance.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'The semiconductor manufacturing process involves several key steps, including wafer fabrication, wafer testing, assembly, and packaging. Each stage presents unique challenges that can impact product quality, yield rates, and production costs. In wafer fabrication, challenges may include maintaining clean room conditions, controlling process parameters, and ensuring uniformity across the wafer surface. Wafer testing involves verifying the functionality of individual chips and identifying defects or failures. Assembly and packaging require precision in bonding the semiconductor die to the package and ensuring reliable electrical connections. Throughout the process, manufacturers must address issues such as contamination, defects, and process variations to produce high-quality semiconductor devices.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Setup and hold time violations occur when the input signals to a flip-flop or latch violate the setup and hold time requirements specified by the device datasheet. To identify and resolve these violations in a circuit design, you can perform timing analysis using tools like static timing analysis (STA). STA analyzes the timing paths in the design to identify violations and calculate the slack, which is the amount of time by which a signal can be delayed without causing a violation. By adjusting the clock timing, data paths, or constraints in the design, you can resolve setup and hold time violations and ensure reliable operation of the circuit.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Statistical Process Control (SPC) tools are used in manufacturing to monitor and improve product quality by analyzing process data and identifying trends or variations. To use SPC tools effectively, you can collect data on key process parameters, such as temperature, pressure, or yield rates, and create control charts to visualize the data over time. By setting control limits and monitoring data points within these limits, you can identify when a process is in control or out of control. Out-of-control points may indicate issues with the process that require investigation and corrective action. By using SPC tools to monitor process performance and make data-driven decisions, you can improve manufacturing quality and reduce defects.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Identifying and troubleshooting faults in semiconductor devices and improving yield rates require a systematic approach to fault analysis and process optimization. To identify faults, you can use techniques like failure analysis, electrical testing, and physical inspection to pinpoint the root cause of defects. Once the faults are identified, you can implement corrective actions, such as process adjustments, material changes, or equipment upgrades, to address the underlying issues. By analyzing yield data, identifying common failure modes, and implementing preventive measures, you can improve yield rates and enhance product quality. Continuous monitoring, data analysis, and process improvements are essential for optimizing semiconductor manufacturing processes and achieving high yield rates.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time when you had to work closely with someone whose personality was very different from yours. How did you manage this?', //source: https://glassdoor.com
            'Describe a situation where you had to adapt to a significant change at work. How did you handle it?', //source: https://indeed.com
            'Give an example of a time when you took initiative to improve a process or solve a problem. What was the result?', //source: https://glassdoor.com
            'Tell me about a time when you were under a lot of pressure to meet a deadline. How did you stay organized and meet the deadline?' //source: https://indeed.com
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'I had a coworker who had a very different work style than mine. While I preferred to plan out tasks in advance and follow a structured approach, they were more spontaneous and tended to work on tasks as they came up. This led to some initial challenges in coordinating our work, as we often had different priorities and approaches to tasks. To address this, I scheduled regular check-in meetings with my coworker to discuss our progress, align on priorities, and ensure we were on the same page. I also made an effort to understand their work style and adapt my approach to better collaborate with them. By taking the time to communicate openly and find common ground, we were able to improve our working relationship and achieve better results together.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'At my previous job, our team underwent a major restructuring that resulted in changes to our roles and responsibilities. While this change initially caused some uncertainty and disruption, I saw it as an opportunity to learn and grow. I took the initiative to proactively seek out new projects and responsibilities that aligned with the team\'s new direction. I also volunteered to lead a cross-functional project that required collaboration with multiple teams. By embracing the change and stepping up to take on new challenges, I was able to demonstrate my adaptability and contribute to the team\'s success during a period of transition.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'In a previous role, I noticed that our team\'s process for tracking project milestones and deadlines was inefficient and prone to errors. To address this, I proposed implementing a project management tool that would automate task tracking, provide real-time updates on project status, and improve communication among team members. I researched different tools, presented a cost-benefit analysis to my manager, and led the implementation process. As a result, our team saw a significant improvement in project efficiency, communication, and overall productivity. The new tool helped us meet deadlines more effectively, reduce errors, and streamline our project management process.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'During a particularly busy period at work, I was assigned a project with a tight deadline that required coordinating with multiple stakeholders and managing a complex set of tasks. To stay organized and meet the deadline, I created a detailed project plan outlining key milestones, assigned responsibilities to team members, and set up regular check-in meetings to track progress. I also prioritized tasks based on their urgency and impact on the project timeline. By breaking down the project into manageable tasks, setting clear deadlines, and communicating proactively with team members, I was able to stay organized, manage the pressure effectively, and deliver the project on time.'
        ]
    }
];

const Micron: React.FC = () => {
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
                <img src={'./company-logos/micron-logo.webp'} alt="Company Logo" className="micron-logo" />
                <h2>Micron Interview Questions</h2>
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

export default Micron;