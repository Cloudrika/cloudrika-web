import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenuItem } from "@workspace/ui/components";


export const EmailPortalDashboardSideBar = () => {
    return (
        <Sidebar>
            <SidebarHeader>Header</SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenuItem> lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarMenuItem> lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarMenuItem> lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                    <SidebarMenuItem>lorem 123</SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                Footer
            </SidebarFooter>
        </Sidebar>
    );
};