import { Button, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SidebarFooter } from "@workspace/ui/components";
import { Mail, BarChart3, Megaphone, Send, FileText, Users, UserPlus, Gift, Database, Eye, Home, PanelLeftIcon } from "lucide-react";
import Link from "next/link";

export const EmailPortalDashboardSideBar = () => {
    return (
        <div className="flex">
            <SheetTrigger asChild>
                <Button
                    data-sidebar="trigger"
                    data-slot="sidebar-trigger"
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle Sidebar"
                    className="bg-surface-sunken relative place-self-start"
                >
                    <PanelLeftIcon aria-label="Toggle sidebar icon" />
                </Button>
            </SheetTrigger>
            <SheetContent
                isCloseButtonEnabled={false}
                className=" fixed left-0 top-0 z-50 h-screen w-80
    translate-x-[-100%]                 
    data-[state=open]:translate-x-0     
    data-[state=closed]:-translate-x-full 
    transition-transform duration-700 ease-in-out
    will-change-transform
    flex flex-col justify-between
    bg-surface-primary border-0 border-r border-neutral-30"
            >

                <div className="flex-1 flex flex-col">
                    {/* Header Section */}
                    <SheetHeader className="px-6 py-6 relative overflow-hidden text-content-primary bg-gradient-to-r from-primary to-primary-inverse border-neutral-30">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary-inverse">
                                <Mail className="w-6 h-6 text-content-primary" />
                            </div>
                            <div>
                                <SheetTitle className="text-content-inverse">
                                    Email Portal
                                </SheetTitle>
                                <p className="text-sm opacity-80 mt-1 text-content-primary">
                                    by Cloudrika
                                </p>
                            </div>
                        </div>
                    </SheetHeader>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6">
                        <div className="space-y-2">
                            {/* Analytics - Active State */}
                            <div className="px-4 py-3 rounded-xl flex items-center gap-3 font-medium transition-all duration-300 bg-primary text-content-primary">
                                <Home className="w-5 h-5" />
                                <span>Analytics</span>
                            </div>

                            {/* Other Navigation Items */}
                            <Link href="#" className="px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 text-content-secondary hover:bg-surface-secondary hover:text-content-primary group">
                                <Megaphone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Campaigns</span>
                            </Link>

                            <Link href="#" className="px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 text-content-secondary hover:bg-surface-secondary hover:text-content-primary group">
                                <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Send Email</span>
                            </Link>

                            <Link href="#" className="px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 text-content-secondary hover:bg-surface-secondary hover:text-content-primary group">
                                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Templates</span>
                            </Link>

                            <Link href="#" className="px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 text-content-secondary hover:bg-surface-secondary hover:text-content-primary group">
                                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Contacts</span>
                            </Link>

                            <Link href="#" className="px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 text-content-secondary hover:bg-surface-secondary hover:text-content-primary group">
                                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                <span>Subscribers</span>
                            </Link>
                        </div>

                        {/* Refer & Earn Card */}
                        <div className="mt-8 p-4 rounded-2xl bg-surface-secondary border border-neutral-30">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-success flex items-center justify-center flex-shrink-0">
                                    <Gift className="w-5 h-5 text-content-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-content-primary mb-1">
                                        Refer & Earn
                                    </h3>
                                    <p className="text-xs text-content-secondary leading-relaxed mb-3">
                                        Get 1000 free emails for each friend who subscribes
                                    </p>
                                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-success-30 text-success text-xs font-medium">
                                        984 earned
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Usage Limits Card */}
                        <div className="mt-4 p-4 rounded-2xl bg-surface-secondary border border-neutral-30">
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-4 h-4 text-content-secondary" />
                                <h3 className="font-semibold text-sm text-content-primary">
                                    Usage Limits
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {/* Emails */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-content-secondary">Emails</span>
                                        <span className="text-sm font-medium text-content-primary">22,737 left</span>
                                    </div>
                                    <div className="w-full bg-surface-tertiary rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '76%' }}></div>
                                    </div>
                                </div>

                                {/* Contacts */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-content-secondary">Contacts</span>
                                        <span className="text-sm font-medium text-content-primary">8,466 left</span>
                                    </div>
                                    <div className="w-full bg-surface-tertiary rounded-full h-2">
                                        <div className="bg-info h-2 rounded-full transition-all duration-500" style={{ width: '42%' }}></div>
                                    </div>
                                </div>

                                {/* Subscribers */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-content-secondary">Subscribers</span>
                                        <span className="text-sm font-medium text-content-primary">4,153 left</span>
                                    </div>
                                    <div className="w-full bg-surface-tertiary rounded-full h-2">
                                        <div className="bg-warning h-2 rounded-full transition-all duration-500" style={{ width: '28%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm text-primary hover:text-primary-20 transition-colors font-medium">
                                <Eye className="w-4 h-4" />
                                View Details
                            </button>
                        </div>
                    </nav>

                </div>

                {/* Footer */}
                <SidebarFooter className="px-6 py-4 border-t border-neutral-30 bg-surface-secondary">
                    <div className="flex items-center justify-center">
                        <div className="px-4 py-2 bg-surface-tertiary text-content-secondary rounded-lg text-sm font-medium">
                            Launchpad
                        </div>
                    </div>
                </SidebarFooter>
            </SheetContent>

        </div>
    );
};