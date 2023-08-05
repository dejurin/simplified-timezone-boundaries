import got from "got";
import { pipeline as streamPipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import decompress from "decompress";
import { exec } from "node:child_process";

async function get(url) {
  try {
    const data = await got.get(url).json();
    return data;
  } catch (error) {
    onError(error);
  }
}

const onError = (error) => {
  console.error(error);
};

const filename = "timezones.shapefile.zip";
const target = "output.geojson";

const [,,algorithm, percentage] = process.argv;

function convert() {
    exec(
      `pnpm exec mapshaper ./dist/combined-shapefile.shp -simplify ${algorithm} ${percentage} -o precision=0.00001 ${target}`,
      (err, output) => {
        // once the command has completed, the callback function is called
        if (err) {
          // log and return if we encounter an error
          console.error("could not execute command: ", err);
          return;
        }
        // log the output received from the command
        console.log("File conversion completed");
      },
    );
  }

async function main() {
  const releaseData = await get(
    "https://api.github.com/repos/evansiroky/timezone-boundary-builder/releases/latest",
  );
  const downloadUrl = releaseData.assets.filter(
    (item) => item.name === filename,
  );
  const zipFile = downloadUrl[0]["browser_download_url"];

  const readStream = await got.stream(zipFile, { throwHttpErrors: false });

  readStream.on("response", async (response) => {
    if (response.headers.age > 3600) {
      console.log("Failure - response too old");
      readStream.destroy(); // Destroy the stream to prevent hanging resources.
      return;
    }
    readStream.off("error", onError);
    try {
      await streamPipeline(readStream, createWriteStream(filename));

      console.log(`File downloaded successfully ${target}`);

      decompress(filename, "dist")
        .then((files) => {
          convert();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      onError(error);
    }
  });

  readStream.once("error", onError);
}

await main();
