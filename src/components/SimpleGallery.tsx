import { useEffect, useRef, useCallback } from "react";
import "./SimpleGallery.css";

type ImageItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  allImages?: string[];
};

type SimpleGalleryProps = {
  images: ImageItem[];
  onItemClick?: (item: ImageItem) => void;
};

export default function SimpleGallery({
  images,
  onItemClick,
}: SimpleGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLDivElement | null>(null);

  const closeActive = useCallback(() => {
    if (!activeItemRef.current) return;

    const copy = activeItemRef.current;
    copy.classList.remove("positioned", "active");
    copy.classList.add("postactive");

    setTimeout(() => {
      copy.remove();
      activeItemRef.current = null;
    }, 500);
  }, []);

  const openItem = useCallback((imgContainer: HTMLDivElement, item: ImageItem) => {
    if (!galleryRef.current) return;

    // Если есть обработчик клика, используем его
    if (onItemClick) {
      onItemClick(item);
      return;
    }

    const rect = imgContainer.getBoundingClientRect();
    const galleryRect = galleryRef.current.getBoundingClientRect();
    
    const w = rect.width;
    const h = rect.height;
    const x = rect.left - galleryRect.left;
    const y = rect.top - galleryRect.top;

    // Удаляем предыдущий активный элемент
    const existingActive = galleryRef.current.querySelector(".img-c.active");
    if (existingActive) {
      existingActive.remove();
    }

    // Создаем копию элемента
    const copy = imgContainer.cloneNode(true) as HTMLDivElement;
    copy.classList.add("active");
    copy.style.position = "absolute";
    copy.style.width = `${w}px`;
    copy.style.height = `${h}px`;
    copy.style.left = `${x}px`;
    copy.style.top = `${y}px`;
    copy.style.zIndex = "2";

    galleryRef.current.appendChild(copy);

    // Применяем позиционирование с небольшой задержкой
    requestAnimationFrame(() => {
      copy.classList.add("positioned");
      copy.style.left = "0";
      copy.style.top = "0";
      copy.style.width = "100%";
      copy.style.height = "100%";
    });

    activeItemRef.current = copy;
  }, [onItemClick]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, item: ImageItem) => {
      const imgContainer = e.currentTarget;
      
      if (activeItemRef.current) {
        closeActive();
        // Даем время закрыть предыдущий элемент
        setTimeout(() => openItem(imgContainer, item), 100);
        return;
      }

      openItem(imgContainer, item);
    },
    [openItem, closeActive]
  );

  // Закрытие по клику на активный элемент
  useEffect(() => {
    const handleActiveClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".img-c.active")) {
        closeActive();
      }
    };

    document.addEventListener("click", handleActiveClick);
    return () => {
      document.removeEventListener("click", handleActiveClick);
    };
  }, [closeActive]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeItemRef.current) {
        closeActive();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeActive]);

  return (
    <div ref={galleryRef} className="gallery">
      {images.map((item, index) => (
        <div
          key={`${item.src}-${index}`}
          className="img-c"
          onClick={(e) => handleClick(e, item)}
        >
          <div
            className="img-w"
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <img src={item.src} alt={item.alt} style={{ display: "none" }} />
            {item.title && (
              <div className="img-title">{item.title}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

