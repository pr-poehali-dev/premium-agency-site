import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  keywords?: string;
  schema?: object;
}

const SITE_NAME = 'ALBE Digital Agency';
const BASE_URL = 'https://albe.agency';
const OG_IMAGE = 'https://cdn.poehali.dev/intertnal/img/og.png';

const SEO = ({ title, description, path, type = 'website', keywords, schema }: SEOProps) => {
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
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Сочи',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-995-987-0353',
      contactType: 'customer service',
      email: 'albe.web@yandex.ru',
      availableLanguage: ['Russian', 'English'],
      areaServed: ['RU', 'US', 'EU'],
    },
    founder: {
      '@type': 'Person',
      name: 'Алексей Беляев',
      jobTitle: 'CEO & Founder',
    },
    sameAs: [
      'https://t.me/albe_web',
      'https://vk.com/albeweb',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    image: OG_IMAGE,
    '@id': BASE_URL,
    url: BASE_URL,
    telephone: '+7-995-987-0353',
    priceRange: '₽₽₽',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Сочи',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.585472,
      longitude: 39.723098,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://t.me/albe_web',
      'https://vk.com/albeweb',
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="Russian" />
      <meta name="geo.region" content="RU-KDA" />
      <meta name="geo.placename" content="Сочи" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="yandex" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      <script type="application/ld+json">{JSON.stringify(breadcrumbList)}</script>
      {path === '/' && (
        <>
          <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        </>
      )}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;