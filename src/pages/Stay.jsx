import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Bath,
  Coffee,
  ConciergeBell,
  Snowflake,
  Tv,
  Refrigerator,
  Wifi,
} from "lucide-react";

import classicImage from "../assets/rooms/room-01.webp";
import royalImage from "../assets/rooms/room-02.webp";
import deluxeImage from "../assets/rooms/room-03.webp";
import executiveImage from "../assets/rooms/room-04.webp";

const rooms = [
  {
    name: "Classic Room",
    number: "01",
    description:
      "A comfortable, considered room with everything you need for an easy stay in the heart of Victoria Island.",
    image: classicImage,
    detail: "Our essential room",
    note: "Easy. Quiet. Considered.",
  },
  {
    name: "Royal Classic",
    number: "02",
    description:
      "A more distinctive configuration with additional space and a walk-in closet.",
    image: royalImage,
    detail: "One room available",
    note: "A little more room.",
  },
  {
    name: "Deluxe Room",
    number: "03",
    description:
      "An intimate room designed for a restful stay, with the comfort and amenities Lala's guests expect.",
    image: deluxeImage,
    detail: "Three rooms available",
    note: "Made for switching off.",
  },
  {
    name: "Executive Room",
    number: "04",
    description:
      "More space and a little more luxury when you want your room to feel like part of the experience.",
    image: executiveImage,
    detail: "More room to settle",
    note: "Stay a little longer.",
  },
];

