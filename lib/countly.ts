import countly from "countly-sdk-web";

const config = {
  key: "2c7cb734e40a8c2ffe4ac03fb339c235cf098f4d", // publicly available on the website so ok to source control this
  url: "https://countly.protocol.ai",
};

/**
 * Initialize countly analytics object
 */
export function init() {
  if (typeof window === "undefined") {
    return;
  }

  if (ready) {
    return;
  }

  if (!config.key || !config.url) {
    console.warn("[lib/countly]", "Countly config not found.");

    return;
  }

  countly.init({ app_key: config.key, url: config.url, debug: false });

  countly.track_sessions();
  countly.track_pageview();
  countly.track_clicks();
  countly.track_links();
  countly.track_scrolls();

  ready = true;
}

export function trackPageView(path: string) {
  if (!ready) {
    init();
  }

  ready && countly.track_pageview(path);
}

export let ready = false;

export default {
  init,
  trackPageView,
  ready,
};
