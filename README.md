# Mocks For Harlowes' Macros Module

NOTE: Deprecated in favour on the simple and intended to
  be more complete HarloweMocks repo.


## Purpose

The aim of this package id to provide 'empty', or more accurately
NOOP functions and classes for the Harlowe 'macros' modules.

This means the module cna be imported into sub modules without
harlowe., which is of it self not a lot of help, except but it
does mean modules dependent on Harlwowe's macro module can be
loaded and exercised for unittests outside of the Harlowe
Environment.

## Installation

Because of name conflict issues, I'm not submitted this to NPM, so
the easiest way to use this will be to include in you project as
a git submodule in your project and build it before you run your 
tests.

Microbundle is used to build this module, and ca be done with 
`npm run-script build` or simply
`npm i && npm run-script build` at the command line.git a

## Use

To do so you will need to compile your unitttests with
the following tssconfig options.

```
    "compilerOptions": {
        "baseUrl": ".",
        "paths":{
            "macros":["./PATH/TO/macros/index.js", ]
        },
    },
```

## Tests

This module doesn't provide any significant tracking of the state it
is mocking. It is considered at the moment that this wuold either be 
outside the scope of unittests, or a standard Javacript spy library
could be used to check any such behavoiur your module needs.
