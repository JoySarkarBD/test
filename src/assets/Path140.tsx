export default function Path140(props: Path140Props) {
  return (
    <div className={`flex ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 9 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0.54 9.779 V 0.324 H 5.254 C 5.929 0.324 6.512 0.439 7.003 0.669 C 7.493 0.898 7.869 1.229 8.13 1.661 C 8.391 2.094 8.522 2.607 8.522 3.201 C 8.522 4.084 8.241 4.779 7.678 5.288 C 7.115 5.797 6.334 6.06 5.335 6.078 V 5.403 H 5.834 V 6.051 L 8.252 9.779 H 6.591 L 4.241 6.064 H 1.985 V 9.779 H 0.54 Z M 5.159 4.768 C 5.789 4.768 6.264 4.633 6.584 4.363 C 6.903 4.092 7.063 3.705 7.063 3.201 C 7.063 2.679 6.903 2.285 6.584 2.019 C 6.264 1.754 5.78 1.621 5.132 1.621 H 1.985 V 4.768 H 5.159 Z"
          fill="#CD6B2A"
         />
      </svg>
    </div>
  );
}

Path140.defaultProps = {
  className: "",
};

interface Path140Props {
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
