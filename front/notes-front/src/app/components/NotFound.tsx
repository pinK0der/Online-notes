

export function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" /*style={{ backgroundImage: "url('/images/bg.svg')" }}*/>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl shadow-lg p-8 text-center max-w-md w-full mx-4">

                <h1 className="text-3xl font-bold text-white mb-4">Can't find this note</h1>

                <p className="text-white/80 mb-6">
                    It may not exist, or its storage time may have expired.
                </p>

                <a href="/create" className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition">
                    Create new note
                </a>
            </div>
        </div>
    );
}