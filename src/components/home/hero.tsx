import type { ImageMetadata } from 'astro'

type Props = {
  img: ImageMetadata
}

export const HomeHero = ({ img }: Props) => (
  <>
    <div className="relative h-[50vh] portrait:h-[40vh]">
      <div className="absolute left-0 right-0 top-0 h-[200%] bg-gradient-to-t from-sunsetOrange via-sunsetBlue via-25% to-sunsetBlue to-50% motion-safe:animate-sunrise" />
    </div>

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
        src={img.src}
        className="absolute right-[5vw] top-[-30vh] h-[60vh] w-auto rounded-full shadow-2xl motion-safe:animate-face-bob-up-and-down portrait:h-[90vw]"
        alt="A picture of my face"
      />

      <div className="px-[10vw] pb-12">
        <p className="font-mono text-2xl">
          <a href="/cv" className="group">
            <span className="group-hover:underline">
              View my{' '}
              <abbr
                className="tracking-wider no-underline"
                title="Curriculum vitae"
              >
                CV
              </abbr>
            </span>{' '}
            <span className="inline-block animate-arrow-bob-right-and-left font-serif transition-transform duration-300 group-hover:animate-arrow-bob-right-and-left-fast">
              →
            </span>
          </a>
        </p>
      </div>

      <WebsiteCarbonBadge />
    </div>
  </>
)

const WebsiteCarbonBadge = () => (
  <div className="pb-4 pt-48">
    <div
      id="wcb"
      className="carbonbadge wcb-d"
      style={{
        '--b1': 'rgb(31, 41, 55)',
        '--b2': 'white',
      }}
    />
    <script
      src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
      defer
    />
  </div>
)
