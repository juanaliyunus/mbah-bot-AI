import ReactMarkdown from 'react-markdown';
import { FiMessageSquare } from 'react-icons/fi';
import { TbRobot } from 'react-icons/tb'; // Ganti spinner dengan ikon robot untuk model
import CodeHighlighter from './CodeHighlighter';

interface ChatProps {
    chats: Chat;
}

interface Chat {
    role: "user" | "model";
    parts: string;
}

const MessageBox = ({ chats }: ChatProps) => {
    return (
        <div className='flex gap-3 items-start'>
            {/* Icon box untuk user dan model */}
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-lg shadow-md ${chats.role === "user" ? "bg-blue-500" : "bg-green-500"}`}>
                {chats.role === "user" ? <FiMessageSquare /> : <TbRobot />}
            </div>

            {/* Konten pesan */}
            <div className='bg-gray-900 p-4 rounded-xl shadow-lg max-w-[80%]'>
                <span className='font-bold text-sm mb-1 text-gray-400 block'>
                    {chats.role === "user" ? "You" : "Mbah Bot"}
                </span>

                {/* Parsing markdown dengan support untuk code blocks */}
                <ReactMarkdown
                    className="flex flex-col gap-4 text-white"
                    components={{
                        code({ children, inline, className, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            let language;

                            if (match && match[1]) {
                                language = match[1];
                            } else {
                                language = "jsx";
                            }

                            return !inline && match ? (
                                <CodeHighlighter language={language}>
                                    {children}
                                </CodeHighlighter>
                            ) : (
                                <code className='bg-gray-800 text-white px-2 py-[1px] leading-loose rounded' {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {chats.parts}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default MessageBox;
