// SPDX-FileCopyrightText: 2018-2022 Niall McCarthy, <niall.mccarthy@crust.tech>, et al.
//
// SPDX-License-Identifier: Apache-2.0

[
  'CortezaAPI',
].forEach((cfg) => {
  if (window[cfg] === undefined) {
    throw new Error(`Missing or invalid configuration. 
          Make sure there is a public/config.js configuration file with window.${cfg} entry.`)
  }
})
