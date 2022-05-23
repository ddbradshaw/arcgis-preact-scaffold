import { atom, selector } from 'recoil';

interface MapState {
  location: { lat: number; lng: number; zoom: number };
  clickLocation?: { lat: number; lng: number };
}

const defaultLocation = { lat: 42.3, lng: -83.1, zoom: 11 };

export const mapAtom = atom({
  key: 'mapAtom', // unique ID (with respect to other atoms/selectors)
  default: <MapState>{
    location: defaultLocation,
  },
});

export const getLocation = selector({
  key: 'locSelector',
  get: ({ get }) => get(mapAtom).location,
});
