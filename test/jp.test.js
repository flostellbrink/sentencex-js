import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'これはペンです。それはマーカーです。': ['これはペンです。', 'それはマーカーです。'],
  'それは何ですか？ペンですか？': ['それは何ですか？', 'ペンですか？'],
  '良かったね！すごい！': ['良かったね！', 'すごい！'],
  '自民党税制調査会の幹部は、「引き下げ幅は３．２９％以上を目指すことになる」と指摘していて、今後、公明党と合意したうえで、３０日に決定する与党税制改正大綱に盛り込むことにしています。２％台後半を目指すとする方向で最終調整に入りました。':
      [
        '自民党税制調査会の幹部は、「引き下げ幅は３．２９％以上を目指すことになる」と指摘していて、今後、公明党と合意したうえで、３０日に決定する与党税制改正大綱に盛り込むことにしています。',
        '２％台後半を目指すとする方向で最終調整に入りました。'
      ]

}

describe('Japanese segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('jp', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})
