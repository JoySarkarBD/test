export default function Path64(props: Path64Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 46 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 4.765 12.595 C 5.499 11.95 6.306 11.368 7.144 10.864 C 7.984 10.359 8.546 10.429 6.657 8.292 L 5.887 7.338 C 5.203 6.565 5.163 5.151 5.539 4.203 C 5.899 3.297 6.706 2.95 7.638 2.875 C 7.928 2.852 8.22 2.827 8.51 2.827 C 16.748 2.822 10.958 2.82 19.196 2.823 C 19.544 2.823 19.892 2.871 20.347 2.904 V 51.346 H 25.787 V 2.659 L 26.454 2.823 C 34.691 2.82 36.236 2.974 36.236 2.974 C 40.273 3.298 42.928 5.884 42.928 5.884 C 45.77 5.655 45.317 5.315 45.062 4.369 C 44.808 3.425 44.63 2.446 44.549 1.472 C 44.466 0.478 44.069 0.877 43.184 1.064 C 43.102 1.081 43.02 1.092 42.937 1.101 C 42.285 1.169 39.191 1.489 38.513 1.487 C 30.082 1.472 30.631 1.47 25.787 1.468 V 1.467 H 24.711 C 24.025 1.467 23.4 1.467 22.825 1.467 C 22.25 1.467 21.625 1.467 20.938 1.467 L 20.943 1.468 C 14.901 1.47 16.148 1.471 7.137 1.487 C 6.377 1.489 5.609 1.586 4.861 1.725 C 1.147 2.412 -0.628 6.281 1.333 9.523 C 1.333 9.523 4.003 12.992 4.765 12.595 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path64.defaultProps = {
  className: "",
};

interface Path64Props {
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
