import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const contatos = [
  {
    nameKey: "contacts.github",
    name: "GitHub",
    link: "https://github.com/guilhermessantosdev",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    nameKey: "contacts.whatsapp",
    name: "WhatsApp",
    link: "https://wa.me/5513991317815",
    icon: FaWhatsapp,
    color: "#25D366",
  },
  {
    nameKey: "contacts.email",
    name: "Email",
    link: "mailto:guilhermesantana2@gmail.com",
    icon: MdEmail,
    color: "#4285F4",
  },
];

export default function Contatos() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-10 w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-accent-primary mb-6">
        {t("contacts.title", "Contatos")}
      </h1>

      <div className="p-[2px] rounded-2xl gradient-border-wrapper">
        <div className="bg-secondary rounded-[14px] p-8 backdrop-blur-sm">
          <div className="flex flex-wrap justify-center gap-6">
            {contatos.map((contato) => (
              <a
                key={contato.name}
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary rounded-xl p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-accent-secondary/20 w-40"
              >
                <contato.icon
                  className="w-3/5 h-3/5"
                  style={{ color: contato.color }}
                />
                <span className="mt-4 text-sm font-normal text-text-secondary">
                  {t(contato.nameKey, contato.name)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
