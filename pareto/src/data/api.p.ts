import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    array,
    typeReference,
    externalTypeReference,
    callback,
    interfaceReference,
    externalNamespacedTypeReference,
    procedure,
    null_,
    method,
    number,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
                "Error": group({
                    "stderr": member(str()),
                    "exitCode": member(optional(number())),
                }),
                "Result": taggedUnion({
                    "success": str(),
                    "error": ref("Error")
                })
            }),
            'interfaces': d({
            }),

        },
        'functions': d({
            "Call": _function(externalTypeReference("common", "String"), typeReference("Result"), true),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "call": {
                'definition': definitionReference("Call"),
                'type': ['reference', null],
            }
        })
    },
}