Boundaries of time zones fat-free.

# What's that?

The goal is to create a ready GeoJSON file with time zone boundaries in a simplified version to load as a layer on OSM maps.

Two wonderful repositories will help us to implement our project https://github.com/mbloch/mapshaper and https://github.com/evansiroky/timezone-boundary-builder (many thank authors for this job).

## Getting started

```
node index.js visvalingam 0.21%
```
- **visvalingam** is simplification. Mapshaper supports Douglas-Peucker (dp) simplification and two kinds of Visvalingam (visvalingam) simplification.
- **0.21%** is percentage of removable points to retain. Accepts values in the range 0%-100% or 0-1
  
[Read More](https://github.com/mbloch/mapshaper/wiki/Command-Reference)


## Result

Result: [output.geojson](output.geojson)

You can see the result of the degreasing at http://geojson.io/ (copy the contents of the file [output.geojson](output.geojson) and paste it into the form).

### Referals

https://github.com/evansiroky/timezone-boundary-builder - A tool to extract data from Open Street Map (OSM) to build the boundaries of the world's timezones.
https://mapshaper.org/ - Simplification online tool.
