import Sidebar from "@/components/Sidebar";
import "../../styles/globals.css";
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
                        <div className="w-full h-20 bg-white shadow-[0_0_10px_4px_rgba(0,0,0,5%)] rounded-2xl mb-4 flex items-center justify-center"></div>

                        {/* body */}
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
