"use client";
import React, { useState, useEffect } from 'react';

const ChatbaseBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggleChat = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  const closeChat = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setIsOpen(false);
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on the chat button or chat container
      if (isOpen && 
          !event.target.closest('.chatbot-container') && 
          !event.target.closest('.chatbot-button')) {
        closeChat();
      }
    };

    // Close on Escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeChat();
      }
    };

    if (isOpen) {
      // Use a slight delay to prevent immediate triggering
      const timer = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen]);

  const handleIframeError = () => {
    setHasError(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 chatbot-button">
        <button
          onClick={(e) => toggleChat(e)}
          className="group bg-[#989b2e] hover:bg-[#7a7d23] text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#989b2e]/50 cursor-pointer"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            )}
          </svg>
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 chatbot-container sm:bottom-24 sm:right-6">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 w-[400px] h-[600px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-120px)] sm:w-[400px] sm:h-[600px]">
            {/* Header */}
            <div className="bg-[#989b2e] text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-sm sm:text-base">Stevron Assistant</h3>
              </div>
              <button
                onClick={(e) => closeChat(e)}
                className="text-white hover:text-gray-200 cursor-pointer transition-colors p-1"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Iframe Container */}
            <div className="relative" style={{ height: 'calc(100% - 64px)' }}>
              {hasError ? (
                <div className="flex items-center justify-center h-full p-4">
                  <div className="text-center">
                    <div className="text-red-500 mb-2">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-2">Unable to load chat</p>
                    <button
                      onClick={() => {
                        setHasError(false);
                        setIsLoaded(true);
                      }}
                      className="bg-[#989b2e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#7a7d23] transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : !isLoaded ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#989b2e] mx-auto"></div>
                    <p className="mt-2 text-gray-600 text-sm">Loading assistant...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/uBvb7DZ6DtxNeszOKwDqc"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="border-none"
                  title="Stevron Tools Assistant"
                  allow="microphone; camera"
                  onError={handleIframeError}
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbaseBot;
