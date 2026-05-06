import "../../styles/globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-full`}
    >
      <body className="h-screen overflow-hidden p-10 flex flex-col font-vazir-regular bg-app-bg text-text-primary">{children}</body>
    </html>
  );
}
