export interface Challenge {
    id: number;
    event: {
      event_name: string;
      event_date_start: Date;
      event_date_end: Date;
    };
    division: string;
    start_condition: string;
    challenger: {
      id: number;
      username: string;
    };
    challengee: {
      id: number;
      username: string;
    };
    status: string;
  }
  
  export interface ChallengeCardProps {
    challenge: Challenge;
  }
