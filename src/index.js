import LANGUAGE_FALLBACKS from './fallbacks.json' assert { type: 'json' }

import BaseLanguage from './base.js'
import languages from './languages/index.js'
import GLOBAL_SENTENCE_TERMINATORS, { GLOBAL_SENTENCE_MID_TERMINATORS, GLOBAL_SENTENCE_WEAK_TERMINATORS } from './terminators.js'

function getLanguageClass (language) {
  if (language in languages) {
    return languages[language]
  }

  const fallbacks = LANGUAGE_FALLBACKS[language] || ['en']
  for (const fallbackLanguage of fallbacks) {
    const cls = getLanguageClass(fallbackLanguage)
    if (cls) {
      return cls
    }
  }
}

export default function segment (language, text) {
  const className = getLanguageClass(language)
  // eslint-disable-next-line new-cap
  return new className().segment(text)
}

export function segmentFullRanges (language, text) {
  const className = getLanguageClass(language)
  class patched extends className {
    isPunctuationBetweenQuotes() {
      return true
    }
  }
  // eslint-disable-next-line new-cap
  return new patched().segment(text)
}

export function segmentParentheses (language, text) {
  const className = getLanguageClass(language)
  class patched extends className {
    static quotesRegex = new RegExp('', 'g')
    static sentenceBreakRegex = new RegExp(
      `[${GLOBAL_SENTENCE_TERMINATORS.join('')}]+${className.trailingQuotesRegexStr}`,
      'gu'
    )
  }
  // eslint-disable-next-line new-cap
  return new patched().segment(text)
}

export function segmentMid (language, text) {
  const className = getLanguageClass(language)
  class patched extends className {
    static quotesRegex = new RegExp('', 'g')
    static sentenceBreakRegex = new RegExp(
      `[${GLOBAL_SENTENCE_TERMINATORS.concat(GLOBAL_SENTENCE_MID_TERMINATORS).join('')}]+${className.trailingQuotesRegexStr}`,
      'gu'
    )
    continueInNextWord (textAfterBoundary) {
      return textAfterBoundary.match(/^[0-9]/)
    }
  }
  // eslint-disable-next-line new-cap
  const result = new patched().segment(text)
  return result
}

export function segmentWeak (language, text) {
  const className = getLanguageClass(language)
  class patched extends className {
    static quotesRegex = new RegExp('', 'g')
    static sentenceBreakRegex = new RegExp(
      `[${GLOBAL_SENTENCE_TERMINATORS.concat(GLOBAL_SENTENCE_MID_TERMINATORS).concat(GLOBAL_SENTENCE_WEAK_TERMINATORS).join('')}]+${className.trailingQuotesRegexStr}`,
      'gu'
    )
    continueInNextWord (textAfterBoundary) {
      return textAfterBoundary.match(/^[0-9]/)
    }
  }
  // eslint-disable-next-line new-cap
  const result = new patched().segment(text)
  return result
}