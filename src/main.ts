import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown'
import Notes from 'reveal.js/plugin/notes'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/white.css'
import './reveal.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="reveal">
    <div class="slides">
      <section
        data-markdown="/slides.md"
        data-separator="^---$"
        data-separator-vertical="^--$"
        data-separator-notes="^Note:"
        data-charset="utf-8"
      ></section>
    </div>
  </div>
`

const deck = new Reveal({
  width: 1280,
  height: 720,
  margin: 0,
  hash: true,
  slideNumber: 'c/t',
  plugins: [Markdown, Notes],
})

type DeckConfig = {
  project: string
  system: string
  author: string
}

const defaultDeckConfig: DeckConfig = {
  project: 'DESK DEVICE PROJECT',
  system: 'DESK SHELF CONTROL SYSTEM',
  author: 'ELICXIR / 2026',
}

const loadDeckConfig = async (): Promise<DeckConfig> => {
  const markdown = await fetch('/slides.md').then((response) => response.text())
  const match = markdown.match(/<!--\s*deck-config\s*([\s\S]*?)-->/)

  if (!match) return defaultDeckConfig

  try {
    return { ...defaultDeckConfig, ...JSON.parse(match[1]) }
  } catch {
    return defaultDeckConfig
  }
}

void loadDeckConfig().then((config) => deck.initialize().then(() => {
  document.querySelectorAll<HTMLElement>('.reveal .slides section:not(.stack):not(.title)').forEach((slide) => {
    slide.insertAdjacentHTML(
      'beforeend',
      `<footer class="slide-footer">
        <div class="slide-project"><span>${config.project}</span>${config.system ? `<b>${config.system}</b>` : ''}</div>
        <div class="slide-author"><b>${config.author}</b></div>
      </footer>`,
    )
  })

  const updateSlideNumberColor = () => {
    document.querySelector('.slide-number')?.classList.toggle(
      'slide-number-light',
      deck.getCurrentSlide()?.classList.contains('cover') ?? false,
    )
  }

  deck.on('slidechanged', updateSlideNumberColor)
  updateSlideNumberColor()
}))
