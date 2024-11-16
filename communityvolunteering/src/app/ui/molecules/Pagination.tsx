import { Button } from "../atoms";

interface ButtonPagProps {
    label: string;
    onClick: (e: React.FormEvent) => void;
}

export const ButtonPag = ({ label, onClick }: ButtonPagProps) => {
    return (
        <Button onClick={onClick} className="w-5 h-8 mx-2 rounded-xl bg-gray-200 hover:bg-gray-300" >
            {label}
        </Button>
    );
}