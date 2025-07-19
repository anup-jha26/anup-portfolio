import React from "react";

export default function Resume() {
    return (
        <section id="resume" className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <p className="mb-6">Download my resume PDF below.</p>
            <a
                href="https://drive.google.com/file/d/1AUU-75KSEetj3Rvc8AhP8QKdGUGOi194/view?usp=drive_link"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
                Download Resume
            </a>
        </section>
    );
}
