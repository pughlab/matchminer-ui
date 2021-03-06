/*
 * Copyright (c) 2017. Dana-Farber Cancer Institute. All rights reserved.
 *
 *  Licensed under the GNU Affero General Public License, Version 3.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *
 * See the file LICENSE in the root of this repository.
 *
 * Contributing authors:
 * - berndvdveen
 *
 */

'use strict';

angular.module('matchminerUiApp')
	.factory('Account', ['$resource', 'ENV',
		function Account($resource, ENV) {
			return $resource(ENV.api.endpoint + '/user/:id', {
				'id': '@id'
			}, {
				'get': {
					method: 'GET',
					isArray: false
				}
			});

		}]);
