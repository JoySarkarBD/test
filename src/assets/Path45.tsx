export default function Path45(props: Path45Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0.239 10.83 V 0.225 H 4.405 C 5.506 0.225 6.45 0.427 7.238 0.831 C 8.026 1.235 8.632 1.831 9.056 2.619 C 9.48 3.406 9.692 4.376 9.692 5.527 C 9.692 6.709 9.48 7.696 9.056 8.489 C 8.632 9.282 8.023 9.87 7.23 10.254 C 6.438 10.638 5.486 10.83 4.375 10.83 H 0.239 Z M 4.329 9.375 C 5.572 9.375 6.503 9.067 7.125 8.451 C 7.746 7.835 8.056 6.861 8.056 5.527 C 8.056 4.669 7.914 3.952 7.632 3.376 C 7.349 2.8 6.935 2.374 6.39 2.096 C 5.844 1.818 5.168 1.679 4.36 1.679 H 1.86 V 9.375 H 4.329 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path45.defaultProps = {
  className: "",
};

interface Path45Props {
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
