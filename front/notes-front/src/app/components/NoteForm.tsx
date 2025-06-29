'use client'
import { useState } from "react"
import { createNote } from "@/app/lib/api"
import { NoteTextInput } from "./NoteTextInput"
import { InputTTL } from "./InputTTL"
import { NoteCreated } from "./NoteCreated"

export function NoteForm() {
    const [content, setContent] = useState("")
    const [TTL, setTTL] = useState(300)
    const [token, setToken] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await createNote(content, TTL)
        console.log(result)
        setToken(result.token)
    }

    const updateTTL = (e: number) => {
        setTTL(e)
        console.log("Set new ttl from NOTEFORM. Current TTL: " + TTL)
    }

    const changeContent = (e: string) => {
        setContent(e)
        console.log("change in NoteForm")
    }

    //if note created
    if (token) {
        return (
            <div className="flex flex-row justify-center">
                <NoteCreated token={token} />
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <NoteTextInput onContentChange={changeContent} />
            <InputTTL ttl={TTL} setTtl={updateTTL} />
            <div className="flex flex-row justify-center">
                <input
                    type="submit"
                    value="Create Note"
                    className="max-w-3xs backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl shadow-lg p-3 text-white font-medium cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
                />
            </div>
        </form>
    )
}
