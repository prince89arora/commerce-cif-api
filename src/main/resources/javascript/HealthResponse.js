/*******************************************************************************
 *
 *    Copyright 2018 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

/**
 * Auto generated code based on Swagger definition.
 * Dot not edit manually. Manual changes will be overridden.
 *
 * @version 1.2.0
 */

class HealthResponse {

    /**
     * Constructs a HealthResponse based on its enclosed builder.
     * @constructor 
     * @param {Builder} builder the HealthResponse builder
     */
    constructor(builder) {

        /**
         * The list of status reports for this response.
         * @type {object[]}
         */
        this.reports = undefined;
    }

    /**
     * Builds a HealthResponse based on API required properties.
     */
    static get Builder() {
        class Builder {

            build() {
                return new HealthResponse(this);
            }
        }
        return Builder;
    }
}
module.exports.HealthResponse = HealthResponse;