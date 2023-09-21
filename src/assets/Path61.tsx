export default function Path61(props: Path61Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 43 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 5.551 49.081 H 0.438 V 1.06 C 0.828 1.04 1.201 1.005 1.573 1.005 C 9.463 1 17.353 0.982 25.243 1.007 C 28.393 1.017 31.473 1.396 34.189 3.22 C 41.167 7.908 40.612 17.604 33.167 21.508 C 29.739 23.305 26.014 23.894 22.262 24.436 C 21.365 24.565 20.477 24.761 19.264 24.985 C 31.82 28.592 38.172 37.86 42.938 49.122 C 41.445 49.122 40.21 49.122 38.974 49.122 C 36.734 49.122 36.829 49.08 35.937 47.043 C 32.919 40.146 29.076 33.79 23.432 28.678 C 19.612 25.218 14.845 25.751 11.191 28.377 C 7.512 31.021 5.99 34.726 5.672 39.006 C 5.454 41.935 5.579 44.89 5.552 47.833 C 5.548 48.212 5.551 48.592 5.551 49.081 Z M 5.629 2.481 V 30.946 C 6.146 30.484 6.487 30.136 6.869 29.844 C 8.342 28.72 9.756 27.497 11.324 26.523 C 14.66 24.451 18.496 23.814 22.242 22.893 C 24.19 22.415 26.18 21.773 27.903 20.775 C 31.723 18.562 33.549 14.349 32.721 10.427 C 31.764 5.903 28.889 2.819 24.311 2.566 C 18.129 2.224 11.915 2.481 5.629 2.481 Z"
          fill="#FFF7E0"
         />
      </svg>
    </div>
  );
}

Path61.defaultProps = {
  className: "",
};

interface Path61Props {
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
