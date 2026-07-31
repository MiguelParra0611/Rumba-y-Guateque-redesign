type IconProps = {
  className?: string;
};

// lucide-react 1.28 dropped brand/logo icons, so these are small hand-rolled
// glyphs instead of the usual lucide imports.

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.28C15.9 4.19 15 4.1 13.94 4.1c-2.2 0-3.7 1.34-3.7 3.8v2.5H7.6v3h2.64V21h3.26z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.5 8.75h3.4V20H3.5V8.75zM9.7 8.75h3.26v1.54h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.08 2.27 4.08 5.22V20h-3.4v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V20H9.7V8.75z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01a1.08 1.08 0 0 0-.78.37c-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.13a8.1 8.1 0 0 1-4.15-1.14l-.3-.18-3.02.79.8-2.94-.2-.3A8.13 8.13 0 1 1 20.15 12a8.14 8.14 0 0 1-8.13 8.13z"
      />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.5 3.5 2.9 10.86c-1.27.5-1.26 1.2-.23 1.52l4.76 1.49 1.83 5.6c.22.6.38.83.78.83.32 0 .46-.14.63-.31l1.72-1.68 4.83 3.57c.72.4 1.24.19 1.42-.67l2.57-12.13c.27-1.06-.4-1.54-1.71-1.02zM8.68 14.26l-1.16-3.6L18.4 6.1l-9.16 7.62c-.16.13-.28.36-.31.54z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.9 10.65 20.36 3h-1.53l-5.61 6.65L8.73 3H3.5l6.78 9.87L3.5 21h1.53l5.92-7.02L15.87 21h5.23l-7.2-10.35zm-2.1 2.49-.69-.98L5.6 4.16h2.35l4.4 6.28.69.98 5.72 8.17H16.4l-4.6-6.55z" />
    </svg>
  );
}
