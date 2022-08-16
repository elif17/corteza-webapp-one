// SPDX-FileCopyrightText: 2018-2022 Niall McCarthy, <niall.mccarthy@crust.tech>, et al.
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-undef */
const text = `%c${WEBAPP || 'Corteza Webapp'}, version: ${VERSION}, build time: ${BUILD_TIME}`
const style = 'background-color: #1397CB; color: white; padding: 3px 10px; border: 1px solid black; font: Courier'

/* eslint-disable no-console */
console.log(text, style)
