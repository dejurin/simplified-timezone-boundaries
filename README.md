Boundaries of time zones fat-free.

# What's that?

The goal is to create a ready GeoJSON file with time zone boundaries in a simplified version to load as a layer on OSM maps.

Two wonderful repositories will help us to implement our project [mapshaper](https://github.com/mbloch/mapshaper) and [timezone-boundary-builder](https://github.com/evansiroky/timezone-boundary-builder) (many thanks to the authors for this work).

## Getting started

[How to install PNPM](https://pnpm.io/installation)

```
pnpm i
```

```
node index.js visvalingam 0.21%
```
- **visvalingam** is simplification. Mapshaper supports Douglas-Peucker (dp) simplification and two kinds of Visvalingam (visvalingam) simplification.
- **0.21%** is percentage of removable points to retain. Accepts values in the range 0%-100% or 0-1
  
[Read More](https://github.com/mbloch/mapshaper/wiki/Command-Reference)


## Result

Result: [output.geojson](output.geojson)

![output.geojson](https://github.com/dejurin/simplified-timezone-boundaries/blob/main/map.png?raw=true)

You can see the result of the degreasing at http://geojson.io/ (copy the contents of the file [output.geojson](output.geojson) and paste it into the form).

### Referrals

- https://github.com/evansiroky/timezone-boundary-builder - A tool to extract data from Open Street Map (OSM) to build the boundaries of the world's timezones.
- https://mapshaper.org/ - Simplification online tool.
- http://geojson.io/ - A quick, simple tool for creating, viewing, and sharing spatial data.
- https://bost.ocks.org/mike/simplify/ - Line Simplification.
- https://nominatim.openstreetmap.org/search?country=ukraine&polygon_geojson=1&format=geojson&polygon_threshold=0.1 - polygon_threshold
