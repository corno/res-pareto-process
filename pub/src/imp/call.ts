import * as cp from "child_process"
import * as api from "api-pareto-process"

export const call: api.Call = ($, $i) => {
    return {
        execute: (cb) => {
            cp.exec(
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