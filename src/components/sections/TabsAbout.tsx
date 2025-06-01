import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useTranslations } from "@/locales/i18n";

export default function TabsAbout({ lang }: { lang: string }) {
  const t = useTranslations(lang);
  const tabs = ["education", "skills", "story"]

  const tabsList = tabs.map((tab) => ({
    value: tab,
    label: t(`about.tabs.${tab}.label`),
    content: t(`about.tabs.${tab}.content`)
  }))

  const extractTabContent = ({ value, content }: { value: string, content: any }) => {
    if (value === "story") {
      return (<p>
        {content}
      </p>)
    } else if (value === "skills") {
      return (
        <>
          <p>
            {content.description}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {content.items.map((item: string) => (
              <li className="flex items-center gap-2" key={item}>
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )
    } else if (value === "education") {
      return (
        <div className="border-l-2 border-accent pl-4 py-2">
          {
            content.map((item: any) => {
              return (
                <>
                  <h3 className="text-xl font-semibold">{item["learning-center"]}</h3>
                  <p className="text-accent">{item.date}</p>
                </>
              )
            })
          }
        </div>
      )
    }
  }

  return (
    <Tabs defaultValue="story" className="w-full">
      <TabsList className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground bg-black/40 border border-white/10 mb-6">
        {tabsList.map((tab) => (
          <TabsTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none opacity-60 data-[state=active]:opacity-100 data-[state=active]:bg-stone-950 data-[state=active]:text-foreground data-[state=active]:shadow-sm " value={tab.value} key={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {
        tabsList.map(tab =>
          <TabsContent value={tab.value} className="min-h-[272px] space-y-4 text-white/80">
            {extractTabContent(tab)}
          </TabsContent>
        )
      }
    </Tabs>
  )
}
