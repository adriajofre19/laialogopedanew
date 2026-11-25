import type { Lang } from './ui';

const trim = (path: string) => path.replace(/\/+$/, '') || '/';

export const withTrailingSlash = (path: string) => {
  const clean = trim(path);
  return clean === '/' ? '/' : `${clean}/`;
};

const staticCaToEs: Record<string, string> = {
  '/': '/',
  '/sobre-mi': '/sobre-mi',
  '/serveis': '/servicios',
  '/faqs': '/faqs',
  '/contacte': '/contacto',
  '/avis-legal': '/aviso-legal',
  '/privacitat': '/politica-de-privacidad',
  '/politica-de-cookies': '/politica-de-cookies',
  '/preferencies-de-cookies': '/preferencias-de-cookies',
  '/mapa-web': '/mapa-web',
  '/accessibilitat': '/accesibilidad',
};

const staticEsToCa: Record<string, string> = Object.fromEntries(
  Object.entries(staticCaToEs).map(([ca, es]) => [es, ca]),
);

const serviceCaToEs: Record<string, string> = {
  'alteracions-en-la-lectura-i-o-escriptura': 'alteraciones-en-la-lectura-y-o-escritura',
  'alteracions-en-la-parla': 'alteraciones-en-el-habla',
  'alteracions-en-la-veu': 'alteraciones-en-la-voz',
  'deglucio-atipica': 'deglucion-atipica',
  'trastorns-del-llenguatge': 'trastornos-del-lenguaje',
};

const serviceEsToCa: Record<string, string> = Object.fromEntries(
  Object.entries(serviceCaToEs).map(([ca, es]) => [es, ca]),
);

export const isEsPath = (pathname: string) => /^\/es(?:\/|$)/.test(pathname);

export const stripLocale = (pathname: string) => trim(isEsPath(pathname) ? pathname.replace(/^\/es(?=\/|$)/, '') || '/' : pathname);

export function toCanonicalPath(pathname: string): string {
  const clean = stripLocale(pathname);
  if (!isEsPath(pathname)) return clean;

  const segments = clean.split('/').filter(Boolean);
  if (segments.length === 0) return '/';

  const base = `/${segments[0]}`;
  const mappedBase = staticEsToCa[base] ?? base;
  if (base === '/servicios' && segments[1]) {
    return `${mappedBase}/${serviceEsToCa[segments[1]] ?? segments[1]}`;
  }
  if (segments.length > 1) {
    return `${mappedBase}/${segments.slice(1).join('/')}`;
  }
  return mappedBase;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = trim(isEsPath(path) ? toCanonicalPath(path) : path);
  if (lang === 'ca') return withTrailingSlash(clean);

  const segments = clean.split('/').filter(Boolean);
  if (segments.length === 0) return '/es/';

  const base = `/${segments[0]}`;
  const mappedBase = staticCaToEs[base] ?? base;
  if (base === '/serveis' && segments[1]) {
    return withTrailingSlash(`/es${mappedBase}/${serviceCaToEs[segments[1]] ?? segments[1]}`);
  }

  const rest = segments.slice(1).join('/');
  return withTrailingSlash(`/es${mappedBase}${rest ? `/${rest}` : ''}`);
}

export function switchPath(pathname: string): string {
  const target: Lang = isEsPath(pathname) ? 'ca' : 'es';
  return localizedPath(target, toCanonicalPath(pathname));
}

export function alternatePaths(pathname: string): Record<Lang, string> {
  const canonical = toCanonicalPath(pathname);
  return {
    ca: localizedPath('ca', canonical),
    es: localizedPath('es', canonical),
  };
}
