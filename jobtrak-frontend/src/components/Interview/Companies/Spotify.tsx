import React, { useState } from 'react';
import './company.css';

const categories = [
    {
        name: 'Coding Questions',
        questions: [
            'How do you delete a linked list?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'How Does a Hash Table Work?', //source: https://interviewing.io/spotify-interview-questions
            'What is Breadth-First Search (BFS)?', //source: https://interviewing.io/spotify-interview-questions
            'Can you explain the concept of MITM (Man-In-The-Middle) attacks and how to prevent them?', //source: https://prepfully.com/interview-guides/spotify-software-engineer
            'Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. For example, "A man, a plan, a canal: Panama" is a palindrome, but "race a car" is not.' //source: https://prepfully.com/interview-guides/spotify-software-engineer
        ],
        answers: [
            'To delete a linked list, you can iterate through the list and delete each node one by one. You can do this by setting the head of the list to null, which will remove all references to the nodes in the list and allow the garbage collector to clean up the memory.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. Hash tables are commonly used for fast data retrieval in various applications.', //source: https://interviewing.io/spotify-interview-questions
            'Breadth-First Search (BFS) is an algorithm used to traverse or search tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.', //source: https://interviewing.io/spotify-interview-questions
            'A Man-In-The-Middle (MITM) attack occurs when an attacker intercepts and potentially alters communication between two parties who believe they are communicating securely. Common methods of executing MITM attacks include ARP spoofing, DNS spoofing, or leveraging unsecured public networks to intercept traffic. Attackers can steal sensitive data, such as login credentials or payment information, or inject malicious content into the communication without the victims\' knowledge.', //source: https://prepfully.com/interview-guides/spotify-software-engineer
            'To prevent MITM attacks, it is essential to use HTTPS to encrypt communication, ensuring data cannot be easily intercepted. Additional protective measures include implementing multi-factor authentication (MFA), utilizing VPNs for secure connections over public networks, and employing DNSSEC to safeguard against DNS spoofing. Certificate pinning also helps verify the authenticity of websites and prevent attackers from using fraudulent certificates. Educating users about phishing attempts and proper security practices is another critical step in reducing MITM risks',
            'To determine if a string is a palindrome, you can first remove all non-alphanumeric characters and convert the string to lowercase. Then, you can use two pointers to compare characters from the start and end of the string, moving towards the center. If the characters at both pointers match, continue comparing until the pointers meet in the middle. If all characters match, the string is a palindrome.' //source: https://prepfully.com/interview-guides/spotify-software-engineer
        ]
    },
    {
        name: 'Technical Questions',
        questions: [
            'Could you give a simplified explanation of how JVM functions?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Explain how JVM works.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Write a function to manipulate a pandas.DataFrame.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Whats your experience with music licensing?', //source: https://4dayweek.io/interview-process/spotify-interview
            'List some unique contributions you can bring to Spotify.' //source: https://4dayweek.io/interview-process/spotify-interview
        ],
        answers: [
            'The Java Virtual Machine (JVM) is an abstract computing machine that enables a computer to run Java programs. It converts Java bytecode into machine language and executes it. The JVM provides a runtime environment for Java programs to run on different hardware and software platforms.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'The JVM works by loading and executing Java bytecode, which is a platform-independent intermediate representation of the program. It provides memory management, garbage collection, and security features to ensure the safe execution of Java programs.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'To manipulate a pandas.DataFrame, you can use functions like .loc[], .iloc[], .at[], .iat[], .apply(), .map(), .groupby(), .merge(), .concat(), .pivot_table(), .melt(), and many more. These functions allow you to filter, select, update, and transform data in a pandas DataFrame.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'My experience with music licensing includes working with record labels, artists, publishers, and other rights holders to secure the necessary licenses for music streaming services. I have negotiated licensing agreements, managed royalty payments, and ensured compliance with copyright laws and regulations.', //source: https://4dayweek.io/interview-process/spotify-interview
            'Some unique contributions I can bring to Spotify include my experience in music licensing, my passion for music and technology, my creative problem-solving skills, my ability to work well in a team, and my dedication to delivering high-quality work that meets user needs and business goals.' //source: https://4dayweek.io/interview-process/spotify-interview
        ]
    },
    {
        name: 'Behavioral Questions',
        questions: [
            'Can you describe a previous relationship with a tough client? How did you handle it?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Describe a research project and the impact it had on the company.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'What are some things you couldve done better in your data projects?', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'How comfortable are you working out of your comfort zone?' //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
        ],
        answers: [
            'In my previous role, I worked with a tough client who had high expectations and tight deadlines. I handled the situation by maintaining open communication, setting clear expectations, and delivering high-quality work on time. I also proactively addressed any issues or concerns to ensure the client was satisfied with the results.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'I led a research project to analyze customer feedback data and identify trends and insights to improve product development. The project had a significant impact on the company by providing actionable recommendations for product enhancements, which led to increased customer satisfaction and retention.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'Looking back on my data projects, I realize there are several things I could have done better, such as improving data quality, documenting data sources and assumptions, validating model assumptions, and communicating results more effectively to stakeholders. I have learned from these experiences and now prioritize these aspects in my data projects.', //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
            'I am comfortable working out of my comfort zone and enjoy taking on new challenges and learning opportunities. I believe that stepping out of my comfort zone helps me grow personally and professionally, develop new skills, and adapt to changing environments. I am open to trying new things and pushing myself to reach my full potential.' //source: https://topinterview.com/interview-advice/spotify-interview-questions-and-answers
        ]
    }
];

const Spotify: React.FC = () => {
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
                <img src={'./company-logos/spotify-logo.webp'} alt="Company Logo" className="spotify-logo" />
                <h2>Spotify Interview Questions</h2>
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

export default Spotify;