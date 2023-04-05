import { getInput } from "@actions/core"

export const GITHUB_TOKEN = getInput("github-token");

export const SHACL_PLAY_VERSION = getInput("version");

core.debug('Version using core.getInput', SHACL_PLAY_VERSION)
core.debug('Version using tag', SHACL_PLAY_VERSION)