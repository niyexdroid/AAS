/**
 * Type definitions for Next.js 15+ dynamic routes
 *
 * In Next.js 15, params and searchParams are now Promises
 * Use these types for any dynamic route pages
 */

// For dynamic route segments like [slug], [id], etc.
export type PageProps<T = Record<string, string>> = {
  params: Promise<T>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

// Common dynamic route param types
export type SlugPageProps = PageProps<{ slug: string }>;
export type IdPageProps = PageProps<{ id: string }>;

// Helper function to safely await params
export async function getParams<T>(params: Promise<T>): Promise<T> {
  return await params;
}

// Helper function to safely await searchParams
export async function getSearchParams(
  searchParams:
    | Promise<Record<string, string | string[] | undefined>>
    | undefined
): Promise<Record<string, string | string[] | undefined>> {
  return searchParams ? await searchParams : {};
}
