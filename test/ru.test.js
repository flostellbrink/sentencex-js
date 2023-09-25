import segment from '../src/index.js'
import assert from 'assert'

const tests = {
  'Объем составляет 5 куб.м.': ['Объем составляет 5 куб.м.'],
  'Маленькая девочка бежала и кричала: «Не видали маму?».': ['Маленькая девочка бежала и кричала: «Не видали маму?».'],
  'Сегодня 27.10.14': ['Сегодня 27.10.14'],

  '«Я приду поздно»,  — сказал Андрей.': ['«Я приду поздно»,  — сказал Андрей.'],

  '«К чему ты готовишься? – спросила мама. – Завтра ведь выходной».':
    ['«К чему ты готовишься? – спросила мама. – Завтра ведь выходной».'],

  'По словам Пушкина, «Привычка свыше дана, замена счастью она».':
    ['По словам Пушкина, «Привычка свыше дана, замена счастью она».'],

  'Он сказал: «Я очень устал», и сразу же замолчал.':
    ['Он сказал: «Я очень устал», и сразу же замолчал.'],

  'Мне стало как-то ужасно грустно в это мгновение; однако что-то похожее на смех зашевелилось в душе моей.':
    [
      'Мне стало как-то ужасно грустно в это мгновение; однако что-то похожее на смех зашевелилось в душе моей.'
    ],
  'Шухов как был в ватных брюках, не снятых на ночь повыше левого колена их тоже был пришит затасканный, погрязневший лоскут, и на нем выведен черной, уже поблекшей краской номер Щ-854, надел телогрейку…':
    [
      'Шухов как был в ватных брюках, не снятых на ночь повыше левого колена их тоже был пришит затасканный, погрязневший лоскут, и на нем выведен черной, уже поблекшей краской номер Щ-854, надел телогрейку…'
    ],

  'Слово «дом» является синонимом жилища': ['Слово «дом» является синонимом жилища'],
  'В Санкт-Петербург на гастроли приехал театр «Современник»':
    ['В Санкт-Петербург на гастроли приехал театр «Современник»'],

  'Машина едет со скоростью 100 км/ч.': ['Машина едет со скоростью 100 км/ч.'],
  'Я поем и/или лягу спать.': ['Я поем и/или лягу спать.'],
  'Он не мог справиться с примером "3 + (14:7) = 5"': ['Он не мог справиться с примером "3 + (14:7) = 5"'],
  'Вот список: 1.мороженое, 2.мясо, 3.рис.': ['Вот список: 1.мороженое, 2.мясо, 3.рис.'],
  'Квартира 234 находится на 4-ом этаже.': ['Квартира 234 находится на 4-ом этаже.'],
  'В это время года температура может подниматься до 40°C.': ['В это время года температура может подниматься до 40°C.'],

  'Объем составляет 5м³.': ['Объем составляет 5м³.'],

  'Площадь комнаты 14м².': ['Площадь комнаты 14м².'],
  'Площадь комнаты 14 кв.м.': ['Площадь комнаты 14 кв.м.'],
  '1°C соответствует 33.8°F.': ['1°C соответствует 33.8°F.'],

  'Сегодня 27 октября 2014 года.': ['Сегодня 27 октября 2014 года.'],
  'Эта машина стоит 150 000 дол.!': ['Эта машина стоит 150 000 дол.!'],
  'Эта машина стоит $150 000!': ['Эта машина стоит $150 000!'],
  'Вот номер моего телефона: +39045969798. Передавайте привет г-ну Шапочкину. До свидания.': [
    'Вот номер моего телефона: +39045969798.',
    'Передавайте привет г-ну Шапочкину.',
    'До свидания.'
  ],

  'Постойте, разве можно указывать цены в у.е.!': ['Постойте, разве можно указывать цены в у.е.!'],

  'Едем на скорости 90 км/ч в сторону пгт. Брагиновка, о котором мы так много слышали по ТВ!': [
    'Едем на скорости 90 км/ч в сторону пгт. Брагиновка, о котором мы так много слышали по ТВ!'
  ],

  'Д-р ветеринарных наук А. И. Семенов и пр. выступали на этом семинаре.':
    ['Д-р ветеринарных наук А. И. Семенов и пр. выступали на этом семинаре.'],

  'Уважаемый проф. Семенов! Просьба до 20.10 сдать отчет на кафедру.':
    ['Уважаемый проф. Семенов!', 'Просьба до 20.10 сдать отчет на кафедру.'],

  'Первоначальная стоимость этого комплекта 30 долл., но сейчас действует скидка. Предъявите дисконтную карту, пожалуйста!':
    [
      'Первоначальная стоимость этого комплекта 30 долл., но сейчас действует скидка.',
      'Предъявите дисконтную карту, пожалуйста!'
    ],
  'Виктор съел пол-лимона и ушел по-английски из дома на ул. 1 Мая.': ['Виктор съел пол-лимона и ушел по-английски из дома на ул. 1 Мая.'],
  'Напоминаю Вам, что 25.10 день рождения у Маши К., нужно будет купить ей подарок.': ['Напоминаю Вам, что 25.10 день рождения у Маши К., нужно будет купить ей подарок.'],

  'В 2010-2012 гг. Виктор посещал г. Волгоград неоднократно.': ['В 2010-2012 гг. Виктор посещал г. Волгоград неоднократно.'],

  'Маленькая девочка бежала и кричала: «Не видали маму?»': ['Маленькая девочка бежала и кричала: «Не видали маму?»'],

  'Кв. 234 находится на 4 этаже.': ['Кв. 234 находится на 4 этаже.'],

  'Нужно купить 1)рыбу 2)соль.': ['Нужно купить 1)рыбу 2)соль.'],

  'Л.Н. Толстой написал "Войну и мир". Кроме Волконских, Л. Н. Толстой состоял в близком родстве с некоторыми другими аристократическими родами. Дом, где родился Л.Н.Толстой, 1898 г. В 1854 году дом продан по распоряжению писателя на вывоз в село Долгое.': [
    'Л.Н. Толстой написал "Войну и мир".',
    'Кроме Волконских, Л. Н. Толстой состоял в близком родстве с некоторыми другими аристократическими родами.',
    'Дом, где родился Л.Н.Толстой, 1898 г. В 1854 году дом продан по распоряжению писателя на вывоз в село Долгое.'
  ]

}

describe('Russian segment()', function () {
  for (const [text, expectedSentences] of Object.entries(tests)) {
    it(`correctly segments text: ${text}`, function () {
      const sentences = segment('ru', text)
      assert.deepEqual(sentences, expectedSentences)
    })
  }
})