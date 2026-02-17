import { Message } from '../types';

/**
 * Mock chatbot conversation flow
 * TODO: Replace with real WebSocket/SSE connection when backend is ready
 */

interface ConversationStep {
  botMessage: string;
  expectsUserResponse: boolean;
}

const conversationFlow: ConversationStep[] = [
  {
    botMessage: "Hi! I'm here to help you create a personalized influencer mediaplan. Let's get started! What type of product or service are you promoting?",
    expectsUserResponse: true,
  },
  {
    botMessage: "Great! Now, tell me about your target audience. Who are you trying to reach?",
    expectsUserResponse: true,
  },
  {
    botMessage: "Perfect! What's your estimated budget range for this influencer campaign?",
    expectsUserResponse: true,
  },
  {
    botMessage: "Excellent! Which geographic regions are you targeting? (e.g., US, Europe, Asia, etc.)",
    expectsUserResponse: true,
  },
  {
    botMessage: "Wonderful! I have all the information I need. I'm ready to generate your personalized influencer mediaplan with detailed insights including follower counts, engagement rates, views, and geographic distribution.",
    expectsUserResponse: false,
  },
];

let currentStep = 0;
const userResponses: string[] = [];

/**
 * Get welcome message
 */
export const getWelcomeMessage = (): Message => {
  currentStep = 0;
  userResponses.length = 0;

  return {
    id: `bot-${Date.now()}`,
    text: conversationFlow[0].botMessage,
    sender: 'bot',
    timestamp: new Date(),
  };
};

/**
 * Process user message and get bot response
 */
export const processUserMessage = async (
  userMessage: string
): Promise<{ botMessage: Message; isCompleted: boolean }> => {
  // Store user response
  userResponses.push(userMessage);

  // Simulate typing delay
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

  // Move to next step
  currentStep++;

  if (currentStep >= conversationFlow.length) {
    // Conversation completed
    return {
      botMessage: {
        id: `bot-${Date.now()}`,
        text: "Thank you! Click the 'Download' button below to get your mediaplan.",
        sender: 'bot',
        timestamp: new Date(),
      },
      isCompleted: true,
    };
  }

  const nextStep = conversationFlow[currentStep];

  return {
    botMessage: {
      id: `bot-${Date.now()}`,
      text: nextStep.botMessage,
      sender: 'bot',
      timestamp: new Date(),
    },
    isCompleted: !nextStep.expectsUserResponse,
  };
};

/**
 * Reset conversation
 */
export const resetConversation = () => {
  currentStep = 0;
  userResponses.length = 0;
};

/**
 * Get conversation summary (for backend integration)
 */
export const getConversationSummary = () => {
  return {
    responses: userResponses,
    completedAt: new Date(),
  };
};
