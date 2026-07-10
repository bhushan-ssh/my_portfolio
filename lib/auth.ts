/**
 * Simple authentication utility for portfolio owner
 * The portfolio owner is identified by a password stored in NEXT_PUBLIC_PORTFOLIO_OWNER_PASSWORD
 */

const OWNER_SESSION_KEY = 'portfolio_owner_authenticated';
const OWNER_PASSWORD = process.env.NEXT_PUBLIC_PORTFOLIO_OWNER_PASSWORD || '';

/**
 * Check if the current user is authenticated as the portfolio owner
 */
export function isPortfolioOwner(): boolean {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(OWNER_SESSION_KEY) === 'true';
}

/**
 * Authenticate as portfolio owner
 */
export function authenticateOwner(password: string): boolean {
  if (password === OWNER_PASSWORD && OWNER_PASSWORD) {
    sessionStorage.setItem(OWNER_SESSION_KEY, 'true');
    return true;
  }
  return false;
}

/**
 * Logout as portfolio owner
 */
export function logoutOwner(): void {
  sessionStorage.removeItem(OWNER_SESSION_KEY);
}
