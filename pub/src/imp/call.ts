import * as cp from "child_process"
import * as api from "api-pareto-process"
import * as pt from "pareto-core-types"

export function call(
    $d: api.Call_Data,
    $i: api.Call_Interface
): pt.AsyncValue<string | null> {
    return {
        execute: (cb) => {
            cp.exec(
                $d,
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