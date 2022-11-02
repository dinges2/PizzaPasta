self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/manifestus.json",
                "./src/images/GET.png"
            ]);
        })
    );
    console.log("Resources in cache. Done");
});