// SPDX-FileCopyrightText: 2018-2022 Niall McCarthy, <niall.mccarthy@crust.tech>, et al.
//
// SPDX-License-Identifier: Apache-2.0

export default {
  computed: {
    currentLanguage () {
      return this.$i18n.i18next.language
    },
  },

  methods: {
    /**
     * Returns directionality of the page according to the language
     *  - Arabic (ar)
     *  - Hebrew (he)
     *  - Pashto (pa)
     *  - Persian (fa)
     *  - Urdu (ur)
     *  - Sindhi (sd)
     * @returns {string} rtl | ltr
     */
    textDirectionality (language = this.currentLanguage) {
      switch (language) {
        case 'ar':
        case 'he':
        case 'pa':
        case 'fa':
        case 'ur':
        case 'sd':
          return 'rtl'
        default:
          return 'ltr'
      }
    },
  },
}
