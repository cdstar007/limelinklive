<template>
  <div class="space-y-8">
    <template v-for="(block, index) in blocks" :key="`${block.type}-${index}`">
      <h1 v-if="block.type === 'h1'" class="text-4xl lg:text-5xl font-bold leading-tight text-white">
        {{ block.text }}
      </h1>

      <h2 v-else-if="block.type === 'h2'" class="text-2xl lg:text-3xl font-bold text-white pt-8 border-t border-white/10">
        {{ block.text }}
      </h2>

      <h3 v-else-if="block.type === 'h3'" class="text-xl lg:text-2xl font-bold text-white pt-2">
        {{ block.text }}
      </h3>

      <p v-else-if="block.type === 'paragraph'" class="text-base leading-8 text-gray-300" v-html="block.html" />

      <ul v-else-if="block.type === 'list'" class="space-y-3">
        <li v-for="item in block.items" :key="item" class="flex gap-3 text-base leading-7 text-gray-300">
          <iconify-icon class="text-blue-400 mt-1 shrink-0" icon="heroicons:check-circle" />
          <span v-html="item" />
        </li>
      </ul>

      <ol v-else-if="block.type === 'orderedList'" class="space-y-3 counter-reset-list">
        <li v-for="(item, itemIndex) in block.items" :key="item" class="flex gap-3 text-base leading-7 text-gray-300">
          <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-300">{{ itemIndex + 1 }}</span>
          <span v-html="item" />
        </li>
      </ol>

      <pre v-else-if="block.type === 'code'" class="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm leading-7 text-cyan-100"><code>{{ block.text }}</code></pre>

      <div v-else-if="block.type === 'table'" class="overflow-x-auto rounded-2xl border border-white/10">
        <table class="w-full min-w-[720px] text-left text-sm">
          <thead class="bg-white/10 text-gray-200">
            <tr>
              <th v-for="cell in block.headers" :key="cell" class="px-4 py-3 font-bold" v-html="cell" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in block.rows" :key="rowIndex" class="border-t border-white/10">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-4 py-4 align-top text-gray-300" v-html="cell" />
            </tr>
          </tbody>
        </table>
      </div>

      <hr v-else-if="block.type === 'divider'" class="border-white/10">
    </template>
  </div>
</template>

<script setup lang="ts">
type ArticleBlock =
  | { type: 'h1' | 'h2' | 'h3', text: string }
  | { type: 'paragraph', html: string }
  | { type: 'list' | 'orderedList', items: string[] }
  | { type: 'code', text: string }
  | { type: 'table', headers: string[], rows: string[][] }
  | { type: 'divider' }

const props = defineProps<{
  markdown: string
}>()

const blocks = computed(() => parseMarkdown(props.markdown))

function parseMarkdown(markdown: string): ArticleBlock[] {
  const lines = normalizeMarkdown(markdown).split('\n')
  const parsed: ArticleBlock[] = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim()

    if (!line || /^#+$/.test(line)) {
      continue
    }

    if (line.startsWith('```')) {
      const codeLines: string[] = []
      index += 1
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index])
        index += 1
      }
      parsed.push({ type: 'code', text: codeLines.join('\n').trimEnd() })
      continue
    }

    if (line === '---') {
      parsed.push({ type: 'divider' })
      continue
    }

    if (line.startsWith('|') && lines[index + 1]?.trim().startsWith('|---')) {
      const headers = splitTableRow(line)
      const rows: string[][] = []
      index += 2
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(splitTableRow(lines[index].trim()))
        index += 1
      }
      index -= 1
      parsed.push({ type: 'table', headers, rows })
      continue
    }

    if (line.startsWith('### ')) {
      parsed.push({ type: 'h3', text: cleanText(line.slice(4)) })
      continue
    }

    if (line.startsWith('## ')) {
      parsed.push({ type: 'h2', text: cleanText(line.slice(3)) })
      continue
    }

    if (line.startsWith('# ')) {
      parsed.push({ type: 'h1', text: cleanText(line.slice(2)) })
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(formatInline(lines[index].trim().slice(2)))
        index += 1
      }
      index -= 1
      parsed.push({ type: 'list', items })
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(formatInline(lines[index].trim().replace(/^\d+\.\s/, '')))
        index += 1
      }
      index -= 1
      parsed.push({ type: 'orderedList', items })
      continue
    }

    const paragraphLines = [line]
    while (index + 1 < lines.length) {
      const nextLine = lines[index + 1].trim()
      if (!nextLine || isBlockStart(nextLine)) {
        break
      }
      paragraphLines.push(nextLine)
      index += 1
    }
    parsed.push({ type: 'paragraph', html: formatInline(paragraphLines.join(' ')) })
  }

  return parsed
}

function normalizeMarkdown(markdown: string) {
  return markdown
    .replace(/\\&amp;/g, '&')
    .replace(/\\&lt;/g, '<')
    .replace(/\\&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\\([\\`*_{}[\]()#+\-.!|>])/g, '$1')
}

function isBlockStart(line: string) {
  return line.startsWith('# ')
    || line.startsWith('## ')
    || line.startsWith('### ')
    || line.startsWith('- ')
    || line.startsWith('```')
    || line.startsWith('|')
    || line === '---'
    || /^\d+\.\s/.test(line)
}

function splitTableRow(line: string) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => formatInline(cell.trim()))
}

function cleanText(value: string) {
  return decodeEntities(stripMarkdown(value)).trim()
}

function stripMarkdown(value: string) {
  return value.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
}

function formatInline(value: string) {
  return escapeHtml(decodeEntities(value))
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">$1</code>')
}

function decodeEntities(value: string) {
  return value
    .replace(/&#34;/g, '"')
    .replace(/&quot;/g, '"')
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
</script>
