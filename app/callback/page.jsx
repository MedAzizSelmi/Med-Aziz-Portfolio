"use client";
import { useEffect } from "react";

export default function CallbackPage() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            console.log("Spotify authorization code:", code);
            alert(`Authorization code:\n${code}`);
        } else {
            alert("No code found in the URL!");
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <p>Authorizing Spotify...</p>
        </div>
    );
}
