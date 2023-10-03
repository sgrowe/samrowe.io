import { AWSLogo } from '../tech-logos/AWSLogo'
import { GoogleCloudLogo } from '../tech-logos/GoogleCloudLogo'
import { GraphQLLogo } from '../tech-logos/GraphQLLogo'
import { KubernetesLogo } from '../tech-logos/KubernetesLogo'
import { PostgresLogo } from '../tech-logos/PostgresLogo'
import { ReactLogo } from '../tech-logos/ReactLogo'
import { RustLogo } from '../tech-logos/RustLogo'
import { TypeScriptLogo } from '../tech-logos/TypeScriptLogo'
import { CVSection } from './CVSection'

type Props = {
  fadeInTitleStep: number
  fadeInBodyStep: number
}

export const KeyTechnologies = ({ fadeInTitleStep, fadeInBodyStep }: Props) => (
  <CVSection
    title="Key technologies and skills"
    fadeInTitleStep={fadeInTitleStep}
  >
    <div
      className="grid animate-fade-in grid-cols-2 gap-4"
      style={{
        '--fade-in-step': fadeInBodyStep,
      }}
    >
      <Tech name="Rust" logo={RustLogo} />
      <Tech name="React" logo={ReactLogo} />
      <Tech name="TypeScript" logo={TypeScriptLogo} />
      <Tech name="Kubernetes" logo={KubernetesLogo} />
      <Tech name="SQL" logo={PostgresLogo} />
      <Tech name="GraphQL" logo={GraphQLLogo} />
      <Tech name="AWS" logo={AWSLogo} />
      <Tech name="Google Cloud" logo={GoogleCloudLogo} />
    </div>
  </CVSection>
)

type TechProps = {
  name: string
  logo: React.FC<{}>
}

const Tech = ({ name, logo: Logo }: TechProps) => (
  <div className="grid grid-cols-[3rem,_1fr] items-center gap-4 rounded-lg">
    <Logo />
    <div className="text-base">{name}</div>
  </div>
)
