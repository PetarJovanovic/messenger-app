import Image from 'next/image';

type Props = {
  size?: number;
};

const LoadingLogin = ({ size = 100 }: Props) => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Image src='/logoLoading.svg' alt='Loading...' width={size} height={size} className='animate-pulse duration-700' />
    </div>
  );
};

export default LoadingLogin;
