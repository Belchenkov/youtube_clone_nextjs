"use client";

import Link from "next/link";
import {
	ListVideoIcon,
	HistoryIcon,
	ThumbsUpIcon,
} from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
	{
		title: 'History',
		url: '/playlist/history',
		icon: HistoryIcon,
		auth: true,
	},
	{
		title: 'Like videos',
		url: '/playlist/like',
		icon: ThumbsUpIcon,
		auth: true,
	},
	{
		title: 'All playlists',
		url: '/playlists',
		icon: ListVideoIcon,
		auth: true,
	}
];

export const PersonalSection = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>You</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{ items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								tooltip={item.title}
								asChild
								isActive={false}
								onClick={() => {

								}}
							>
								<Link
									href={item.url}
									className="flex items-center gap-4"
								>
									<item.icon />
									<span className="text-sm">{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					)) }
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
