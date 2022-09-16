//import * as cp from "child_process"
import * as api from "api-pareto-process"
import { exec } from "../private/exec"

export const f_call: api.ACall = ($, $i) => {
    return {
        execute: (cb) => {
            exec(
                $,
                (err, stdout, stderr) => {
                    if (err !== null) {
                        $i.onError({
                            stderr: stderr,
                            exitCode: err.code
                        })

                        cb(null)
                    } else {
                        cb(stdout)
                    }
                }
            )
        }
    }
}