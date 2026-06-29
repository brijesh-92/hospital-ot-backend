export const metadata = {
  title: 'City General Hospital — OT Management System',
  description: 'Hospital Operation Theatre scheduling and availability dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
