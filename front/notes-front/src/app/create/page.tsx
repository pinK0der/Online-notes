'use client'
import { NoteForm } from "@/app/components/NoteForm"

export default function CreateNotePage() {
    return (
        <main className="max-w-5xl mx-auto py-8">
            <div className="flex flex-row justify-center">
                <h1 className="text-2xl font-bold mb-4">Create Note</h1>
            </div>
            <NoteForm />
        </main>
    )
}
