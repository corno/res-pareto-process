import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GError {
    
    export namespace PexitCode {}
    export type PexitCode = MOptional<number>
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