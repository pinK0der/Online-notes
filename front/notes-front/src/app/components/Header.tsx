"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Header() {
    const [tokenInput, setTokenInput] = useState("");
    const router = useRouter();

    const handleGoToNote = () => {
        if (tokenInput.trim()) {
            router.push(`/note/${tokenInput.trim()}`);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTokenInput(e.target.value)
    }

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow text-white p-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold hover:underline">
                Online notes
            </Link>

            <nav className="mr-4 flex flex-row items-center justify-around gap-4">
                    <div className="flex items-center gap-1">
                        <input
                            type="text"
                            placeholder="Enter note token"
                            value={tokenInput}
                            onChange={handleInputChange}
                            maxLength={32}
                            className="w-3xs backdrop-blur-md bg-white/10 border text-sm border-white/30 rounded-xl shadow p-1 py-2 text-white placeholder-white/70 focus:outline-none"
                        />
                        <button
                            onClick={handleGoToNote}
                            className="w-24 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl shadow p-1 py-2 text-white text-sm transition-all hover:scale-105 active:scale-95"
                        >
                            Go to note
                        </button>
                    </div>
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/create" className="hover:underline">Create note</Link>
            </nav>
        </header>
    );
}
