// Type definitions for passport-metamask 1.0.0
// Project: https://github.com/arun-thworks/passport-metamask
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions:https://github.com/arun-thworks/passport-metamask
// TypeScript Version: 2.3

/// <reference types="passport"/>

import { Strategy as PassportStrategy } from "passport-strategy";
import express = require("express");

interface IStrategyOptions {
    session?: boolean | undefined;
    passReqToCallback?: false | undefined;
    address: string | undefine;
}

interface IStrategyOptionsWithRequest {
    address: string | undefine;
    session?: boolean | undefined;
    passReqToCallback: true;
    address: string | undefine;
}

interface IVerifyOptions {
    message: string;
}

interface VerifyFunctionWithRequest {
    (
        req: express.Request,
        address: string | undefine;
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

interface VerifyFunction {
    (
        address: string | undefine;
        done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
}

declare class Strategy extends PassportStrategy {
    constructor(
        options: IStrategyOptionsWithRequest,
        verify: VerifyFunctionWithRequest
    );
    constructor(options: IStrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

   
