export interface HospitalSearchItem { site: string; url: string; title: string; description: string; category: string; keywords: string; }
export function normalizeHospitalSearch(value: string): string;
export function searchHospitalPages(items: HospitalSearchItem[], query: string, filter?: string, currentSite?: string): HospitalSearchItem[];
export function mountHospitalSearch(host: HTMLElement, options?: { site?: string; indexUrl?: string }): () => void;
