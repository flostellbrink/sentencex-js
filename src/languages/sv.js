import BaseLanguage from '../base.js'

const abbreviations = new Set([
  'adm',
  'adr',
  'avd',
  'anv',
  'anm',
  'arb',
  'ass',
  'au',
  'aug',
  'avsn',
  'bl.a',
  'bn',
  'ca',
  'cap',
  'civ',
  'd.o',
  'dec',
  'del',
  'dep',
  'dir',
  'doc',
  'dr',
  'dvs',
  'e.d',
  'e.kr',
  'e.l',
  'e.o',
  'e.v.t',
  'etc',
  'ev',
  'exkl',
  'exkl.',
  'f.d',
  'f.kr',
  'feb',
  'fig',
  'fl',
  'förf',
  'förr',
  'forts',
  'f.d',
  'f.n',
  'f.o.m',
  'f.t',
  'f.v.t',
  'ggr',
  'godk',
  'gr',
  'hf',
  'hr',
  'ib',
  'ibid',
  'inkl',
  'insp',
  'inst',
  'jan',
  'jr',
  'jul',
  'jur',
  'jfr',
  'kand',
  'kl',
  'km/t',
  'komm',
  'kr',
  'kv',
  'lic',
  'mag',
  'maj',
  'mat',
  'max',
  'med',
  'm.fl',
  'm.m',
  'm.a.o',
  'm.h.t',
  'min',
  'mkr',
  'mlj',
  'm.m',
  'm.o.m',
  'n.e',
  'n.b',
  'n.kr',
  'n.u',
  'nr',
  'obs',
  'o.d',
  'o.s.v',
  'okt',
  'op.cit',
  'ordf',
  'org',
  'osv',
  'p.a',
  'p.g.a',
  'p.m',
  'p.s',
  'p.t',
  'prof',
  'ref',
  'reg',
  'resp',
  's.a.s',
  's.d',
  's.k',
  's.t',
  's.u',
  's.å',
  'sep',
  'sek',
  'spec',
  's.k.',
  's.m.m',
  'samt',
  'soc',
  'st',
  'str',
  'sv',
  't.ex',
  't.h',
  't.o.m',
  't.v',
  'tekn',
  'temp',
  't.ex',
  'tf',
  'tkr',
  't.o.m',
  'tv',
  'u.p.a',
  'ung',
  'utg',
  'v.b',
  'v.g',
  'v.s.b',
  'v.s.v',
  'v.v',
  'vol',
  'ä.k',
  'ö.a',
  'ö.g',
  'ö.l',
  'övr'
]);



export default class Swedish extends BaseLanguage {
  static abbreviations = abbreviations

  static quotePairs = {
    '"': '"',
    " '": "'", // Need a space before ' to avoid capturing don't , l'Avv etc
    '«': '»',
    '«': '»', // Swedish quotes are flipped
    '‘': '’',
    '‚': '‚',
    '“': '”',
    '‛': '‛',
    '„': '“',
    '‟': '‟',
    '‹': '›',
    '《': '》',
    '「': '」'
  }
}