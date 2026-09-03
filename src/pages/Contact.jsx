import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const contactOptions = [
  {
    id: "stay",
    icon: CalendarDays,
    title: "I'm planning a stay",
    short: "Rooms, dates & availability",
    description:
      "Thinking about staying with us? Let's talk dates, rooms, availability and anything else that would make your stay easier.",
    action: "Start a stay enquiry",
    href: "/booking",
  },
  {
    id: "dining",
    icon: Sparkles,
    title: "I'm coming to eat",
    short: "Dinner, drinks & dining",
    description:
      "Curious about what's on the table? Ask about Lala's Bistro, Naija Kitchen, in-room dining or planning a special evening.",
    action: "Ask about dining",
    href: "mailto:info@lalaslagos.com?subject=Dining%20Enquiry",
  },
  {
    id: "events",
    icon: MessageCircle,
    title: "I'm planning something",
    short: "Events & celebrations",
    description:
      "From intimate celebrations to bigger moments, tell us what you're imagining and we'll take it from there.",
    action: "Talk about your event",
    href: "mailto:info@lalaslagos.com?subject=Events%20Enquiry",
  },
  {
    id: "general",
    icon: Mail,
    title: "I have another question",
    short: "Anything else",
    description:
      "Something we haven't covered? No problem. Send us a message and we'll point you in the right direction.",
    action: "Send a message",
    href: "mailto:info@lalaslagos.com",
  },
];

