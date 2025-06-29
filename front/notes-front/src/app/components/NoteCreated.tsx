import { useState } from "react";
import Link from 'next/link'

interface noteCreatedProps {
    token: string;
}

export function NoteCreated({ token }: noteCreatedProps) {
    const [copied, setCopied] = useState(false)

    const innerLink = `/note/${token}`

    const link = `${typeof window !== "undefined" ? window.location.origin : ""}${innerLink}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch(err) {
            console.error("Error in copying ", err)
        }
    }

    return (
        <div className="max-w-3xl backdrop-blur-md bg-white/5 border border-white/20 rounded-xl shadow-lg p-8">
            <div className="flex w-full py-2">
                <p>Note created!</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <p className="text-lg font-medium">Note link:</p>
                <code className="bg-black/50 p-2 rounded break-all text-sm">{link}</code>
            </div>
            <div className="">
                <button
                    onClick={handleCopy}
                    className="backdrop-blur-md my-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md shadow px-3 py-2 text-sm transition-all hover:scale-105 active:scale-95"
                >
                    {copied ? "Copied!" : "Copy to clipboard"}
                </button>
                <Link
                    href={innerLink}
                    className="backdrop-blur-md my-2 ml-4 bg-white/10 border border-white/30 rounded-md shadow px-3 py-2 text-sm"
                >
                    View note
                </Link>
            </div>
            <div className="flex items-center w-full py-2">
                <p>Thanks you for using my app!</p>
            </div>
        </div>
    )
}