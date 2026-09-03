import { lazy, Suspense, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SystemCheckProvider } from "./contexts/SystemCheckContext";
const Home = lazy(() => import("./pages/Home"));
const Kreation = lazy(() => import("./pages/Kreation"));
const Projektanfrage = lazy(() => import("./pages/Projektanfrage"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Agb = lazy(() => import("./pages/Agb"));
const Showroom = lazy(() => import("./pages/Showroom"));

function ScrollToTop() {
  const [location] = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.split("#")[0];
    const hasHashTarget = typeof window !== "undefined" && window.location.hash.length > 1;

    // Keep deliberate in-page anchors, such as /showroom#gm-category-01,
    // at their target instead of overriding the browser's anchor behavior.
    if (hasHashTarget) {
      previousPath.current = currentPath;
      return;
    }

    if (previousPath.current !== currentPath) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      previousPath.current = currentPath;
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505]" aria-label="Seite wird geladen" />
      }
    >
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/kreation" component={Kreation} />
      <Route path="/showroom" component={Showroom} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/projektanfrage" component={Projektanfrage} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/agb" component={Agb} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <SystemCheckProvider>
          <TooltipProvider>
            <Toaster position="top-right" />
            <Router />
            <ScrollToTop />
            <CookieConsent />
          </TooltipProvider>
        </SystemCheckProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
