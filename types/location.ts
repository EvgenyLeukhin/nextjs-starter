export type TLocation = {
  alias_region: string;
  country: string;
  geonameId: number;
  id: number;
  lat: number;
  lon: number;
  lonlat: {
    lat: number;
    lng: number;
  };
  name: string;
  population: number;
  region: string;
  slug: string;
  timezone: string;
  top: number | null;
  weight: number | null;
};
