import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Send, X } from 'lucide-react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface Message {
  text: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

const VoiceBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      type: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);
  
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    }
  };
  
  const botResponses: { [key: string]: string } = {
    'hello': "Hello! Welcome to Bloom's Career. How can we assist you with your career development today?",
    'hi': "Hi there! How can we help you with your professional growth and career services?",
    'services': "We offer career coaching, resume writing, interview preparation, LinkedIn optimization, career assessments, and job search strategies. Which service are you interested in?",
    'resume': "Our expert resume writers craft compelling, ATS-friendly resumes that highlight your skills and achievements to stand out to employers.",
    'interview': "We provide comprehensive interview preparation including mock interviews, common question practice, and strategies to showcase your strengths.",
    'coaching': "Our career coaches offer personalized guidance to help you clarify your career goals, develop strategies, and navigate career transitions.",
    'contact': "You can reach us at info@bloomscareer.com or call (555) 765-4321. Our office is located at 456 Career Lane, Professional District, NY.",
    'pricing': "We offer various packages to suit different needs and budgets. Our team can provide detailed information about our service options and pricing.",
    'support': "For support with our services, please email support@bloomscareer.com or call us at (555) 876-5432 during business hours (Monday-Friday, 9AM-5PM).",
    'about': "Bloom's Career was established in 2018 with a mission to empower professionals at all stages of their career journey. Our team of certified career experts has helped thousands of clients achieve their professional goals.",
    'thanks': "You're welcome! Is there anything else we can help you with today?",
    'thank you': "You're welcome! Is there anything else we can help you with today?",
    'bye': "Thank you for connecting with Bloom's Career! We wish you success in your professional journey. Don't hesitate to reach out if you need more assistance!",
    'goodbye': "Thank you for connecting with Bloom's Career! We wish you success in your professional journey. Don't hesitate to reach out if you need more assistance!"
};
  
  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Check if any keywords match
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerCaseMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default response if no keywords match
    return "I'm not sure I understand. Could you rephrase your question? Or you can ask about specific details";
  };
  
  const speakBotResponse = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  };
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      type: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    resetTranscript();
    setIsBotThinking(true);
    
    // Simulate bot thinking and then respond
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      const botMessage: Message = {
        text: botResponse,
        type: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsBotThinking(false);
      
      // Speak the response
      speakBotResponse(botResponse);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-20 right-6 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col"
    >
      {/* Header */}
      <div className="bg-indigo-600 dark:bg-indigo-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <h3 className="font-medium">Twilight IT Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-lg px-4 py-2 ${
                message.type === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <p>{message.text}</p>
              <span className={`text-xs mt-1 block ${
                message.type === 'user' ? 'text-indigo-200' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          </div>
        ))}
        
        {isBotThinking && (
          <div className="flex justify-start mb-4">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <button
            onClick={toggleListening}
            className={`p-2 rounded-full mr-2 ${
              isListening 
                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
            disabled={!browserSupportsSpeechRecognition}
          >
            {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-lg mr-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
          />
          
          <button
            onClick={handleSendMessage}
            className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full disabled:opacity-50"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
        
        {isListening && (
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            <span>Listening... {transcript ? `"${transcript}"` : ''}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VoiceBot;