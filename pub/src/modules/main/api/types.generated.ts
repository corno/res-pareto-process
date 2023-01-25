import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TError = {
    readonly 'exitCode': null | number
    readonly 'stderr': string
}

export type TResult = 
    | ['error', TError]
    | ['success', string]

export type FCall = ($: mcommon.TString,) => pt.AsyncValue<TResult>