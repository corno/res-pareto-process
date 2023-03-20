import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace A {
    
    export type call = g_this.ASYNC.A.F.Call
}

export type API = {
    readonly 'call': A.call
}