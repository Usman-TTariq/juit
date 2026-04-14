import Image from "next/image";
import Link from "next/link";
import { TalkToUsModal } from "./TalkToUsModal";

const LOGO_SRC = "/Black%20favicon.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-stretch px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <nav
          className="flex w-full min-w-0 items-center justify-between gap-3 sm:gap-4"
          aria-label="Main"
        >
          <Link
            href="/"
            className="flex h-full min-w-0 max-w-[min(100%,19rem)] shrink-0 items-center gap-2.5 py-2 sm:gap-3"
            aria-label="Juit Technologies Private Limited — Home"
          >
            <span className="relative isolate block h-9 w-9 shrink-0 overflow-hidden sm:h-10 sm:w-10">
              <Image
                src={LOGO_SRC}
                alt=""
                fill
                className="object-contain object-center"
                sizes="40px"
                priority
              />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-extrabold tracking-tight text-black sm:text-base">
                Juit Technologies
              </span>
              <span className="mt-0.5 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-black sm:text-xs">
                <span
                  className="h-px min-w-[0.75rem] max-w-[2rem] flex-1 bg-neutral-500"
                  aria-hidden
                />
                <span className="shrink-0">Private Limited</span>
                <span
                  className="h-px min-w-[0.75rem] max-w-[2rem] flex-1 bg-neutral-500"
                  aria-hidden
                />
              </span>
            </span>
          </Link>

          <TalkToUsModal />
        </nav>
      </div>
    </header>
  );
}
