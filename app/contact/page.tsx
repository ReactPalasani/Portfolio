'use client'; 
function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 px-4 py-4 bg-white dark:bg-black sm:items-start">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                    Contact Me
                </h1>
                <p className="mt-4 text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
                    Feel free to reach out to me if you have any questions or would like to collaborate!
                </p>
            </main>
        </div>
    );
}
export default Contact;