import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array, find the Kth largest element in the array. This is often tested to evaluate the candidate\'s understanding of sorting and efficient algorithms, such as quick select or heaps', //source: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
            'Reverse the words in a string without reversing the characters. For example, given "the sky is blue", return "blue is sky the". This problem assesses a candidate\'s ability to manipulate strings and use algorithms like in-place reversals', //source: https://github.com/hxu296/leetcode-company-wise-problems-2022
            'Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid. This is a classic problem for testing stack manipulation​', //source: https://github.com/oracle-samples/oracle-db-examples
            'Given an array of integers and a target value, find two numbers such that they add up to the target. This problem is typically solved using a hash map for O(n) time complexity', //source: https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews
            'Given a collection of intervals, merge all overlapping intervals. This problem is often used to test the candidate\'s ability to deal with sorting and interval merging' //source: https://github.com/hxu296/leetcode-company-wise-problems-2022
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'The Kth largest element can be found using quick select or a max heap. Quick select is a modified quick sort algorithm that finds the Kth largest element in an array in O(n) time on average. It works by partitioning the array around a pivot element and recursively selecting the partition that contains the Kth largest element. A max heap can also be used to find the Kth largest element in O(n log K) time. The heap is built from the input array, and the top K elements are extracted to find the Kth largest element.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To reverse the words in a string without reversing the characters, the string can be split into words using a space delimiter. The words are then reversed and concatenated in reverse order to form the final string. This approach maintains the order of the characters within each word while reversing the words themselves.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To determine if a string containing parentheses is valid, a stack can be used to keep track of the opening parentheses. When a closing parenthesis is encountered, it is checked against the top of the stack to ensure that the parentheses match. If the parentheses match, the opening parenthesis is popped from the stack. If the stack is empty at the end of the string, the input string is valid.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To find two numbers that add up to a target value, a hash map can be used to store the indices of the elements as they are traversed. For each element in the array, the difference between the target value and the element is calculated. If the difference is present in the hash map, the indices of the two elements are returned. Otherwise, the index of the element is stored in the hash map for future lookups.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To merge overlapping intervals, the intervals are first sorted based on their start times. The algorithm then iterates through the sorted intervals, merging overlapping intervals as it goes. If the current interval overlaps with the previous interval, the end time of the previous interval is updated to the maximum of the two end times. If the current interval does not overlap, the previous interval is added to the result and the current interval becomes the new previous interval.'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'reverse a singly linked list. Variations may involve checking if there is a loop in the list or if there is an intersection between two lists', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Candidates may be asked to explain polymorphism in Object-Oriented Programming and demonstrate it through code, which is a common topic during interviews for roles involving object-oriented languages', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'A deep understanding of SQL is essential for many Oracle roles. Expect questions on SQL joins (inner, outer, left, right) and normalization techniques for database design', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Count Palindromic Subsequences - This is a more advanced dynamic programming question, where candidates are asked to calculate the number of palindromic subsequences in a string', //source: https://4dayweek.io/interview-process/spotify-interview
            'A geometric problem where you are asked to compute the area of a triangle given the coordinates of its vertices. A typical question could ask you to handle this using different formulas, and to account for integer overflow by returning a long type' //source: https://4dayweek.io/interview-process/spotify-interview
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'To reverse a singly linked list, the list can be traversed iteratively or recursively. In the iterative approach, a pointer is used to keep track of the current node, the next node, and the previous node. The next node is stored, and the current node\'s next pointer is updated to point to the previous node. The previous node, current node, and next node pointers are then shifted to the right. In the recursive approach, the function is called recursively on the next node, and the current node\'s next pointer is updated in the reverse order as the function calls return.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Polymorphism in Object-Oriented Programming refers to the ability of different classes to be treated as instances of a common superclass. This allows objects of different classes to be used interchangeably based on their common superclass. Polymorphism can be achieved through method overriding, where a subclass provides a specific implementation of a method defined in the superclass. This allows the same method call to produce different results based on the object\'s actual class at runtime.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'SQL joins are used to combine rows from two or more tables based on a related column between them. Inner joins return rows when there is at least one match in both tables. Left joins return all rows from the left table and the matched rows from the right table, with null values for the right table when there is no match. Right joins are the opposite of left joins, returning all rows from the right table and the matched rows from the left table. Outer joins return all rows when there is a match in either table, with null values for unmatched rows.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Count Palindromic Subsequences is a dynamic programming problem where candidates are asked to calculate the number of palindromic subsequences in a string. The problem can be solved using a dynamic programming table to store the counts of palindromic subsequences of different lengths. The table is filled in a bottom-up manner, starting with single characters and building up to longer subsequences. The final count is stored in the top-right corner of the table.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'To compute the area of a triangle given the coordinates of its vertices, the Shoelace formula can be used. The formula calculates the area of a polygon given the coordinates of its vertices. The formula involves summing the products of the x-coordinates of the vertices with the y-coordinates of the next vertex, and subtracting the products of the y-coordinates with the x-coordinates of the next vertex. The absolute value of the result is divided by 2 to get the area of the triangle.'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell us about your most difficult project and what you learned from it.', //source: https://www.interviewkickstart.com/blogs/interview-questions/oracle-interview-questions
            'Have you ever missed a project deadline? How did you handle it?', //source: https://www.interviewkickstart.com/blogs/interview-questions/oracle-interview-questions
            'How do you maintain a work-life balance, especially when working on multiple projects?', //source: https://www.interviewkickstart.com/blogs/interview-questions/oracle-interview-questions
            'Tell us about a time when you had to resolve a disagreement with a colleague or supervisor. How did you handle it?' //source: https://www.interviewkickstart.com/blogs/interview-questions/oracle-interview-questions
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            'When discussing a difficult project, it is important to highlight the challenges faced, the actions taken to address them, and the outcomes achieved. Candidates should focus on their problem-solving skills, teamwork, and ability to adapt to changing circumstances. It is also valuable to reflect on the lessons learned and how they have applied them in subsequent projects.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When addressing a missed project deadline, candidates should be honest about the situation and take responsibility for their actions. It is important to explain the reasons for the delay, the steps taken to mitigate the impact, and the lessons learned from the experience. Candidates should also highlight any changes made to prevent similar issues in the future.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'Maintaining a work-life balance is essential for overall well-being and productivity. Candidates should discuss strategies they use to manage their time effectively, prioritize tasks, and set boundaries between work and personal life. It is important to emphasize the importance of self-care, stress management, and maintaining healthy relationships outside of work.',
            '<br /><strong>Answer:</strong><br /><br />' +
            'When resolving a disagreement with a colleague or supervisor, candidates should focus on effective communication, active listening, and finding common ground. It is important to remain professional, respectful, and open to feedback. Candidates should highlight their ability to collaborate, compromise, and find mutually beneficial solutions to conflicts.'
        ]
    }
];

const Oracle: React.FC = () => {
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
                <img src={'./company-logos/oracle-logo.webp'} alt="Company Logo" className="oracle-logo" />
                <h2>Oracle Interview Questions</h2>
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

export default Oracle;