import HeroSection from "@/components/(homepage)/hero-section"
import FeaturesSection from "@/components/(homepage)/features-section"
import Footer from "@/components/(homepage)/footer"

export default function Page() {
	return (
		<div className="min-h-screen">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff2e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2e_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]" />
			<HeroSection />
			<FeaturesSection />
			<Footer />
		</div>
	)
}

