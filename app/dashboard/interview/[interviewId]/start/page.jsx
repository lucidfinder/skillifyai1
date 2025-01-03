'use client';
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  /**
   * Used to get interview details by MockId/InterviewId
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResponse = JSON.parse(result[0].jsonMockResp);
    console.log(
      'resulttt',
      JSON.parse(result[0].jsonMockResp),
      jsonMockResponse
    );
    setMockInterviewQuestions(jsonMockResponse);
    setInterviewData(result[0]);
  };
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          isRecording={isRecording}
        />

        {/* Video / Audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestions={mockInterviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
          onRecordingChange={setIsRecording}
        />
      </div>
      <div className='flex justify-end gap-6 mb-80'>
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestions?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestions?.length - 1 && (
          <Link
            href={'/dashboard/interview/' + interviewData?.mockId + '/feedback'}
          >
            <Button>End Interview</Button>
          </Link>
        )}
         <Link href={'/dashboard'}>
            <Button>Leave Interview</Button>
          </Link>
      </div>
    </div>
  );
}

export default StartInterview;
