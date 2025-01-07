import { Button } from "../ui/button";

export default function HeroSection() {
    return (
        <main className="relative">
            <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                        </span>
                        Free AI Post Generation Available
                    </div>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-gray-600 to-gray-300 dark:bg-gradient-to-t dark:from-white dark:to:gray-200 bg-clip-text text-transparent">
                            Social media content,
                            <br />
                            reimagined with AI
                        </h1>
                        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
                            InspirePost is an AI-driven platform designed to revolutionize how you create, manage, and optimize social media content.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="outline" className="w-full rounded-2xl px-4 py-5 text-lg bg-black hover:bg-black text-white hover:text-white shadow-[0px_6px_0px_0px_rgba(1,1,1,1)] hover:shadow-none hover:translate-y-2 transition-all duration-200">
                            Get Started
                        </Button>
                        <Button variant="outline" className="w-full rounded-2xl px-4 py-5 text-lg bg-white hover:bg-white text-black hover:text-black shadow-[0px_6px_0px_0px_rgba(1,1,1,1)] hover:shadow-none hover:translate-y-2 transition-all duration-200">
                            View Demo
                        </Button>
                    </div>
                    <p className="text-sm text-gray-400">
                        Get started for free with basic editing features and one AI post per day
                    </p>
                </div>
            </div>
        </main>
    )
}