import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import * as watchUtils from '@arcgis/core/core/watchUtils';

let map: ArcGISMap;
let view: MapView;

export function initialize(
  container: string,
  defaultLocation: { lat: number; lng: number; zoom: number },
) {
  map = new ArcGISMap({
    basemap: 'dark-gray-vector',
  });

  view = new MapView({
    container,
    map,
    zoom: defaultLocation.zoom,
    center: [defaultLocation.lng, defaultLocation.lat],
  });

  // Watch view's stationary property for becoming true.
  watchUtils.whenTrue(view, 'stationary', () => {
    // Get the new extent of the view only when view is stationary.
    if (view.center) {
      updateURLLocation(view.center, view.zoom);
    }
  });

  return () => {
    view.destroy();
    map.destroy();
    //view.container = null;
  };
}

function updateURLLocation(center: __esri.Point, zoom: number) {
  // TODO: Decide how we leverage the URL for locations
  // The following line will update the URL (including history)
  // route(`/map#loc=${center.latitude},${center.longitude},${zoom}z`);
}

export function zoomTo(coords: number[]) {
  view.goTo({
    center: coords,
    zoom: 12,
  });
}
