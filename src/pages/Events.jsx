import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const events = [
  {
    number: "01",
    type: "Wedding",
    kicker: "The beginning of forever",
    title: "Amara & David",
    date: "18 · 10 · 26",
    location: "Victoria Island",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
    detail:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=90",
    layout: "wedding",
  },

  {
    number: "02",
    type: "Corporate",
    kicker: "Ideas deserve a room",
    title: "The room\nfor business.",
    date: "Meetings · Dinners · Launches",
    location: "Lala's · Victoria Island",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90",
    detail:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=90",
    layout: "corporate",
  },

  {
    number: "03",
    type: "Celebration",
    kicker: "Bring your people",
    title: "Tonight\nis yours.",
    date: "Birthdays · Anniversaries",
    location: "Victoria Island · Lagos",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=2200&q=90",
    detail:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=90",
    layout: "celebration",
  },

  {
    number: "04",
    type: "Proposal",
    kicker: "Just one question",
    title: "Will you\nmarry me?",
    date: "Private · Intimate",
    location: "Lala's · Lagos",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=2200&q=90",
    detail:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1200&q=90",
    layout: "proposal",
  },
];

const headingMessages = [
  "What are we celebrating?",
  "What are you organising?",
  "Who's it for?",
  "What's the occasion?",
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "28%" : "-28%",
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? "-28%" : "28%",
    opacity: 0,
  }),
};

