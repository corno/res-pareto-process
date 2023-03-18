import * as pi from 'pareto-core-internals'

import * as ncp from "child_process"



import { A } from "../api.generated"

export const $$: A.call = ($) => {

    return pi.wrapAsyncValueImp(
        (cb) => {
            ncp.exec(
                $,
                (err, stdout, stderr) => {
                    if (err !== null) {

                        cb(['error', {
                            stderr: stderr,
                            exitCode: err.code === undefined ? [false] : [true, err.code]
                        }])
                    } else {
                        cb(['success', stdout])
                    }
                }
            )
        },
    )
}