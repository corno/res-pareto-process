
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as mtest from "lib-pareto-test"
import * as mapi from "../api"
import * as mpub from "../../../../../pub/dist"

export const $$: mapi.CgetTestSet = () => {

    mpub.$a.call("ls").__execute(($) => {
        switch ($[0]) {
            case 'error':
                pl.cc($[1], ($) => {
                    pv.logDebugMessage($.stderr)
                })
                break
            case 'success':
                pl.cc($[1], ($) => {
                    pv.logDebugMessage($)
                })
                break
            default: pl.au($[0])
        }
    })

    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
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
