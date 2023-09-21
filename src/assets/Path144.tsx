export default function Path144(props: Path144Props) {
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
          d="M 4.17 9.981 C 2.828 9.981 1.807 9.666 1.104 9.036 C 0.402 8.406 0.051 7.451 0.051 6.172 V 0.324 H 1.496 V 6.105 C 1.496 7.005 1.714 7.66 2.151 8.07 C 2.588 8.48 3.261 8.684 4.17 8.684 C 5.08 8.684 5.753 8.48 6.189 8.07 C 6.626 7.66 6.844 7.01 6.844 6.118 V 0.324 H 8.29 V 6.172 C 8.29 7.028 8.13 7.737 7.81 8.3 C 7.49 8.862 7.024 9.283 6.412 9.562 C 5.8 9.841 5.052 9.981 4.17 9.981 Z"
          fill="#CD6B2A"
         />
      </svg>
    </div>
  );
}

Path144.defaultProps = {
  className: "",
};

interface Path144Props {
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
