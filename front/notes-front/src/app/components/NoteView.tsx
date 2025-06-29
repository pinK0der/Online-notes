'use client'
import { useEffect, useState } from "react"
import { getNote } from "@/app/lib/api"
import { NotFound } from "@/app/components/NotFound"

type NoteViewProps = {
    token: string
}

type NoteType = {
    content: string,
    created_at: string,
    expires_at: string
}

export function NoteView({ token }: NoteViewProps) {
    const [note, setNote] = useState<NoteType | null>(null)
    const [error, setError] = useState("")

    useEffect(() => {
        getNote(token).then(setNote).catch(err => {
            setError(err?.response?.data?.detail || NotFound)
        })
    }, [token])

    if (error) return <div className=" flex flex-row justify-center">{error}</div>
    if (!note) return <p>Loading...</p>
    return (
        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl shadow-lg px-8 pt-8 w-full">
            <p className="whitespace-pre-line text-white">{note.content}</p>
            <div className="py-4 flex flex-row-reverse">
                <div className="">
                    <p className="text-xs text-white mt-2">Created: {new Date(note.created_at).toLocaleString()}</p>
                    <p className="text-xs text-white mt-2">Expires at: {new Date(note.expires_at).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
