import rss from '@astrojs/rss';
import { SITE }from '@/config'

export function GET() {
  return rss({
    title: SITE.title,
    description: SITE.authorPresentation,
    site: SITE.website,
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: [],
    customData: `<language>en</language>`,
  });
}