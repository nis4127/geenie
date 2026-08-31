import { useEffect, useState } from "react";
import {
  getOrAssignVariant,
  trackCtaClick,
  trackExposure,
  type CtaExperiment,
  type CtaVariant,
} from "../lib/ctaExperiment";

export function useCtaExperiment(experiment: CtaExperiment) {
  const [variant, setVariant] = useState<CtaVariant>("control");

  useEffect(() => {
    const assigned = getOrAssignVariant(experiment.id);
    setVariant(assigned);
    trackExposure(experiment, assigned);
  }, [experiment.id, experiment.page, experiment.ctaId]);

  function onCtaClick(position: "hero" | "mid_page" | "footer") {
    trackCtaClick(experiment, variant, position);
  }

  return { variant, onCtaClick };
}
