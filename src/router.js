// SPDX-FileCopyrightText: 2018-2022 Niall McCarthy, <niall.mccarthy@crust.tech>, et al.
//
// SPDX-License-Identifier: Apache-2.0

import Router from 'vue-router'
import routes from './views/routes'

export default new Router({
  mode: 'history',
  routes,
})
