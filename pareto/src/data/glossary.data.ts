import * as pd from 'pareto-core-data'

import {
    string, member, taggedUnion, group,
    typeReference,
    data,
    type,
    optional,
    number,
    externalTypeReference,
    imp,
    ref,
    afunction,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "Error": type(group({
            "stderr": member(string()),
            "exitCode": member(optional(number())),
        })),
        "Result": type(taggedUnion({
            "success": string(),
            "error": ref(typeReference("Error")),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "Call": afunction(data(externalTypeReference("common", "String")), typeReference("Result")),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
}