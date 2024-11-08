import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../atoms/Button';

interface IProps {
    isOpen: boolean;
    onToggle: () => void;
}
export const ToggleAside = ({ isOpen, onToggle }: IProps) => {
    return (
        <Button onClick={onToggle} className='absolute bottom-4 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600'>
            {isOpen ? (
                <ChevronLeftIcon className="h-4 w-4" />
            ) : (
                <ChevronRightIcon className="h-4 w-4" />
            )}
        </Button>
    );
};