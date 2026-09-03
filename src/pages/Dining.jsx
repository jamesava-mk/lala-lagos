import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Coffee,
  Utensils,
  Wine,
} from "lucide-react";

const images = {
  hero:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85",

  featured:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85",

  naija:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=85",

  breakfast:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=85",

  pasta:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=85",

  dessert:
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=85",

  drinks:
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=85",

  room:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
};

const menuTabs = [
  {
    id: "bistro",
    label: "Lala's Bistro",
    subtitle: "Contemporary · All Day",
  },
  {
    id: "naija",
    label: "Naija Kitchen",
    subtitle: "Nigerian · Local",
  },
  {
    id: "room",
    label: "In-Room Dining",
    subtitle: "Private · Anytime",
  },
];

const menus = {
  bistro: [
    {
      category: "Breakfast",
      items: [
        {
          name: "Lala's Signature Breakfast",
          description:
            "Two eggs, chicken sausage, mushrooms, roasted tomatoes, crispy potatoes and toast.",
          price: "₦18,500",
        },
        {
          name: "French Toast",
          description:
            "Brioche, cinnamon, caramelised banana and vanilla cream.",
          price: "₦14,000",
        },
        {
          name: "Avocado & Eggs",
          description:
            "Sourdough, smashed avocado, poached eggs, tomatoes and chilli oil.",
          price: "₦16,500",
        },
        {
          name: "Buttermilk Pancakes",
          description:
            "Fluffy pancakes, seasonal fruit, whipped butter and maple syrup.",
          price: "₦13,500",
        },
      ],
    },
    {
      category: "Starters",
      items: [
        {
          name: "Crispy Chicken Wings",
          description:
            "Crispy wings tossed in your choice of pepper glaze or smoky barbecue sauce.",
          price: "₦15,000",
        },
        {
          name: "Crispy Calamari",
          description:
            "Lightly seasoned calamari with chilli-lime aioli.",
          price: "₦19,000",
        },
        {
          name: "Lala's Caesar",
          description:
            "Crisp romaine, parmesan, garlic croutons and Caesar dressing.",
          price: "₦15,000",
        },
      ],
    },
    {
      category: "Mains",
      items: [
        {
          name: "Lala's Jollof",
          description:
            "Smoky jollof rice, grilled chicken, fried plantain and house slaw.",
          price: "₦19,500",
          featured: true,
        },
        {
          name: "Coconut Prawn Linguine",
          description:
            "Prawns, coconut cream, garlic, chilli and fresh herbs.",
          price: "₦27,000",
        },
        {
          name: "Suya-Spiced Ribeye",
          description:
            "Charred ribeye, yaji spice, pepper sauce, crispy onions and fries.",
          price: "₦36,000",
        },
        {
          name: "Grilled Chicken Supreme",
          description:
            "Herb-marinated chicken, creamy mash, vegetables and pan jus.",
          price: "₦24,000",
        },
        {
          name: "Lagos Fish & Chips",
          description:
            "Crispy battered fish, seasoned chips, tartare sauce and slaw.",
          price: "₦25,000",
        },
      ],
    },
    {
      category: "Burgers & Sandwiches",
      items: [
        {
          name: "Lala's Cheeseburger",
          description:
            "Prime beef, cheddar, caramelised onions, lettuce, tomato and house sauce.",
          price: "₦22,000",
        },
        {
          name: "Crispy Chicken Burger",
          description:
            "Crispy chicken, lettuce, pickles, spicy mayo and fries.",
          price: "₦19,500",
        },
        {
          name: "Club Sandwich",
          description:
            "Chicken, turkey, egg, lettuce, tomato, bacon and toasted bread.",
          price: "₦18,500",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Chocolate Fondant",
          description:
            "Warm dark chocolate cake with molten centre and vanilla ice cream.",
          price: "₦12,000",
        },
        {
          name: "Lagos Cheesecake",
          description:
            "Creamy cheesecake with passion fruit, mango and biscuit crumb.",
          price: "₦11,500",
        },
        {
          name: "Coconut Crème Brûlée",
          description:
            "Silky coconut custard finished with caramelised sugar.",
          price: "₦10,500",
        },
      ],
    },
  ],

  naija: [
    {
      category: "Small Plates",
      items: [
        {
          name: "Beef Suya",
          description:
            "Char-grilled beef, yaji spice, onions, tomatoes and house pepper.",
          price: "₦16,000",
        },
        {
          name: "Peppered Gizzard",
          description:
            "Tender gizzard in a rich Nigerian pepper sauce.",
          price: "₦13,500",
        },
        {
          name: "Plantain & Ata Din Din",
          description:
            "Sweet fried plantain served with smoky pepper sauce.",
          price: "₦9,000",
        },
      ],
    },
    {
      category: "Soups",
      items: [
        {
          name: "Seafood Pepper Soup",
          description:
            "Fresh fish, prawns and aromatic Nigerian pepper soup spices.",
          price: "₦21,000",
        },
        {
          name: "Goat Meat Pepper Soup",
          description:
            "Slow-cooked goat meat in a fragrant pepper soup broth.",
          price: "₦18,000",
        },
        {
          name: "Fisherman's Soup",
          description:
            "Rich seafood broth with prawns, fish and traditional spices.",
          price: "₦23,500",
        },
      ],
    },
    {
      category: "Main Plates",
      items: [
        {
          name: "Ofada Rice & Ayamase",
          description:
            "Local Ofada rice, green pepper sauce, assorted meats and egg.",
          price: "₦21,000",
          featured: true,
        },
        {
          name: "Egusi & Pounded Yam",
          description:
            "Rich egusi soup with tender beef and traditional spices.",
          price: "₦21,500",
        },
        {
          name: "Efo Riro & Swallow",
          description:
            "Slow-cooked spinach stew with assorted protein and swallow.",
          price: "₦19,500",
        },
        {
          name: "Peppered Chicken & Jollof",
          description:
            "Char-grilled chicken, pepper sauce, jollof rice and plantain.",
          price: "₦20,000",
        },
      ],
    },
    {
      category: "Sides",
      items: [
        {
          name: "Party Jollof",
          description: "Smoky Nigerian jollof rice.",
          price: "₦8,000",
        },
        {
          name: "Fried Plantain",
          description: "Golden sweet plantain.",
          price: "₦6,500",
        },
        {
          name: "Pounded Yam",
          description: "Smooth traditional pounded yam.",
          price: "₦5,500",
        },
        {
          name: "White Rice",
          description: "Steamed long-grain rice.",
          price: "₦5,500",
        },
      ],
    },
  ],

  room: [
    {
      category: "Breakfast In Bed",
      items: [
        {
          name: "Continental Breakfast",
          description:
            "Fresh fruit, pastries, yoghurt, toast, preserves and coffee or tea.",
          price: "₦15,000",
        },
        {
          name: "Lala's Breakfast",
          description:
            "Eggs, sausage, mushrooms, tomatoes, potatoes, toast and coffee.",
          price: "₦18,500",
        },
        {
          name: "Pancakes & Fruit",
          description:
            "Fluffy pancakes, seasonal fruit, maple syrup and coffee.",
          price: "₦13,500",
        },
      ],
    },
    {
      category: "All Day Favourites",
      items: [
        {
          name: "Jollof Bowl",
          description:
            "Smoky jollof rice, grilled chicken, plantain and slaw.",
          price: "₦19,500",
          featured: true,
        },
        {
          name: "Lala's Cheeseburger",
          description:
            "Prime beef, cheddar, caramelised onions and fries.",
          price: "₦22,000",
        },
        {
          name: "Chicken Club Sandwich",
          description:
            "Chicken, turkey, egg, lettuce, tomato and toasted bread.",
          price: "₦18,500",
        },
        {
          name: "Coconut Prawn Pasta",
          description:
            "Linguine, prawns, coconut cream, garlic and chilli.",
          price: "₦27,000",
        },
      ],
    },
    {
      category: "Late Night",
      items: [
        {
          name: "Chicken Suya Wrap",
          description:
            "Spiced chicken, lettuce, onions, peppers and house sauce.",
          price: "₦16,000",
        },
        {
          name: "Loaded Fries",
          description:
            "Crispy fries with cheese, pepper sauce and grilled chicken.",
          price: "₦14,000",
        },
        {
          name: "Grilled Cheese",
          description:
            "Golden toasted sourdough with melted cheese and tomato soup.",
          price: "₦12,000",
        },
        {
          name: "Chocolate Brownie",
          description:
            "Warm chocolate brownie with vanilla ice cream.",
          price: "₦10,000",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Fresh Mango Juice",
          description: "Fresh mango with a touch of lime.",
          price: "₦7,000",
        },
        {
          name: "Pineapple & Ginger",
          description: "Fresh pineapple juice with Nigerian ginger.",
          price: "₦7,000",
        },
        {
          name: "Iced Coffee",
          description: "Cold coffee, milk and vanilla.",
          price: "₦7,000",
        },
        {
          name: "House Coffee",
          description: "Freshly brewed coffee served your way.",
          price: "₦5,500",
        },
      ],
    },
  ],
};

