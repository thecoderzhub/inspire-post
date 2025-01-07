"use client"

import { Sparkles, PenTool, Twitter, Linkedin, ClipboardCheck, Wand2, Gauge, Hash, Bot, Shuffle, Calendar, LineChart } from "lucide-react";
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';

const features = [
    {
        icon: Sparkles,
        title: "AI Post Generation",
        description: "Create engaging posts for LinkedIn and Twitter instantly with our advanced AI that understands your brand voice and audience."
    },
    {
        icon: PenTool,
        title: "Smart Editor",
        description: "Polish your posts with our intelligent editor that suggests improvements for grammar, readability, and engagement."
    },
    {
        icon: Linkedin,
        title: "LinkedIn Optimization",
        description: "Specialized tools to format and optimize your posts specifically for LinkedIn's professional audience and algorithm."
    },
    {
        icon: Twitter,
        title: "Twitter Enhancement",
        description: "Create tweet threads and optimize content for Twitter's unique format and engagement patterns."
    },
    {
        icon: ClipboardCheck,
        title: "Content Formatter",
        description: "Automatically format your posts with proper spacing, emojis, and line breaks for maximum readability."
    },
    {
        icon: Wand2,
        title: "Post Beautifier",
        description: "Transform plain text into visually appealing posts with smart emoji placement and formatting suggestions."
    },
    {
        icon: Gauge,
        title: "Engagement Analyzer",
        description: "Get real-time suggestions to improve your post's potential engagement based on AI analysis."
    },
    {
        icon: Hash,
        title: "Hashtag Generator",
        description: "Generate relevant and trending hashtags to increase your post's visibility and reach."
    },
    {
        icon: Bot,
        title: "AI Rewriter",
        description: "Rewrite and enhance existing posts to improve clarity, impact, and professional tone."
    },
    {
        icon: Shuffle,
        title: "Content Variations",
        description: "Generate multiple versions of your post to test different approaches and tones."
    },
    {
        icon: Calendar,
        title: "Posting Schedule",
        description: "Get AI-powered suggestions for the best times to post for maximum engagement."
    },
    {
        icon: LineChart,
        title: "Performance Insights",
        description: "Analyze your posts' performance patterns to continuously improve your content strategy."
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-36">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                        Our services
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Dive into our comprehensive collection of features which you can use on the go
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative text-black border dark:rounded-lg dark:text-white p-6 overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="absolute left-2 top-1/3 w-1 h-6 group-hover:scale-110 group-hover:bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                                    <div className="relative transition-transform duration-300 ease-in-out">
                                        <div className="p-3 rounded-lg bg-primary/10 inline-block">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-semibold group-hover:translate-x-2 transition-transform duration-300 ease-in-out mt-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/resources">
                        <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg bg-white text-black shadow-[0px_6px_0px_0px_rgba(1,1,1,1)] hover:shadow-none hover:translate-y-2 transition-all duration-200">
                            Explore all Resources
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
