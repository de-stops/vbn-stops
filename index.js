const exportStops = require("hafas-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "https://fahrplaner.vbn.de/hafas/query.exe/dny?performLocating=2&tpl=stop2json&look_stopclass=2147483647&look_minx={minx}&look_miny={miny}&look_maxx={maxx}&look_maxy={maxy}";

exportStops(ENDPOINT_BASE_URL_TEMPLATE, "UTF-8", 5, 47, 15, 56, null, [51, 54, 80, 81, 84, 85, 87, 88]);
