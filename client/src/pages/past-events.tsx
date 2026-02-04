import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Search, Filter, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { PAST_EVENTS, EVENT_STATS } from "@/data/events";

export default function PastEventsPage() {
  useSEO(SEO_CONFIG.pastEvents);
  return (
    <PageLayout>
      <SectionHero
        label="Results Archive"
        title="PAST\nEVENTS"
        highlightWord="EVENTS"
        description="Browse the complete history of Combat Zone events, fight results, and championship bouts."
        size="short"
      />

      {/* Stats Overview */}
      <section className="bg-white border-b border-neutral-200">
        <Container>
          <div className="grid grid-cols-4 divide-x divide-neutral-200">
            <div className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900">
                90
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-neutral-500 mt-1">
                Events
              </div>
            </div>
            <div className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900">
                24+
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-neutral-500 mt-1">Years</div>
            </div>
            <div className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900">
                1000+
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-neutral-500 mt-1">
                Fights
              </div>
            </div>
            <div className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900">
                50+
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-neutral-500 mt-1">
                Champions
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-neutral-50 border-b border-neutral-200 sticky top-0 z-20">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -tranneutral-y-1/2 text-neutral-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded bg-white text-sm w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  disabled
                />
              </div>
              <Button variant="outline" className="border-neutral-300 text-neutral-600" disabled>
                <Filter size={16} className="mr-2" />
                Filter by Year
              </Button>
            </div>
            <div className="text-sm text-neutral-500">
              Showing <span className="font-bold text-neutral-900">90</span> events
            </div>
          </div>
        </Container>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Year Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">2025</div>
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-sm text-neutral-500">4 events</span>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {PAST_EVENTS.slice(0, 4).map((event) => (
              <div
                key={event.id}
                className="group relative bg-white border border-neutral-200 hover:border-primary/50 transition-all overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="p-6">
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl font-bold font-[Chakra_Petch] text-neutral-900 group-hover:text-primary transition-colors">
                        CZ{event.id}
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-neutral-500">
                        <Calendar size={14} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-neutral-100 group-hover:bg-primary/10 rounded flex items-center justify-center transition-colors">
                      <Trophy
                        className="text-neutral-400 group-hover:text-primary transition-colors"
                        size={20}
                      />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Venue</span>
                      <span className="font-medium text-neutral-900">{event.venue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Total Fights</span>
                      <span className="font-medium text-neutral-900">{event.fights}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 group-hover:border-primary group-hover:text-primary uppercase font-bold tracking-wider text-sm transition-colors"
                    disabled
                  >
                    View Results
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* 2024 Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">2024</div>
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-sm text-neutral-500">4 events</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAST_EVENTS.slice(4).map((event) => (
              <div
                key={event.id}
                className="group relative bg-white border border-neutral-200 hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl font-bold font-[Chakra_Petch] text-neutral-900 group-hover:text-primary transition-colors">
                        CZ{event.id}
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-neutral-500">
                        <Calendar size={14} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-neutral-100 group-hover:bg-primary/10 rounded flex items-center justify-center transition-colors">
                      <Trophy
                        className="text-neutral-400 group-hover:text-primary transition-colors"
                        size={20}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Venue</span>
                      <span className="font-medium text-neutral-900">{event.venue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Total Fights</span>
                      <span className="font-medium text-neutral-900">{event.fights}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 group-hover:border-primary group-hover:text-primary uppercase font-bold tracking-wider text-sm transition-colors"
                    disabled
                  >
                    View Results
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Archive Notice */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                In Development
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-3">
                FULL ARCHIVE COMING SOON
              </h2>
              <p className="text-neutral-400 max-w-lg">
                We're building a comprehensive archive of all 90+ Combat Zone events with complete
                fight results, statistics, and historical data.
              </p>
            </div>
            <Link href="/events">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8 whitespace-nowrap"
              >
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
