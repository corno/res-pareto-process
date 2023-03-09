
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"

import * as gpub from "../../../../../pub/dist"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = () => {

    gpub.$r.call("ls").__execute(($) => {
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

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
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
