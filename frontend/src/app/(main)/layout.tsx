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
      className={``}
    >
      <body className="min-h-screen font-vazir-regular bg-app-bg">{children}</body>
    </html>
  );
}
