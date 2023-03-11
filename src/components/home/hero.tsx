type Props = {
  imgUrl: string
}

export const HomeHero = ({ imgUrl }: Props) => (
  <>
    <div className="h-[50vh] bg-gradient-to-t from-sunsetOrange via-sunsetBlue to-sunsetBlue portrait:h-[40vh]" />

    <div className="relative min-h-[50vh] grow bg-gray-800 text-white portrait:min-h-[60vh]">
      {/* TODO: ^ grainy gradient effect? */}
      <div className="flex w-[calc(100vw-70vh)] flex-col px-[10vw] py-[10vh] portrait:w-auto portrait:pt-[calc(90vw-25vh)]">
        <h1 className="mb-4 flex flex-col gap-4 font-display text-4xl">
          <span className="opacity-80">Hey,</span>
          <span>I’m Sam</span>
        </h1>
        <p className="font-mono text-2xl font-medium italic opacity-70">
          Software Engineer
        </p>
      </div>

      <img
        src={imgUrl}
        className="absolute top-[-30vh] right-[5vw] h-[60vh] w-auto rounded-full shadow-2xl portrait:h-[90vw]"
        alt="A picture of my face"
      />

      <div className="px-[10vw] pb-12">
        <p className="font-mono text-2xl">
          <a href="/cv" className="group">
            View my{' '}
            <abbr
              className="tracking-wider no-underline"
              title="Curriculum vitae"
            >
              CV
            </abbr>{' '}
            <span className="inline-block font-serif transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </p>
      </div>
    </div>
  </>
)
