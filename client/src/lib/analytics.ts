export type AnalyticsScalar = string | number | boolean;
export type AnalyticsProps = Record<string, AnalyticsScalar>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    umami?: {
      track: (
        eventName: string,
        eventData?: AnalyticsProps,
      ) => void;
    };
  }
}

/**
 * Sends an event through the Umami script already loaded in client/index.html.
 * The optional consent key keeps tracking disabled until the site's consent
 * mechanism explicitly grants analytics consent. If no consent manager is
 * configured yet, events remain disabled rather than being sent implicitly.
 */
const ANALYTICS_SCRIPT_ID = "geenie-umami-script";
const GOOGLE_ANALYTICS_SCRIPT_ID = "geenie-google-analytics-script";
const GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-0YZ4VSD60T";

let analyticsScriptPromise: Promise<void> | undefined;
let googleAnalyticsScriptPromise: Promise<void> | undefined;

export function trackAnalytics(
  eventName: string,
  props?: AnalyticsProps,
): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  window.umami?.track(eventName, props);
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem("geenie_analytics_consent") === "granted";
  } catch {
    return false;
  }
}

export function loadGoogleAnalyticsScript(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (document.getElementById(GOOGLE_ANALYTICS_SCRIPT_ID)) return Promise.resolve();
  if (googleAnalyticsScriptPromise) return googleAnalyticsScriptPromise;

  googleAnalyticsScriptPromise = new Promise<void>((resolve) => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID, { anonymize_ip: true });

    const script = document.createElement("script");
    script.id = GOOGLE_ANALYTICS_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(script);
  });

  return googleAnalyticsScriptPromise;
}

export function loadAnalyticsScript(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (window.umami) return Promise.resolve();
  if (analyticsScriptPromise) return analyticsScriptPromise;

  analyticsScriptPromise = new Promise<void>((resolve) => {
    const existing = document.getElementById(ANALYTICS_SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
    if (!endpoint || !websiteId) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = ANALYTICS_SCRIPT_ID;
    script.defer = true;
    script.src = `${endpoint.replace(/\/$/, "")}/umami`;
    script.dataset.websiteId = websiteId;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(script);
  });

  return analyticsScriptPromise;
}
