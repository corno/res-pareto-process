import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    nested,
    array,
    typeReference,
    callback,
    interfaceReference,
    procedure,
    null_,
    method,
    number, dictionary, group, member, taggedUnion, types, _function, parameter, template,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({

            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "Error": group({
                "stderr": member(string()),
                "exitCode": member(template("Optional", {
                    "Type": number()
                })),
            }),
            "Result": taggedUnion({
                "success": string(),
                "error": reference("Error")
            })
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Call": _function(typeReference("common", "String"), typeReference("Result"), true),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "call": algorithm(definitionReference("Call")),
        })
    },
}