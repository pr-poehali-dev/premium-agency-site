import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE_NAME = 'ALBE Digital Agency';
const BASE_URL = 'https://albe.agency';
const OG_IMAGE = 'https://cdn.poehali.dev/intertnal/img/og.png';

const SEO = ({ title, description, path, type = 'website' }: SEOProps) => {
  const fullTitle = path === '/' ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: BASE_URL },
      ...(path !== '/'
        ? [{ '@type': 'ListItem', position: 2, name: title, item: url }]
        : []),
    ],
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: OG_IMAGE,
    description: 'Цифровое агентство полного цикла: разработка, дизайн, маркетинг, AI-решения',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'English'],
    },
    sameAs: ['https://t.me/+QgiLIa1gFRY4Y2Iy'],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="yandex" content="index, follow" />

      <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
      {path === '/' && (
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
