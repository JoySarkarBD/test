export default function Polygon6(props: Polygon6Props) {
  return (
    <div className={`${props.className}`}>
      <div
        className="w-[13px] h-[15px] right-[333px] bottom-[661px] absolute"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10.345 6.847 L 0.911 13.316 V 0.379 L 10.345 6.847 Z"
            fill="#FFF7E0"
           />
        </svg>
      </div>
    </div>
  );
}

Polygon6.defaultProps = {
  className: "",
};

interface Polygon6Props {
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
