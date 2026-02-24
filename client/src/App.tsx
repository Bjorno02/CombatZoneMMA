import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import EventsPage from "@/pages/events";
import PastEventsPage from "@/pages/past-events";
import AboutPage from "@/pages/about";
import FightersPage from "@/pages/fighters";
import ChampionsPage from "@/pages/champions";
import FighterFormsPage from "@/pages/fighter-forms";
import FighterApplicationPage from "@/pages/fighter-application";
import MediaPage from "@/pages/media";
import PhotoArchivePage from "@/pages/photo-archive";
import ShopPage from "@/pages/shop";
import SponsorsPage from "@/pages/sponsors";
import CurrentSponsorsPage from "@/pages/current-sponsors";
import SponsorPackagesPage from "@/pages/sponsor-packages";
import ContactPage from "@/pages/contact";
import VIPPage from "@/pages/vip";
import FightCardPage from "@/pages/fight-card";
import SocialPage from "@/pages/social";
import NewsletterPage from "@/pages/newsletter";
import KattarmaniaPage from "@/pages/kattarmania";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events/past" component={PastEventsPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/fighters" component={FightersPage} />
      <Route path="/fighters/forms" component={FighterFormsPage} />
      <Route path="/apply" component={FighterApplicationPage} />
      <Route path="/champions" component={ChampionsPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/media/photos" component={PhotoArchivePage} />
      <Route path="/shop/kattarmania" component={KattarmaniaPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sponsors" component={SponsorsPage} />
      <Route path="/sponsors/current" component={CurrentSponsorsPage} />
      <Route path="/sponsor-packages" component={SponsorPackagesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/vip" component={VIPPage} />
      <Route path="/fight-card" component={FightCardPage} />
      <Route path="/social" component={SocialPage} />
      <Route path="/newsletter" component={NewsletterPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
