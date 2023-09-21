export default function Path41(props: Path41Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0.701 10.83 L 5.473 0.225 H 7.109 L 11.881 10.83 H 10.139 L 6.306 2.043 H 6.276 L 2.458 10.83 H 0.701 Z M 2.807 7.376 H 9.806 V 8.8 H 2.807 V 7.376 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path41.defaultProps = {
  className: "",
};

interface Path41Props {
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
