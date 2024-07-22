import Image from 'next/image';

function CompletationTick() {
  return (
    <div className='h-auto flex justify-center items-center'>
      <div className='flex justify-center items-center h-96'>
        <Image src='/verified.gif' height={200} width={200} />
      </div>
    </div>
  );
}

export default CompletationTick;

