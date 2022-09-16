import * as pi from "pareto-core-internals"

//import * as cp from "child_process"
import * as api from "api-pareto-process"


import { exec } from "../private/exec.p"

export const f_call: api.FCall = ($) => {

    return pi.wrapAsyncValueImp(
        true,
        {
            _execute: (cb) => {
                exec(
                    $,
                    (err, stdout, stderr) => {
                        if (err !== null) {

                            cb(["error", {
                                stderr: stderr,
                                exitCode: err.code === undefined ? null : err.code
                            }])
                        } else {
                            cb(["success", stdout])
                        }
                    }
                )
            }
        }
    )
}