import { useState } from "react";

export default function CoppyBox({ children, url }) {
    const [copyed, setCopyed] = useState(false);
    const copy = () => {
        console.log(children);
        navigator.clipboard.writeText(children);
        setCopyed(true);
    };

    return (
        <div
            className="m-6 p-1 border-black-500 bg-white border-2 rounded relative"
            onClick={copy}
        >
            <p className="absolute right-0 op-0 text-gray-600">
                {!copyed ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                    </svg>
                ) : (
                    "コピー完了"
                )}
            </p>
            <div className="p-6">
                {children}
                <br />
                <a href={url}>{url}</a>
            </div>
        </div>
    );
}
