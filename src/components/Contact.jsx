import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="mb-6 text-lg">
                Let's work together! I'm actively looking for web development opportunities.
                Reach out to me directly via email or connect on LinkedIn/GitHub.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-left text-lg">
                <div>
                    <p><strong>📧 Email:</strong> <a className="text-blue-600" href="mailto:aniljha1076@gmail.com">aniljha1076@gmail.com</a></p>
                    <p><strong>📞 Phone:</strong> +91-9131463711</p>
                </div>
                <div>
                    <p><strong>💼 LinkedIn:</strong> <a className="text-blue-600" href="https://www.linkedin.com/in/anupjha26/" target="_blank">linkedin.com/in/anupjha26</a></p>
                    <p><strong>🐙 GitHub:</strong> <a className="text-blue-600" href="https://github.com/anup-jha26" target="_blank">github.com/anup-jha26</a></p>
                </div>
            </div>

            <div className="mt-8">
                <a
                    href="mailto:aniljha1076@gmail.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    📬 Send Me an Email
                </a>
            </div>
        </section>
    );
}
