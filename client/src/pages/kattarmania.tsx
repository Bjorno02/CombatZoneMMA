import { useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { useSEO } from "@/hooks/useSEO";

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

export default function KattarmaniaPage() {
  useSEO({
    title: "Kattarmania Collection | Combat Zone MMA",
    description:
      "Shop the exclusive Kattarmania collection from UFC veteran Calvin Kattar. Official Combat Zone MMA merchandise.",
  });

  const shopifyInitialized = useRef(false);

  useEffect(() => {
    if (shopifyInitialized.current) return;
    shopifyInitialized.current = true;

    const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) {
        return;
      }

      const client = window.ShopifyBuy.buildClient({
        domain: "p5rwip-64.myshopify.com",
        storefrontAccessToken: "ccab007e3fe2aac68a4d91b5f4adfbb0",
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        const node = document.getElementById("shopify-kattarmania");

        ui.createComponent("collection", {
          id: "306115543082",
          node: node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              contents: {
                img: true,
                title: true,
                price: true,
                compareAt: false,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(33.33333% - 30px)",
                    "margin-left": "30px",
                    "margin-bottom": "50px",
                    width: "calc(33.33333% - 30px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                title: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  "letter-spacing": "0.02em",
                  color: "#171717",
                  "font-size": "16px",
                },
                price: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "600",
                  color: "#c73a3a",
                  "font-size": "18px",
                },
                compareAt: {
                  display: "none",
                },
                button: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  "letter-spacing": "0.05em",
                  "background-color": "#171717",
                  "border-radius": "0px",
                  padding: "14px 24px",
                  ":hover": {
                    "background-color": "#c73a3a",
                  },
                  ":focus": {
                    "background-color": "#c73a3a",
                  },
                },
              },
              text: {
                button: "ADD TO CART",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-30px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
                compareAt: false,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                title: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  color: "#171717",
                },
                price: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "600",
                  color: "#c73a3a",
                },
                compareAt: {
                  display: "none",
                },
                button: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  "letter-spacing": "0.05em",
                  "background-color": "#171717",
                  "border-radius": "0px",
                  ":hover": {
                    "background-color": "#c73a3a",
                  },
                  ":focus": {
                    "background-color": "#c73a3a",
                  },
                },
              },
              text: {
                button: "ADD TO CART",
              },
            },
            option: {
              styles: {
                label: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "600",
                  "text-transform": "uppercase",
                },
              },
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                  "letter-spacing": "0.05em",
                  "background-color": "#c73a3a",
                  "border-radius": "0px",
                  ":hover": {
                    "background-color": "#171717",
                  },
                  ":focus": {
                    "background-color": "#171717",
                  },
                },
                title: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  "text-transform": "uppercase",
                },
                header: {
                  "font-family": "Chakra Petch, sans-serif",
                },
                lineItems: {
                  "font-family": "Chakra Petch, sans-serif",
                },
                subtotalText: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                },
                subtotal: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                  color: "#c73a3a",
                },
              },
              text: {
                total: "Subtotal",
                button: "CHECKOUT",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#171717",
                  "border-radius": "0px",
                  ":hover": {
                    "background-color": "#c73a3a",
                  },
                  ":focus": {
                    "background-color": "#c73a3a",
                  },
                },
                count: {
                  "font-family": "Chakra Petch, sans-serif",
                  "font-weight": "700",
                },
              },
            },
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = () => {
        ShopifyBuyInit();
      };
      const target = document.head || document.body;
      target.appendChild(script);
    }
  }, []);

  return (
    <PageLayout>
      {/* Hero - Light/White with design elements */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 bg-white overflow-hidden">
        {/* Angular accent shape */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-neutral-100 -skew-x-12 origin-top-right translate-x-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right translate-x-32" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-24 h-1 bg-primary/20" />
        <div className="absolute top-1/3 left-8 w-12 h-1 bg-neutral-300" />
        <div className="absolute bottom-1/4 right-8 w-16 h-1 bg-primary/30 hidden md:block" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Exclusive Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-neutral-900 leading-[1.05] mb-4">
              KATTAR<span className="text-primary">MANIA</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Official merchandise from UFC featherweight contender and Combat Zone owner Calvin
              Kattar.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Shopify Collection */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div id="shopify-kattarmania" className="min-h-[400px]" />
        </Container>
      </section>
    </PageLayout>
  );
}
