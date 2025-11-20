const contactLinks = [
  { 
    label: 'Telegram', 
    href: 'https://t.me/MurMur13tattoo', 
    handle: '@MurMur13tattoo',
    icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z'
  },
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com/murmur13tattoo/', 
    handle: '@murmur13tattoo',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  { 
    label: 'TikTok', 
    href: 'https://www.tiktok.com/@murmur13tattoo', 
    handle: '@murmur13tattoo',
    icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'
  },
]

export default function Booking() {
  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-tag section-tag-blue slide-up">Запись на консультацию</p>
          <h2 className="slide-up-delay-1">Свяжись с нами</h2>
        </div>
        <div className="fade-in-delay-2" style={{ maxWidth: '600px', margin: '0 auto 2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
            Напиши нам напрямую в Telegram или Instagram. Мы ответим в течение 24 часов и обсудим все детали твоей будущей татуировки.
          </p>
        </div>
        <div className="contacts-grid fade-in-delay-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d={contact.icon} />
                </svg>
              </div>
              <div className="contact-info">
                <span className="contact-label">{contact.label}</span>
                <strong className="contact-handle">{contact.handle}</strong>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          ))}
        </div>
        <div className="booking-map fade-in-delay-4">
          <h3>Где мы находимся</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.1234567890!2d28.8963074!3d47.0418778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c8fbd529b97%3A0xab82d17b03607a6f!2sStrada%20Petru%20Zadnipru%2018%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sru!2s!4v1234567890!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mur Mur 13 Tattoo Studio Location"
            />
            <a
              href="https://www.google.com/maps/place/Strada+Petru+Zadnipru+18,+MD-2044,+Chi%C8%99in%C4%83u,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0/@47.0419242,28.8960047,45m/data=!3m1!1e3!4m6!3m5!1s0x40c97c8fbd529b97:0xab82d17b03607a6f!8m2!3d47.0418778!4d28.8963074!16s%2Fg%2F11l5b4tjt8?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >
              Открыть в Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
