
const url: string = 'http://localhost:8000'

export async function createNote(content: string, ttl: number) {
    const res = await fetch(`${url}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, ttl })
    })

    if (!res.ok) throw new Error("Помилка при створенні")
    return await res.json()
}

export async function getNote(token: string) {
    const res = await fetch(`${url}/notes/${token}`)

    if (!res.ok) {
        console.log(`${token} not found`)
        throw new Error("Нотатка не знайдена або протухла")
    }

    const note = await res.json()
    console.log(note)

    return note
}
