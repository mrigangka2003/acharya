import React from 'react';

interface CoverLetterProps {
  params: { id: string };
}

const CoverLetter = async ({ params }: CoverLetterProps) => {
  const id =  await params.id; 
  return <div className='bg-red-950  flex flex-col m-96'>CoverLetter: {id}</div>;
};

export default CoverLetter;
