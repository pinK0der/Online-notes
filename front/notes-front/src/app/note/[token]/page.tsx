import { NoteView } from "@/app/components/NoteView"

interface PageProps {
    params: { token: string };
}

export default function NotePage({ params }: PageProps) {

    const { token } = params

    return (
        <main className="max-w-5xl mx-auto py-8">
            <NoteView token={token} />
        </main>
    )
}
