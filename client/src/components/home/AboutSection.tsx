import { Button } from "@/components/ui/button";
import { Award, Users, Heart, MapPin } from "lucide-react";
import calvinKattarImg from "@assets/IMAGES/CZCalvinKattarFiller.jpg";

export function AboutSection() {
    return (
        <section className="py-24 md:py-32 pb-40 md:pb-48 bg-white relative overflow-visible -mt-8">
            
            <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
                <div className="flex justify-center">
                    {/* Overlapping Cards Container - positioned so 25% from left of picture is at center */}
                    <div className="relative w-full max-w-6xl scroll-reveal -mt-20 translate-x-[16%] lg:translate-x-[14%]">
                        {/* Image Card - Base Layer - Smaller, positioned higher */}
                        <div className="aspect-[4/3] w-full max-w-xl mx-auto relative overflow-visible shadow-2xl transform -rotate-1">
                            <img 
                                src={calvinKattarImg} 
                                alt="Calvin Kattar" 
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Text Card - Overlapping at bottom-right with slight rotation for visual interest */}
                            <div className="absolute top-[40%] right-0 lg:right-80 xl:right-96 bg-white shadow-2xl p-6 md:p-8 w-full lg:w-[95%] max-w-3xl transform rotate-1 scroll-reveal scroll-reveal-delay-1 z-10">
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-[Chakra_Petch] uppercase italic leading-tight mb-4">
                                From the Octagon to <span className="text-primary">Ownership</span>
                            </h2>
                            
                            <p className="text-base text-slate-700 mb-6 leading-relaxed">
                                UFC veteran <span className="font-bold text-slate-900">Calvin Kattar</span> brings his firsthand experience from the highest levels of competition to create opportunities for the next generation of fighters. A <span className="font-bold text-slate-900">family-owned</span> operation built on passion, respect, and an unwavering commitment to the sport.
                            </p>
                            
                            {/* Stats/Features Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                                        <Award className="text-primary" size={16} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-xs uppercase mb-0.5">UFC Veteran</div>
                                        <div className="text-xs text-slate-600">Calvin Kattar</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                                        <Users className="text-primary" size={16} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-xs uppercase mb-0.5">Family Owned</div>
                                        <div className="text-xs text-slate-600">Since 2000</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                                        <Heart className="text-primary" size={16} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-xs uppercase mb-0.5">Fighter First</div>
                                        <div className="text-xs text-slate-600">Built for fighters</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary" size={16} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-xs uppercase mb-0.5">New England</div>
                                        <div className="text-xs text-slate-600">24+ years</div>
                                    </div>
                                </div>
                            </div>

                            <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase px-6 py-4 rounded-none text-sm">
                                Read Our Story
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
