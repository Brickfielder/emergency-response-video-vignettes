const CACHE_NAME = "neurorehab-safety-vignettes-v17";

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260501a",
  "./app.js?v=20260501a",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./videos/pan-fire.mp4",
  "./videos/traffic.mp4",
  "./videos/trip-hazard.mp4",
  "./videos/unwell-person.mp4",
  "./videos/possible-scam.mp4",
  "./videos/overflowing-sink.mp4",
  "./assets/choices/pan-fire/move-away.png",
  "./assets/choices/pan-fire/turn-off-hob.png",
  "./assets/choices/pan-fire/call-for-help.png",
  "./assets/choices/pan-fire/call-999.png",
  "./assets/choices/pan-fire/put-water-on-it.png",
  "./assets/choices/pan-fire/pick-up-pan.png",
  "./assets/choices/pan-fire/ignore-it.png",
  "./assets/choices/pan-fire/i-dont-know.png",
  "./assets/choices/overflowing-sink/turn-off-tap.png",
  "./assets/choices/overflowing-sink/switch-off-power.png",
  "./assets/choices/overflowing-sink/move-away.png",
  "./assets/choices/overflowing-sink/call-for-help.png",
  "./assets/choices/overflowing-sink/call-999.png",
  "./assets/choices/overflowing-sink/touch-wet-appliance.png",
  "./assets/choices/overflowing-sink/ignore-it.png",
  "./assets/choices/overflowing-sink/i-dont-know.png",
  "./assets/choices/traffic/stop-wait.png",
  "./assets/choices/traffic/shout-to-child.png",
  "./assets/choices/traffic/alert-driver.png",
  "./assets/choices/traffic/watch-do-nothing.png",
  "./assets/choices/traffic/walk-away.png",
  "./assets/choices/traffic/call-999.png",
  "./assets/choices/traffic/step-into-road.png",
  "./assets/choices/traffic/wave-car-through.png",
  "./assets/choices/traffic/i-dont-know.png",
  "./assets/choices/trip-hazard/stop.png",
  "./assets/choices/trip-hazard/move-around.png",
  "./assets/choices/trip-hazard/clear-hazard.png",
  "./assets/choices/trip-hazard/ask-for-help.png",
  "./assets/choices/trip-hazard/use-aid-handrail.png",
  "./assets/choices/trip-hazard/step-over-quickly.png",
  "./assets/choices/trip-hazard/ignore-it.png",
  "./assets/choices/trip-hazard/i-dont-know.png",
  "./assets/choices/unwell-person/check-response.png",
  "./assets/choices/unwell-person/call-for-help.png",
  "./assets/choices/unwell-person/call-999.png",
  "./assets/choices/unwell-person/stay-with-them.png",
  "./assets/choices/unwell-person/give-food-drink.png",
  "./assets/choices/unwell-person/move-them.png",
  "./assets/choices/unwell-person/ignore-walk-away.png",
  "./assets/choices/unwell-person/i-dont-know.png",
  "./assets/choices/possible-scam/keep-door-partly-closed.png",
  "./assets/choices/possible-scam/ask-for-id.png",
  "./assets/choices/possible-scam/call-trusted-person.png",
  "./assets/choices/possible-scam/refuse-entry.png",
  "./assets/choices/possible-scam/give-personal-details.png",
  "./assets/choices/possible-scam/let-them-in.png",
  "./assets/choices/possible-scam/hand-over-money-card.png",
  "./assets/choices/possible-scam/i-dont-know.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached && event.request.headers.has("range")) {
        return rangedResponse(event.request, cached);
      }
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});

async function rangedResponse(request, response) {
  const range = request.headers.get("range");
  const bytesPrefix = "bytes=";
  if (!range || !range.startsWith(bytesPrefix)) return response;

  const [startText, endText] = range.slice(bytesPrefix.length).split("-");
  const buffer = await response.arrayBuffer();
  const start = Number(startText);
  const end = endText ? Number(endText) : buffer.byteLength - 1;

  if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= buffer.byteLength) {
    return new Response(null, {
      status: 416,
      headers: {
        "Content-Range": `bytes */${buffer.byteLength}`
      }
    });
  }

  return new Response(buffer.slice(start, end + 1), {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Content-Range": `bytes ${start}-${end}/${buffer.byteLength}`,
      "Accept-Ranges": "bytes",
      "Content-Length": String(end - start + 1),
      "Content-Type": response.headers.get("Content-Type") || "video/mp4"
    }
  });
}
