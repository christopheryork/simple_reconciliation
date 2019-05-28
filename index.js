  import { match } from './match.js'
  import { test } from './harness.js'

  // duco test cases

  test('simple numeric input', (t) => {
    let [matched, a, b] =
      match([54, 11, 28.33, 36.2],
            [111, 36.2, 11, 14.4])

    t.equalSets(matched, [11, 36.2])
    t.equalSets(a, [54, 28.33])
    t.equalSets(b, [111, 14.4])

    t.end()
  })

  test('duplicates', (t) => {
    let [matched, a, b] =
      match([54, 36.2, 36.2, 36.2],
            [111, 36.2, 36.2, 14.4])

    t.equalSets(matched, [36.2, 36.2])
    t.equalSets(a, [54, 36.2])
    t.equalSets(b, [111, 14.4])

    t.end()
  })

  // additional test cases

  test('empty', (t) => {
    let [matched, a, b] =
      match([], [111, 36.2])

    t.equalSets(matched, [])
    t.equalSets(a, [])
    t.equalSets(b, [111, 36.2])

    t.end()
  })

  test('single value', (t) => {
    let [matched, a, b] =
      match([111, 111], [111, 111, 111])

    t.equalSets(matched, [111, 111])
    t.equalSets(a, [])
    t.equalSets(b, [111])

    t.end()
  })