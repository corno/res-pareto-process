
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub/dist"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {
    pl.processAsyncValue(
        g_pub.$r.call()("ls"),
        ($) => {
            switch ($[0]) {
                case 'error':
                    pl.ss($, ($) => {
                        pv.logDebugMessage($.stderr)
                    })
                    break
                case 'success':
                    pl.ss($, ($) => {
                        pv.logDebugMessage($)
                    })
                    break
                default: pl.au($[0])
            }
        }
    )

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            'type': ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
