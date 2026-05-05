import "../styles/globals.css";
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
      <body className="h-screen p-8 flex flex-col bg-slate-100 font-vazir-medium">{children}</body>
    </html>
  );
}
