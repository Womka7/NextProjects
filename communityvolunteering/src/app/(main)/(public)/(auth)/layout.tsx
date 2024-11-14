export default function PublicAuthLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <header className="w-full h-20 bg-transparent z-50 flex px-8 flex items-center sticky" >
                    <a href="/" className="text-blue-500 text-2xl"><h2 className="text-xl text-blue-600 font-semibold">Volver al inicio</h2></a>
            </header>
            {children}
        </>
    )
}