function Contact() {
  const [selected, setSelected] = useState("stay");
  const [showLocation, setShowLocation] = useState(false);

  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* HERO */}
      <section className="relative bg-[var(--color-forest-dark)] px-6 pb-24 pt-40 text-white sm:px-10 sm:pb-32 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--color-coral)]" />
                Lala's · Contact
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-6xl text-7xl font-semibold leading-[0.8] tracking-[-0.08em] sm:text-8xl lg:text-[10rem]"
              >
                Let's
                <br />
                <span className="text-[var(--color-butter)]">talk.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative lg:col-span-4 lg:pb-2"
            >
              <div className="mb-5 h-px w-16 bg-[var(--color-coral)]" />

              <p className="max-w-sm text-sm leading-7 text-white/55">
                Booking a room, planning an event, asking about dinner or
                simply want to know more? Start wherever feels easiest.
              </p>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute bottom-5 right-8 hidden text-[12rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] lg:block">
            04
          </div>
        </div>
      </section>

      {/* CONVERSATION BUILDER */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                Start somewhere
              </span>

              <h2 className="mt-5 text-6xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-7xl">
                What's
                <br />
                <span className="text-[var(--color-forest)]">
                  on your mind?
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
                Pick what brings you here. We'll show you the best way to
                continue.
              </p>

              <div className="mt-10 hidden items-center gap-3 lg:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--color-coral)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Tap a conversation
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-3">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  const active = selected === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      onClick={() => setSelected(option.id)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className={`group relative w-full overflow-hidden rounded-[1.5rem] border text-left transition-all duration-500 ${
                        active
                          ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white"
                          : "border-[var(--color-border)] bg-[var(--color-white)] hover:-translate-y-1 hover:border-[var(--color-forest)]"
                      }`}
                    >
                      <div className="flex items-center gap-5 p-5 sm:p-7">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
                            active
                              ? "bg-[var(--color-butter)] text-[var(--color-forest)]"
                              : "bg-[var(--color-cream)] text-[var(--color-coral)]"
                          }`}
                        >
                          <Icon size={20} strokeWidth={1.5} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <span
                            className={`text-[8px] font-semibold uppercase tracking-[0.18em] ${
                              active
                                ? "text-white/40"
                                : "text-[var(--color-muted)]"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                            {option.title}
                          </h3>

                          <p
                            className={`mt-1 text-xs ${
                              active
                                ? "text-white/45"
                                : "text-[var(--color-muted)]"
                            }`}
                          >
                            {option.short}
                          </p>
                        </div>

                        <motion.div
                          animate={{ rotate: active ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`shrink-0 ${
                            active
                              ? "text-[var(--color-butter)]"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          <ArrowUpRight size={20} />
                        </motion.div>
                      </div>

                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                                <p className="max-w-lg text-sm leading-7 text-white/60">
                                  {option.description}
                                </p>

                                <a
                                  href={option.href}
                                  onClick={(event) =>
                                    event.stopPropagation()
                                  }
                                  className="inline-flex w-fit items-center gap-4 rounded-full bg-[var(--color-butter)] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)] transition-transform hover:scale-[1.03]"
                                >
                                  {option.action}
                                  <ArrowUpRight size={13} />
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--color-butter)]">
            <div className="grid lg:grid-cols-12">
              <div className="relative overflow-hidden p-8 sm:p-12 lg:col-span-7 lg:p-16">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[var(--color-forest)]/10" />

                <div className="relative">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                    Prefer a real conversation?
                  </span>

                  <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                    Sometimes a
                    <br />
                    <span className="text-[var(--color-forest)]">
                      message is easier.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-forest)]/55">
                    Reach Lala's directly. Ask a question, check something
                    quickly or simply say hello.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-white)] p-8 sm:p-12 lg:col-span-5 lg:p-12">
                <div className="space-y-3">
                  <a
                    href="https://wa.me/2349150251251"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-[1.25rem] bg-[var(--color-forest)] p-5 text-white transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <MessageCircle
                        size={19}
                        strokeWidth={1.5}
                        className="text-[var(--color-butter)]"
                      />

                      <div>
                        <span className="block text-sm font-semibold">
                          WhatsApp
                        </span>

                        <span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-white/35">
                          +234 915 025 1251
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="tel:+2349150251251"
                    className="group flex items-center justify-between rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-cream)] p-5 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <Phone
                        size={19}
                        strokeWidth={1.5}
                        className="text-[var(--color-coral)]"
                      />

                      <div>
                        <span className="block text-sm font-semibold">
                          Call Lala's
                        </span>

                        <span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                          +234 915 025 1251
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="mailto:info@lalaslagos.com"
                    className="group flex items-center justify-between rounded-[1.25rem] border border-[var(--color-border)] p-5 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <Mail
                        size={19}
                        strokeWidth={1.5}
                        className="text-[var(--color-coral)]"
                      />

                      <div>
                        <span className="block text-sm font-semibold">
                          Email
                        </span>

                        <span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                          info@lalaslagos.com
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIND US IN LAGOS */}
      <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                Come find us
              </span>

              <h2 className="mt-5 text-6xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                Find us
                <br />
                <span className="text-[var(--color-forest)]">
                  in Lagos.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
                Lala's is right in the middle of the action, at 251A Sapara
                Williams Close, Victoria Island, Lagos.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {/* VISUAL MAP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] bg-[var(--color-butter)]/55 lg:col-span-8"
            >
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-[-10%] top-[15%] h-px w-[120%] rotate-[13deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[-10%] top-[31%] h-px w-[120%] rotate-[-8deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[-10%] top-[52%] h-px w-[120%] rotate-[6deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[-10%] top-[72%] h-px w-[120%] rotate-[-5deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[17%] top-[-20%] h-[150%] w-px rotate-[22deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[42%] top-[-20%] h-[150%] w-px rotate-[-15deg] bg-[var(--color-forest)]/10" />
                <div className="absolute left-[69%] top-[-20%] h-[150%] w-px rotate-[10deg] bg-[var(--color-forest)]/10" />
              </div>

              {/* Lagoon */}
              <div className="absolute -bottom-44 -left-24 h-[340px] w-[90%] rotate-[-8deg] rounded-[50%] bg-[var(--color-cream)]/65" />

              <div className="absolute bottom-[14%] left-[10%] h-[170px] w-[65%] rotate-[8deg] rounded-[50%] border border-[var(--color-forest)]/10" />

              <div className="absolute bottom-[27%] left-[30%] h-[100px] w-[48%] rotate-[-11deg] rounded-[50%] border border-[var(--color-forest)]/10" />

              {/* Main roads */}
              <div className="absolute left-[2%] top-[45%] h-[2px] w-[96%] rotate-[-7deg] bg-white/80" />
              <div className="absolute left-[26%] top-[-5%] h-[105%] w-[2px] rotate-[12deg] bg-white/80" />
              <div className="absolute left-[53%] top-[-5%] h-[105%] w-[2px] rotate-[-8deg] bg-white/80" />
              <div className="absolute left-[6%] top-[67%] h-[2px] w-[78%] rotate-[10deg] bg-white/80" />

              {/* Area labels */}
              <span className="absolute left-[12%] top-[22%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/30">
                Lagos Island
              </span>

              <span className="absolute left-[42%] top-[14%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/30">
                Ikoyi
              </span>

              <span className="absolute right-[12%] top-[34%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/30">
                Lekki
              </span>

              <span className="absolute bottom-[21%] left-[39%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/40">
                Victoria Island
              </span>

              <span className="absolute bottom-[10%] left-[18%] text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/20">
                Lagos Lagoon
              </span>

              {/* Lala's marker */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                }}
                className="absolute left-[48%] top-[51%] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[var(--color-coral)]/15" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-coral)] text-white shadow-xl">
                  <MapPin size={22} strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Floating address card */}
              <div className="absolute left-6 top-6 max-w-[285px] rounded-[1.5rem] bg-[var(--color-white)]/90 p-5 shadow-sm backdrop-blur-md sm:left-8 sm:top-8">
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                  Lala's Lagos Ltd.
                </span>

                <p className="mt-2 text-sm font-semibold leading-5">
                  251A Sapara Williams Close
                </p>

                <p className="mt-1 text-[10px] leading-5 text-[var(--color-muted)]">
                  Victoria Island, Lagos, Nigeria
                </p>
              </div>

              <div className="absolute bottom-6 right-6 hidden rounded-full bg-[var(--color-white)]/80 px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)] backdrop-blur-md sm:block">
                In the middle of the action
              </div>
            </motion.div>

            {/* ADDRESS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-between rounded-[2.5rem] bg-[var(--color-forest)] p-8 text-white sm:p-10 lg:col-span-4 lg:p-12"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coral)] text-white">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>

                <h3 className="mt-8 text-5xl font-semibold leading-[0.84] tracking-[-0.07em]">
                  Lala's
                  <br />
                  Lagos.
                </h3>

                <div className="mt-9 border-t border-white/10 pt-7">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Address
                  </span>

                  <p className="mt-4 text-sm leading-7">
                    251A Sapara Williams Close
                    <br />
                    Victoria Island
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm leading-7 text-white/55">
                  The perfect central location to keep you right in the middle
                  of all the action.
                </p>

                <button
                  type="button"
                  onClick={() => setShowLocation((current) => !current)}
                  className="mt-7 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-butter)] hover:text-[var(--color-butter)]"
                >
                  {showLocation ? "Hide directions" : "Get directions"}

                  <ChevronDown
                    size={13}
                    className={`transition-transform ${
                      showLocation ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {showLocation && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=251A+Sapara+Williams+Close+Victoria+Island+Lagos+Nigeria"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-3 rounded-full bg-[var(--color-butter)] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)]"
                      >
                        Open in Google Maps
                        <ArrowUpRight size={13} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--color-cream)] text-[var(--color-ink)]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            {/* Brand */}
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-forest)] text-sm font-semibold text-[var(--color-cream)]">
                  L
                </div>

                <div>
                  <p className="text-xl font-semibold tracking-[-0.04em]">
                    Lala’s
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Lagos
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--color-muted)]">
                A little place in the middle of Lagos, made for good stays,
                good food and good moments.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-14 sm:gap-20">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Explore
                </p>

                <div className="flex flex-col gap-2.5 text-sm">
                  <a href="/stay" className="transition-opacity hover:opacity-50">
                    Stay
                  </a>
                  <a href="/dining" className="transition-opacity hover:opacity-50">
                    Dining
                  </a>
                  <a href="/events" className="transition-opacity hover:opacity-50">
                    Events
                  </a>
                  <a href="/booking" className="transition-opacity hover:opacity-50">
                    Booking
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Contact
                </p>

                <div className="flex flex-col gap-2.5 text-sm">
                  <a
                    href="tel:+2349150251251"
                    className="transition-opacity hover:opacity-50"
                  >
                    +234 915 025 1251
                  </a>

                  <a
                    href="mailto:info@lalaslagos.com"
                    className="transition-opacity hover:opacity-50"
                  >
                    Email us
                  </a>

                  <a
                    href="https://wa.me/2349150251251"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity hover:opacity-50"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-12 border-t border-[var(--color-border)] pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium tracking-[-0.02em]">
                See you soon.
              </p>

              <div className="flex flex-col gap-1 text-xs text-[var(--color-muted)] sm:items-end">
                <p>251A Sapara Williams Close · Victoria Island · Lagos</p>
                <p>© {new Date().getFullYear()} Lala’s Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Contact;