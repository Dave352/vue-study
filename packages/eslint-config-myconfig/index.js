// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // 타입스크립트에서 ESLint를 사용할 수 있게 하는 파서
  extends: [
    'eslint:recommended', // https://eslint.org/docs/latest/rules/ 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:@typescript-eslint/recommended', // https://typescript-eslint.io/rules 에서 ✅ 표시된 모든 규칙 활성화
    'plugin:prettier/recommended', // "prettier/prettier": "error", "arrow-body-style": "off", "prefer-arrow-callback": "off"  ~> https://github.com/prettier/eslint-plugin-prettier
  ],
  rules: {
    'prettier/prettier': [
      // eslint-config-prettier와 eslint-plugin-prettier를 통해 Prettier와 통합하는 규칙
      'error',
      {
        printWidth: 100, // 한 줄에 출력할 수 있는 최대 문자 수를 100개로 설정
        semi: false, // 세미콜론을 사용하지 않도록 설정
        singleQuote: true, // 문자열을 작은따옴표로 표시
        tabWidth: 2, // 탭 문자의 너비를 2로 설정
        trailingComma: 'all', // 여러 줄로 구성된 배열 또는 객체 리터럴의 마지막 요소 뒤에 항상 쉼표를 사용하도록 설정
      },
    ],
  },
}
