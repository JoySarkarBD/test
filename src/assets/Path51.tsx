export default function Path51(props: Path51Props) {
  return (
    <div className={`flex ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 9 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0.725 10.83 V 0.225 H 8.466 V 1.679 H 2.346 V 4.694 H 7.951 V 6.088 H 2.346 V 9.375 H 8.466 V 10.83 H 0.725 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path51.defaultProps = {
  className: "",
};

interface Path51Props {
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
