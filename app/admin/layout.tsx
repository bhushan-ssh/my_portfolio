import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel - Certificate Manager',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
