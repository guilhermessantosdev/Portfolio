import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Certificados() {
  const { t } = useTranslation();

  const certificateImages = Array.from(
    { length: 4 },
    (_, i) => `/certificados/cert${i + 1}.png`
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (newIndex) => {
    if (newIndex < 0) {
      setSelectedIndex(certificateImages.length - 1);
    } else if (newIndex >= certificateImages.length) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(newIndex);
    }
  };

  return (
    <>
      <section
        id="certificados"
        className="w-full max-w-6xl mx-auto py-10 px-4 text-center mt-8"
      >
        <h1 className="text-3xl font-bold text-accent-primary mb-6">
          {t("certificates.title", "Certificados")}
        </h1>
        <div className="p-[2px] rounded-2xl gradient-border-wrapper">
          <div className="flex flex-col lg:flex-row bg-secondary rounded-[14px] overflow-hidden">
            <div className="w-full lg:w-4/5 p-4 flex items-center justify-center gap-4">
              <MdArrowBackIosNew
                className="flex-shrink-0 text-4xl sm:text-5xl text-accent-primary cursor-pointer z-10 hover:scale-110 transition-transform"
                onClick={() => handleNavigation(selectedIndex - 1)}
              />
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative w-full grow bg-tertiary rounded-lg overflow-hidden cursor-zoom-in group"
                style={{ aspectRatio: "16 / 9" }}
              >
                <img
                  src={certificateImages[selectedIndex]}
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  alt={t("certificates.alt.main", { index: selectedIndex + 1 })}
                />
              </div>

              <MdArrowForwardIos
                className="flex-shrink-0 text-4xl sm:text-5xl text-accent-primary cursor-pointer z-10 hover:scale-110 transition-transform"
                onClick={() => handleNavigation(selectedIndex + 1)}
              />
            </div>

            <div className="w-full lg:w-1/5 bg-secondary p-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto no-scrollbar">
              {certificateImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 w-40 lg:w-full bg-black/20 rounded-md cursor-pointer border-2 overflow-hidden transition-all duration-300
                    ${
                      selectedIndex === index
                        ? "border-accent-primary scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <img
                    src={img}
                    alt={t("certificates.alt.thumb", { index: index + 1 })}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-secondary rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              className="absolute -top-8 -right-2 md:top-2 md:right-2 text-white text-3xl cursor-pointer hover:text-accent-primary transition-colors"
              onClick={() => setIsModalOpen(false)}
            />
            <img
              src={certificateImages[selectedIndex]}
              alt={t("certificates.alt.modal", "Certificado em tela cheia")}
              className="w-full max-h-[85vh] object-contain rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