const amenities = [
  { icon: Snowflake, label: "Air conditioning" },
  { icon: Refrigerator, label: "Mini fridge" },
  { icon: Tv, label: "DSTV" },
  { icon: ConciergeBell, label: "24hr concierge" },
  { icon: Coffee, label: "Tea & coffee" },
  { icon: Bath, label: "Ensuite bathroom" },
  { icon: Wifi, label: "Connected" },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Stay() {
  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[88vh] bg-[var(--color-forest-dark)] px-6 pb-14 pt-32 text-white sm:px-10 lg:px-12">
        <div className="mx-auto flex min-h-[70vh] max-w-[1500px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
              Lala's · Stay
            </span>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
              Victoria Island · Lagos
            </span>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mb-8 h-px w-full origin-left bg-white/15"
            />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-6xl text-7xl font-semibold leading-[0.78] tracking-[-0.08em] sm:text-8xl lg:col-span-9 lg:text-[10rem]"
              >
                Stay
                <br />
                <span className="text-[var(--color-butter)]">
                  awhile.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="lg:col-span-3 lg:pb-3"
              >
                <p className="max-w-sm text-sm leading-7 text-white/55">
                  A quiet place to land, reset and make the most of your time
                  in Lagos.
                </p>

                <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/35">
                  <ArrowDown size={13} />
                  <span>Explore the rooms</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 hidden h-20 w-20 rounded-full border border-white/10 sm:block" />
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={reveal}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]"
              >
                Rooms & accommodation
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={reveal}
                className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.82] tracking-[-0.07em] sm:text-7xl lg:text-8xl"
              >
                Find your
                <br />
                <span className="text-[var(--color-forest)]">
                  place here.
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={reveal}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
                Four rooms, four slightly different ways to settle into
                Lala's. Take a look around and choose the one that feels like
                yours.
              </p>

              <a
                href="/booking"
                className="mt-7 inline-flex items-center gap-3 bg-[var(--color-forest)] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-coral)]"
              >
                Book a room
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROOM JOURNEY
      ========================================================= */}
      <section className="relative px-6 pb-28 sm:px-10 sm:pb-36 lg:px-12 lg:pb-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[var(--color-border)] lg:block" />

          {/* =====================================================
              ROOM 01
          ===================================================== */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={reveal}
            className="relative"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="relative lg:col-span-7">
                <span className="absolute -left-1 -top-10 z-0 select-none text-[7rem] font-semibold leading-none tracking-[-0.1em] text-[var(--color-border)] sm:-left-2 sm:-top-16 sm:text-[12rem] lg:-left-8 lg:-top-24 lg:text-[15rem]">
                  {rooms[0].number}
                </span>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative z-10 overflow-hidden rounded-[2rem] bg-[var(--color-forest)]"
                >
                  <img
                    src={rooms[0].image}
                    alt={`${rooms[0].name} at Lala's Lagos`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5 rounded-full bg-[var(--color-cream)] px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)]">
                    {rooms[0].note}
                  </div>
                </motion.div>
              </div>

              <div className="relative z-10 lg:col-span-4 lg:col-start-9 lg:-ml-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                  {rooms[0].detail}
                </span>

                <h3 className="mt-5 text-5xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-6xl">
                  {rooms[0].name}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  {rooms[0].description}
                </p>

                <a
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-3 border-b border-[var(--color-ink)] pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
                >
                  Choose this room
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              ROOM 02
          ===================================================== */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={reveal}
            className="relative mt-32 lg:mt-52"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="relative order-2 lg:order-1 lg:col-span-4 lg:col-start-2 lg:pr-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                  {rooms[1].detail}
                </span>

                <h3 className="mt-5 text-5xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-6xl">
                  {rooms[1].name}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  {rooms[1].description}
                </p>

                <a
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-3 border-b border-[var(--color-ink)] pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
                >
                  Choose this room
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="relative order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
                <span className="absolute -right-1 -top-14 z-0 select-none text-[8rem] font-semibold leading-none tracking-[-0.1em] text-[var(--color-butter)] sm:-right-2 sm:-top-20 sm:text-[13rem] lg:-right-10 lg:-top-28 lg:text-[17rem]">
                  {rooms[1].number}
                </span>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative z-10 overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={rooms[1].image}
                    alt={`${rooms[1].name} at Lala's Lagos`}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 right-5 rounded-full bg-[var(--color-forest)] px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-white">
                    {rooms[1].note}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              ROOM 03
          ===================================================== */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={reveal}
            className="relative mt-32 lg:mt-48"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="relative lg:col-span-6">
                <span className="absolute -left-1 -top-14 z-0 select-none text-[8rem] font-semibold leading-none tracking-[-0.1em] text-[var(--color-coral)]/10 sm:-left-3 sm:-top-20 sm:text-[13rem] lg:-left-10 lg:-top-28 lg:text-[17rem]">
                  {rooms[2].number}
                </span>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative z-10 overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={rooms[2].image}
                    alt={`${rooms[2].name} at Lala's Lagos`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>
              </div>

              <div className="relative z-10 lg:col-span-4 lg:col-start-8 lg:pt-16">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                  {rooms[2].detail}
                </span>

                <h3 className="mt-5 text-5xl font-semibold leading-[0.86] tracking-[-0.07em] sm:text-6xl">
                  {rooms[2].name}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  {rooms[2].description}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-[var(--color-border)]" />

                  <span className="text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {rooms[2].note}
                  </span>
                </div>

                <a
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-3 border-b border-[var(--color-ink)] pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
                >
                  Choose this room
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.article>

          {/* =====================================================
              ROOM 04
          ===================================================== */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={reveal}
            className="relative mt-32 lg:mt-56"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="relative order-2 lg:order-1 lg:col-span-5 lg:col-start-1 lg:pb-12">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
                  {rooms[3].detail}
                </span>

                <h3 className="mt-5 text-6xl font-semibold leading-[0.82] tracking-[-0.07em] sm:text-7xl">
                  {rooms[3].name}
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  {rooms[3].description}
                </p>

                <a
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-3 bg-[var(--color-forest)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-coral)]"
                >
                  Choose this room
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="relative order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
                <span className="absolute -right-1 -top-16 z-0 select-none text-[9rem] font-semibold leading-none tracking-[-0.1em] text-[var(--color-forest)]/10 sm:-right-2 sm:-top-24 sm:text-[15rem] lg:-right-12 lg:-top-32 lg:text-[19rem]">
                  {rooms[3].number}
                </span>

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="group relative z-10 overflow-hidden rounded-[2rem] bg-[var(--color-forest)]"
                >
                  <img
                    src={rooms[3].image}
                    alt={`${rooms[3].name} at Lala's Lagos`}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5 rounded-full bg-[var(--color-butter)] px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)]">
                    {rooms[3].note}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* =========================================================
          AMENITIES
      ========================================================= */}
      <section className="bg-[var(--color-forest)] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                Every room
              </span>

              <h2 className="mt-6 text-6xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                The details
                <br />
                are already
                <br />
                <span className="text-[var(--color-butter)]">
                  handled.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
                The things you expect, quietly taken care of. So you can spend
                more time enjoying Lagos and less time thinking about the
                details.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 border-t border-white/15 sm:grid-cols-3">
                {amenities.map((amenity, index) => {
                  const Icon = amenity.icon;

                  return (
                    <motion.div
                      key={amenity.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                      className="border-b border-white/15 p-6 sm:p-8"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.3}
                        className="text-[var(--color-butter)]"
                      />

                      <p className="mt-7 text-sm text-white/65">
                        {amenity.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOKING CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--color-butter)] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[var(--color-forest)]/10 sm:h-96 sm:w-96" />

        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)]/55">
                Ready when you are
              </span>

              <h2 className="mt-6 max-w-5xl text-7xl font-semibold leading-[0.8] tracking-[-0.08em] text-[var(--color-forest)] sm:text-8xl lg:text-[9rem]">
                Book your
                <br />
                room.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-[var(--color-forest)]/65">
                Choose your dates, select the room that suits you and make
                Lala's your base in Lagos.
              </p>

              <a
                href="/booking"
                className="mt-7 inline-flex items-center gap-5 bg-[var(--color-forest)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-coral)]"
              >
                Book a room
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Stay;