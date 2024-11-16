import { TiDeleteOutline } from "react-icons/ti";
import { Button } from "./Button";

interface ModalProps {
    isOpen: boolean;
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-6 animate-[fadeIn_0.3s_ease-in-out]">
                <div className="flex justify-between items-center mb-4">
                    {title && (
                        <h2 className="text-xl font-semibold text-gray-800">
                            {title}
                        </h2>
                    )}
                    <Button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"                    >
                        <TiDeleteOutline className="w-6 h-6" />
                    </Button>
                </div>
                <div className="max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}