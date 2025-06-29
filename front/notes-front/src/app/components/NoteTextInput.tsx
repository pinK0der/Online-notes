import { useState, useRef, useEffect } from "react";

interface NoteTextInputProps {
    onContentChange: (value: string) => void;
}

export function NoteTextInput({ onContentChange }: NoteTextInputProps) {
    const [content, setContent] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [content]);

    const handleLocalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
        onContentChange(e.target.value)
        console.log("local change in textarea")
    }

    return (
        <textarea
            required
            ref={textareaRef}
            rows={1}
            placeholder="Your text..."
            value={content}
            onChange={handleLocalChange}
            className="w-full backdrop-blur-md min-h-[8rem] bg-white/5 border border-white/30 rounded-xl shadow-lg p-4 text-white placeholder-white/70 focus:outline-none resize-none overflow-hidden transition-all duration-200 ease-in-out"
        />
    );
}