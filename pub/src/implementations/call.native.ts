import * as pi from "pareto-core-internals"

//import * as cp from "child_process"
import * as api from "../api"


import { exec } from "../native/exec.native"

export const $$: api.Ccall = ($) => {

    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            exec(
                $,
                (err, stdout, stderr) => {
                    if (err !== null) {

                        cb(["error", {
                            stderr: stderr,
                            exitCode: err.code === undefined ? ['not set', {}] : ['set', err.code]
                        }])
                    } else {
                        cb(["success", stdout])
                    }
                }
            )
        },
    )
}