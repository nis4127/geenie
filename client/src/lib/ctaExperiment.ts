import { trackAnalytics } from "./analytics";

export type CtaVariant = "control" | "variant_b";

export interface CtaExperiment {
  id: string;
  page: "home" | "ueber-uns" | "kreation" | "showroom";
  ctaId: string;
}

function assignmentKey(testId: string): string {
  return `geenie_ab_${testId}`;
}

function exposureKey(testId: string): string {
  return `${assignmentKey(testId)}_exposed`;
}

export function getOrAssignVariant(testId: string): CtaVariant {
  if (typeof window === "undefined") return "control";

  const key = assignmentKey(testId);
  const stored = window.localStorage.getItem(key);
  if (stored === "control" || stored === "variant_b") return stored;

  const assigned: CtaVariant = Math.random() < 0.5 ? "control" : "variant_b";
  window.localStorage.setItem(key, assigned);
  return assigned;
}

export function trackExposure(
  experiment: CtaExperiment,
  variant: CtaVariant,
): void {
  if (typeof window === "undefined") return;

  const key = exposureKey(experiment.id);
  if (window.sessionStorage.getItem(key)) return;

  trackAnalytics("cta_exposure", {
    test_id: experiment.id,
    page: experiment.page,
    cta_id: experiment.ctaId,
    variant,
  });

  window.sessionStorage.setItem(key, "1");
}

export function trackCtaClick(
  experiment: CtaExperiment,
  variant: CtaVariant,
  position: "hero" | "mid_page" | "footer",
): void {
  trackAnalytics("cta_click", {
    test_id: experiment.id,
    page: experiment.page,
    cta_id: experiment.ctaId,
    variant,
    position,
  });
}

export function trackProjectRequestStart(
  experiment: CtaExperiment,
  variant: CtaVariant,
): void {
  trackAnalytics("project_request_start", {
    test_id: experiment.id,
    page: experiment.page,
    source_cta: experiment.ctaId,
    variant,
  });
}

export function trackProjectRequestSubmit(
  experiment: CtaExperiment,
  variant: CtaVariant,
): void {
  trackAnalytics("project_request_submit", {
    test_id: experiment.id,
    page: experiment.page,
    source_cta: experiment.ctaId,
    variant,
  });
}
