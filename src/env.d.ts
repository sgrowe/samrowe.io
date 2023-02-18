/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PARKRUN_ATHLETE_ID: string
  readonly PARKRUN_USERNAME: string
  readonly PARKRUN_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
