import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";

import classicImage from "../assets/rooms/room-01.webp";
import royalImage from "../assets/rooms/room-02.webp";
import deluxeImage from "../assets/rooms/room-03.webp";
import executiveImage from "../assets/rooms/room-04.webp";

const rooms = [
  {
    name: "Classic Room",
    description: "Comfortable essentials for an easy stay.",
    image: classicImage,
    number: "01",
    mood: "Easy. Quiet. Considered.",
  },
  {
    name: "Royal Classic Room",
    description: "A distinctive room with additional space.",
    image: royalImage,
    number: "02",
    mood: "A little more room.",
  },
  {
    name: "Deluxe Room",
    description: "More space and comfort for your Lagos stay.",
    image: deluxeImage,
    number: "03",
    mood: "Made for switching off.",
  },
  {
    name: "Executive Room",
    description: "Our more spacious room option.",
    image: executiveImage,
    number: "04",
    mood: "Stay a little longer.",
  },
];

const steps = [
  { number: "01", label: "Dates" },
  { number: "02", label: "Guests" },
  { number: "03", label: "Room" },
  { number: "04", label: "Details" },
  { number: "05", label: "Review" },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 22,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -18,
  },
  transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  },
};

function Booking() {
  const [step, setStep] = useState(1);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);

  const [selectedRoom, setSelectedRoom] = useState("");

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);

    const difference = end.getTime() - start.getTime();

    if (difference <= 0) return 0;

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const selectedRoomData =
    rooms.find((room) => room.name === selectedRoom) || null;

  const updateAdults = (amount) => {
    setAdults((current) => Math.max(1, current + amount));
  };

  const updateChildren = (amount) => {
    setChildren((current) => Math.max(0, current + amount));
  };

  const updateRooms = (amount) => {
    setRoomCount((current) =>
      Math.min(2, Math.max(1, current + amount))
    );
  };

  const canContinue = {
    1: Boolean(checkIn && checkOut && nights > 0),
    2: adults >= 1 && roomCount >= 1,
    3: Boolean(selectedRoom),
    4: Boolean(
      guestName.trim() &&
        guestEmail.trim() &&
        guestPhone.trim()
    ),
    5: Boolean(selectedRoom && checkIn && checkOut),
  };

  const nextStep = () => {
    if (!canContinue[step]) return;

    setStep((current) => Math.min(5, current + 1));
  };

  const previousStep = () => {
    setStep((current) => Math.max(1, current - 1));
  };

  const formatDate = (value) => {
    if (!value) return "—";

    return new Intl.DateTimeFormat("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(`${value}T00:00:00`));
  };

  const handleSubmit = () => {
    if (!canContinue[5]) return;

    setSubmitted(true);
  };

  /* =========================================================
      SUCCESS
  ========================================================= */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
        <section className="flex min-h-screen items-center px-6 py-24 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-[1100px]">
            <div className="grid overflow-hidden rounded-[2.5rem] bg-[var(--color-forest)] text-white lg:grid-cols-12">
              <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:col-span-7 lg:p-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[var(--color-butter)]/10" />

                <span className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                  Lala's · Reservation enquiry
                </span>

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-butter)] text-[var(--color-forest)]">
                    <Check size={24} strokeWidth={2} />
                  </div>

                  <h1 className="max-w-2xl text-6xl font-semibold leading-[0.82] tracking-[-0.07em] sm:text-7xl">
                    Your stay
                    <br />
                    starts here.
                  </h1>

                  <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                    Thanks, {guestName}. Your reservation enquiry has
                    been received. Lala's will follow up with you to
                    confirm the details of your stay.
                  </p>
                </div>

                <a
                  href="/stay"
                  className="relative mt-10 inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[var(--color-butter)] hover:text-[var(--color-butter)]"
                >
                  Explore the rooms again
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="bg-[var(--color-butter)] p-8 text-[var(--color-forest)] sm:p-12 lg:col-span-5 lg:p-12">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-forest)]/50">
                  Your stay
                </span>

                {selectedRoomData && (
                  <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-white">
                    <img
                      src={selectedRoomData.image}
                      alt={selectedRoomData.name}
                      className="aspect-[4/3] w-full object-cover"
                    />

                    <div className="p-6">
                      <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-forest)]/45">
                        Room {selectedRoomData.number}
                      </span>

                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                        {selectedRoomData.name}
                      </h2>
                    </div>
                  </div>
                )}

                <div className="mt-8 space-y-4 border-t border-[var(--color-forest)]/15 pt-7 text-sm">
                  <ReviewSummary
                    label="Stay"
                    value={`${nights} night${
                      nights === 1 ? "" : "s"
                    }`}
                  />

                  <ReviewSummary
                    label="Dates"
                    value={`${formatDate(checkIn)} → ${formatDate(
                      checkOut
                    )}`}
                  />

                  <ReviewSummary
                    label="Guests"
                    value={`${adults} adult${
                      adults === 1 ? "" : "s"
                    } · ${children} child${
                      children === 1 ? "" : "ren"
                    }`}
                  />

                  <ReviewSummary
                    label="Rooms"
                    value={roomCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative bg-[var(--color-forest-dark)] px-6 pb-16 pt-32 text-white sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <a
            href="/stay"
            className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-[var(--color-butter)]"
          >
            <ArrowLeft size={13} />
            Back to rooms
          </a>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-butter)]">
                Lala's · Reservations
              </span>

              <h1 className="mt-6 text-7xl font-semibold leading-[0.8] tracking-[-0.08em] sm:text-8xl lg:text-[9rem]">
                Build your
                <br />
                <span className="text-[var(--color-butter)]">
                  stay.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-white/50">
                A few simple steps and you'll be one step closer to
                your Lagos stay.
              </p>
            </div>
          </div>

          {/* =====================================================
              PROGRESS
          ===================================================== */}

          <div className="mt-16 border-t border-white/10 pt-6">
            <div className="grid grid-cols-5 gap-2">
              {steps.map((item) => {
                const itemNumber = Number(item.number);
                const active = step === itemNumber;
                const complete = step > itemNumber;

                return (
                  <button
                    key={item.number}
                    type="button"
                    disabled={!complete}
                    onClick={() => {
                      if (complete) {
                        setStep(itemNumber);
                      }
                    }}
                    className="text-left disabled:cursor-default"
                  >
                    <div
                      className={`mb-4 h-1 w-full transition-colors ${
                        active || complete
                          ? "bg-[var(--color-butter)]"
                          : "bg-white/10"
                      }`}
                    />

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          active || complete
                            ? "text-[var(--color-butter)]"
                            : "text-white/30"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span className="hidden text-[9px] uppercase tracking-[0.16em] text-white/35 sm:block">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOKING WORKSPACE
      ========================================================= */}

      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-12 lg:items-start">
          {/* =====================================================
              MAIN STEP
          ===================================================== */}

          <div className="lg:col-span-8">
            <div className="min-h-[560px] rounded-[2rem] border border-[var(--color-border)] bg-white p-7 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {/* =================================================
                    STEP 1 — DATES
                ================================================= */}

                {step === 1 && (
                  <motion.div key="dates" {...fadeUp}>
                    <StepHeading
                      eyebrow="01 · When are you coming?"
                      title={
                        <>
                          Pick your
                          <br />
                          <span className="text-[var(--color-forest)]">
                            dates.
                          </span>
                        </>
                      }
                      description="Tell us when you'd like to arrive and when you're heading home."
                    />

                    <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
                      <DateField
                        label="Arrival"
                        value={checkIn}
                        onChange={setCheckIn}
                      />

                      <DateField
                        label="Departure"
                        value={checkOut}
                        min={checkIn || undefined}
                        onChange={setCheckOut}
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between rounded-[1.25rem] bg-[var(--color-cream)] p-5">
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                          Your stay
                        </span>

                        <p className="mt-2 text-sm text-[var(--color-muted)]">
                          {nights > 0
                            ? `${nights} night${
                                nights === 1 ? "" : "s"
                              } in Lagos`
                            : "Choose your arrival and departure dates"}
                        </p>
                      </div>

                      {nights > 0 && (
                        <span className="text-4xl font-semibold tracking-[-0.06em] text-[var(--color-forest)]">
                          {nights}
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 2 — GUESTS
                ================================================= */}

                {step === 2 && (
                  <motion.div key="guests" {...fadeUp}>
                    <StepHeading
                      eyebrow="02 · Who's coming?"
                      title={
                        <>
                          Make room
                          <br />
                          <span className="text-[var(--color-forest)]">
                            for everyone.
                          </span>
                        </>
                      }
                      description="Let us know how many people will be staying."
                    />

                    <div className="mt-12 divide-y divide-[var(--color-border)] rounded-[1.5rem] border border-[var(--color-border)]">
                      <Counter
                        label="Adults"
                        detail="12 years and above"
                        value={adults}
                        onDecrease={() => updateAdults(-1)}
                        onIncrease={() => updateAdults(1)}
                      />

                      <Counter
                        label="Children"
                        detail="Under 12 years"
                        value={children}
                        onDecrease={() => updateChildren(-1)}
                        onIncrease={() => updateChildren(1)}
                      />

                      <Counter
                        label="Rooms"
                        detail="Maximum 2 rooms online"
                        value={roomCount}
                        onDecrease={() => updateRooms(-1)}
                        onIncrease={() => updateRooms(1)}
                      />
                    </div>

                    <div className="mt-6 flex gap-4 rounded-[1.25rem] bg-[var(--color-cream)] p-5">
                      <Sparkles
                        size={18}
                        className="mt-0.5 shrink-0 text-[var(--color-coral)]"
                      />

                      <p className="text-xs leading-6 text-[var(--color-muted)]">
                        Planning for more than two rooms? Contact
                        Lala's directly and we'll help arrange your
                        stay.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 3 — ROOM
                ================================================= */}

                {step === 3 && (
                  <motion.div key="room" {...fadeUp}>
                    <StepHeading
                      eyebrow="03 · Where will you stay?"
                      title={
                        <>
                          Choose your
                          <br />
                          <span className="text-[var(--color-forest)]">
                            room.
                          </span>
                        </>
                      }
                      description="Each room has its own character. Choose the one that feels right."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      {rooms.map((room) => {
                        const selected =
                          selectedRoom === room.name;

                        return (
                          <button
                            key={room.name}
                            type="button"
                            onClick={() =>
                              setSelectedRoom(room.name)
                            }
                            className={`group relative overflow-hidden rounded-[1.5rem] border text-left transition-all ${
                              selected
                                ? "border-[var(--color-forest)] ring-2 ring-[var(--color-forest)]"
                                : "border-[var(--color-border)] hover:border-[var(--color-forest)]"
                            }`}
                          >
                            <div className="relative overflow-hidden">
                              <img
                                src={room.image}
                                alt={room.name}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              <span
                                className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[9px] font-semibold ${
                                  selected
                                    ? "bg-[var(--color-butter)] text-[var(--color-forest)]"
                                    : "bg-white/90 text-[var(--color-ink)]"
                                }`}
                              >
                                {selected ? (
                                  <Check size={14} />
                                ) : (
                                  room.number
                                )}
                              </span>
                            </div>

                            <div className="p-5">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                                    {room.name}
                                  </h3>

                                  <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                                    {room.description}
                                  </p>
                                </div>

                                <ArrowUpRight
                                  size={17}
                                  className={`shrink-0 transition-transform ${
                                    selected
                                      ? "text-[var(--color-coral)]"
                                      : "text-[var(--color-muted)] group-hover:-translate-y-1 group-hover:translate-x-1"
                                  }`}
                                />
                              </div>

                              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                                {room.mood}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 4 — DETAILS
                ================================================= */}

                {step === 4 && (
                  <motion.div key="details" {...fadeUp}>
                    <StepHeading
                      eyebrow="04 · A little about you"
                      title={
                        <>
                          Let's make it
                          <br />
                          <span className="text-[var(--color-forest)]">
                            personal.
                          </span>
                        </>
                      }
                      description="Just the essentials. We'll use these details to follow up on your reservation."
                    />

                    <div className="mt-12 space-y-5">
                      <TextField
                        label="Full name"
                        placeholder="Your name"
                        value={guestName}
                        onChange={setGuestName}
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <TextField
                          label="Email address"
                          type="email"
                          placeholder="you@example.com"
                          value={guestEmail}
                          onChange={setGuestEmail}
                        />

                        <TextField
                          label="Phone number"
                          type="tel"
                          placeholder="+234..."
                          value={guestPhone}
                          onChange={setGuestPhone}
                        />
                      </div>
                    </div>

                    <div className="mt-7 rounded-[1.25rem] bg-[var(--color-cream)] p-5">
                      <p className="text-xs leading-6 text-[var(--color-muted)]">
                        We'll only use your contact details to
                        respond to this reservation enquiry.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                    STEP 5 — REVIEW
                ================================================= */}

                {step === 5 && (
                  <motion.div key="review" {...fadeUp}>
                    <StepHeading
                      eyebrow="05 · Nearly there"
                      title={
                        <>
                          Check your
                          <br />
                          <span className="text-[var(--color-forest)]">
                            stay.
                          </span>
                        </>
                      }
                      description="Everything look right? Send your reservation enquiry and we'll take it from here."
                    />

                    <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[var(--color-border)]">
                      {selectedRoomData && (
                        <div className="grid sm:grid-cols-2">
                          <img
                            src={selectedRoomData.image}
                            alt={selectedRoomData.name}
                            className="aspect-[4/3] h-full w-full object-cover"
                          />

                          <div className="p-7 sm:p-8">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                              Room {selectedRoomData.number}
                            </span>

                            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">
                              {selectedRoomData.name}
                            </h3>

                            <p className="mt-3 text-xs leading-6 text-[var(--color-muted)]">
                              {selectedRoomData.description}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="grid border-t border-[var(--color-border)] sm:grid-cols-2">
                        <ReviewItem
                          label="Dates"
                          value={`${formatDate(
                            checkIn
                          )} → ${formatDate(checkOut)}`}
                        />

                        <ReviewItem
                          label="Stay"
                          value={`${nights} night${
                            nights === 1 ? "" : "s"
                          } · ${roomCount} room${
                            roomCount === 1 ? "" : "s"
                          }`}
                        />

                        <ReviewItem
                          label="Guests"
                          value={`${adults} adult${
                            adults === 1 ? "" : "s"
                          } · ${children} child${
                            children === 1 ? "" : "ren"
                          }`}
                        />

                        <ReviewItem
                          label="Guest"
                          value={guestName}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  CONTROLS
              ================================================= */}

              <div className="mt-12 flex items-center justify-between border-t border-[var(--color-border)] pt-7">
                <button
                  type="button"
                  onClick={previousStep}
                  disabled={step === 1}
                  className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] disabled:invisible"
                >
                  <ArrowLeft size={14} />
                  Back
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canContinue[step]}
                    className="inline-flex items-center gap-5 rounded-full bg-[var(--color-forest)] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[var(--color-coral)] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Continue
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canContinue[5]}
                    className="inline-flex items-center gap-5 rounded-full bg-[var(--color-forest)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[var(--color-coral)] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Send reservation enquiry
                    <ArrowUpRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =====================================================
              LIVE SUMMARY
          ===================================================== */}

          <aside className="lg:sticky lg:top-28 lg:col-span-4">
            <div className="overflow-hidden rounded-[2rem] bg-[var(--color-forest)] text-white">
              <div className="relative min-h-[190px] overflow-hidden p-7 sm:p-8">
                {selectedRoomData ? (
                  <>
                    <img
                      src={selectedRoomData.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-45"
                    />

                    <div className="absolute inset-0 bg-[var(--color-forest)]/65" />
                  </>
                ) : (
                  <div className="absolute -right-16 -top-20 h-60 w-60 rounded-full border border-white/10" />
                )}

                <div className="relative">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-butter)]">
                    Your stay
                  </span>

                  <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-[0.88] tracking-[-0.06em]">
                    {selectedRoom || "Let's build it."}
                  </h2>

                  {selectedRoomData && (
                    <p className="mt-4 text-xs text-white/55">
                      {selectedRoomData.mood}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-5 p-7 sm:p-8">
                <DarkSummary
                  label="Check-in"
                  value={formatDate(checkIn)}
                />

                <DarkSummary
                  label="Check-out"
                  value={formatDate(checkOut)}
                />

                <DarkSummary
                  label="Length"
                  value={
                    nights > 0
                      ? `${nights} night${
                          nights === 1 ? "" : "s"
                        }`
                      : "—"
                  }
                />

                <DarkSummary
                  label="Guests"
                  value={`${adults} adult${
                    adults === 1 ? "" : "s"
                  } · ${children} child${
                    children === 1 ? "" : "ren"
                  }`}
                />

                <DarkSummary
                  label="Rooms"
                  value={roomCount}
                />

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-butter)]" />

                    {step < 5
                      ? `Step ${step} of 5`
                      : "Ready to send"}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 px-2 text-[9px] leading-5 text-[var(--color-muted)]">
              Your reservation is an enquiry at this stage. Lala's
              will confirm availability and the final details with you.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ===============================================================
   STEP HEADING
=============================================================== */

function StepHeading({ eyebrow, title, description }) {
  return (
    <div>
      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-coral)]">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-5xl font-semibold leading-[0.84] tracking-[-0.07em] sm:text-6xl">
        {title}
      </h2>

      <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}

/* ===============================================================
   DATE FIELD
=============================================================== */

function DateField({
  label,
  value,
  min,
  onChange,
}) {
  const mobileLabel =
    label === "Arrival"
      ? "Select arrival date"
      : "Select departure date";

  return (
    <label className="group bg-[var(--color-cream)] p-6 transition-colors focus-within:bg-white sm:p-8">
      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </span>

      {/* Mobile-only helper text */}
      <span className="mt-3 block text-sm font-medium text-[var(--color-ink)] sm:hidden">
        {value ? formatMobileDate(value) : mobileLabel}
      </span>

      <input
        type="date"
        value={value}
        min={min}
        onChange={(event) => onChange(event.target.value)}
        aria-label={`${label} date`}
        className="mt-5 w-full bg-transparent text-xl font-medium outline-none"
      />
    </label>
  );
}

function formatMobileDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

/* ===============================================================
   TEXT FIELD
=============================================================== */

function TextField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-cream)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-forest)] focus:bg-white"
      />
    </label>
  );
}

/* ===============================================================
   COUNTER
=============================================================== */

function Counter({
  label,
  detail,
  value,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="flex items-center justify-between gap-6 p-6 sm:p-7">
      <div>
        <h3 className="text-lg font-semibold tracking-[-0.03em]">
          {label}
        </h3>

        <p className="mt-1 text-[10px] text-[var(--color-muted)]">
          {detail}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
          aria-label={`Decrease ${label}`}
        >
          <Minus size={14} />
        </button>

        <span className="w-6 text-center text-lg font-semibold">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors hover:border-[var(--color-coral)] hover:text-[var(--color-coral)]"
          aria-label={`Increase ${label}`}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

/* ===============================================================
   DARK SUMMARY
=============================================================== */

function DarkSummary({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-4 last:border-0 last:pb-0">
      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
        {label}
      </span>

      <span className="text-right text-xs text-white/75">
        {value}
      </span>
    </div>
  );
}

/* ===============================================================
   SUCCESS SUMMARY
=============================================================== */

function ReviewSummary({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-[var(--color-forest)]/10 pb-4 last:border-0 last:pb-0">
      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)]/40">
        {label}
      </span>

      <span className="text-right text-xs text-[var(--color-forest)]/75">
        {value}
      </span>
    </div>
  );
}

/* ===============================================================
   REVIEW ITEM
=============================================================== */

function ReviewItem({ label, value }) {
  return (
    <div className="border-b border-[var(--color-border)] p-5 last:border-b-0 sm:p-6">
      <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </span>

      <span className="mt-2 block text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

export default Booking;