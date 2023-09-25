import BaseLanguage from '../base.js'

const abbreviations = new Set([
  'y.e',
  'y',
  'а',
  'авт',
  'адм.-терр',
  'акад',
  'в',
  'вв',
  'вкз',
  'вост.-европ',
  'г',
  'гг',
  'гос',
  'гр',
  'д',
  'деп',
  'дисс',
  'дол',
  'долл',
  'ежедн',
  'ж',
  'жен',
  'з',
  'зап.-европ',
  'зап',
  'заруб',
  'и',
  'ин',
  'иностр',
  'инст',
  'к',
  'канд',
  'кв',
  'кг',
  'куб',
  'л.h',
  'л.н',
  'л',
  'м',
  'мин',
  'моск',
  'муж',
  'н',
  'нед',
  'о',
  'п',
  'пгт',
  'пер',
  'пп',
  'пр',
  'просп',
  'проф',
  'р',
  'руб',
  'с',
  'сек',
  'см',
  'спб',
  'стр',
  'т',
  'тел',
  'тов',
  'тт',
  'тыс',
  'у.е',
  'у',
  'ул',
  'ф',
  'ч'
])

export default class Russian extends BaseLanguage {
  static abbreviations = abbreviations

  continueInNextWord (textAfterBoundary) {
    return textAfterBoundary.match(/^[0-9a-zа-я]/)
  }
}
