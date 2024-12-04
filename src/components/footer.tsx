import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="">
      <div className='mt-9 flex flex-col items-center justify-center'>
        <img src="./img/DF.svg" alt="" />

        <div className='text-muted-foreground my-2 text-sm'>
          © {new Date().getFullYear()}{' '}
          <Button variant="link" className="text-muted-foreground p-0 font-medium">
            <a href="https://github.com/danish-fareed">Danish Fareed</a>
          </Button>
          . All rights reserved.
        </div>
      </div>
      
      
    </footer>
  );
};
