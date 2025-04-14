import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { selectedLanguage, useTranslations } from "@/locales/i18n";

const t = useTranslations(selectedLanguage);

const tabs = ["experience", "education", "skills", "story"]

const tabsList = tabs.map((tab) => ({
  value: tab,
  label: t(`about.tabs.${tab}`)
}))

export default function TabsAbout() {
  return (
    <Tabs defaultValue="story" className="w-full">
      <TabsList className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground bg-black/40 border border-white/10 mb-6">
        {tabsList.map((tab, index) => (
          <TabsTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none opacity-60 data-[state=active]:opacity-100 data-[state=active]:bg-stone-950 data-[state=active]:text-foreground data-[state=active]:shadow-sm " value={tab.value} key={index}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {contentInSpanish()}
    </Tabs>
  )
}

function contentInSpanish() {
  return (
    <>
      <TabsContent value="story" className="min-h-[272px] space-y-4 text-white/80">
        <p>
          Desarrollador web apasionado por crear soluciones digitales funcionales, modernas y eficientes.
          Comencé en este mundo por curiosidad, y con el tiempo lo convertí en mi profesión. Me especializo
          en el desarrollo frontend y tengo experiencia integrando tecnologías backend para construir aplicaciones
          completas. Me encanta seguir aprendiendo y enfrentar nuevos desafíos que me permitan crecer tanto
          personal como profesionalmente.
        </p>
      </TabsContent>
    </>
  )
}

function contentInEnglish() {
  return (
    <>
      <TabsContent value="story" className="min-h-[272px] space-y-4 text-white/80">
        <p>
          I'm a trainee front-end developer based in Chicago. Over the past two years, I've developed a solid
          set of skills that enable me to build
          <span className="text-purple-400"> responsive, visually appealing, and user-friendly websites</span>
          .
        </p>
        <p>
          My focus is on crafting seamless user experiences and ensuring that my code is clean and efficient.
          I enjoy
          <span className="text-purple-400"> turning design concepts into fully functional websites</span>{" "}
          that meet both client needs and modern web standards.
        </p>
        <p>
          My journey in web development started with a passion for problem-solving and creativity. Throughout
          these time,
          <span className="text-purple-400">
            {" "}
            I've worked on personal projects and collaborated on building free websites for local stores
          </span>
          , which has given me real-world experience in understanding user needs and effective design
          principles.
        </p>
      </TabsContent>
      <TabsContent value="skills" className="min-h-[272px] space-y-4 text-white/80">
        <p>
          I'm continuously expanding my skill set by learning new tools and frameworks. My current technical
          skills include:
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            HTML5 & CSS3
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            JavaScript (ES6+)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            React.js
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            TypeScript
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Firebase
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Git & GitHub
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Responsive Design
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            UI/UX Principles
          </li>
        </ul>
      </TabsContent>
      <TabsContent value="experience" className="min-h-[272px] space-y-6 text-white/80">
        <div className="border-l-2 border-purple-500 pl-4 py-2">
          <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
          <p className="text-purple-400">2023 - Present</p>
          <p className="mt-2">
            Designed and developed websites for local businesses, focusing on responsive design and user
            experience.
          </p>
        </div>
        <div className="border-l-2 border-purple-500 pl-4 py-2">
          <h3 className="text-xl font-semibold">Personal Projects</h3>
          <p className="text-purple-400">2022 - Present</p>
          <p className="mt-2">
            Built various web applications to enhance my skills in React, TypeScript, and modern web
            development practices.
          </p>
        </div>
      </TabsContent>
    </>
  )
}
