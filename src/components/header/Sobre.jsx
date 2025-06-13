import { CodeBlock, dracula, github } from "react-code-blocks";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Sobre() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const code = `function Greetings() {
  return (
    <section>
      <h1>${t("greeting")}</h1>
      <p>
        ${t("about.me")}
      </p>
    </section>
  );
}`;

  return (
    <section className="w-full h-full ">
      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={true}
        theme={theme === "dark" ? dracula : github}
        customStyle={{
          height: "100%",
          width: "100%",

          fontSize: "0.875rem",
          display: "flex",
          alignItems: "center",
        }}
        codeBlockStyle={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      />
    </section>
  );
}
