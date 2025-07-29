const BellSvg = ({ height = "24", width = "24", className = "", ...props }) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox={`0 0 ${width} ${height}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height}
      width={width}
      className={className}
      {...props}
    >
      {/* Bell shape */}
      <path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"></path>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
      {/* Notification badge text */}
      {/* <circle cx="18" cy="8" r="6" fill="green" stroke="none" />{" "} */}
      {/* Optional red background circle */}
      <text
        x="18"
        y="11"
        textAnchor="middle"
        fontSize="12"
        // fontWeight="bold"
      >
        1
      </text>
    </svg>
  );
};

export default BellSvg;
