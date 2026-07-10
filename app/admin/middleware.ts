import { redirect } from 'next/navigation';

export function checkAdminAuth() {
  // This function checks if user is authenticated
  // It will be called on protected admin pages
  if (typeof window !== 'undefined') {
    const session = sessionStorage.getItem('adminSession');
    if (!session) {
      return false;
    }
  }
  return true;
}