function Events() {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);

  const [headingIndex, setHeadingIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const activeEvent = events[activeIndex];

  /*
   * =============================================================
   * TYPEWRITER
   * =============================================================
   */

  useEffect(() => {
    const currentMessage = headingMessages[headingIndex];

    let timeout;

    if (!isDeleting && typedHeading === currentMessage) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && typedHeading === "") {
      setIsDeleting(false);

      setHeadingIndex(
        (current) => (current + 1) % headingMessages.length
      );
    } else {
      timeout = setTimeout(
        () => {
          setTypedHeading(
            isDeleting
              ? currentMessage.slice(0, typedHeading.length - 1)
              : currentMessage.slice(0, typedHeading.length + 1)
          );
        },
        isDeleting ? 35 : 65
      );
    }

    return () => clearTimeout(timeout);
  }, [
    typedHeading,
    isDeleting,
    headingIndex,
  ]);

  /*
   * =============================================================
   * SLIDER
   * =============================================================
   */

  const paginate = (newDirection) => {
    setSlide(([current]) => {
      const next =
        (current + newDirection + events.length) % events.length;

      return [next, newDirection];
    });
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;

    const newDirection = index > activeIndex ? 1 : -1;

    setSlide([index, newDirection]);
  };

  const handleDragEnd = (_, info) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x;

    if (distance < -70 || velocity < -400) {
      paginate(1);
      return;
    }

    if (distance > 70 || velocity > 400) {
      paginate(-1);
    }
  };

  return (
    <main className="overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">

      {/* =========================================================
          INTRO / HERO
      ========================================================= */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[var(--color-forest-dark)] text-white">

        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90"
            alt="Elegant event setting at Lala's Lagos"
            className="h-full w-full object-cover"
            draggable="false"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-dark)] via-black/20 to-black/30" />

        {/* Top navigation */}

        <div className="relative z-10 flex items-center justify-between px-6 pt-32 sm:px-10 lg:px-12">

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-butter)]">
            Lala's · Events
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/50 sm:block">
            Victoria Island · Lagos
          </span>

        </div>

        {/* Central statement */}

        <div className="relative z-10 flex min-h-[72vh] items-center justify-center px-6 text-center sm:px-10">

          <div className="max-w-5xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="mb-7 text-[9px] font-semibold uppercase tracking-[0.35em] text-[var(--color-butter)]"
            >
              Life happens here
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[17vw] font-semibold leading-[0.72] tracking-[-0.09em] sm:text-[13vw] lg:text-[11rem]"
            >
              Moments
              <br />

              <span className="text-[var(--color-butter)]">
                matter.
              </span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
              className="mx-auto mt-10 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.25em] text-white/55"
            >
              <span>Weddings</span>

              <span className="h-1 w-1 rounded-full bg-[var(--color-coral)]" />

              <span>Business</span>

              <span className="h-1 w-1 rounded-full bg-[var(--color-coral)]" />

              <span>Celebrations</span>
            </motion.div>

          </div>

        </div>

        {/* Scroll cue */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/45">
              Explore
            </span>

            <div className="h-10 w-px bg-white/30" />

          </motion.div>

        </motion.div>

      </section>


      {/* =========================================================
          EVENT EXPERIENCE
      ========================================================= */}

      <section className="relative px-4 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-[1500px]">

          {/* Header */}

          <div className="mb-10 flex items-end justify-between px-2 sm:mb-14 sm:px-4">

            <div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--color-coral)]">
                Choose your moment
              </span>

              {/* =================================================
                  TYPEWRITER HEADING
              ================================================= */}

              <div
                className="mt-4 flex min-h-[52px] items-start sm:min-h-[58px]"
                aria-live="polite"
              >

                <h2 className="text-2xl font-semibold leading-[1] tracking-[-0.055em] sm:text-3xl lg:text-4xl">

                  {typedHeading}

                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.8em] w-px translate-y-[0.08em] bg-[var(--color-coral)] align-baseline"
                  />

                </h2>

              </div>

            </div>


            {/* Desktop arrows */}

            <div className="hidden items-center gap-2 sm:flex">

              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous event"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-200 hover:bg-[var(--color-forest)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] focus:ring-offset-2"
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.5}
                />
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next event"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-200 hover:bg-[var(--color-forest)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] focus:ring-offset-2"
              >
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                />
              </button>

            </div>

          </div>


          {/* =====================================================
              IPHONE-STYLE CARD
          ===================================================== */}

          <div className="relative">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >

              <motion.article
                key={activeEvent.type}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.18}
                onDragEnd={handleDragEnd}
                aria-live="polite"
                className="relative mx-auto h-[720px] w-full max-w-[1120px] cursor-grab overflow-hidden rounded-[2.5rem] bg-black shadow-2xl active:cursor-grabbing sm:h-[760px] sm:rounded-[3rem] lg:h-[780px]"
              >

                {/* Main image */}

                <motion.img
                  src={activeEvent.image}
                  alt={`${activeEvent.type} event at Lala's Lagos`}
                  className="absolute inset-0 h-full w-full select-none object-cover"
                  initial={{
                    scale: 1.06,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  draggable="false"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/20" />


                {/* =================================================
                    WEDDING
                ================================================= */}

                {activeEvent.layout === "wedding" && (
                  <>

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 45,
                        rotate: -2,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotate: -1,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-5 top-8 w-[calc(100%-2.5rem)] max-w-[390px] rounded-[1.5rem] bg-[var(--color-cream)]/95 p-4 shadow-2xl backdrop-blur-md sm:left-10 sm:top-12 sm:p-5 lg:left-16 lg:top-16"
                    >

                      <div className="rounded-[1rem] border border-[var(--color-forest)]/20 p-8 sm:p-10">

                        <div className="text-center">

                          <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[var(--color-coral)]">
                            Lala's Lagos
                          </span>

                          <div className="mx-auto my-6 h-px w-10 bg-[var(--color-forest)]/30" />

                          <p className="text-[8px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                            Together with their families
                          </p>

                          <h3 className="mt-6 font-serif text-4xl leading-[0.85] tracking-[-0.04em] sm:text-5xl">
                            Amara

                            <span className="mx-auto my-2 block text-2xl text-[var(--color-coral)]">
                              &
                            </span>

                            David
                          </h3>

                          <p className="mx-auto mt-7 max-w-[220px] text-[10px] leading-5 text-[var(--color-muted)]">
                            invite you to celebrate the beginning of their
                            forever.
                          </p>

                          <div className="mt-7 text-[8px] font-semibold uppercase tracking-[0.2em]">
                            18 October · 2026
                          </div>

                          <div className="mt-3 text-[8px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                            Victoria Island · Lagos
                          </div>

                        </div>

                      </div>

                    </motion.div>


                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                        rotate: 5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 3,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.55,
                      }}
                      className="absolute bottom-8 right-6 hidden w-40 overflow-hidden rounded-2xl border-4 border-[var(--color-cream)] shadow-2xl sm:block lg:bottom-12 lg:right-12 lg:w-48"
                    >

                      <img
                        src={activeEvent.detail}
                        alt=""
                        className="aspect-[3/4] w-full object-cover"
                        draggable="false"
                        loading="lazy"
                      />

                    </motion.div>


                    <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12">

                      <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
                        {activeEvent.kicker}
                      </span>

                    </div>

                  </>
                )}


                {/* =================================================
                    CORPORATE
                ================================================= */}

                {activeEvent.layout === "corporate" && (
                  <>

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -50,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-5 left-5 top-5 w-[calc(100%-2.5rem)] max-w-[500px] rounded-[2rem] border border-white/20 bg-black/35 p-7 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:top-8 sm:p-10 lg:bottom-12 lg:left-12 lg:top-12 lg:p-14"
                    >

                      <div className="flex h-full flex-col justify-between">

                        <div className="flex items-center justify-between">

                          <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[var(--color-butter)]">
                            Lala's Business
                          </span>

                          <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                            02 / 04
                          </span>

                        </div>


                        <div>

                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.25,
                            }}
                            className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50"
                          >
                            {activeEvent.kicker}
                          </motion.p>

                          <motion.h3
                            initial={{
                              opacity: 0,
                              y: 30,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.3,
                              duration: 0.55,
                            }}
                            className="mt-5 whitespace-pre-line text-6xl font-semibold leading-[0.82] tracking-[-0.07em] text-white sm:text-7xl"
                          >
                            {activeEvent.title}
                          </motion.h3>

                        </div>


                        <div>

                          <div className="mb-7 h-px w-full bg-white/15" />

                          <div className="grid grid-cols-2 gap-5">

                            <div>

                              <span className="block text-[7px] uppercase tracking-[0.2em] text-white/40">
                                Format
                              </span>

                              <p className="mt-2 text-[10px] uppercase tracking-[0.08em] text-white/80">
                                Meetings
                              </p>

                            </div>

                            <div>

                              <span className="block text-[7px] uppercase tracking-[0.2em] text-white/40">
                                Setting
                              </span>

                              <p className="mt-2 text-[10px] uppercase tracking-[0.08em] text-white/80">
                                Private
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </motion.div>


                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 40,
                        rotate: 3,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotate: 3,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.55,
                      }}
                      className="absolute bottom-8 right-8 hidden w-60 overflow-hidden rounded-[1.75rem] border border-white/30 shadow-2xl lg:block"
                    >

                      <img
                        src={activeEvent.detail}
                        alt=""
                        className="aspect-[4/3] w-full object-cover"
                        draggable="false"
                        loading="lazy"
                      />

                      <div className="bg-[var(--color-cream)] px-5 py-4 text-[var(--color-ink)]">

                        <span className="text-[8px] font-semibold uppercase tracking-[0.18em]">
                          Meetings · Dining · Launches
                        </span>

                      </div>

                    </motion.div>

                  </>
                )}


                {/* =================================================
                    CELEBRATION
                ================================================= */}

                {activeEvent.layout === "celebration" && (
                  <>

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.55,
                      }}
                      className="absolute inset-x-0 bottom-0 p-7 sm:p-12 lg:p-16"
                    >

                      <div className="max-w-3xl">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--color-butter)]">
                          {activeEvent.kicker}
                        </span>

                        <h3 className="mt-5 whitespace-pre-line text-7xl font-semibold leading-[0.78] tracking-[-0.08em] text-white sm:text-8xl lg:text-[8.5rem]">
                          {activeEvent.title}
                        </h3>

                      </div>

                    </motion.div>


                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                        rotate: -8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: -5,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.55,
                      }}
                      className="absolute right-7 top-7 h-28 w-28 overflow-hidden rounded-full border-4 border-white/70 shadow-xl sm:right-12 sm:top-12 sm:h-36 sm:w-36"
                    >

                      <img
                        src={activeEvent.detail}
                        alt=""
                        className="h-full w-full object-cover"
                        draggable="false"
                        loading="lazy"
                      />

                    </motion.div>


                    <div className="absolute left-7 top-7 rounded-full border border-white/40 px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-white sm:left-12 sm:top-12">
                      Celebrate
                    </div>

                  </>
                )}


                {/* =================================================
                    PROPOSAL
                ================================================= */}

                {activeEvent.layout === "proposal" && (
                  <>

                    <div className="absolute inset-0 flex items-center px-7 sm:px-12 lg:px-20">

                      <div className="max-w-3xl">

                        <motion.span
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.2,
                          }}
                          className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--color-butter)]"
                        >
                          {activeEvent.kicker}
                        </motion.span>

                        <motion.h3
                          initial={{
                            opacity: 0,
                            y: 40,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.25,
                            duration: 0.55,
                          }}
                          className="mt-6 whitespace-pre-line text-7xl font-semibold leading-[0.76] tracking-[-0.08em] text-white sm:text-8xl lg:text-[9rem]"
                        >
                          {activeEvent.title}
                        </motion.h3>

                      </div>

                    </div>


                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: 7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 5,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.55,
                      }}
                      className="absolute bottom-8 right-8 hidden w-48 overflow-hidden rounded-[2rem] border-4 border-white/80 shadow-2xl sm:block lg:bottom-12 lg:right-12 lg:w-60"
                    >

                      <img
                        src={activeEvent.detail}
                        alt=""
                        className="aspect-[3/4] w-full object-cover"
                        draggable="false"
                        loading="lazy"
                      />

                    </motion.div>

                  </>
                )}


                {/* Top floating number */}

                <div className="absolute right-6 top-6 z-20 flex items-center gap-3 text-white sm:right-10 sm:top-10">

                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/50">
                    {activeEvent.type}
                  </span>

                  <span className="h-px w-7 bg-white/30" />

                  <span className="text-[9px] font-semibold">
                    {activeEvent.number}
                  </span>

                </div>

              </motion.article>

            </AnimatePresence>


            {/* =====================================================
                CAROUSEL CONTROLS
            ===================================================== */}

            <div className="mt-6 flex items-center justify-between px-2 sm:px-4">

              <div className="flex items-center gap-3">

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {activeEvent.type}
                </span>

                <span className="h-px w-8 bg-[var(--color-border)]" />

                <span className="text-[9px] text-[var(--color-muted)]">
                  {activeIndex + 1} / {events.length}
                </span>

              </div>


              <div className="flex items-center gap-2">

                {events.map((event, index) => (

                  <button
                    key={event.number}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`View ${event.type}`}
                    aria-current={
                      index === activeIndex
                        ? "true"
                        : undefined
                    }
                    className={`h-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] focus:ring-offset-2 ${
                      index === activeIndex
                        ? "w-10 bg-[var(--color-forest)]"
                        : "w-3 bg-[var(--color-border)]"
                    }`}
                  />

                ))}

              </div>


              <div className="hidden items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] sm:flex">

                <ArrowLeft
                  size={12}
                  strokeWidth={1.4}
                />

                Drag

                <ArrowRight
                  size={12}
                  strokeWidth={1.4}
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SMALL EVENT INFO STRIP
      ========================================================= */}

      <section className="border-y border-[var(--color-border)]">

        <div className="mx-auto grid max-w-[1500px] sm:grid-cols-3">

          <div className="flex items-center gap-4 border-b border-[var(--color-border)] px-6 py-7 sm:border-b-0 sm:border-r sm:px-10">

            <CalendarDays
              size={17}
              strokeWidth={1.3}
              className="text-[var(--color-coral)]"
            />

            <div>

              <span className="block text-[7px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Events
              </span>

              <span className="mt-1 block text-sm">
                Tailored to you
              </span>

            </div>

          </div>


          <div className="flex items-center gap-4 border-b border-[var(--color-border)] px-6 py-7 sm:border-b-0 sm:border-r sm:px-10">

            <MapPin
              size={17}
              strokeWidth={1.3}
              className="text-[var(--color-coral)]"
            />

            <div>

              <span className="block text-[7px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Location
              </span>

              <span className="mt-1 block text-sm">
                Victoria Island
              </span>

            </div>

          </div>


          <div className="flex items-center justify-between px-6 py-7 sm:px-10">

            <div>

              <span className="block text-[7px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Planning something?
              </span>

              <span className="mt-1 block text-sm">
                Let's talk.
              </span>

            </div>

            <a
              href="/contact"
              aria-label="Make an event enquiry"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-forest)] text-white transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] focus:ring-offset-2"
            >
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
              />
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[var(--color-butter)] px-6 py-28 sm:px-10 sm:py-36 lg:px-12 lg:py-44">

        <motion.div
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto max-w-[1500px]"
        >

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--color-forest)]/50">
                Your turn
              </span>

              <h2 className="mt-5 max-w-4xl text-6xl font-semibold leading-[0.78] tracking-[-0.08em] text-[var(--color-forest)] sm:text-7xl lg:text-[8rem]">
                Make it
                <br />
                memorable.
              </h2>

            </div>


            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-6 bg-[var(--color-forest)] px-7 py-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[var(--color-coral)] focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] focus:ring-offset-2"
            >

              Make an enquiry

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 transition-transform duration-300 group-hover:translate-x-1">

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                />

              </span>

            </a>

          </div>

        </motion.div>


        {/* Decorative moving circles */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[var(--color-forest)]/10"
        />


        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full border border-[var(--color-forest)]/10"
        />

      </section>

    </main>
  );
}

export default Events;