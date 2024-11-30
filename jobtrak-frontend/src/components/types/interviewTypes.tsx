
export interface IInterview {
    _id: string;
    companyName: string;
    interviewDate: Date;
    status: string;
    applicationLink: string;
    notes: string;
    user: string;
  }
  
  export type OmitInterview = Omit<IInterview, "_id">;