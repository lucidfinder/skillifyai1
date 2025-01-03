import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
const speedOptions = [0.25, 0.5, 0.75, 1];

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const speechSynthesisRef = useRef(null);
  const videoRef = useRef(null);

  const textToSpeech = (text, index) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = selectedSpeed;
      speech.onstart = () => {
        setIsSpeaking(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      };
      speech.onend = () => {
        setIsSpeaking(false);
         if (videoRef.current) {
          videoRef.current.pause();
        }
      };
      speechSynthesisRef.current = speech;
      window.speechSynthesis.speak(speech);
      setSpeakingIndex(index);
    }
     else {
      alert('Sorry, your browser does not support text to speech');
    }
  };

  const toggleMute = () => {
    if (speechSynthesisRef.current) {
      if (isMuted) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (mockInterviewQuestions && mockInterviewQuestions[activeQuestionIndex]) {
      textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.Question, activeQuestionIndex);
    }
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [activeQuestionIndex, mockInterviewQuestions]);

  useEffect(() => {
    if (mockInterviewQuestions && mockInterviewQuestions[activeQuestionIndex]) {
      textToSpeech(mockInterviewQuestions[activeQuestionIndex]?.Question, activeQuestionIndex);
    }
  }, [selectedSpeed]);

  return (
    mockInterviewQuestions && (
      <div className={`p-5 border rounded-lg my-10`} style={{ height: '320px', maxWidth: '500px', width: '50%', zIndex: 10, backgroundColor: 'black' }}>
        <div className={`relative h-[250px] w-[100%] z-10 `}>
          <video
            src="/vid1.mp4"
            ref={videoRef}
            muted
            loop
            className="cursor-pointer hover:scale-105 transition-all w-full h-full object-cover mx-auto my-5 margin-0"
          ></video>
        </div>
        <p className="text-center text-sm mt-2">Question {activeQuestionIndex + 1} of {mockInterviewQuestions.length}</p>
        <div className="flex items-center gap-2 my-5">
          {isSpeaking && (
            <button onClick={toggleMute}>
              <Volume2 className={`${isMuted ? 'text-gray-500' : 'text-black'}`} />
            </button>
          )}

          <select
            className="border rounded p-1 text-xs"
            value={selectedSpeed}
            onChange={(e) => setSelectedSpeed(parseFloat(e.target.value))}
          >
            {speedOptions.map((speed) => (
              <option key={speed} value={speed}>
                {speed}x
              </option>
            ))}
          </select>
        </div>

        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
            {process.env.NEXT_PUBLIC_INFORMATION}
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
