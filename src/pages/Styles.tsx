import { useMemo, useState, useEffect } from "react";
import { styleCategories } from "../data/styles";
import DomeGallery from "../components/DomeGallery";

// Простая сетка для мобильных вместо тяжелой 3D галереи
type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  allImages: string[];
};

const SimpleGrid = ({
  images,
  onItemClick,
}: {
  images: GalleryImage[];
  onItemClick: (item: GalleryImage) => void;
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "1rem",
        padding: "1rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {images.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          style={{
            position: "relative",
            aspectRatio: "1",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
            background: "#1a1a1a",
            border: "2px solid rgba(54, 127, 175, 0.3)",
            transition: "transform 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.borderColor = "rgba(54, 127, 175, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "rgba(54, 127, 175, 0.3)";
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(1)",
              transition: "filter 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "grayscale(0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "grayscale(1)";
            }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              padding: "0.5rem",
              color: "white",
              fontSize: "0.75rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Styles() {
  const [selectedStyle, setSelectedStyle] = useState<{
    images: string[];
    title: string;
    description: string;
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStyle) {
        setSelectedStyle(null);
      }
    };
    window.addEventListener("keydown", handleEscape);

    // Блокируем скролл при открытии модального окна
    if (selectedStyle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedStyle]);

  // Подготовка данных для DomeGallery - берем изображения из всех стилей
  const galleryImages = useMemo(() => {
    const images: Array<{
      src: string;
      alt: string;
      title: string;
      description: string;
      allImages: string[];
    }> = [];
    styleCategories.forEach((category) => {
      category.styles.forEach((style) => {
        if (style.images && style.images.length > 0 && style.images[0]) {
          // Берем первое изображение для отображения, но сохраняем все для карусели
          images.push({
            src: style.images[0],
            alt: style.name,
            title: style.name,
            description: style.description,
            allImages: style.images,
          });
        }
      });
    });
    return images;
  }, []);

  const handleItemClick = (item: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    allImages?: string[];
  }) => {
    if (item.title && item.description) {
      setSelectedStyle({
        images: item.allImages || [item.src],
        title: item.title,
        description: item.description,
      });
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedStyle) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedStyle.images.length);
    }
  };

  const prevImage = () => {
    if (selectedStyle) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedStyle.images.length) % selectedStyle.images.length
      );
    }
  };

  const closeModal = () => {
    setSelectedStyle(null);
  };

  return (
    <section className="styles-section" id="styles">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-tag section-tag-blue slide-up">
            Стили татуировок
          </p>
          <h2 className="slide-up-delay-1">Какие тату мы делаем</h2>
        </div>
        <div
          className="fade-in-delay-2"
          style={{
            maxWidth: "800px",
            margin: "0 auto 2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1rem",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Мы работаем в более чем 90 стилях татуировок. От классических Old
            School и Realism до современных Watercolor и Cyber Sigilism. Каждый
            стиль имеет свои особенности, и мы поможем выбрать идеальный вариант
            для тебя.
          </p>
        </div>
      </div>

      <div className="styles-gallery-wrapper fade-in-delay-3">
        {galleryImages.length > 0 ? (
          isMobile ? (
            <SimpleGrid images={galleryImages} onItemClick={handleItemClick} />
          ) : (
            <DomeGallery
              images={galleryImages}
              fit={0.7}
              fitBasis="auto"
              minRadius={900}
              maxRadius={Infinity}
              padFactor={0.15}
              overlayBlurColor="transparent"
              maxVerticalRotationDeg={5}
              dragSensitivity={20}
              enlargeTransitionMs={300}
              segments={40}
              dragDampening={2}
              openedImageWidth="600px"
              openedImageHeight="600px"
              imageBorderRadius="30px"
              openedImageBorderRadius="30px"
              grayscale={true}
              onItemClick={handleItemClick}
            />
          )
        ) : (
          <div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
            Загрузка галереи...
          </div>
        )}
      </div>

      {selectedStyle && (
        <div className="style-modal-overlay" onClick={closeModal}>
          <div
            className="style-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="style-modal-close"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="style-modal-image">
              <img
                src={selectedStyle.images[currentImageIndex]}
                alt={selectedStyle.title}
              />
              {selectedStyle.images.length > 1 && (
                <>
                  <button
                    className="style-modal-nav style-modal-nav--prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Предыдущее изображение"
                  >
                    ‹
                  </button>
                  <button
                    className="style-modal-nav style-modal-nav--next"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Следующее изображение"
                  >
                    ›
                  </button>
                  <div className="style-modal-indicator">
                    {currentImageIndex + 1} / {selectedStyle.images.length}
                  </div>
                </>
              )}
            </div>
            {selectedStyle.images.length > 1 && (
              <div className="style-modal-nav-mobile">
                <button
                  className="style-modal-nav style-modal-nav--prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Предыдущее изображение"
                >
                  ‹
                </button>
                <button
                  className="style-modal-nav style-modal-nav--next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Следующее изображение"
                >
                  ›
                </button>
              </div>
            )}
            <div className="style-modal-info">
              <h3>{selectedStyle.title}</h3>
              <p>{selectedStyle.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
