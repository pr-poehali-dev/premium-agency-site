export const PAGE_COLORS: { [key: string]: { primary: string; secondary: string; hover: string } } = {
  '/': { primary: 'rgba(255,107,107,0.5)', secondary: 'rgba(238,90,82,0.3)', hover: 'rgba(255,107,107,0.15)' },
  '/portfolio': { primary: 'rgba(78,205,196,0.8)', secondary: 'rgba(68,179,170,0.5)', hover: 'rgba(78,205,196,0.08)' },
  '/design': { primary: 'rgba(149,225,211,0.8)', secondary: 'rgba(124,201,185,0.5)', hover: 'rgba(149,225,211,0.08)' },
  '/development': { primary: 'rgba(234,179,8,0.8)', secondary: 'rgba(202,138,4,0.5)', hover: 'rgba(234,179,8,0.08)' },
  '/marketing': { primary: 'rgba(255,140,66,0.8)', secondary: 'rgba(230,126,60,0.5)', hover: 'rgba(255,140,66,0.08)' },
  '/ai': { primary: 'rgba(167,139,250,0.8)', secondary: 'rgba(150,118,232,0.5)', hover: 'rgba(167,139,250,0.08)' },
  '/pricing': { primary: 'rgba(52,211,153,0.8)', secondary: 'rgba(42,184,122,0.5)', hover: 'rgba(52,211,153,0.08)' },
  '/team': { primary: 'rgba(96,165,250,0.8)', secondary: 'rgba(79,143,232,0.5)', hover: 'rgba(96,165,250,0.08)' },
  '/reviews': { primary: 'rgba(244,114,182,0.8)', secondary: 'rgba(226,95,160,0.5)', hover: 'rgba(244,114,182,0.08)' },
  '/partners': { primary: 'rgba(129,140,248,0.8)', secondary: 'rgba(107,118,230,0.5)', hover: 'rgba(129,140,248,0.08)' },
  '/contact': { primary: 'rgba(45,212,191,0.8)', secondary: 'rgba(38,186,170,0.5)', hover: 'rgba(45,212,191,0.08)' },
  '/about': { primary: 'rgba(56,189,248,0.8)', secondary: 'rgba(46,167,230,0.5)', hover: 'rgba(56,189,248,0.08)' },
  '/quiz': { primary: 'rgba(251,191,36,0.8)', secondary: 'rgba(233,174,30,0.5)', hover: 'rgba(251,191,36,0.08)' },
  '/faqs': { primary: 'rgba(192,132,252,0.8)', secondary: 'rgba(169,111,232,0.5)', hover: 'rgba(192,132,252,0.08)' },
};

export const getPageColor = (pathname: string) => PAGE_COLORS[pathname] || PAGE_COLORS['/'];
