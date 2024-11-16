interface TdProps {
    children: React.ReactNode;
    className?: string;
}
export const Td = ({ children ,className = ''}: TdProps) => (
    <td className={`border-b border-gray-100 p-3 capitalize text-sm text-gray-800 ${className}`}>
        {children}
    </td>
);