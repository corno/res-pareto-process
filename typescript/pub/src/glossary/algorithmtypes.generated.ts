import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {
        
        
        export namespace F {
            export type Call = ($: g_common.T.String) => pt.AsyncValue<T.Result>
        }
    }
}

export namespace SYNC {}