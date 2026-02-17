export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  isCompleted: boolean;
}

export interface FormData {
  name: string;
  email: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
}
