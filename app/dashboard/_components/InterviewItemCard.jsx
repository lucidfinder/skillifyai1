import { Button } from '../../../components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog';
import { X } from 'lucide-react';
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { eq } from 'drizzle-orm';

function InterviewItemCard({ interview, setInterviewList }) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId);
  };
  const onFeedback = () => {
    router.push('/dashboard/interview/' + interview?.mockId + '/feedback');
  };

  const onDelete = async () => {
    await db.delete(MockInterview).where(eq(MockInterview.mockId, interview.mockId));
    setOpenDialog(false);
    setInterviewList((prevList) => prevList.filter((item) => item.mockId !== interview.mockId));
  };

  return (
    <div className='border shadow-sm rounded-lg p-3 relative'>
      <button
        className='absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
        onClick={() => setOpenDialog(true)}
      >
        <X className='h-4 w-4' />
        <span className='sr-only'>Close</span>
      </button>
      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-700'>
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className='text-xs text-gray-500'>
        Created At: {interview?.createdAt}
      </h2>
      <div className='flex justify-between mt-2 gap-5'>
        <Button
          className='w-full'
          size='sm'
          variant='outline'
          onClick={onFeedback}
        >
          Feedback
        </Button>
        <Button size='sm' className='w-full' onClick={onStart}>
          Start
        </Button>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Do you want to delete this interview?
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-end gap-2 mt-4'>
            <Button variant='ghost' onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button variant='destructive' onClick={onDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default InterviewItemCard;
