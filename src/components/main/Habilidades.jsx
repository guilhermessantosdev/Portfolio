import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { SiJson, SiMysql } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { MdHttp } from "react-icons/md";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

import { useTranslation } from "react-i18next";

const skillGroupsData = [
  {
    titleKey: "skills.titles.markup",
    skills: [{ name: "HTML 5", icon: FaHtml5, color: "#E34F26" }],
  },
  {
    titleKey: "skills.titles.styling",
    skills: [{ name: "CSS", icon: FaCss3, color: "#1572B6" }],
  },
  {
    titleKey: "skills.titles.programming",
    skills: [
      { name: "Javascript", icon: IoLogoJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C#", icon: TbBrandCSharp, color: "#9B4F96" },
    ],
  },
  {
    titleKey: "skills.titles.data",
    skills: [
      { name: "Json", icon: SiJson, color: "#000000" },
      { name: "XML", icon: BsFiletypeXml, color: "#FF6600" },
    ],
  },
  {
    titleKey: "skills.titles.protocols",
    skills: [{ name: "HTTP", icon: MdHttp, color: "#005A9C" }],
  },
  {
    titleKey: "skills.titles.database",
    skills: [
      { name: "MySql", icon: SiMysql, color: "#4479A1" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
    ],
  },
  {
    titleKey: "skills.titles.devops",
    skills: [
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Azure DevOps", icon: VscAzure, color: "#0078D7" },
    ],
  },
  {
    titleKey: "skills.titles.os",
    skills: [
      { name: "Windows", icon: FaWindows, color: "#0078D6" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
    ],
  },
];

export default function Habilidades() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-10 w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-accent-primary mb-6">
        {t("skills.title")}
      </h1>
      <div className="p-[2px] rounded-2xl gradient-border-wrapper">
        <div className="bg-secondary rounded-[14px] p-8 backdrop-blur-sm">
          {skillGroupsData.map((group) => (
            <div key={group.titleKey} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6">
                {t(group.titleKey)}
              </h3>

              <div className="flex flex-wrap justify-center gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-tertiary rounded-xl p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-accent-secondary/20 w-40"
                  >
                    <skill.icon
                      className="w-3/5 h-3/5"
                      style={{ color: skill.color }}
                    />
                    <span className="mt-4 text-sm font-normal text-text-secondary">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
