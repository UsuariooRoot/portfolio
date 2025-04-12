interface Skill {
  icon: React.ReactNode
}

interface Props {
  icons: Skill[]
}

const IconMarquee = ({ icons }: Props) => {
  return (
    <div className='w-full pb-10 pt-2'>
      <div className='mx-auto w-full px-4 md:px-8 '>
        <div
          className='group relative mt-6 flex gap-20 overflow-hidden py-2'
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
          }}
        >
          {Array(10)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className='flex shrink-0 animate-logo-cloud flex-row justify-around gap-20'
              >
                {icons.map((icon, key) => (
                  <div className='text-6xl' key={key}>
                    {icon.icon}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default IconMarquee