const categoryImages = {
  bistro: images.pasta,
  naija: images.naija,
  room: images.room,
};

function Dining() {
  const [activeMenu, setActiveMenu] = useState("bistro");

  const currentMenu = menus[activeMenu];

  const jumpToMenu = (menu) => {
    setActiveMenu(menu);

    setTimeout(() => {
      document
        .getElementById("dining-menu")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--color-forest-dark)] text-white">
        <motion.img
          src={images.hero}
          alt="Dining room at Lala's Lagos"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-8 pt-32 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-coral)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/75">
                  Lala's · Dining
                </span>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/50 sm:block">
                Victoria Island · Lagos
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1500px]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-butter)]">
                Breakfast · Lunch · Dinner · Drinks
              </p>

              <h1 className="max-w-6xl text-[clamp(4.5rem,12vw,11rem)] font-semibold leading-[0.75] tracking-[-0.09em]">
                Eat well.
                <br />
                <span className="text-[var(--color-butter)]">
                  Stay awhile.
                </span>
              </h1>
            </motion.div>

            <div className="mt-12 flex items-end justify-between border-t border-white/20 pt-5">
              <p className="max-w-md text-sm leading-7 text-white/65">
                Nigerian flavour, familiar favourites and good drinks — served
                in a space made for lingering.
              </p>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-white/45 sm:flex"
              >
                Scroll to explore
                <ArrowDown size={13} strokeWidth={1.2} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO + FEATURED IMAGE
      ===================================================== */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                The Lala's table
              </span>

              <h2 className="mt-6 text-6xl font-semibold leading-[0.82] tracking-[-0.075em] sm:text-7xl lg:text-[7.5rem]">
                Food that
                <br />
                feels like
                <br />
                <span className="text-[var(--color-forest)]">
                  Lagos.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                From a slow breakfast to a late-night plate of suya, dining
                at Lala's is relaxed, generous and unmistakably local.
              </p>
            </div>

            <div className="relative lg:col-span-6 lg:col-start-7">
              <div className="overflow-hidden">
                <motion.img
                  src={images.featured}
                  alt="Featured dish at Lala's Lagos"
                  loading="lazy"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
              </div>

              <div className="absolute -bottom-8 -left-4 max-w-[270px] bg-[var(--color-butter)] p-6 sm:-left-8 sm:p-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/60">
                  From our kitchen
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-forest)]">
                  Lala's Jollof
                </h3>

                <p className="mt-2 text-xs leading-5 text-[var(--color-forest)]/60">
                  Smoky jollof, grilled chicken, fried plantain and house
                  slaw.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BREAKFAST VISUAL STRIP
      ===================================================== */}
      <section className="bg-[var(--color-forest-dark)] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[720px]">
            <motion.img
              src={images.breakfast}
              alt="Breakfast served at Lala's Lagos"
              loading="lazy"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-10 lg:left-12">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-butter)]">
                Start slowly
              </span>

              <h2 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
                Breakfast.
              </h2>
            </div>
          </div>

          <div className="flex items-center px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
            <div className="max-w-xl">
              <Coffee
                size={24}
                strokeWidth={1.2}
                className="text-[var(--color-butter)]"
              />

              <h2 className="mt-7 text-5xl font-semibold leading-[0.85] tracking-[-0.065em] sm:text-6xl">
                Mornings
                <br />
                <span className="text-[var(--color-butter)]">
                  taste better.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/50">
                Eggs, pancakes, Nigerian favourites and coffee strong enough
                to get Lagos moving. Take your time.
              </p>

              <button
                type="button"
                onClick={() => jumpToMenu("bistro")}
                className="group mt-8 inline-flex items-center gap-5 border border-white/20 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-butter)] hover:text-[var(--color-butter)]"
              >
                View breakfast

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MENU
      ===================================================== */}
      <section
        id="dining-menu"
        className="bg-[var(--color-cream)] px-4 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 max-w-4xl sm:mb-20">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
              Choose your table
            </span>

            <h2 className="mt-5 text-6xl font-semibold leading-[0.8] tracking-[-0.075em] sm:text-7xl lg:text-[8rem]">
              Three ways
              <br />
              to <span className="text-[var(--color-forest)]">eat.</span>
            </h2>
          </div>

          <div className="mx-auto mb-8 grid max-w-5xl border-y border-[var(--color-border)] sm:grid-cols-3">
            {menuTabs.map((tab, index) => {
              const active = activeMenu === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveMenu(tab.id)}
                  className={`group relative min-h-[135px] border-b border-[var(--color-border)] p-5 text-left transition-all duration-500 sm:min-h-[155px] sm:border-b-0 ${
                    index !== 2 ? "sm:border-r" : ""
                  } ${
                    active
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-transparent hover:bg-[var(--color-butter)]"
                  }`}
                >
                  <span
                    className={`text-[8px] font-semibold uppercase tracking-[0.22em] ${
                      active
                        ? "text-white/40"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    Menu 0{index + 1}
                  </span>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                      {tab.label}
                    </h3>

                    <p
                      className={`mt-2 text-[8px] uppercase tracking-[0.17em] ${
                        active
                          ? "text-[var(--color-butter)]"
                          : "text-[var(--color-muted)]"
                      }`}
                    >
                      {tab.subtitle}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.2}
                    className={`absolute right-5 top-5 transition-all duration-300 ${
                      active
                        ? "text-[var(--color-butter)]"
                        : "text-[var(--color-muted)] group-hover:translate-x-1 group-hover:-translate-y-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden bg-[var(--color-forest-dark)] p-3 shadow-[0_30px_80px_rgba(53,39,31,0.15)] sm:p-5 lg:p-7">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeMenu}-background`}
                  src={categoryImages[activeMenu]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-black/45" />

              <div className="relative mx-auto bg-[var(--color-white)] px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                <div className="pointer-events-none absolute inset-3 border border-[var(--color-forest)]/20 sm:inset-5 lg:inset-7" />

                <div className="pointer-events-none absolute inset-5 border border-[var(--color-forest)]/10 sm:inset-8 lg:inset-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu}
                    initial={{
                      opacity: 0,
                      rotateY: -8,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      rotateY: 0,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotateY: 8,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative z-10"
                  >
                    <div className="mx-auto max-w-3xl text-center">
                      <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-[var(--color-forest)]/25 sm:w-20" />

                        <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]/50 sm:text-[8px]">
                          Victoria Island · Lagos
                        </span>

                        <span className="h-px w-10 bg-[var(--color-forest)]/25 sm:w-20" />
                      </div>

                      <div className="mt-7">
                        <p className="font-serif text-3xl tracking-[-0.04em] text-[var(--color-forest)] sm:text-4xl">
                          Lala's
                        </p>

                        <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.4em] text-[var(--color-forest)]/50">
                          Lagos
                        </p>
                      </div>

                      <div className="my-7 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[var(--color-coral)]/40 sm:w-16" />

                        <span className="text-sm text-[var(--color-coral)]">
                          ✦
                        </span>

                        <span className="h-px w-12 bg-[var(--color-coral)]/40 sm:w-16" />
                      </div>

                      <p className="text-[7px] font-semibold uppercase tracking-[0.3em] text-[var(--color-coral)] sm:text-[8px]">
                        {
                          menuTabs.find(
                            (tab) => tab.id === activeMenu
                          )?.subtitle
                        }
                      </p>

                      <h3 className="mt-3 font-serif text-4xl font-medium tracking-[-0.045em] text-[var(--color-forest)] sm:text-5xl lg:text-6xl">
                        {
                          menuTabs.find(
                            (tab) => tab.id === activeMenu
                          )?.label
                        }
                      </h3>

                      <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-[var(--color-muted)]">
                        A selection from our kitchen, prepared for slow meals,
                        good conversation and everything in between.
                      </p>
                    </div>

                    <div className="mt-14 border-t border-[var(--color-forest)]/15 pt-10 sm:mt-16 sm:pt-12">
                      <div className="grid gap-x-10 gap-y-14 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
                        {currentMenu.map((section, sectionIndex) => (
                          <div
                            key={section.category}
                            className={
                              currentMenu.length % 2 !== 0 &&
                              sectionIndex === currentMenu.length - 1
                                ? "lg:col-span-2 lg:mx-auto lg:w-[70%]"
                                : ""
                            }
                          >
                            <div className="mb-6 text-center">
                              <div className="flex items-center justify-center gap-3">
                                <span className="h-px flex-1 bg-[var(--color-forest)]/15" />

                                <div>
                                  <span className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                                    {String(sectionIndex + 1).padStart(
                                      2,
                                      "0"
                                    )}
                                  </span>

                                  <h4 className="mt-1 font-serif text-2xl font-medium tracking-[-0.035em] text-[var(--color-forest)] sm:text-3xl">
                                    {section.category}
                                  </h4>
                                </div>

                                <span className="h-px flex-1 bg-[var(--color-forest)]/15" />
                              </div>
                            </div>

                            <div>
                              {section.items.map((item, index) => (
                                <div
                                  key={item.name}
                                  className="group border-b border-dashed border-[var(--color-forest)]/15 py-5 first:pt-0 last:border-b-0"
                                >
                                  <div className="flex items-baseline gap-2">
                                    <span className="mr-1 shrink-0 text-[7px] font-semibold tracking-[0.12em] text-[var(--color-forest)]/30">
                                      {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h5 className="font-serif text-[17px] font-medium leading-tight tracking-[-0.02em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-forest)] sm:text-lg">
                                      {item.name}
                                    </h5>

                                    <span className="min-w-[15px] flex-1 border-b border-dotted border-[var(--color-forest)]/25" />

                                    <span className="shrink-0 text-[11px] font-semibold tracking-[-0.01em] text-[var(--color-forest)]">
                                      {item.price}
                                    </span>
                                  </div>

                                  <div className="ml-7 mt-2 flex items-start gap-3">
                                    <p className="max-w-xl text-[10px] leading-[1.65] text-[var(--color-muted)] sm:text-[11px]">
                                      {item.description}
                                    </p>

                                    {item.featured && (
                                      <span className="mt-0.5 shrink-0 border border-[var(--color-coral)]/40 px-2 py-1 text-[6px] font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                                        Chef's pick
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl border-y border-[var(--color-forest)]/15 py-7 sm:mt-20">
                      <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:text-left">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-forest)]/15">
                          <Utensils
                            size={20}
                            strokeWidth={1}
                            className="text-[var(--color-coral)]"
                          />
                        </div>

                        <div>
                          <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                            From our kitchen
                          </p>

                          <p className="mt-2 font-serif text-xl tracking-[-0.03em] text-[var(--color-forest)]">
                            Good food. No rush.
                          </p>

                          <p className="mt-1 max-w-md text-[10px] leading-5 text-[var(--color-muted)]">
                            Please let our team know about allergies or dietary
                            requirements before ordering.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-[var(--color-forest)]/15" />

                        <span className="text-[10px] text-[var(--color-coral)]">
                          ✦
                        </span>

                        <span className="h-px w-10 bg-[var(--color-forest)]/15" />
                      </div>

                      <p className="mt-5 text-[7px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]/40">
                        Lala's Lagos · Victoria Island
                      </p>

                      <p className="mt-2 text-[7px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Prices in Nigerian Naira
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-2 px-1 text-[8px] uppercase tracking-[0.18em] text-[var(--color-muted)] sm:flex-row">
              <span>
                {menuTabs.find((tab) => tab.id === activeMenu)?.label}
              </span>

              <span>
                Please inform our team of any allergies or dietary
                requirements.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NAIJA FEATURE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[var(--color-butter)]">
        <div className="mx-auto grid max-w-[1500px] lg:grid-cols-2">
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[760px]">
            <motion.img
              src={images.naija}
              alt="Nigerian inspired cuisine"
              loading="lazy"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-24 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)]/50">
                From the Naija Kitchen
              </span>

              <h2 className="mt-6 text-6xl font-semibold leading-[0.8] tracking-[-0.075em] text-[var(--color-forest)] sm:text-7xl">
                The flavours
                <br />
                we know.
              </h2>

              <p className="mt-8 text-sm leading-7 text-[var(--color-forest)]/60">
                Jollof. Suya. Ofada. Egusi. Pepper soup. The dishes that make
                a Nigerian table feel like home, prepared with care and served
                in the heart of Lagos.
              </p>

              <button
                type="button"
                onClick={() => jumpToMenu("naija")}
                className="group mt-9 inline-flex items-center gap-5 bg-[var(--color-forest)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--color-coral)]"
              >
                Explore Naija Kitchen

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PASTA / BISTRO EDITORIAL SECTION
      ===================================================== */}
      <section className="bg-[var(--color-cream)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative lg:col-span-7">
              <div className="overflow-hidden">
                <motion.img
                  src={images.pasta}
                  alt="Pasta dish at Lala's Bistro"
                  loading="lazy"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 right-4 max-w-[250px] bg-[var(--color-white)] p-6 shadow-sm sm:right-8">
                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                  Bistro favourite
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em]">
                  Coconut Prawn Linguine
                </h3>

                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  Prawns, coconut cream, garlic, chilli and fresh herbs.
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--color-forest)]">
                  ₦27,000
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                Lala's Bistro
              </span>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.85] tracking-[-0.065em] sm:text-6xl">
                A little
                <br />
                <span className="text-[var(--color-forest)]">
                  familiar.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-[var(--color-muted)]">
                Comforting plates with a Lagos point of view. Pasta, steaks,
                burgers, salads and dishes designed for long lunches and easy
                dinners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DRINKS
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[var(--color-forest-dark)] text-white">
        <motion.img
          src={images.drinks}
          alt="Drinks served at Lala's Lagos"
          loading="lazy"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />

        <div className="relative z-10 flex min-h-[680px] items-end px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
          <div className="mx-auto flex w-full max-w-[1500px] items-end justify-between gap-12">
            <div className="max-w-3xl">
              <Wine
                size={23}
                strokeWidth={1.2}
                className="mb-6 text-[var(--color-butter)]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                From the bar
              </span>

              <h2 className="mt-5 text-7xl font-semibold leading-[0.78] tracking-[-0.08em] sm:text-8xl lg:text-[9rem]">
                Stay for
                <br />
                <span className="text-[var(--color-butter)]">
                  one more.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/55">
                Signature cocktails, fresh juices, coffee and cold drinks for
                slow afternoons and Lagos nights.
              </p>
            </div>

            <button
              type="button"
              onClick={() => jumpToMenu("room")}
              className="group hidden shrink-0 items-center gap-4 border border-white/25 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-butter)] hover:text-[var(--color-butter)] lg:flex"
            >
              View drinks menu

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          IN ROOM DINING
      ===================================================== */}
      <section className="bg-[var(--color-cream)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                In-room dining
              </span>

              <h2 className="mt-5 text-6xl font-semibold leading-[0.8] tracking-[-0.075em] sm:text-7xl">
                Your room.
                <br />
                <span className="text-[var(--color-forest)]">
                  Your table.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                Sometimes the best restaurant is the one you don't have to
                leave. Order something comforting and make the room your own.
              </p>

              <button
                type="button"
                onClick={() => jumpToMenu("room")}
                className="group mt-8 inline-flex items-center gap-5 bg-[var(--color-forest)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--color-coral)]"
              >
                Explore in-room dining

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="relative lg:col-span-6 lg:col-start-7">
              <div className="overflow-hidden">
                <motion.img
                  src={images.room}
                  alt="Hotel room at Lala's Lagos"
                  loading="lazy"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute bottom-5 left-5 bg-[var(--color-butter)] px-6 py-5 sm:bottom-8 sm:left-8">
                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--color-forest)]/60">
                  Anytime
                </span>

                <p className="mt-2 text-xl font-semibold tracking-[-0.035em] text-[var(--color-forest)]">
                  Good food,
                  <br />
                  no shoes required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[var(--color-forest)] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                Lala's · Victoria Island
              </span>

              <h2 className="mt-6 text-7xl font-semibold leading-[0.77] tracking-[-0.08em] sm:text-8xl lg:text-[9rem]">
                Pull up
                <br />
                a chair.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-white/45">
                Good food tastes better when there's nowhere else you need to
                be.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-5 bg-[var(--color-butter)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-forest)] transition-colors hover:bg-[var(--color-coral)] hover:text-white"
              >
                Contact Lala's

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-[8px] uppercase tracking-[0.18em] text-white/30 sm:flex-row">
            <span>Dining · Victoria Island · Lagos</span>
            <span>+234 915 025 1251</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dining;