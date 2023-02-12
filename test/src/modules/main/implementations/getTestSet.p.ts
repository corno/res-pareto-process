
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as mtest from "lib-pareto-test"

import * as api from "../api"


import * as pub from "../../../../../pub/dist"

export const $$: api.CgetTestSet = () => {

    pub.$a.call("ls")._execute(($) => {
        switch ($[0]) {
            case 'error':
                pl.cc($[1], ($) => {
                    pl.logDebugMessage($.stderr)
                })
                break
            case 'success':
                pl.cc($[1], ($) => {
                    pl.logDebugMessage($)
                })
                break
            default: pl.au($[0])
        }
    })

    const builder = pm.createUnsafeDictionaryBuilder<mtest.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}
