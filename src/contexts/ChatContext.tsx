import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Message, ChatState } from '../types';
import { getWelcomeMessage, processUserMessage } from '../utils/mockChatbot';

interface ChatContextType extends ChatState {
  sendMessage: (text: string) => Promise<void>;
  resetChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage = getWelcomeMessage();
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Get bot response
      const { botMessage, isCompleted: chatCompleted } = await processUserMessage(text);

      setMessages((prev) => [...prev, botMessage]);
      setIsCompleted(chatCompleted);
    } catch (error) {
      console.error('Error processing message:', error);
      // Add error message
      const errorMessage: Message = {
        id: `bot-error-${Date.now()}`,
        text: "Sorry, something went wrong. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping]);

  const resetChat = useCallback(() => {
    const welcomeMessage = getWelcomeMessage();
    setMessages([welcomeMessage]);
    setIsTyping(false);
    setIsCompleted(false);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isTyping,
        isCompleted,
        sendMessage,
        resetChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
};
