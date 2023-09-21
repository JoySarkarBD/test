export default function Path160(props: Path160Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 31 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 30.083 1.931 C 29.882 1.044 29.572 0.818 28.709 1.077 C 27.53 1.135 26.806 1.122 25.853 1.135 C 25.496 1.141 25.212 1.391 25.262 1.745 C 25.49 3.355 25.895 5.326 25.986 6.747 C 26.324 11.973 26.533 14.106 22.996 17.88 C 21.206 19.79 20.323 20.691 18.388 22.457 C 14.668 25.85 14.608 25.766 12.097 30.55 C 11.964 29.97 11.884 29.624 11.805 29.278 C 9.742 20.321 7.667 11.368 5.635 2.405 C 5.44 1.546 5.318 1.135 4.39 1.135 H 1.707 C 0.828 1.135 0.763 1.634 0.943 2.406 C 2.63 9.62 4.294 17.817 5.953 25.037 C 7.333 31.039 8.727 37.038 10.068 43.048 C 10.268 43.943 10.545 44.512 11.433 44.398 C 12.745 44.229 13.692 44.314 14.786 44.062 C 14.571 42.079 14.294 39.309 14.202 37.479 C 13.962 32.709 12.349 32.082 15.525 28.553 C 18.232 25.545 18.565 24.486 21.516 21.706 C 24.301 19.082 26.009 17.762 27.8 14.317 C 27.837 14.246 27.927 14.202 28.085 14.064"
          fill="#CD6B2A"
         />
      </svg>
    </div>
  );
}

Path160.defaultProps = {
  className: "",
};

interface Path160Props {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
