import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Error {
        
        export namespace exitCode {
            
            export type O = number
        }
        
        export type exitCode = [ false ] | [ true, number]
        
        export type stderr = string
    }
    
    export type Error = {
        readonly 'exitCode': [ false ] | [ true, number]
        readonly 'stderr': string
    }
    
    export namespace Result {
        
        export type error = T.Error
        
        export type success = string
    }
    
    export type Result = 
        | ['error', T.Error]
        | ['success', string]
}