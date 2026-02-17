import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';
import { FaPaperPlane, FaDownload, FaRobot, FaUser, FaYoutube } from 'react-icons/fa';

interface ChatInterfaceProps {
  onDownloadClick: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onDownloadClick }) => {
  const { messages, isTyping, isCompleted, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isTyping) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <section id="chat-section" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#FCCD03 1px, transparent 1px), linear-gradient(to right, #FCCD03 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 max-w-3xl">

        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-5">
            <FaYoutube className="text-red-500" />
            <span className="text-white/80 text-sm font-heading tracking-wider uppercase">AI Mediaplan Bot</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Let's Build Your{' '}
            <span className="text-accent">Influencer List</span>
          </h2>
          <p className="text-white/50 mt-3 text-sm">
            Answer a few questions — we'll find the best YouTube creators for your campaign
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

          {/* Chat header bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <FaRobot className="text-accent text-sm" />
            </div>
            <div>
              <p className="text-sm font-heading font-bold text-primary">Zorka AI</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className="h-80 md:h-[420px] overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50/50"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end space-x-2 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-accent' : 'bg-primary'
                }`}>
                  {message.sender === 'user'
                    ? <FaUser className="text-primary text-xs" />
                    : <FaRobot className="text-accent text-xs" />
                  }
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[75%] md:max-w-[65%] rounded-2xl px-4 py-3 shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-accent text-primary rounded-br-sm'
                      : 'bg-white text-primary rounded-bl-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-50 mt-1 block">
                    {message.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-end space-x-2">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <FaRobot className="text-accent text-xs" />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4 md:p-5">
            {!isCompleted ? (
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your answer..."
                  disabled={isTyping}
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-accent hover:bg-yellow-300 text-primary w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </form>
            ) : (
              <button
                onClick={onDownloadClick}
                className="w-full bg-accent hover:bg-yellow-300 text-primary font-heading font-bold text-lg px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50 flex items-center justify-center space-x-3"
                aria-label="Download your mediaplan"
              >
                <FaDownload className="text-xl" />
                <span>Download Your Mediaplan</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
