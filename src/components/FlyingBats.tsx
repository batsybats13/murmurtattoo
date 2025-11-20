export default function FlyingBats() {
  const batSVG = (
    <svg viewBox="0 0 100 60" fill="currentColor">
      <path d="M50 20c-8 0-15 3-20 8-5 5-8 12-8 20 0 8 3 15 8 20 5 5 12 8 20 8s15-3 20-8c5-5 8-12 8-20 0-8-3-15-8-20-5-5-12-8-20-8z"/>
      <path d="M30 15c-3-2-6-2-9 0-2 1-3 3-3 5s1 4 3 5c2 1 5 1 8 0 2-1 3-3 3-5s-1-4-3-5zm40 0c-3-2-6-2-9 0-2 1-3 3-3 5s1 4 3 5c2 1 5 1 8 0 2-1 3-3 3-5s-1-4-3-5z"/>
      <ellipse cx="50" cy="30" rx="15" ry="8"/>
    </svg>
  )

  return (
    <>
      <div className="bat bat-1">{batSVG}</div>
      <div className="bat bat-2">{batSVG}</div>
      <div className="bat bat-3">{batSVG}</div>
      <div className="bat bat-4">{batSVG}</div>
      <div className="bat bat-5">{batSVG}</div>
    </>
  )
}

