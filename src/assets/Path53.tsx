export default function Path53(props: Path53Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 4.509 10.83 V 1.679 H 0.585 V 0.225 H 10.068 V 1.679 H 6.13 V 10.83 H 4.509 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path53.defaultProps = {
  className: "",
};

interface Path53Props {
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
