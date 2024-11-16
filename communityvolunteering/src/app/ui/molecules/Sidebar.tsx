import { PropsWithChildren } from 'react';
import OptionsAside from './OptionsAside';
import { TitleAside } from './TitleAside';

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white text-white w-64 flex flex-col space-y-4">
      <div className="flex items-center justify-center pt-6">
        <span className="text-xl font-bold"><TitleAside/></span>
      </div>
      <nav className="flex flex-col ">
      <OptionsAside/>
      </nav>
      {children}
    </div>
  );
};