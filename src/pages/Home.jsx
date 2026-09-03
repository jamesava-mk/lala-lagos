import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import heroImage from "../assets/hero/hero-main.webp";
import roomImage from "../assets/rooms/room-01.webp";
import roomDetailImage from "../assets/rooms/room-02.webp";
import diningImage from "../assets/dining/dining-main.webp";
import diningDetailImage from "../assets/dining/dining-detail.webp";

const lalaImages = {
  bistro:
    "https://i0.wp.com/lalaslagos.com/wp-content/uploads/2021/05/Lalas-Bistro-Lagos-2.jpg?fit=4391%2C5489&ssl=1",

  restaurant:
    "https://i0.wp.com/lalaslagos.com/wp-content/uploads/2026/05/Indoor-restaurant.jpeg?fit=1121%2C896&ssl=1",

  room:
    "https://i0.wp.com/lalaslagos.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-14.01.59.jpeg?fit=1032%2C696&ssl=1",

  restaurantDetail:
    "https://i0.wp.com/lalaslagos.com/wp-content/uploads/2026/05/Indoor-restaurant-2.jpeg?fit=831%2C1024&ssl=1",

  roomDetail:
    "https://i0.wp.com/lalaslagos.com/wp-content/uploads/2026/02/room5.jpg.jpeg?fit=1024%2C768&ssl=1",
};

const experiences = [
  {
    number: "01",
    title: "Eat",
    eyebrow: "Good food, slowly enjoyed.",
    text: "Good food, drinks and reasons to linger.",
    image: lalaImages.bistro,
  },
  {
    number: "02",
    title: "Explore",
    eyebrow: "Step outside. See Lagos.",
    text: "Start with Victoria Island and see where Lagos takes you.",
    image: lalaImages.restaurant,
  },
  {
    number: "03",
    title: "Unwind",
    eyebrow: "Come back to yourself.",
    text: "A comfortable room, a quieter evening and nowhere else to be.",
    image: lalaImages.room,
  },
  {
    number: "04",
    title: "Connect",
    eyebrow: "Make something worth remembering.",
    text: "Meet, celebrate and make something worth remembering.",
    image: lalaImages.restaurantDetail,
  },
];

