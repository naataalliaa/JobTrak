import { IInterview } from './types/interviewTypes';

interface InterviewListProps {
  interviews: IInterview[];
  onDelete: (user: string, companyName: string) => void; 
}

const InterviewList: React.FC<InterviewListProps> = ({ interviews = [], onDelete }) => { 
  return (
    <ul>
      {Array.isArray(interviews) && interviews.length > 0 ? ( 
        interviews.map((interview: IInterview) => (
          <li key={interview._id}>
            <p><strong>{interview.companyName}</strong></p>
            <p>Interview Date: {new Date(interview.interviewDate).toLocaleDateString()}</p>
            {/* <p><strong>{interview.status}</strong></p> */}
            <p><a href={interview.applicationLink}>Application Link</a></p>
            <p>{interview.notes}</p>
            <button onClick={() => onDelete(interview.user, interview.companyName)}>Delete</button> 
          </li>
        ))
      ) : 
      (
        <li>No interviews available</li> 
      )
      }
    </ul>
  );
};

export default InterviewList;
