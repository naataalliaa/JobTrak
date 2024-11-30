import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'Given an array of integers, return indices of the two numbers such that they add up to a specific target.', //source: leetcode.com
            'Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.', //source: https://leetcode.com/
            'Merge two sorted linked lists into one sorted list.', //source: https://leetcode.com/
            'Perform a level-order traversal of a binary tree.', //source: https://leetcode.com/
            'Find the length of the longest common subsequence of two strings.' //source: https://leetcode.com/
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Given an array of integers, return indices of the two numbers such that they add up to a specific target:</strong> You can solve this problem using a hash map to store the difference between the target and each element as you iterate through the array. For each element, check if its complement (target - element) exists in the hash map. If it does, return the indices of the current element and its complement. This approach has a time complexity of O(n).<br /><br />' +
            '<strong>Example code in JavaScript:</strong><br /><br />' +
            '<pre><code>function twoSum(nums, target) {<br />' +
            '    const map = new Map();<br />' +
            '    for (let i = 0; i < nums.length; i++) {<br />' +
            '        const complement = target - nums[i];<br />' +
            '        if (map.has(complement)) {<br />' +
            '            return [map.get(complement), i];<br />' +
            '        }<br />' +
            '        map.set(nums[i], i);<br />' +
            '    }<br />' +
            '    return [];<br />' +
            '}</code></pre>',

            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Longest Substring Without Repeating Characters:</strong> To find the length of the longest substring without repeating characters, you can use a sliding window approach with two pointers. Use a set to keep track of the characters in the current window. Move the right pointer to expand the window and add characters to the set. If a character is repeated, move the left pointer to shrink the window until the character is no longer in the set. Keep track of the maximum length of the window.<br /><br />' +
            '<strong>Example code in JavaScript:</strong><br /><br />' +
            '<pre><code>function lengthOfLongestSubstring(s) {<br />' +
            '    const set = new Set();<br />' +
            '    let left = 0;<br />' +
            '    let maxLength = 0;<br />' +
            '    for (let right = 0; right < s.length; right++) {<br />' +
            '        while (set.has(s[right])) {<br />' +
            '            set.delete(s[left]);<br />' +
            '            left++;<br />' +
            '        }<br />' +
            '        set.add(s[right]);<br />' +
            '        maxLength = Math.max(maxLength, right - left + 1);<br />' +
            '    }<br />' +
            '    return maxLength;<br />' +
            '}</code></pre>',

            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Merge two sorted linked lists into one sorted list:</strong> To merge two sorted linked lists, you can use a dummy node to simplify the process. Compare the values of the nodes from both lists and attach the smaller node to the merged list. Move the pointer of the list from which the node was taken. Continue this process until one of the lists is exhausted, then attach the remaining nodes from the other list.<br /><br />' +
            '<strong>Example code in JavaScript:</strong><br /><br />' +
            '<pre><code>function mergeTwoLists(l1, l2) {<br />' +
            '    const dummy = new ListNode(0);<br />' +
            '    let current = dummy;<br />' +
            '    while (l1 !== null && l2 !== null) {<br />' +
            '        if (l1.val < l2.val) {<br />' +
            '            current.next = l1;<br />' +
            '            l1 = l1.next;<br />' +
            '        } else {<br />' +
            '            current.next = l2;<br />' +
            '            l2 = l2.next;<br />' +
            '        }<br />' +
            '        current = current.next;<br />' +
            '    }<br />' +
            '    current.next = l1 !== null ? l1 : l2;<br />' +
            '    return dummy.next;<br />' +
            '}</code></pre>',

            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Perform a level-order traversal of a binary tree:</strong> To perform a level-order traversal (breadth-first traversal) of a binary tree, you can use a queue. Start by adding the root node to the queue. While the queue is not empty, remove the front node, process it, and add its children to the queue. Continue this process until the queue is empty.<br /><br />' +
            '<strong>Example code in JavaScript:</strong><br /><br />' +
            '<pre><code>function levelOrder(root) {<br />' +
            '    const result = [];<br />' +
            '    if (root === null) return result;<br />' +
            '    const queue = [root];<br />' +
            '    while (queue.length > 0) {<br />' +
            '        const level = [];<br />' +
            '        const size = queue.length;<br />' +
            '        for (let i = 0; i < size; i++) {<br />' +
            '            const node = queue.shift();<br />' +
            '            level.push(node.val);<br />' +
            '            if (node.left !== null) queue.push(node.left);<br />' +
            '            if (node.right !== null) queue.push(node.right);<br />' +
            '        }<br />' +
            '        result.push(level);<br />' +
            '    }<br />' +
            '    return result;<br />' +
            '}</code></pre>',

            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Find the length of the longest common subsequence of two strings:</strong> To find the length of the longest common subsequence (LCS) of two strings, you can use dynamic programming. Create a 2D array to store the lengths of LCS for substrings of the two input strings. Initialize the array with zeros. Iterate through the characters of both strings, and for each pair of characters, update the array based on whether the characters match or not. The value at the bottom-right corner of the array will be the length of the LCS.<br /><br />' +
            'Example code in JavaScript:<br /><br />' +
            '<pre><code>function longestCommonSubsequence(text1, text2) {<br />' +
            '    const dp = Array(text1.length + 1).fill(null).map(() => Array(text2.length + 1).fill(0));<br />' +
            '    for (let i = 1; i <= text1.length; i++) {<br />' +
            '        for (let j = 1; i <= text2.length; j++) {<br />' +
            '            if (text1[i - 1] === text2[j - 1]) {<br />' +
            '                dp[i][j] = dp[i - 1][j - 1] + 1;<br />' +
            '            } else {<br />' +
            '                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);<br />' +
            '            }<br />' +
            '        }<br />' +
            '    }<br />' +
            '    return dp[text1.length][text2.length];<br />' +
            '}</code></pre>'
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'How would you design a system to display a personalized news feed for users?', 
            'Discuss data structures, APIs, scalability, and ranking algorithms.', 
            'Create a system similar to Memcached or Redis.', 
            'Build a scalable system to detect and remove inappropriate posts from a social platform.', 
            'How would you build a real-time messaging system?'
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>How would you design a system to display a personalized news feed for users?</strong> To design a personalized news feed system, you need to consider data collection, user profiling, content ranking, and scalability. First, collect data on user interactions, such as likes, shares, comments, and browsing history. Use this data to build user profiles and preferences. Implement a ranking algorithm, such as collaborative filtering or content-based filtering, to prioritize content based on user preferences. Use a combination of batch processing (e.g., Hadoop) and real-time processing (e.g., Apache Kafka) to update the news feed. Ensure scalability by using distributed databases (e.g., Cassandra) and caching mechanisms (e.g., Redis) to handle high traffic and provide low-latency responses.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Discuss data structures, APIs, scalability, and ranking algorithms:</strong> For data structures, use hash maps for quick lookups, heaps for priority queues, and graphs for relationships between users and content. Design RESTful APIs to allow clients to interact with the system, such as fetching the news feed, liking a post, or sharing content. Ensure scalability by using load balancers, distributed databases, and caching mechanisms. For ranking algorithms, consider using collaborative filtering, content-based filtering, or a hybrid approach. Collaborative filtering recommends content based on similar users\' preferences, while content-based filtering recommends content based on the user\'s past interactions. A hybrid approach combines both methods to improve accuracy.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Create a system similar to Memcached or Redis:</strong> To create a system similar to Memcached or Redis, you need to design an in-memory key-value store that supports fast read and write operations. Use a hash table as the primary data structure for storing key-value pairs. Implement eviction policies, such as LRU (Least Recently Used) or LFU (Least Frequently Used), to manage memory usage. Support data persistence by periodically writing snapshots to disk or using a write-ahead log. Implement replication and sharding to ensure high availability and scalability. Provide a simple API for clients to interact with the system, such as GET, SET, and DELETE operations.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Build a scalable system to detect and remove inappropriate posts from a social platform:</strong> To build a scalable system for detecting and removing inappropriate posts, use a combination of automated and manual moderation. Implement machine learning models, such as text classification and image recognition, to automatically flag potentially inappropriate content. Use a distributed message queue (e.g., Apache Kafka) to handle the flow of flagged content and distribute it to human moderators for review. Store flagged content in a distributed database (e.g., Cassandra) for further analysis. Ensure scalability by using load balancers, distributed processing frameworks (e.g., Apache Spark), and caching mechanisms (e.g., Redis) to handle high traffic and provide low-latency responses.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>How would you build a real-time messaging system?</strong> To build a real-time messaging system, use a combination of WebSockets and a message broker (e.g., RabbitMQ or Apache Kafka) to enable real-time communication between clients and the server. Implement a publish-subscribe model to handle message delivery. Use a distributed database (e.g., Cassandra) to store message history and user data. Ensure scalability by using load balancers, distributed processing frameworks (e.g., Apache Storm), and caching mechanisms (e.g., Redis) to handle high traffic and provide low-latency responses. Implement end-to-end encryption to ensure message security and privacy.<br /><br />'
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Tell me about a time you had to resolve a conflict in a team.', 
            'How do you prioritize tasks when working on multiple projects?', 
            'Describe a challenging technical problem and how you solved it.', 
            'How comfortable are you working out of your comfort zone?' 
        ],
        answers: [
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Tell me about a time you had to resolve a conflict in a team:</strong> In one of my previous projects, there was a conflict between two team members regarding the approach to be taken for a particular feature. One member preferred a more traditional approach, while the other wanted to use a newer, less-tested method. I facilitated a meeting where both members could present their arguments and evidence supporting their approaches. After listening to both sides, I suggested a compromise where we could prototype both approaches on a smaller scale to evaluate their effectiveness. This allowed us to make an informed decision based on data rather than opinions. The conflict was resolved, and the team appreciated the collaborative approach.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>How do you prioritize tasks when working on multiple projects?</strong> When working on multiple projects, I prioritize tasks based on their deadlines, importance, and impact. I start by listing all the tasks and categorizing them using the Eisenhower Matrix, which divides tasks into four categories: urgent and important, important but not urgent, urgent but not important, and neither urgent nor important. I focus on tasks that are both urgent and important first, followed by important but not urgent tasks. I also communicate with stakeholders to ensure alignment on priorities and adjust my plan as needed based on any changes in project requirements or deadlines.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>Describe a challenging technical problem and how you solved it:</strong> In a recent project, I faced a challenging technical problem related to optimizing the performance of a web application. The application was experiencing slow load times, which affected user experience. I started by profiling the application to identify performance bottlenecks. I discovered that the database queries were taking a significant amount of time. To address this, I implemented indexing on frequently queried columns, optimized the queries, and introduced caching for static content. Additionally, I used lazy loading for images and asynchronous loading for non-critical resources. These optimizations resulted in a significant improvement in the application\'s performance, reducing load times by over 50%.<br /><br />',
        
            '<br /><strong>Answer:</strong><br /><br />' +
            '<strong>How comfortable are you working out of your comfort zone?</strong> I am very comfortable working out of my comfort zone. I believe that stepping out of one\'s comfort zone is essential for personal and professional growth. Throughout my career, I have actively sought opportunities to take on new challenges and learn new skills. For example, I volunteered to lead a project that required knowledge of a programming language I was not familiar with. I dedicated time to learning the language and successfully led the project to completion. This experience not only expanded my technical skills but also boosted my confidence in tackling unfamiliar tasks.<br /><br />'
        ]
    }
];

const Meta: React.FC = () => {
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
                <img src={'./company-logos/meta-logo.webp'} alt="Company Logo" className="meta-logo" />
                <h2>Meta Interview Questions</h2>
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

export default Meta;