export type AnalyticsScalar = string | number | boolean;
export type AnalyticsProps = Record<string, AnalyticsScalar>;

declare global {
  interface Window {
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
export function trackAnalytics(
  eventName: string,
  props?: AnalyticsProps,
): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  window.umami?.track(eventName, props);
}

export function hasAnalyticsConsent(): boolean {
  return window.localStorage.getItem("geenie_analytics_consent") === "granted";
}
