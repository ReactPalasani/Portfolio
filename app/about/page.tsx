'use client';
function About() {
    return (
        <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 px-4 py-4 bg-white dark:bg-black sm:items-start">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                    About Me
                </h1>
                <p className="mt-4 text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
                    I am a Full-Stack Developer and Data Engineer with 2.8 years of professional
                    IT experience specializing in building complex, data-driven web applications
                    and scalable data pipelines.
                    <br />
                    <br />
                    My career began in Data Engineering, where I mastered data orchestration using
                    Databricks, SQL, and IICS. Recognizing the power of bringing data to life visually,
                    I transitioned into full-stack development, architecting high-traffic applications
                    using React, Next.js, and Node.js. From building intricate, role-based internal
                    systems like multi-tiered resort management tools to managing global event
                    applications with dynamic form builders, I specialize in engineering systems
                    that handle complex enterprise workflows cleanly.
                    <br />
                    <br />
                    Driven by an interest in automation and intelligent systems, I am currently
                    leveraging my core software foundations to deepen my expertise in Python backend
                    engineering and AI API integration. Whether I am optimizing an asynchronous backend,
                    training future developers, or designing intelligent workflows, I focus on delivering
                    scalable, high-performance software.
                </p>
            </main>
        </div>
    );
}
export default About;