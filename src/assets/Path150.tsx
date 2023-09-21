export default function Path150(props: Path150Props) {
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
          d="M 3.98 9.779 V 1.621 H 0.482 V 0.324 H 8.937 V 1.621 H 5.425 V 9.779 H 3.98 Z"
          fill="#CD6B2A"
         />
      </svg>
    </div>
  );
}

Path150.defaultProps = {
  className: "",
};

interface Path150Props {
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