function Home() {
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience((current) =>
        current === experiences.length - 1 ? 0 : current + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const active = experiences[activeExperience];

  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* =========================================================
          HERO — ARRIVAL
      ========================================================= */}
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-[var(--color-forest-dark)] text-white"
      >
        <motion.img
          src={heroImage}
          alt="Lala's Lagos in Victoria Island, Lagos"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[var(--color-forest-dark)]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-dark)] via-transparent to-black/10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[var(--color-butter)]/10 blur-3xl"
        />

        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-7 pt-32 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12">
          <div className="mx-auto w-full max-w-[1500px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-7 flex items-center gap-3"
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[var(--color-coral)]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Victoria Island · Lagos
              </span>
            </motion.div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="max-w-6xl text-[clamp(4rem,12vw,11rem)] font-semibold leading-[0.78] tracking-[-0.085em]"
              >
                Your Lagos
                <br />
                <span className="text-[var(--color-butter)]">home.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                }}
                className="absolute bottom-1 right-0 hidden max-w-[190px] lg:block"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-coral)]" />

                  <p className="text-[9px] uppercase leading-5 tracking-[0.18em] text-white/55">
                    In the middle of the city,
                    <br />
                    close to everything.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="mt-10 flex flex-col gap-8 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-sm text-sm leading-6 text-white/65">
                Stay, dine and experience Lagos from a place made for slowing
                down between the city's moments.
              </p>

              <a
                href="#experience"
                className="group flex w-fit items-center gap-4 rounded-full bg-[var(--color-butter)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--color-forest-dark)] transition-all duration-300 hover:bg-white"
              >
                Explore the experience

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↘
                </span>
              </a>

              <div className="hidden items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-white/40 lg:flex">
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>

                Scroll
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAY — THE ROOMS
      ========================================================= */}
      <section
        id="stay"
        className="relative overflow-hidden bg-[var(--color-cream)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                01 · Stay
              </span>

              <h2 className="mt-5 max-w-4xl text-6xl font-semibold leading-[0.84] tracking-[-0.07em] text-[var(--color-forest-dark)] sm:text-7xl lg:text-9xl">
                Somewhere
                <br />
                <span className="text-[var(--color-forest)]">
                  to come back to.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)] lg:pb-2">
              After a day in Lagos, the best part can be knowing there is
              somewhere comfortable waiting for you.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-8"
            >
              <img
                src={roomImage}
                alt="Room at Lala's Lagos"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8 lg:p-10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  The rooms
                </span>

                <h3 className="mt-2 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Rest easy.
                </h3>
              </div>

              <span className="absolute right-6 top-6 text-[10px] font-medium text-white/60 sm:right-8 sm:top-8">
                01
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-4 lg:mt-24"
            >
              <img
                src={roomDetailImage}
                alt="Interior detail at Lala's Lagos"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  Your space
                </span>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Make yourself at home.
                </h3>
              </div>

              <span className="absolute right-5 top-5 text-[10px] text-white/60">
                02
              </span>
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-6">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--color-coral)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Rooms · Suites · Comfort
              </span>
            </div>

            <a
              href="/stay"
              className="group inline-flex items-center gap-4 rounded-full bg-[var(--color-forest)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:bg-[var(--color-coral)]"
            >
              Explore all rooms

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE — FULL WIDTH AUTOMATIC IMAGE
      ========================================================= */}
      <section
        id="experience"
        className="relative overflow-hidden bg-[var(--color-forest-dark)] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-5xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
              02 · The experience
            </span>

            <h2 className="mt-5 text-6xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-7xl lg:text-9xl">
              Don't just stay
              <br />
              in Lagos.
              <br />
              <span className="text-[var(--color-butter)]">
                Experience it.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2rem]">
            <div className="relative h-[520px] sm:h-[620px] lg:h-[760px]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={`${active.title} experience at Lala's Lagos`}
                  loading="lazy"
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    opacity: {
                      duration: 1.2,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 5.5,
                      ease: "linear",
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                    {active.eyebrow}
                  </span>

                  <h3 className="mt-2 text-6xl font-semibold tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                    {active.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    {active.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute right-7 top-7 sm:right-10 sm:top-10">
                <span className="text-[10px] font-medium tracking-[0.12em] text-white/60">
                  {active.number} / 04
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DINING — DAY TO NIGHT
      ========================================================= */}
      <section
        id="dining"
        className="relative overflow-hidden bg-[var(--color-forest)] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                03 · Dining
              </span>

              <h2 className="mt-5 max-w-4xl text-6xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-7xl lg:text-9xl">
                Come hungry.
                <br />
                <span className="text-[var(--color-butter)]">
                  Stay late.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/60 lg:pb-2">
              Good food has a way of turning a stay into a night worth
              remembering. At Lala's, dinner doesn't have to mean the end of
              the evening.
            </p>
          </div>

          <div className="relative mt-16 grid gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-7"
            >
              <img
                src={diningImage}
                alt="Dining at Lala's Lagos"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  From morning
                </span>

                <h3 className="mt-2 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Start slow.
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="group relative overflow-hidden rounded-[1.75rem] lg:col-span-5 lg:mt-28"
            >
              <img
                src={diningDetailImage}
                alt="Evening dining at Lala's Lagos"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  After dark
                </span>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Stay for the night.
                </h3>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 border-t border-white/15 pt-6"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Morning
                </span>

                <div className="h-px w-20 bg-white/20 sm:w-32" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-butter)]">
                  Night
                </span>
              </div>

              <a
                href="/dining"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[var(--color-butter)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-[var(--color-forest-dark)] transition-all duration-300 hover:bg-white"
              >
                See what's cooking

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OUR SPACE — PURELY VISUAL
      ========================================================= */}
      <section
        id="space"
        className="bg-[var(--color-cream)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                04 · Our space
              </span>

              <h2 className="mt-5 text-6xl font-semibold leading-[0.85] tracking-[-0.065em] text-[var(--color-forest-dark)] sm:text-7xl lg:text-9xl">
                Come inside.
                <br />
                <span className="text-[var(--color-forest)]">
                  Stay awhile.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)] lg:col-span-4">
              Warm spaces, quiet corners and details made for settling into.
            </p>
          </div>

          <div className="relative mt-16 grid grid-cols-12 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative col-span-12 overflow-hidden rounded-[2rem] sm:col-span-7"
            >
              <img
                src={lalaImages.room}
                alt="Lala's Lagos room"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  The rooms
                </span>

                <h3 className="mt-2 text-5xl font-semibold tracking-[-0.06em]">
                  Rest easy.
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="group relative col-span-12 overflow-hidden rounded-[2rem] sm:col-span-5 sm:mt-20"
            >
              <img
                src={lalaImages.bistro}
                alt="Lala's Bistro"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white sm:bottom-7 sm:left-7">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  Lala's Bistro
                </span>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Come hungry.
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="group relative col-span-12 overflow-hidden rounded-[2rem] sm:col-span-5 sm:mt-[-40px]"
            >
              <img
                src={lalaImages.restaurantDetail}
                alt="Lala's Lagos interior"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white sm:bottom-7 sm:left-7">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  The details
                </span>

                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Look closer.
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="group relative col-span-12 overflow-hidden rounded-[2rem] sm:col-span-7 sm:mt-8"
            >
              <img
                src={lalaImages.restaurant}
                alt="Lala's Lagos restaurant"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                  Our space
                </span>

                <h3 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                  Stay awhile.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        id="final-booking"
        className="bg-[var(--color-forest-dark)] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-12 lg:py-44"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-5xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
              Lala's · Victoria Island
            </span>

            <h2 className="mt-6 text-7xl font-semibold leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[10rem]">
              Come for Lagos.
              <br />
              <span className="text-[var(--color-butter)]">
                Stay for Lala's.
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/booking"
                className="inline-flex items-center gap-5 rounded-full bg-[var(--color-coral)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[var(--color-butter)] hover:text-[var(--color-forest-dark)]"
              >
                Book your stay
                <span>↗</span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-5 rounded-full border border-white/30 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[var(--color-forest-dark)]"
              >
                Contact Lala's
              </a>
            </div>
          </div>

          <footer className="mt-16 border-t border-white/15 pt-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold tracking-[-0.04em]">
                  Lala's Lagos
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                  Victoria Island · Lagos
                </p>
              </div>

              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.16em] text-white/50">
                <a
                  href="/stay"
                  className="transition-colors hover:text-white"
                >
                  Stay
                </a>

                <a
                  href="/dining"
                  className="transition-colors hover:text-white"
                >
                  Dining
                </a>

                <a
                  href="/events"
                  className="transition-colors hover:text-white"
                >
                  Events
                </a>

                <a
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </nav>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 text-[8px] uppercase tracking-[0.16em] text-white/25 sm:flex-row">
              <span>251A Sapara Williams Close · Victoria Island</span>

              <span>© {new Date().getFullYear()} Lala's Lagos</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Home;