export default function Path42(props: Path42Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 5.638 12.057 C 4.587 12.057 3.646 11.817 2.812 11.338 C 1.979 10.858 1.328 10.199 0.858 9.361 C 0.389 8.522 0.154 7.578 0.154 6.528 C 0.154 5.467 0.386 4.52 0.851 3.687 C 1.315 2.854 1.966 2.197 2.805 1.718 C 3.643 1.238 4.587 0.998 5.638 0.998 C 6.476 0.998 7.251 1.144 7.963 1.437 C 8.675 1.73 9.268 2.147 9.743 2.687 C 10.218 3.228 10.531 3.856 10.683 4.573 L 9.122 4.952 C 8.9 4.154 8.483 3.538 7.872 3.104 C 7.261 2.67 6.516 2.452 5.638 2.452 C 4.89 2.452 4.229 2.624 3.653 2.967 C 3.078 3.311 2.623 3.788 2.29 4.399 C 1.957 5.01 1.79 5.72 1.79 6.528 C 1.79 7.326 1.957 8.033 2.29 8.649 C 2.623 9.265 3.078 9.744 3.653 10.088 C 4.229 10.431 4.89 10.603 5.638 10.603 C 6.526 10.603 7.281 10.363 7.903 9.883 C 8.524 9.404 8.93 8.714 9.122 7.815 L 10.698 8.194 C 10.547 8.972 10.238 9.653 9.774 10.239 C 9.309 10.825 8.721 11.275 8.009 11.588 C 7.297 11.9 6.506 12.057 5.638 12.057 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path42.defaultProps = {
  className: "",
};

interface Path42Props {
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
