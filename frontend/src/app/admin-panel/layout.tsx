import Sidebar from "@/components/panel/Sidebar";
import "../../styles/globals.css";
import AdminPanelHeader from "@/components/panel/AdminPanelHeader";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className={`h-full`}>
            <body className="h-screen overflow-hidden p-10 flex flex-col font-vazir-regular bg-app-bg text-text-primary">
                <div className="bg-app-bg h-full w-full rounded-4xl grid grid-cols-12 gap-4">
                    {/* sidebar */}
                    <Sidebar />

                    {/* content */}
                    <div className="col-span-10 w-full rounded-l-2xl flex flex-col">
                        {/* header */}
                        <AdminPanelHeader/>

                        {/* body */}
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
