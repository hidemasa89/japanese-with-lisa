/**
 * A representative list of countries for the contact form's country field.
 * Not an exhaustive ISO-3166 list — trimmed to keep the dropdown usable,
 * with the countries most likely among Japanese-learners listed first and
 * everything else alphabetical, plus a catch-all "Other" option.
 */
export const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Brazil',
  'Mexico',
  'India',
  'Philippines',
  'Indonesia',
  'Vietnam',
  'Thailand',
  'Singapore',
  'Malaysia',
  'South Korea',
  'China',
  'Taiwan',
  'Hong Kong',
  'New Zealand',
  'Ireland',
  'Sweden',
  'Norway',
  'Poland',
  'Portugal',
  'South Africa',
  'United Arab Emirates',
  'Other',
] as const;

export type Country = (typeof countries)[number];
