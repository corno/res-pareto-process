import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GError {
    
    export namespace PexitCode {}
    export type PexitCode = null | number
}
export type GError = {
    readonly 'exitCode': GError.PexitCode
    readonly 'stderr': string
}
export type UError = GError

export namespace GResult {}
export type GResult = 
    | ['error', UError]
    | ['success', string]
export type UResult = GResult