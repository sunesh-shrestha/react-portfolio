// Custom logo: a hexagon with my initials inside (drawn as SVG, original artwork)
function Logo() {
  return (
    <svg width="44" height="44" viewBox="0 0 100 100" aria-label="Site logo">
      <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" fill="#4f46e5" />
      <text x="50" y="62" textAnchor="middle" fontSize="36"
            fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
        AB
      </text>
    </svg>
  );
}

export default Logo;