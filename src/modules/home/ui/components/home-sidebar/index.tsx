import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "@/modules/home/ui/components/home-sidebar/main-section";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "@/modules/home/ui/components/home-sidebar/personal-section";

export const HomeSidebar = () => {
	return (
		<Sidebar className="pt-16 z-40 border-none">
			<SidebarContent className="bg-background">
				<MainSection/>
				<Separator />
				<PersonalSection />
			</SidebarContent>
		</Sidebar>
	);
};
