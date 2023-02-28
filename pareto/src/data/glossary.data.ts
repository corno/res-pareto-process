import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> =  {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'types': d({
        "Error": type(group({
            "stderr": member(string()),
            "exitCode": member(optional(number())),
        })),
        "Result": type(taggedUnion({
            "success": string(),
            "error": reference("Error")
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "Call": func(typeReference("common", "String"), null, null, data(typeReference("Result"), true)),
    }),
}