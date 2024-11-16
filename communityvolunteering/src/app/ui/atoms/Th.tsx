interface ThProps {
    children: React.ReactNode;
  }
export const Th = ({ children }: ThProps) => (
    <th className="border-b border-gray-200 p-2 text-left text-sm text-gray-500">
      {children}
    </th>
  );